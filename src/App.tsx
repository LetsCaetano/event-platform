import { Router } from "./Router";
import { client } from "./lib/apolo";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
