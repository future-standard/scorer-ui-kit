import Button from './atoms/Button';
import ButtonWithIcon from './atoms/ButtonWithIcon';
import ButtonWithLoading from './atoms/ButtonWithLoading';
import IconButton, {IconButtonData} from './atoms/IconButton';
import ActionButtons from './molecules/ActionButtons';
import Input from './atoms/Input';
import SmallInput from './atoms/SmallInput';
import Label from './atoms/Label';
import Switch from './atoms/Switch';
import Checkbox from './atoms/Checkbox';
import TextArea from './atoms/TextArea';
import SliderInput, {ISliderMark} from  './atoms/SliderInput';
import DurationSlider from './molecules/DurationSlider';
import PasswordField from './molecules/PasswordField';
import TextField from './molecules/TextField';
import TextAreaField from './molecules/TextAreaField';
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
};

export type TypeFieldState = 'default' | 'disabled' | 'required' | 'valid' | 'invalid' | 'processing';
export type TypeButtonDesigns = 'primary' | 'secondary' | 'danger';
export type TypeButtonSizes = 'small' | 'normal' | 'large';

interface ButtonProps {
  size?: TypeButtonSizes
  design?: TypeButtonDesigns
}

export type IButtonProps = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

export type { IconButtonData, ISliderMark };
