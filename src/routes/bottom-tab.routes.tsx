import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs"
import { NavigatorScreenParams } from "@react-navigation/native"
import { cssInterop } from "nativewind"
import { ComponentProps } from "react"
import { ViewProps } from "react-native"

import TabBarIcon from "@/components/TabBarIcon"
import Favorites from "@/screens/Favorites"
import Rate from "@/screens/Rate"
import Settings from "@/screens/Settings"

type BottomTabParamList = {
  Rate: undefined
  Favorites: undefined
  Settings: undefined
}

const { Navigator, Screen } = createBottomTabNavigator<BottomTabParamList>()

type Props = BottomTabScreenProps<BottomTabParamList>

type BottomTabScreenNavigationProp = Props["navigation"]

type BottomTabScreenRouteProp<RouteName extends keyof BottomTabParamList> =
  BottomTabScreenProps<BottomTabParamList, RouteName>["route"]

type BottomTabNavigatorScreenParams = NavigatorScreenParams<BottomTabParamList>

type TailwindBottomTabProps = ComponentProps<typeof Navigator> & {
  headerStyle?: ViewProps["style"]
  tabBarStyle?: ViewProps["style"]
  tabBarIconStyle?: ViewProps["style"]
  tabBarActiveTintColor?: { color: string }
  tabBarInactiveTintColor?: { color: string }
}

const TailwindBottomTab = cssInterop(
  ({
    headerStyle,
    tabBarStyle,
    tabBarIconStyle,
    tabBarActiveTintColor,
    tabBarInactiveTintColor,
    screenOptions,
    ...props
  }: TailwindBottomTabProps) => (
    <Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        headerStyle,
        tabBarStyle,
        tabBarIconStyle,
        tabBarActiveTintColor: tabBarActiveTintColor?.color,
        tabBarInactiveTintColor: tabBarInactiveTintColor?.color,
        ...screenOptions,
      }}
      {...props}
    />
  ),
  {
    headerClassName: "headerStyle",
    tabBarClassName: "tabBarStyle",
    tabBarIconClassName: "tabBarIconStyle",
    tabBarActiveTintColorClassName: "tabBarActiveTintColor",
    tabBarInactiveTintColorClassName: "tabBarInactiveTintColor",
  },
)

export const BottomTab = () => {
  return (
    <TailwindBottomTab
      headerClassName="bg-blue-100"
      tabBarClassName="bg-blue-950 border-t-0"
      tabBarActiveTintColorClassName="text-white"
      tabBarInactiveTintColorClassName="text-gray-500"
    >
      <Screen
        name="Rate"
        component={Rate}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              color={color}
              name={focused ? "home" : "home-outline"}
              focused={focused}
            />
          ),
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              color={color}
              name={focused ? "star" : "star-outline"}
              focused={focused}
            />
          ),
        }}
      />
      <Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              color={color}
              name={focused ? "cog" : "cog-outline"}
              focused={focused}
            />
          ),
        }}
      />
    </TailwindBottomTab>
  )
}

export type {
  BottomTabParamList,
  BottomTabScreenNavigationProp,
  BottomTabScreenRouteProp,
  BottomTabNavigatorScreenParams,
}
