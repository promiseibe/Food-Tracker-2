import { Link } from 'expo-router'
import { ActivityIndicator, Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native'

import { gql, useQuery } from '@apollo/client';
import dayjs from 'dayjs';
import { FoodlogListItem } from '../components/FoodLogListItem';

const query = gql `
query foodLogsForDate ($date: Date!, $user_id: String!) {
  foodLogsForDate(date: $date, user_id: $user_id) {
    food_id
    label
    user_id
    created_at
    kcal
    id
  }
}
`

  
export default function HomeScreen() {
  const user_id = "promise";
  const {loading, data, error} = useQuery(query, {
    variables: {
      date: dayjs().format("YYYY-MM-DD"),
      user_id
    }
  });

  

  
  if(loading) {
    return <ActivityIndicator size="large" color="blue" />
  }
  if(error) {
return Alert.alert(error.message)
  }

  console.log(data)
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
         <Button title='Add Food' />
            </Link>
       </View>
      <FlatList data={data.foodLogsForDate} contentContainerStyle={{gap: 5}} renderItem={({item}) => <FoodlogListItem item={item}/>} />
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