import { OptionItem } from "../.."

type TabsType = 'default' | 'card'

interface TabItem extends OptionItem {}

export interface TabsProps {
  modelValue: string
  options: TabItem[]
  type: TabsType
}