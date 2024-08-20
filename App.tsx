import { StatusBar } from "expo-status-bar"
import { useTranslation } from "react-i18next"
import { Text, View } from "react-native"

import "@/locales"
import "@/styles/global.css"

export default function App() {
  const { t } = useTranslation()

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>{t("startingMessage")}</Text>
      <StatusBar style="auto" />
    </View>
  )
}
