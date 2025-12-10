import { VNode } from "vue"

type InputVariant = 'default' | 'underline'

export interface InputProps {
  value?: string
  placeholder?: string
  variant?: InputVariant
  disabled?: boolean
  readonly?: boolean
  slots?: InputSlots
  clearable?: boolean
}

interface InputSlots {
  prefix?: () => VNode | string
  suffix?: () => VNode | string
}