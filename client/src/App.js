import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider, useQuery} from '@apollo/client';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:3000/graphql" // this is where you can also  put a public api
  })
  return (
  <ApolloProvider client={client}>
    <div className="App">
      <h1>List Of Users</h1>
      </div>
    </ApolloProvider>
  );
  
}

export default App;
