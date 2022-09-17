import { Button, Text } from "react-native"
import { View } from "./Themed"

export function Topbar() {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
            }}
        >
            <Button title="Go back"></Button>
            <Text>Switch Game</Text>
            <Button title="profile"></Button>
        </View>
    )
}
