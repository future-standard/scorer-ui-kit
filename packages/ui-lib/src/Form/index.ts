import type { ButtonHTMLAttributes } from 'react';
import Button from './atoms/Button';
import ButtonWithIcon from './atoms/ButtonWithIcon';
import ButtonWithLoading from './atoms/ButtonWithLoading';
import Checkbox from './atoms/Checkbox';
import DropArea from './atoms/DropArea';
import IconButton, { type IconButtonData } from './atoms/IconButton';
import Input from './atoms/Input';
import InputFileButton from './atoms/InputFileButton';
import Label from './atoms/Label';
import RadioButton from './atoms/RadioButton';
import SelectField, { SelectWrapper } from './atoms/SelectField';
import SliderInput, { type ISliderMark } from './atoms/SliderInput';
import SmallInput from './atoms/SmallInput';
import Switch, { type TypeSwitchState } from './atoms/Switch';
import TextArea from './atoms/TextArea';
import Form from './Form';
import ActionButtons from './molecules/ActionButtons';
import ButtonsStack, { type IButtonStack, type IButtonsStack } from './molecules/ButtonsStack';
import CropTool from './molecules/CropTool';
import DurationSlider from './molecules/DurationSlider';
import PasswordField from './molecules/PasswordField';
import PercentageSlider from './molecules/PercentageSlider';
import SplitButton, { type ISplitButtonProps } from './molecules/SplitButton';
import TextAreaField from './molecules/TextAreaField';
import TextField from './molecules/TextField';
import AreaUploadManager from './organisms/AreaUploadManager';
import AvatarUploader from './organisms/AvatarUploader';

export {
  ActionButtons,
  AreaUploadManager,
  AvatarUploader,
  Button,
  ButtonsStack,
  ButtonWithIcon,
  ButtonWithLoading,
  Checkbox,
  CropTool,
  DropArea,
  DurationSlider,
  Form,
  IconButton,
  Input,
  InputFileButton,
  Label,
  PasswordField,
  PercentageSlider,
  RadioButton,
  SelectField,
  SelectWrapper,
  SliderInput,
  SmallInput,
  SplitButton,
  Switch,
  TextArea,
  TextAreaField,
  TextField,
};

export type TypeFieldState =
  | 'default'
  | 'disabled'
  | 'required'
  | 'valid'
  | 'invalid'
  | 'processing';
export type TypeButtonDesigns =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'danger'
  | 'text-only'
  | 'outline';
export type TypeButtonSizes = 'xsmall' | 'small' | 'normal' | 'large';
export type ISelectSizes = 'small' | 'normal';
export type IInputOptionsType = 'text' | 'checkbox' | 'radio';
export type TypeLabelDirection = 'column' | 'row' | 'row-reverse';

interface ButtonProps {
  size?: TypeButtonSizes;
  design?: TypeButtonDesigns;
  loading?: boolean;
}

export type IButtonProps = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export type {
  IButtonStack,
  IButtonsStack,
  IconButtonData,
  ISliderMark,
  ISplitButtonProps,
  TypeSwitchState,
};
