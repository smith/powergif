import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import React, { useState } from "react";
import { ApolloProvider } from "react-apollo";
import { Search } from "./Search";
import { Results } from "./Results";
import { Detail } from "./Detail";
import { GifId } from "./types";

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://www.graphqlhub.com/graphql"
  })
});

export const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedId, setSelectedId] = useState<GifId | undefined>(undefined);
  const handleSubmit = (value: string) => {
    setSearchQuery(value);
    if (value !== searchQuery) {
      setSelectedId(undefined);
    }
  };

  return (
    <ApolloProvider client={client}>
      <header>
        <h1>Power GIF</h1>
        <Search onSubmit={handleSubmit} />
      </header>
      <div className="container">
        <Results
          searchQuery={searchQuery}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <Detail id={selectedId} />
      </div>
    </ApolloProvider>
  );
};
