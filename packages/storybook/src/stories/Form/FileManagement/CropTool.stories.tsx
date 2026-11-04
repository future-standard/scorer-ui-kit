import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ComponentProps, useState } from 'react';
import { CropTool } from 'scorer-ui-kit';
import { fn } from 'storybook/test';
import styled from 'styled-components';
import photo from '../../assets/placeholder.jpg';
import { FramedDocsPage } from '../../helpers/FramedDocsPage';

const CropResult = styled.img``;

type Args = ComponentProps<typeof CropTool>;

const CropDemo = (args: Args) => {
  const [cropImg, setCropImg] = useState('');
  const [isCropping, setIsCropping] = useState(true);

  const onCrop = (newImgUrl: string, fileType: string) => {
    args.onCrop?.(newImgUrl, fileType);
    setCropImg(newImgUrl);
    setIsCropping(false);
  };

  const onClose = () => {
    args.onClose?.();
    setIsCropping(false);
  };

  return (
    <div>
      {isCropping ? <CropTool {...args} onCrop={onCrop} onClose={onClose} /> : null}
      <div>
        <h3>Cropped Area</h3>
        <CropResult src={cropImg || undefined} />
      </div>
    </div>
  );
};

const meta = {
  title: 'Form/FileManagement/CropTool',
  component: CropTool,
  tags: ['autodocs'],
  // The tool is a fixed full-viewport overlay, so an inline docs preview would cover the whole
  // page; it gets its own frame (FramedDocsPage).
  parameters: {
    docs: {
      page: FramedDocsPage,
      story: { inline: false, iframeHeight: '560px' },
    },
  },
  args: {
    imgUrl: photo,
    title: 'Crop Image',
    cancelBtnTxt: 'Cancel',
    cropBtnTxt: 'Crop and Save',
    isResizable: true,
    canvasHeight: 400,
    canvasWidth: 450,
    cropHeight: 300,
    cropWidth: 300,
    aspectRatio: 0,
    onCrop: fn(),
    onClose: fn(),
    onError: fn(),
  },
  // The tool sizes its canvas when it mounts, so a size control remounts the demo (and brings the
  // tool back after a crop).
  render: (args) => (
    <CropDemo
      key={JSON.stringify([
        args.imgUrl,
        args.isResizable,
        args.canvasHeight,
        args.canvasWidth,
        args.cropHeight,
        args.cropWidth,
        args.aspectRatio,
      ])}
      {...args}
    />
  ),
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
