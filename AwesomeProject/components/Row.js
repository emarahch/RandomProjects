//https://www.freecodecamp.org/news/how-to-build-a-calculator-app-using-react-native-a-step-by-step-tutorial/
import { StyleSheet, View } from "react-native";

const Row = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

// create styles of Row
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default Row;