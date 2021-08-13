import Button from './atoms/Button';
import ButtonWithIcon from './atoms/ButtonWithIcon';
import ButtonWithLoading from './atoms/ButtonWithLoading';
import IconButton, {IconButtonData} from './atoms/IconButton';
import ActionButtons from './molecules/ActionButtons';
import FilterButton from './atoms/FilterButton';
import Input from './atoms/Input';
import SmallInput from './atoms/SmallInput';
import Label from './atoms/Label';
import Switch from './atoms/Switch';
import Checkbox from './atoms/Checkbox';
import TextArea from './atoms/TextArea';
import SelectField, {SelectWrapper} from './atoms/SelectField';
import SliderInput, {ISliderMark} from  './atoms/SliderInput';
import InputFileButton from './atoms/InputFileButton';
import DurationSlider from './molecules/DurationSlider';
import PercentageSlider from './molecules/PercentageSlider';
import PasswordField from './molecules/PasswordField';
import TextField from './molecules/TextField';
import TextAreaField from './molecules/TextAreaField';
import FilterDropdown from './molecules/FilterDropdown';
import DropArea from './atoms/DropArea';
import CropTool from './molecules/CropTool';
import AvatarUploader from './organisms/AvatarUploader';
import Form from './Form';
import { ButtonHTMLAttributes } from 'react';

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
    FilterButton,
    FilterDropdown,
};

export type TypeFieldState = 'default' | 'disabled' | 'required' | 'valid' | 'invalid' | 'processing';
export type TypeButtonDesigns = 'primary' | 'secondary' | 'danger';
export type TypeButtonSizes = 'xsmall' | 'small' | 'normal' | 'large';
export type ISelectSizes = 'small' | 'normal';

interface ButtonProps {
  size?: TypeButtonSizes
  design?: TypeButtonDesigns
}

export type IButtonProps = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

export type { IconButtonData, ISliderMark };
