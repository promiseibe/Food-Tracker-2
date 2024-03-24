
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import { Router, Stack, Scene } from 'react-native-router-flux'; // Import Stack from the correct routing library
import { Stack } from "expo-router";
const client = new ApolloClient({
  uri: 'https://kapirimposhi.stepzen.net/api/ranting-lion/__graphql', // Remove the space at the beginning
  cache: new InMemoryCache(),
  headers: {
    Authorization: "apikey kapirimposhi::stepzen.io+1000::8abc7849ba4806d2d18a8fd89805f693c4755b81276b5d7e49e35e22d14dc2f1"
  }
});

const RootLayout = () => {
  return (
    <ApolloProvider client={client}>

        <Stack /> 
      
    
    </ApolloProvider>
  );
}

export default RootLayout;

// import { Stack } from "expo-router";
// import { ApolloClient, InMemoryCache, ApolloProvider, gql, ApolloCache } from '@apollo/client';

// const client = new ApolloClient({
//     uri: ' https://kapirimposhi.stepzen.net/api/ranting-lion/__graphql',
//     cache: new InMemoryCache(),
//     headers: {
//       Authorization: "apikey kapirimposhi::stepzen.io+1000::8abc7849ba4806d2d18a8fd89805f693c4755b81276b5d7e49e35e22d14dc2f1"
//     }
//   });
// const RootLayout = () => {

//   return (
//   <ApolloProvider client={client}>
//     <Stack/>
//   </ApolloProvider>
//   ) 
// }

// export default RootLayout;
