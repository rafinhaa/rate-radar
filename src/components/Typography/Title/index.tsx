import clsx from "clsx"
import { Text, TextProps } from "react-native"

export type TitleProps = TextProps & {
  variant?: "h1" | "h2"
  containerClassName?: string
}

const Title = ({ children, variant, ...rest }: TitleProps) => {
  const style = clsx(
    (!variant || variant === "h1") && "text-3xl font-black leading-[1.5]",
    variant === "h2" && "text-2xl font-bold leading-[1.3]",
    "text-white",
    rest?.containerClassName,
  )

  return (
    <Text className={style} {...rest}>
      {children}
    </Text>
  )
}

export default Title
