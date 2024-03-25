import { Link } from 'expo-router'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import { FoodListItem } from '../components/FoodListItem';


const foodItems = [
    { 
        food: {label: "Pizza", nutrients: {ENERC_KCAL:100}, brand: "Dominos" }
     },
     { 
        food: {label: "Pizza", nutrients: {ENERC_KCAL:100}, brand: "Dominos" }
     }
  ];
  
export default function HomeScreen() {
  return (
    <View style={styles.container}>  
    <View style={styles.headerRow}>

 
    <Text style={styles.text}>Calories</Text>
    <Text>1770 - 360 = 1692</Text>
       </View>


    {/* <View style={styles.container}>   */}
    <View style={styles.headerRow}>

 
    <Text style={styles.text}>Today's Food</Text>
        <Link href="/search" asChild>
         <Button title='ADD BUTTON' />
            </Link>
       </View>
      <FlatList data={foodItems} contentContainerStyle={{gap: 5}} renderItem={({item}) => <FoodListItem item={item}/>} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        padding: 10
    },
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between"},
    text: {
        fontSize: 18,
         fontWeight: "500",
          alignItems: "center",
           color:"dimgray"
    }

})