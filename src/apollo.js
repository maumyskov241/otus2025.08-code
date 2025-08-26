import {ApolloClient, InMemoryCache, createHttpLink} from "@apollo/client/core";

const httpLink = new createHttpLink ({
    uri: "/graphql",
});

export const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});