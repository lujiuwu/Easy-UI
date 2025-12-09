export interface ToggleProps {
  modelValue?: boolean
  disabled?: boolean
  size?: 'small' | 'default' | 'large'
  activeColor?: string
  inactiveColor?: string
  activeText?: string
  inactiveText?: string
}

export type ToggleEmits = {
  (e: 'update:modelValue', value: boolean): void
  (e: 'change', value: boolean): void
}

