import React from "react"
import ReactDOM from "react-dom"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import App from "./App"
import "./index.css"

console.log('process.env:', process.env)

const client = new ApolloClient({
  uri: process.env.REACT_APP_HASURA_GRAPHQL_ENGINE_URL,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
