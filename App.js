import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Categories from "./screens/Categories";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Open up App.js to ssstart sssswdddorssksssisdasdasng odsdsdndd your app!
      </Text>
      <Categories />
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
