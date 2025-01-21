import Link from "next/link"

const NavLink = ({
  link,
  text,
  className,
}: {
  link: string
  text: string
  className?: string
}) => {
  return (
    <Link
      href={link}
      className={`hover:text-rose-700 duration-100 ${className}`}
    >
      {text}
    </Link>
  )
}

export default NavLink
