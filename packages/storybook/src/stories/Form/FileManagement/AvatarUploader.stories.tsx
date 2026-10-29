import type { Meta, StoryObj } from '@storybook/react-vite';
import { AvatarUploader } from 'scorer-ui-kit';
import { fn } from 'storybook/test';

const meta = {
  title: 'Form/FileManagement/AvatarUploader',
  component: AvatarUploader,
  tags: ['autodocs'],
  args: {
    title: 'Photograph',
    photoText: 'Drop Photo',
    buttonText: 'Select File',
    buttonTextReplace: 'Replace Photo',
    uploaderCropText: 'Crop Image',
    cropToolTitle: 'Crop utility',
    cropToolCancelTxt: 'Cancel',
    cropToolConfirmTxt: 'Crop and Save',
    deletePhotoText: 'Remove',
    currentImg: '',
    hasCrop: true,
    onAvatarUpdate: fn(),
    onError: fn(),
    onRemove: fn(),
  },
} satisfies Meta<typeof AvatarUploader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
