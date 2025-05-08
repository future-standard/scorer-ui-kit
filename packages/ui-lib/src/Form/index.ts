import Button from './atoms/Button';
import ButtonWithIcon from './atoms/ButtonWithIcon';
import ButtonWithLoading from './atoms/ButtonWithLoading';
import IconButton, {IconButtonData} from './atoms/IconButton';
import ActionButtons from './molecules/ActionButtons';
import Input from './atoms/Input';
import SmallInput from './atoms/SmallInput';
import Label from './atoms/Label';
import Switch, {TypeSwitchState} from './atoms/Switch';
import Checkbox from './atoms/Checkbox';
import RadioButton from './atoms/RadioButton';
import TextArea from './atoms/TextArea';
import SelectField, {SelectWrapper} from './atoms/SelectField';
import SliderInput, {ISliderMark} from  './atoms/SliderInput';
import InputFileButton from './atoms/InputFileButton';
import DurationSlider from './molecules/DurationSlider';
import PercentageSlider from './molecules/PercentageSlider';
import PasswordField from './molecules/PasswordField';
import TextField from './molecules/TextField';
import TextAreaField from './molecules/TextAreaField';
import DropArea from './atoms/DropArea';
import CropTool from './molecules/CropTool';
import AvatarUploader from './organisms/AvatarUploader';
import AreaUploadManager from './organisms/AreaUploadManager';
import Form from './Form';
import { ButtonHTMLAttributes } from 'react';
import SplitButton, { ISplitButtonProps } from './molecules/SplitButton';
import ButtonsStack, {IButtonsStack, IButtonStack} from './molecules/ButtonsStack';

export {
    Form,
    Button,
    ButtonWithIcon,
    ButtonWithLoading,
    IconButton,
    ActionButtons,
    SmallInput,
    Input,
    Label,
    Checkbox,
    Switch,
    PasswordField,
    TextField,
    TextArea,
    TextAreaField,
    SliderInput,
    DurationSlider,
    PercentageSlider,
    InputFileButton,
    AvatarUploader,
    DropArea,
    CropTool,
    SelectField,
    SelectWrapper,
    AreaUploadManager,
    RadioButton,
    SplitButton,
    ButtonsStack,
};

export type TypeFieldState = 'default' | 'disabled' | 'required' | 'valid' | 'invalid' | 'processing';
export type TypeButtonDesigns = 'primary' | 'secondary' | 'warning' | 'danger';
export type TypeButtonSizes = 'xsmall' | 'small' | 'normal' | 'large';
export type ISelectSizes = 'small' | 'normal';
export type IInputOptionsType = "text" | "checkbox" | "radio";

export type TypeLabelDirection = 'column' | 'row' | 'row-reverse';


interface ButtonProps {
  size?: TypeButtonSizes
  design?: TypeButtonDesigns
}

export type IButtonProps = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

export type { IconButtonData, ISliderMark, ISplitButtonProps, IButtonsStack, IButtonStack, TypeSwitchState};
