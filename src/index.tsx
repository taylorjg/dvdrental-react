import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client"
import "./index.css"

const client = new ApolloClient({
  uri: "http://localhost:8080/v1/graphql",
  cache: new InMemoryCache()
})

client
  .query({
    query: gql`
      query MyQuery {
        film {
          title
          release_year
        }
      }
    `
  })
  .then(result => console.log(result))

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
