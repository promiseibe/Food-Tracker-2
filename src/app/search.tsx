

import { ActivityIndicator, Button, FlatList, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { FoodListItem } from "../components/FoodListItem";
import { useState } from "react";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { Ionicons } from '@expo/vector-icons';
import { Camera, CameraType } from 'expo-camera';

const query = gql`
  query search($ingr: String, $upc: String) {
    search(ingr: $ingr, upc: $upc) {
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
  const [scannerEnabled, setScannerEnabled] = useState(false);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [scannedCode, setScannedCode] = useState("");
  requestPermission()
  
  const performSearch = () => {
  runSearch( {variables: {ingr: search}});

    setSearch("");
  }

  if(error) {
    return <Text>{error.message}</Text>
  }
  if(scannerEnabled) {


    return (
      <View>
      <Text style={styles.scan}>Scan Your Product</Text>
          <Camera style={{width: "100%", height: "70%", marginTop: 100}} onBarCodeScanned={(data) => {
              runSearch( {variables: {upc: data.data}}); 
              setScannerEnabled(false);
          } }/>
         <Ionicons onPress={() => setScannerEnabled(false)} name="close" size={34} color="black" style={{position: "absolute", right: 0, top: 10, bottom: 10}}/>
    
      </View>
       
    )
   
  }


const items = data?.search?.hints || [];

  return (
    <View style={styles.container}>
      {/* Food Item View */}
      <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
      <TextInput value={search} placeholder="Search..." onChangeText={setSearch} style={styles.input}/>
      <TouchableOpacity onPress={() => setScannerEnabled(true)}>
          <Ionicons name="barcode-outline" size={32} color="dimgray" />
      </TouchableOpacity>
    
      </View>

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
    borderRadius: 20,
    flex: 1
  },
  scan : {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    color: "lightgrey"
  }
});
