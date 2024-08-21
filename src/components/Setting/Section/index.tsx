import { View } from "react-native"

import Typography from "@/components/Typography"

export type SectionProps = {
  children?: React.ReactNode
  title?: string
}

const Section = ({ children, title }: SectionProps) => {
  return (
    <View className="gap-1 mb-4">
      <Typography.Body variant="title">{title}</Typography.Body>
      <View className="bg-blue-900 rounded-2xl p-4 gap-4">{children}</View>
    </View>
  )
}

export default Section
