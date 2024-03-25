

import { ActivityIndicator, Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { FoodListItem } from "../components/FoodListItem";
import { useState } from "react";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
const query = gql`
  query search($ingr: String) {
    search(ingr: $ingr) {
      text
      hints {
        food {
          foodId
          label
          brand
          nutrients {
            ENERC_KCAL
          }
        }
      }
    }
  }
`;






export default function index() {
  const [search, setSearch] = useState("");

  const [runSearch,{data,loading, error }] = useLazyQuery(query);
  
  
  const performSearch = () => {
  runSearch( {variables: {ingr: search}});

    setSearch("");
  }

  if(error) {
    return <Text>{error.message}</Text>
  }


const items = data?.search?.hints || [];

  return (
    <View style={styles.container}>
      {/* Food Item View */}
      <TextInput value={search} placeholder="Search..." onChangeText={setSearch} style={styles.input}/>

      {search && <Button title="Search" onPress={performSearch} />}
      {loading && <ActivityIndicator size={"large"} color={"blue"}/>}
      <FlatList
        data={items}
        ListEmptyComponent={() => <Text>search a product</Text>}
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
