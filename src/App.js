import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
} from "@apollo/client";

import Component from "./Component";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>
  );
}

export default App;
