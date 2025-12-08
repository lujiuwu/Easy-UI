export interface TagProps {
  text: string
  variant: 'default' | 'outlined' | 'text'
  color: string
  rounded: boolean
  closable: boolean
  onClose: () => void
}