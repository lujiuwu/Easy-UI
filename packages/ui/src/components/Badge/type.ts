type BadgePosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'

export interface BadgeProps {
  text?: string
  position?: BadgePosition
  value?: boolean
  color?: string
}