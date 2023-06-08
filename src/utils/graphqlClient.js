import { ApolloClient, InMemoryCache } from "@apollo/client";

const graphql = new ApolloClient({
  uri: "http://3.7.231.166:1337/graphql",
  cache: new InMemoryCache(),
});

export default graphql;
