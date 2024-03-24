import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";


// Food List Component

export const FoodListItem = ({item}) => {

  return (
<View
    style={Styles.foodList}
  >
    <View style={{flex: 1 , gap: 5,}}>
      <Text style={Styles.Label}>{item.food.label} </Text>
      <Text style={Styles.brand}>{item.food.nutrients.ENERC_KCAL} cal, {item.food.brand}</Text>
    </View>

    <AntDesign name="pluscircleo" size={24} color="royalblue" />
  </View>

  )
}

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
  brand: { color: "dimgray" }
})