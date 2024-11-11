import React, { useCallback, useState } from "react";
import { ToggleButton } from "scorer-ui-kit";
import { boolean, object, select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import styled from "styled-components";

export default {
  title: 'Filters/atoms',
  component: ToggleButton,
  decorators: []
};

const layoutOptions = [
  { text: 'Grid', value: 'grid', icon: 'LayoutGrid' },
  { text: 'List', value: 'list', icon: 'LayoutList' }
]

const CameraData = styled.div``;
const Camera = styled.li``;

const Container = styled.div``;
const DataGroup = styled.ol<{ layout: string }>`
  margin-top: 20px;
  display: grid;
  ${({ layout }) => layout === 'grid' &&
    `
      list-style-type: none;
      grid-template-columns: repeat(3, 300px);
      gap: 16px;
        ${Camera} {
          padding: 100px 20px;
          border: 1px solid var(--grey-9);
          text-align: center;
        }
    `
  };
`;

const StatusSpan = styled.span<{ isOnline?: boolean }>`
    ${({ isOnline }) => isOnline ?
    `
      color: var(--success);
    `
    :
    `
      color: var(--warning);
    `}
  `;

export const _ToggleButton = () => {
  const [selectedLayout, setSelectedLayout] = useState(0)

  const disabled = boolean('Disabled', false);
  const design = select('Design type', { Default: 'default', Basic: 'basic' }, 'default');
  const categoryLabel = text('Category Label', 'Layout:');
  const options = object('Options', layoutOptions);
  const showToggleValue = action('Button Value: ');

  const onToggle = useCallback((index: number, value: string | number) => {
    setSelectedLayout(index);
    showToggleValue(value);
  }, [showToggleValue])

  return (
    <Container>
      <ToggleButton
        {...{
          categoryLabel,
          options,
          onToggle,
          disabled,
          design,
          selectedIndex: selectedLayout
        }} />

      <DataGroup layout={layoutOptions[selectedLayout].value}>
        <Camera>
          <CameraData>
            Camera01 - <StatusSpan isOnline>Online</StatusSpan>
          </CameraData>
        </Camera>
        <Camera>
          <CameraData>
            Camera02 - <StatusSpan isOnline>Online</StatusSpan>
          </CameraData>
        </Camera>
        <Camera>
          <CameraData>
            Camera03 - <StatusSpan>OffLine</StatusSpan>
          </CameraData>
        </Camera>
        <Camera>
          <CameraData>
            Camera04 - <StatusSpan>OffLine</StatusSpan>
          </CameraData>
        </Camera>
        <Camera>
          <CameraData>
            Camera05 - <StatusSpan>OffLine</StatusSpan>
          </CameraData>
        </Camera>
        <Camera>
          <CameraData>
            Camera06 - <StatusSpan>OffLine</StatusSpan>
          </CameraData>
        </Camera>
        <Camera>
          <CameraData>
            Camera07 - <StatusSpan isOnline>Online</StatusSpan>
          </CameraData>
        </Camera>
        <Camera>
          <CameraData>
            Camera08 - <StatusSpan isOnline>Online</StatusSpan>
          </CameraData>
        </Camera>
        <Camera>
          <CameraData>
            Camera09 - <StatusSpan>Online</StatusSpan>
          </CameraData>
        </Camera>
      </DataGroup>
    </Container>
  )
}