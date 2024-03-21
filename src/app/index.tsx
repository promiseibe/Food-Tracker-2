import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { FoodListItem } from "../components/FoodListItem";
const foodItems = [
  { label: "Pizza", cal: 75, brand: "Dominos" },
  { label: "Apple", cal: 86, brand: "Generic" },
  { label: "Coffee", cal: 100, brand: "Americans" },
];

export default function App() {
  return (
    <View style={styles.container}>
      {/* Food Item View */}
      <FlatList
        data={foodItems}
        renderItem={({ item }) => <FoodListItem item={item} /> }
        contentContainerStyle={{gap: 5}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 5,
    padding: 10,
  },
});
