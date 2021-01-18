import Button from './atoms/Button';
import ButtonWithIcon from './atoms/ButtonWithIcon';
import ButtonWithLoading from './atoms/ButtonWithLoading';
import Input from './atoms/Input';
import SmallInput from './atoms/SmallInput';
import InputActionButton from './atoms/InputActionButton';
import InputFeedback from './atoms/InputFeedback';
import Label from './atoms/Label';
import Switch from './atoms/Switch';
import Checkbox from './atoms/Checkbox';
import TextArea from './atoms/TextArea';
import PasswordField from './molecules/PasswordField';
import TextField from './molecules/TextField';
import TextareaField from './molecules/TextareaField';
import Form from './Form';
import { ButtonHTMLAttributes } from 'react';


export {
    Form,
    Button,
    ButtonWithIcon,
    ButtonWithLoading,
    SmallInput,
    Input,
    InputActionButton,
    InputFeedback,
    Label,
    Checkbox,
    Switch,
    PasswordField,
    TextField,
    TextArea,
    TextareaField,
};

export type TypeFieldState = 'default' | 'disabled' | 'required' | 'valid' | 'invalid' | 'processing';
export type TypeButtonDesigns = 'primary' | 'secondary' | 'danger';
export type TypeButtonSizes = 'small' | 'normal' | 'large';

interface ButtonProps {
  size?: TypeButtonSizes
  design?: TypeButtonDesigns
}

export type IButtonProps = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
