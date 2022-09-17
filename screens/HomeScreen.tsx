import { useNavigation } from "@react-navigation/native"
import { StyleSheet, Image, TouchableOpacity } from "react-native"

import { Text, View } from "../components/Themed"

export default function HomeScreen() {
  const nav = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          nav.navigate("SwitchGame")
        }}
      >
        <Image
          source={require("../assets/images/bigBrain.png")}
          style={styles.logo}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  logo: {
    height: 256,
    width: 256,
  },
})
