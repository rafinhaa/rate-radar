import {
  Montserrat_700Bold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat"
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins"
import { useFonts } from "expo-font"
import { StatusBar } from "expo-status-bar"
import { View } from "react-native"

import { Loading } from "@/components"
import "@/locales"
import { Routes } from "@/routes"
import "@/styles/global.css"

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_900Black,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_600SemiBold,
  })

  if (!fontsLoaded)
    return <Loading containerClassName="flex-1 justify-center bg-blue-950" />

  return (
    <View className="flex-1">
      <StatusBar style="auto" />
      <Routes />
    </View>
  )
}
