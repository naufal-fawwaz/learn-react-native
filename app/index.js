import { Stack, useRouter } from "expo-router"
import { SafeAreaView, ScrollView, Text, View } from "react-native"
import { COLORS, SIZES, icons } from "../constants"
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'
 
const Home = () => {
  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{ 
          headerStyle: {
            backgroundColor: COLORS.lightWhite
          },
          headerShadowVisible: false,
          headerLeft: () => {
            return <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          },
          headerRight: () => {
            return <ScreenHeaderBtn iconUrl={icons.apple} dimension="100%" />
          },
          headerTitle: 'Home Screen',
          headerTitleAlign: 'center'
        }}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, padding: SIZES.medium }}>
            <Welcome />
            <Popularjobs />
            <Nearbyjobs />
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Home