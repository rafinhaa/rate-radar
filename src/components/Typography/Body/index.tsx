import clsx from "clsx"
import { Text, TextProps } from "react-native"

export type BodyProps = TextProps & {
  variant?: "caption" | "text" | "title"
  containerClassName?: string
}

const Body = ({ children, variant, ...rest }: BodyProps) => {
  const style = clsx(
    (!variant || variant === "text") && "text-base font-regular leading-[1.2]",
    variant === "caption" && "text-sm font-light leading-[1.1]",
    variant === "title" && "text-lg font-semi leading-[1.4]",
    "text-white",
    rest?.containerClassName,
  )

  return (
    <Text className={style} {...rest}>
      {children}
    </Text>
  )
}

export default Body
