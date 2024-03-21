import { StatusBar } from "expo-status-bar";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { FoodListItem } from "../components/FoodListItem";
import { useState } from "react";
const foodItems = [
  { label: "Pizza", cal: 75, brand: "Dominos" },
  { label: "Apple", cal: 86, brand: "Generic" },
  { label: "Coffee", cal: 100, brand: "Americans" },
];

export default function App() {
  const [search, setSearch] = useState("");

  const performSearch = () => {
    console.warn("searching for", search)
  }


  return (
    <View style={styles.container}>
      {/* Food Item View */}
      <TextInput value={search} placeholder="Search..." onChangeText={setSearch} style={styles.input}/>
      {search && <Button title="Submit" onPress={performSearch} />}
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
    gap: 10,
    padding: 10,
  },
  input: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 20
  }
});
