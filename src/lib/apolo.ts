import { ApolloClient, InMemoryCache } from '@apollo/client'
export  const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/clapfg6m559ju01tae7191csn/master',
  cache: new InMemoryCache() // pode usar outras formas, como localStorage
})