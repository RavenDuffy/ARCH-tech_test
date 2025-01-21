const Title = ({
  size = "md",
  className = "",
  children,
}: {
  size?: "sm" | "md" | "lg"
  className?: string
  children: string
}) => {
  return <h2 className={`text-${size} ${className}`}>{children}</h2>
}

export default Title
