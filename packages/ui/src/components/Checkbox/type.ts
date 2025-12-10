import { OptionItem } from "../../types/OptionItem"
import { Direction } from "../../types/layout"

type CheckboxVariant = 'default' | 'outlined' | 'card' | 'tab'
interface CustomCheckboxItem extends OptionItem {
  color?: string
  disabled?: boolean
  checked?: boolean
}
export interface CheckboxProps {
  modelValue: string[]
  options: CustomCheckboxItem[]
  direction?: Direction
  variant?: CheckboxVariant
}