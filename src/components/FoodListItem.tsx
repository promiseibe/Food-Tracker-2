import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "expo-router";

// Food List Component

export const FoodListItem = ({ item }) => {
  const mutation = gql`
    mutation MyMutation(
      $food_id: String!
      $kcal: Int!
      $label: String!
      $user_id: String!
    ) {
      insertFood_log(
        food_id: $food_id
        kcal: $kcal
        label: $label
        user_id: $user_id
      ) {
        created_at
        food_id
        id
        kcal
        label
        user_id
      }
    }
  `;

  const [logFood, {loading, error, data}] = useMutation(mutation, {
    refetchQueries: ["foodLogsForDate"]
  });
  const router = useRouter();
  const onPlusPressed = async() => {
    await logFood({
      variables: {
        food_id: item.food.foodId,
        kcal: item.food.nutrients.ENERC_KCAL,
        label: item.food.label,
        user_id: "promise"
      }
    });
    router.back()
  }

  return (
    <View style={Styles.foodList}>
      <View style={{ flex: 1, gap: 5 }}>
        <Text style={Styles.Label}>{item.food.label} </Text>
        <Text style={Styles.brand}>
          {item.food.nutrients.ENERC_KCAL} cal, {item.food.brand}
        </Text>
      </View>

<TouchableOpacity onPress={onPlusPressed} >
   <AntDesign name="pluscircleo" size={24} color="royalblue" />
</TouchableOpacity>
     
    </View>
  );
};

const Styles = StyleSheet.create({
  foodList: {
    backgroundColor: "#f6f6f8",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Label: { fontWeight: "bold", fontSize: 16 },
  brand: { color: "dimgray" },
});
