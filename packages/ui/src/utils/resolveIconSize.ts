export function resolveIconSize(size: string | number): string {
  return typeof size === 'number' ? `${size}px` : size
}