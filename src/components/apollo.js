import {ApolloClient, InMemoryCache, createHttpLink} from "@apollo/client/core";

const httpLink = new createHttpLink ({
   // uri: "http://localhost:4000"
    uri: "/graphql",
});

export const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});