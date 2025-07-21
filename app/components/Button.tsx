import Link from "next/link"

type Variant = "primary" | "secondary" | "ghost"
type Type = "button" | "submit" | "reset"

type ButtonProps =
  | {
      variant?: Variant
      children: React.ReactNode
      className?: string
      onClick?: () => void
      type?: Type
      href?: undefined
    }
  | {
      variant?: Variant
      children: React.ReactNode
      href: string
      className?: string
      onClick?: undefined
      type?: undefined
    }

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const classes = `btn btn-${variant} ${className}`

  if ("href" in props) {
    return <Link href={props.href} className={classes}>{props.children}</Link>
  }

  return (
    <button type={props.type ?? "button"} onClick={props.onClick} className={classes}>
      {props.children}
    </button>
  )
}
