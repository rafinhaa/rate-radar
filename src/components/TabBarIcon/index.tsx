import clsx from "clsx"
import { View } from "react-native"

import Icon, { IconProps } from "../Icon"

export type TabBarIconProps = IconProps & {
  focused?: boolean
}

const TabBarIcon = ({ focused = false, ...rest }: TabBarIconProps) => {
  return (
    <View className="justify-center items-center gap-2 w-full overflow-hidden">
      <View
        testID={`tab-bar-icon-${rest.name}-border-${focused}`}
        className={clsx("w-14 h-1", focused && "bg-purple-800 rounded-full")}
      />
      <Icon size="4xl" {...rest} />
    </View>
  )
}

export default TabBarIcon
