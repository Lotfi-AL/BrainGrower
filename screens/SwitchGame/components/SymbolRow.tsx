import { Text, TextProps, View } from "../../../components/Themed"
import { Feather } from "@expo/vector-icons"
import Symbol from "./Symbol"

const SymbolRow = () => {
  return (
    <View>
      <Symbol name="square" color="black" backgroundColor="red" />
      <Symbol name="circle" color="black" backgroundColor="red" />
      <Symbol name="plus" color="black" backgroundColor="red" />
      <Symbol name="triangle" color="black" backgroundColor="red" />
    </View>
  )
}

export default SymbolRow
