import Button from './atoms/Button';
import ButtonWithIcon from './atoms/ButtonWithIcon';
import ButtonWithLoading from './atoms/ButtonWithLoading';
import Input from './atoms/Input';
import InputActionButton from './atoms/InputActionButton';
import InputFeedback from './atoms/InputFeedback';
import Label from './atoms/Label';
import Switch from './atoms/Switch';
import PasswordField from './molecules/PasswordField';
import TextField from './molecules/TextField';
import Form from './Form';


export {
    Form,
    Button,
    ButtonWithIcon,
    ButtonWithLoading,
    Input,
    InputActionButton,
    InputFeedback,
    Label,
    Switch,
    PasswordField,
    TextField
}

export type TypeFieldState = 'default' | 'disabled' | 'required' | 'valid' | 'invalid' | 'processing';
export type TypeButtonDesigns = 'primary' | 'secondary' | 'danger';
export type TypeButtonSizes = 'small' | 'normal' | 'large';

export interface IButtonProps {
  size: TypeButtonSizes
  design: TypeButtonDesigns
  disabled?: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}
