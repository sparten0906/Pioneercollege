export {}
// ============================================================
// CLASSNAME MERGE — combines conditional class strings safely
// Lightweight alternative to clsx for hardcoded CSS projects
// ============================================================

type ClassValue =
  | string
  | undefined
  | null
  | false
  | Record<string, boolean | undefined | null>

// Main function — usage:
//   cn('base-class', isActive && 'active', { 'error': hasError })
export const cn = (...inputs: ClassValue[]): string => {
  const classes: string[] = []

  for (const input of inputs) {
    if (!input) continue

    if (typeof input === 'string') {
      classes.push(input.trim())
      continue
    }

    if (typeof input === 'object') {
      for (const [key, value] of Object.entries(input)) {
        if (value) classes.push(key.trim())
      }
    }
  }

  return classes.filter(Boolean).join(' ')
}

// Shorthand — joins only truthy string values
export const cls = (...names: (string | undefined | null | false)[]): string =>
  names.filter(Boolean).join(' ')

// Conditionally adds a modifier class
export const withMod = (base: string, mod: string, condition: boolean): string =>
  condition ? `${base} ${base}--${mod}` : base

// Build BEM class name
// bemBlock('card')                    → 'card'
// bemBlock('card', 'title')           → 'card__title'
// bemBlock('card', 'title', 'bold')   → 'card__title card__title--bold'
export const bem = (
  block: string,
  element?: string,
  modifier?: string,
): string => {
  let base = block
  if (element) base = `${block}__${element}`
  if (modifier) return `${base} ${base}--${modifier}`
  return base
}