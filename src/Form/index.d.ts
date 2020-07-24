type TypeFieldState = 'default' | 'disabled' | 'required' | 'valid' | 'invalid' | 'processing';
type TypeButtonDesigns = 'primary' | 'secondary' | 'danger';
type TypeButtonSizes = 'small' | 'normal' | 'large';

interface IButtonProps {
  size: TypeButtonSizes
  design: TypeButtonDesigns
  disabled?: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}
