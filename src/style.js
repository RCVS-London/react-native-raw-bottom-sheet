import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    flex: 1,
    backgroundColor: "#00000077"
  },
  mask: {
    flex: 1,
    backgroundColor: "transparent"
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "100%",
    height: 0,
    marginBottom: 20,
    overflow: "hidden"
  },
  draggableContainer: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  draggableIcon: {
    width: 35,
    height: 5,
    borderRadius: 5,
    margin: 10,
    backgroundColor: "#ccc"
  }
});

export default styles;
