import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import DisplayData from './DisplayData';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:3000/graphql" // this is where you can also  put a public api
  })
  return (
  <ApolloProvider client={client}>
    <div className="App">
      <DisplayData />
      </div>
    </ApolloProvider>
  );
  
}

export default App;
