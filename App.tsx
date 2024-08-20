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
import { useTranslation } from "react-i18next"
import { ActivityIndicator, Text, View } from "react-native"

import "@/locales"
import "@/styles/global.css"

export default function App() {
  const { t } = useTranslation()

  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_900Black,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_600SemiBold,
  })

  if (!fontsLoaded) return <ActivityIndicator />

  return (
    <View className="flex-1 items-center justify-center bg-white ">
      <Text>{t("startingMessage")}</Text>
      <StatusBar style="auto" />
    </View>
  )
}
