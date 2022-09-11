import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
//import bigBrain from "./bigBrain.png";

export default function HomeScreen() {

  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{nav.navigate("SwitchGame")}}><Image source={require("./bigBrain.png")}/></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
