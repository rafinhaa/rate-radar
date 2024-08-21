import { TouchableOpacity } from "react-native"

import Icon, { IconProps } from "@/components/Icon"
import Typography from "@/components/Typography"

export type OptionProps = {
  icon: IconProps["name"]
  label: string
  children?: React.ReactNode
  onOptionPress?: () => void
}

const Option = ({ icon, label, children, onOptionPress }: OptionProps) => {
  return (
    <TouchableOpacity
      onPress={onOptionPress}
      className="flex-row gap-1 items-center"
    >
      <Icon name={icon} size="2xl" />
      <Typography.Body containerClassName="flex-1" numberOfLines={2}>
        {label}
      </Typography.Body>
      {children ? children : <Icon name="chevron-right" size="2xl" />}
    </TouchableOpacity>
  )
}

export default Option
