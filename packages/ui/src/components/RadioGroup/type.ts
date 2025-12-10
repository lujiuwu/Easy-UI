import { OptionItem } from "../../types/OptionItem"
import { Direction } from "../../types/layout"

type RadioVariant = 'default' | 'outlined' | 'card' | 'tab'

export interface RadioProps extends OptionItem {
  checked?: boolean
  name?: string
  color?: string
  disabled?: boolean
}

export interface RadioGroupProps {
  value: string
  options: RadioProps[]
  direction: Direction
  variant?: RadioVariant
}