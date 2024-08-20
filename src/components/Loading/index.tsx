import clsx from "clsx"
import { useTranslation } from "react-i18next"
import { ActivityIndicator, ActivityIndicatorProps, View } from "react-native"

import Typography from "../Typography"

export type LoadingProps = ActivityIndicatorProps & {
  containerClassName?: string
  loadingClassName?: string
  message?: string
}

const Loading = ({ message, ...rest }: LoadingProps) => {
  const { t } = useTranslation()

  const activeColor = clsx("white")

  const containerClassName = clsx("gap-2 items-center", rest.containerClassName)
  const loadingClassName = clsx(rest.loadingClassName)

  const currentMessage = message || `${t("common.loading")}...`

  return (
    <View className={containerClassName}>
      <ActivityIndicator
        size="large"
        color={activeColor}
        className={loadingClassName}
        {...rest}
      />
      <Typography.Body>{currentMessage}</Typography.Body>
    </View>
  )
}

export default Loading
