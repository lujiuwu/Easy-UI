type ButtonVariant = 'default' | 'outlined' | 'text' 
type ButtonSize = 'small' | 'default' | 'large'
export interface ButtonProps {
  text?: string
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
}

export type ButtonEmits = {
  (e: 'click'): void
}