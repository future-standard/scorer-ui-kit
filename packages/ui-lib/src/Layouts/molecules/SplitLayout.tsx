import React, { PointerEvent, useState, useCallback, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import styled, { css } from "styled-components";
import ResizeLine, { TResizeLineDirection, TResizeLineStates } from '../atoms/ResizeLine';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { ISplitLayoutHandles, ISplitLayoutProps } from '..';

interface IPosition {
  x: number;
  y: number;
}
type LayoutType = 'horizontal' | 'vertical';

// 1. open - the side area is open and in normal resize range.
// 2. collapsing - has been in an open state but is now in an area that will close it on release.
// 3. collapsed - it's hidden!
// 4. peeking - Has been closed but now dragging might re-open it.
// 5. opening - We have restored it to a width that appears open. On release, we will set to open.
type ISideAreaState = 'open' | 'collapsing' | 'collapsed' | 'peeking' | 'opening';

const DebugData = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 20px;
  left: 20px;
  background: #ededed99;
  border: grey 1px solid;
  padding: 20px;
  line-height: 20px;
  font-size: 12px;
  div {
    display: block;
  }
  span {
    display: inline-block;
    width: 130px;
    font-weight: 600;
  }
`;

const MainArea = styled.div<{$minDimension?: number, $layout?: LayoutType}>`
  display: flex;
  position: relative;
  flex: 1;

  ${({$layout, $minDimension}) => $layout === 'vertical' ? css`
    ${$minDimension ? `min-height: ${$minDimension}px;` : null};
  ` : css`
    ${$minDimension ? `min-width: ${$minDimension}px;` : null};
  `}
`;

const SideAreaInner = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  transition: opacity 0.2s cubic-bezier(0.85, 0, 0.15, 1);
`;

const SideArea = styled.div<{$defaultSize: number, $maxDimension?: number, $minDimension?: number, $layout?: LayoutType, $collapseState: ISideAreaState }>`
  display: flex;
  position: relative;
  flex: 0 0 ${({$defaultSize}) => $defaultSize}px;
  display: ${({$collapseState}) => $collapseState === 'collapsed' ? 'none' : 'block'};
  transition: 
    min-width 0.65s cubic-bezier(0, 0.55, 0.45, 1),
    min-height 0.65s cubic-bezier(0, 0.55, 0.45, 1);
  
  ${({$layout, $maxDimension, $minDimension}) => $layout === 'vertical' ? css`
    ${$minDimension ? `min-height: ${$minDimension}px;` : '0'};
    ${$maxDimension ? `max-height: ${$maxDimension}px;` : 'none'};
    ${SideAreaInner}{
      min-height: ${$minDimension}px;
    }
  ` : css`
    ${$minDimension ? `min-width: ${$minDimension}px;` : '0'};
    ${$maxDimension ? `max-width: ${$maxDimension}px;` : 'none'};
    ${SideAreaInner}{
      min-width: ${$minDimension}px;
    }
  `}


  ${({$layout, $collapseState, $minDimension}) => $collapseState === 'collapsing' ? css`
      transition: none;
      ${$layout === 'horizontal' ? 'min-width: 0' : 'min-height: 0'};
      ${SideAreaInner}{
        flex: 0 0 ${$minDimension}px;
        min-width: ${$minDimension}px;
        opacity: 0.5;
      }
    ` : null}

    ${({$collapseState}) => $collapseState === 'collapsed' ? css`
      ${SideAreaInner}{
        display: none;
      }
    ` : null}

    ${({$layout, $collapseState, $minDimension}) => $collapseState === 'peeking' ? css`
      ${$layout === 'horizontal' ? 'min-width: 0' : 'min-height: 0'};
      ${SideAreaInner}{
        min-width: ${$minDimension}px;
        opacity: 0.5;
      }
    ` : null}

    ${({$layout, $collapseState, $minDimension}) => $collapseState === 'opening' ? css`
    ${$layout === 'horizontal' ? 'min-width: 0' : 'min-height: 0'};

    ${SideAreaInner}{
      min-width: ${$minDimension}px;
    }
    ` : null}
`;
const DragContainer = styled.div<{$size?: number, $fauxHover: 'true' | 'false'}>`
  flex: 0 0 ${({$size}) => $size}px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: col-resize;
  
  > div {
    transition: opacity 0.15s cubic-bezier(0.45, 0, 0.55, 1);
  }

  &:hover > div {
    opacity: 1;
  }

  ${({$fauxHover}) => $fauxHover === 'false' ? css`
    > div {
      opacity: 0.6;
    }
  ` : css`
    > div {
      opacity: 1;
    }
  `}

`;


const Container = styled.section<{$initialised?: 'true' | 'false', $layout?: LayoutType, $reverse?: string}>`
  box-sizing: border-box;
  /* width: 100vw; */
  /* height: 100vh; */
  display: flex;
  flex:1;
  flex-direction: row;
  overflow: hidden;

  transition: opacity 0.25s cubic-bezier(0.45, 0, 0.55, 1);
  opacity: 0;

  ${({$initialised}) => $initialised === 'true' ? css`
    opacity: 1;
  ` : null}

  ${({$layout}) => $layout === 'vertical' ? css`
    flex-direction: column;
    ${MainArea}{}
    ${DragContainer}{  
      cursor: row-resize;
    }
  ` : null}

  ${({$reverse}) => $reverse === 'true' ? css`
    ${MainArea}{ order: 2; }
    ${DragContainer}{ order: 1; }
  ` : null}
`;

// A flex container where the two internal areas can be adjusted with a drag handle.
// The main area has a minimum size - it flexes to the available space.
// The secondary side area has more restraints and is the part that is actively resized.
const SplitLayout = forwardRef<ISplitLayoutHandles, ISplitLayoutProps>(({ mainArea, sideArea, layout = 'horizontal', reverse, dividerSize = 16, persist = false, persistenceKey = 'resizable_ui', showDebug }, controlRef) => {
  
  const componentKey : string = 'resizable_layout_';
  const referenceKey : string = componentKey + persistenceKey;

  const closedBasis : number = 1;
  const hideTolerance : number = 50;
  const sideDefaultSize : number = sideArea.defaultSize || 350;
  const sideMinSize : number = sideArea.minSize || 0;
  const sideMaxSize : number | undefined = sideArea.maxSize;
  const mainMinSize : number | undefined = mainArea.minSize;

  const [initialised, setInitialised] = useState<boolean>(false);
  const [initialMousePos, setInitialMousePos] = useState<IPosition>();
  const [mousePosDiff, setMousePosDiff] = useState<IPosition>();
  const [resizing, setResizing] = useState<boolean>();
  
  const [sideAreaState, setSideAreaState] = useState<ISideAreaState>('open');
  const [sideAreaBasis, setSideAreaBasis] = useState<number>(sideDefaultSize);
  const [sideAreaStartBasis, setSideAreaStartBasis] = useState<number>(sideDefaultSize);
  const [lastOpenSize, setLastOpenSize] = useState<number>(sideDefaultSize);
  
  const ContainerRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const AreaB = useRef() as React.MutableRefObject<HTMLInputElement>;

  // For persisting across refreshes and view changes.
  const [savedSize, setSavedSize] = useLocalStorage<number|null>(`${referenceKey}_size`, null);
  const [savedCollapsedState, setSavedCollapsedState] = useLocalStorage<ISideAreaState|null>(`${referenceKey}_state`, null);
  const [savedLastOpenSize, setSavedLastOpenSize] = useLocalStorage<number|null>(`${referenceKey}_quick_open_size`, null);

  /*
  --  Initialisation.
  */

  useEffect(()=>{
    if(!initialised){
      // Reload previous state if required.
      if(persist){
        if(savedSize){ setSideAreaBasis(savedSize); }
        if(savedCollapsedState){ setSideAreaState(savedCollapsedState); }
        if(savedLastOpenSize){ setLastOpenSize(savedLastOpenSize); }
      }
      // Used to run once and also hide render redraw
      setInitialised(true);
    }
  },[initialised, persist, savedCollapsedState, savedSize, savedLastOpenSize]);


  /*
  ---  Expose Controls To Parent (via Ref) ---
  */

  useImperativeHandle(controlRef, () => ({
    open: () => {
      open();      
    },
    close: () => {
      collapse();
    },
    reset: () => {
      restoreDefault();
    }
  }));
  

  /*
  ---  Controls For Layout ---
  */

  /**
   * Restore layout to default as defined by props.
   */
  const restoreDefault = useCallback(() => {
    // Move the divider...
    setSideAreaBasis(sideDefaultSize);
    setSideAreaState('open');

    // ...and clear the localstorage.
    setSavedSize(null);
    setSavedCollapsedState(null);
  }, [setSideAreaBasis, sideDefaultSize, setSideAreaState, setSavedSize, setSavedCollapsedState]);

  /**
   * Set the side area to the fully collapsed state.
   */
  const collapse = useCallback(() => {
    setSideAreaState('collapsed');
    setSideAreaBasis(closedBasis);
    setSideAreaStartBasis(closedBasis);

    if(persist){
      setSavedSize(closedBasis);
      setSavedCollapsedState('collapsed');
      setSavedLastOpenSize(sideAreaStartBasis);
    }
  }, [setSideAreaBasis, setSideAreaState, setSavedCollapsedState, setSavedSize, setSavedLastOpenSize, sideAreaStartBasis, persist]);

  /**
   * Set the side area to the last open size or min size depending behaviour.
   */
  const open = useCallback(() => {
    setSideAreaState('open');
    let openBasis : number;

    if(sideAreaBasis > closedBasis){
      openBasis = layout === 'horizontal' ? AreaB.current.clientWidth : AreaB.current.clientHeight;
    } else {
      openBasis = lastOpenSize;
    }

    setSideAreaStartBasis(openBasis);
    setSideAreaBasis(openBasis);

    if(persist){
      setSavedSize(Math.round(sideAreaBasis));
      setSavedCollapsedState('open');
    }
  }, [persist, setSavedCollapsedState, setSavedSize, lastOpenSize, sideAreaBasis, layout]);


  /*
  ---  Interaction Events ---
  */

  const releaseDrag = useCallback(() => {
    // Close if drag is withing the close range.
    if(sideAreaState === 'collapsing' && sideAreaBasis < sideMinSize - hideTolerance){
      collapse();
    } else {
      setSideAreaStartBasis(Math.round(sideAreaBasis)); // ?
      setLastOpenSize(Math.round(sideAreaBasis));
      open();
    }

    setResizing(false);
  }, [collapse, open, sideMinSize, sideAreaBasis, sideAreaState]);

  const handleDragPointerDown = useCallback((event: PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    const { clientX, clientY } = event;

    // Need to set this different if collapsed.
    if(sideAreaState === 'collapsed'){
      setSideAreaStartBasis( sideAreaBasis );
    } else {
      setSideAreaStartBasis( clampInt(sideAreaBasis, sideMinSize, sideMaxSize) );
    }
    
    setInitialMousePos({x: clientX, y: clientY});
    setMousePosDiff({x: 0, y: 0});
    setResizing(true);
  }, [sideAreaBasis, sideMaxSize, sideMinSize, sideAreaState]);

  const handleDragPointerUp = () => {
    if(resizing){
     releaseDrag();
    }
  };

  const handleDragPointerMove = useCallback((event: PointerEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    let newBasis : number;
    let collapse : ISideAreaState = sideAreaState;

    if(resizing && initialMousePos && sideAreaStartBasis){
      setMousePosDiff({x: initialMousePos.x - clientX, y: initialMousePos.y - clientY});
      
      // Behaviour - Resizing
      if(layout === 'horizontal'){
        // Handle Horizontal Resizing
        const maxClamp = ContainerRef.current.clientWidth - dividerSize - (mainMinSize || 0);
        if(!reverse){
          newBasis = clampInt(sideAreaStartBasis + (initialMousePos.x - clientX), null, maxClamp);
        } else {
          newBasis = clampInt(sideAreaStartBasis - (initialMousePos.x - clientX), null, maxClamp);
        }
      } else {
        // Handle Vertical Resizing
        const maxClamp = ContainerRef.current.clientHeight - dividerSize - (mainMinSize || 0);
        if(!reverse){
          newBasis = clampInt(sideAreaStartBasis + (initialMousePos.y - clientY), null, maxClamp);
        } else {
          newBasis = clampInt(sideAreaStartBasis - (initialMousePos.y - clientY), null, maxClamp);
        }
      }

      // Behaviour - Hiding
      // Only sets to open, collapsing or opening. Closed is handle by the release only.
      if(sideArea.collapsable){
        const inCloseRange = newBasis < (sideMinSize - hideTolerance);

        if(sideAreaState === 'open' && inCloseRange){
          collapse = 'collapsing';
        } else if(sideAreaState === 'opening' && inCloseRange){
          collapse = 'collapsing';
        } else if(sideAreaState === 'collapsing' && !inCloseRange){
          collapse = 'open';
        } else if(sideAreaState === 'collapsed'){
          collapse = 'peeking';
        } else if(sideAreaState === 'peeking' && !inCloseRange){
          collapse = 'opening';
        }
      }

      // Commit To Scope
      setSideAreaBasis(newBasis);
      setSideAreaState(collapse);
    }
  }, [setSideAreaBasis, setMousePosDiff, resizing, initialMousePos, sideAreaStartBasis, sideAreaState, layout, dividerSize, mainMinSize, sideMinSize, reverse, sideArea.collapsable]);

  const handleMouseLeaveViewport = useCallback(() => {
    if(resizing){
      releaseDrag();
    }
  }, [resizing, releaseDrag]);

  useEffect(() => {
    document.addEventListener('mouseleave', handleMouseLeaveViewport);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeaveViewport);
    };
  }, [handleMouseLeaveViewport]);


  /*
  ---  Drag Handle Logic ---
  */
  const resizeLineArrowDirection = () : TResizeLineDirection => {
    if(sideAreaState === 'collapsed' || sideAreaState === 'peeking'){
      if(layout === 'horizontal'){
        if(!reverse){
          return 'left';
        } else {
          return 'right';
        }
      } else {
        if(!reverse){
          return 'up';
        } else {
          return 'down';
        }
      }
    } else {
      if(layout === 'horizontal'){
        if(!reverse){
          return 'right';
        } else {
          return 'left';
        }
      } else {
        if(!reverse){
          return 'down';
        } else {
          return 'up';
        }
      }
     }
  };

  const resizeLineState = () : TResizeLineStates => {
    if(sideAreaState === 'collapsed' || sideAreaState === 'peeking'){
      // Indicate intent of re-opening.
      return 'arrow';
    } else if(sideAreaState === 'collapsing'){
      // Indicate intent of closing.
      return 'arrow';
    } else {
      return 'default';
    }
  };

  /*
  ---  Useful Debug Overlay ---
  */
 
  const debugData = <DebugData>
    <div><span>State:</span> {sideAreaState}</div>
    <div><span>Position:</span> {initialMousePos?.x}, {initialMousePos?.y}</div>
    <div><span>Difference:</span> {mousePosDiff?.x}, {mousePosDiff?.y}</div>
    <div><span>sideAreaStartBasis:</span> {sideAreaStartBasis}</div>
    <div><span>sideAreaBasis:</span> {sideAreaBasis}</div>
    <div><span>lastOpenSize:</span> {lastOpenSize}</div>
  </DebugData>;


  /*
  --- Render ---
  */

  return(
    <Container ref={ContainerRef} onPointerMove={handleDragPointerMove} onPointerUp={handleDragPointerUp} $initialised={initialised ? 'true' : 'false'} $layout={layout} $reverse={reverse ? 'true' : 'false'}>

      <MainArea $layout={layout} $minDimension={mainMinSize}>
        {mainArea.content}
      </MainArea>

      <DragContainer onPointerDown={handleDragPointerDown} onDoubleClick={restoreDefault} $size={dividerSize} $fauxHover={resizing ? 'true' : 'false'}>
        <ResizeLine state={ resizeLineState() } layout={layout} arrowDirection={resizeLineArrowDirection()} />
      </DragContainer>

      <SideArea ref={AreaB} style={{ flexBasis: `${sideAreaBasis}px` }} $defaultSize={ sideDefaultSize } $minDimension={sideMinSize} $maxDimension={sideMaxSize} $layout={layout} $collapseState={sideAreaState}>
        <SideAreaInner>
          {sideArea.content}
        </SideAreaInner>
      </SideArea>

      {showDebug ? debugData : null}    
    </Container>
  );
});


/**
 * Returns the number input but binding it within the range provided
 * @param value The value to clamp.
 * @param upper The maximum value of the range. 
 * @param lower The minimum value of the range.
 * @returns The clamped number value.
 */
const clampInt = (value: number, lower?: number | null, upper?: number) : number => {
  let clampedInt : number = value;
  clampedInt = upper && clampedInt > upper ? upper : clampedInt;
  clampedInt = lower && clampedInt < lower ? lower : clampedInt;
  return clampedInt;
};

export default SplitLayout;