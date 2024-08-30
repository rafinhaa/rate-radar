import { NavigationContainer } from "@react-navigation/native"

import { BottomTab } from "./bottom-tab.routes"

export {
  BottomTabParamList,
  BottomTabScreenNavigationProp,
  BottomTabScreenRouteProp,
  BottomTabNavigatorScreenParams,
} from "./bottom-tab.routes"

export const Routes = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  )
}
