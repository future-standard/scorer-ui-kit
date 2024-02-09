import React, { useState, useCallback, FocusEvent } from 'react';
import styled from 'styled-components';
import { Checkbox,SmallInput } from '../../../Form';
import SelectList from './SelectList';
import SelectButton from './SelectButton';

const Container = styled.div`
  margin-left:4px;
  position: relative;
  height: 30px;
  outline: none;
  button {
    width: 100%;
    border: solid 1px hsl(0, 0%, 92%);
    border-radius:4px;
  }

  &:hover{
    button{
      background-color: #70C4FF;
    }

    span{
      color:#fff;
    }

    svg g,path{
      stroke:#fff;
    }
  }
`;

const WrapperSelectButton = styled(SelectButton)``;

const InputField = styled(SmallInput)`
  width:70px;
  margin-top:8px;
  border:0 !important;
  outline:0 !important;
  input {
    background:transparent;
    width:80%;
    border:0 !important;
    outline:0 !important;
  }
  >:nth-child(1)>:nth-child(2){
    border:1px solid #eeeeee;
    border-radius:4px;
  }
`;

const Divider = styled.div`
 height:1px;
 width:100%;
 background:#eee;
`;

const DisplayFlex = styled.div`
 display:flex;
 height:40px;
 margin:6px 0;
 justify-content:center;
`;

const FlexItem = styled.div<{margin?:string}>`
 align-self:center;
 margin:${({margin}) => margin};
`;

const CheckboxLabel= styled.div`
 font-size:14px;
 font-weight:500;
 color:#8f8f8f;
`;

export interface ISortBy {
  sort: string;
  ascending: boolean;
  title: string;
}

export interface IMinMax{
  min:number,
  isMinSelected:boolean,
  max:number,
  isMaxSelected:boolean
}

export interface ISortByProps {
  title: string;
  icon: string;
  input1Label:string,
  input2Label:string,
  selected: IMinMax;
  onChange: (item: IMinMax) => void;
  margin?: string;
}

export interface ISortItem {
  sort: string;
  title: string;
}

const FilterByMinMaxInput: React.FC<ISortByProps> = ({title,input1Label, input2Label, icon, selected:{ min,isMinSelected,max,isMaxSelected }, selected, onChange} ) => {
  const [expanded, setExpanded] = useState(false);

  const toggle = useCallback(() => {
    setExpanded(expanded => !expanded);
  }, []);

  const handleChange = useCallback((name:string)=>({target:{ value }}: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue: number | string = isNaN(Number(value)) ? value : Number(value);
    onChange({ ...selected, [name]: parsedValue });
  }, [selected, onChange]);

  const onBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    const currentTarget = e.currentTarget;
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setExpanded(false);
      }
    },100);
  }, []);

  const checkItem=useCallback((type:number)=>{
    if(type === 0){
      onChange({...selected,isMinSelected:!isMinSelected});
    }else{
      onChange({...selected,isMaxSelected:!isMaxSelected});
    }
  },[selected,isMinSelected,isMaxSelected,onChange]);

  return (
    <Container tabIndex={0} onBlur={onBlur}>
      <WrapperSelectButton expanded={expanded} onClick={toggle} title={title} icon={icon} />
      <SelectList expanded={expanded} boxWidth='190px' right='0' onClick={e=>e.stopPropagation()}>
        <DisplayFlex>
          <FlexItem><Checkbox disabled={!(min>-1)} onChangeCallback={()=>checkItem(0)} checked={isMinSelected} /></FlexItem>
          <FlexItem margin='0 12px 0 4px'><CheckboxLabel>{input1Label}</CheckboxLabel></FlexItem>
          <FlexItem><InputField value={min} onChange={handleChange('min')} fieldState='default' name='min' label='' placeholder='0' unit='Min' /></FlexItem>
        </DisplayFlex>
        <Divider />
        <DisplayFlex>
          <FlexItem><Checkbox disabled={!(max>-1 || min<max)} onChangeCallback={()=>checkItem(1)} checked={isMaxSelected} /></FlexItem>
          <FlexItem margin='0 12px 0 4px'><CheckboxLabel>{input2Label}</CheckboxLabel></FlexItem>
          <FlexItem><InputField value={max} onChange={handleChange('max')} fieldState='default' name='max' label='' placeholder='0' unit='Max' /></FlexItem>
        </DisplayFlex>
      </SelectList>
    </Container>
  );
};

export default FilterByMinMaxInput;
