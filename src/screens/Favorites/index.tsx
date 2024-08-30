import { SafeAreaView, Text } from "react-native"

export type FavoritesProps = {}

const Favorites = (_props: FavoritesProps) => {
  return (
    <SafeAreaView className="flex-1 bg-blue-950">
      <Text>Favorites</Text>
    </SafeAreaView>
  )
}

export default Favorites
