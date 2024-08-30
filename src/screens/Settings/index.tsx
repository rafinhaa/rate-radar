import { SafeAreaView, Text } from "react-native"

export type SettingsProps = {}

const Settings = (_props: SettingsProps) => {
  return (
    <SafeAreaView className="flex-1 bg-blue-950">
      <Text>Settings</Text>
    </SafeAreaView>
  )
}

export default Settings
