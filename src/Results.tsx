import gql from "graphql-tag";
import React, { StatelessComponent, useState } from "react";
import { Query } from "react-apollo";
import { GifId } from "./types";
import {
  GiphySearchQuery,
  GiphySearchQueryVariables
} from "./types/GiphySearchQuery";
import Result from "./Result";
import Loading from "./Loading";

export interface Props {
  searchQuery: string;
  selectedId?: GifId;
  setSelectedId: (id: GifId) => void;
}

export const query = gql`
  query GiphySearchQuery($searchQuery: String!) {
    giphy {
      search(query: $searchQuery) {
        id
        images {
          fixed_width_small {
            height
            url
            width
          }
        }
      }
    }
  }
`;

export const Results: StatelessComponent<Props> = props => {
  const variables = { searchQuery: props.searchQuery };
  return (
    <div className="Results" role="listbox" tabIndex={0}>
      <Query<GiphySearchQuery, GiphySearchQueryVariables>
        query={query}
        variables={variables}
      >
        {({ data, loading }) => {
          if (props.searchQuery === "") {
            return null;
          }
          const results = (data && data.giphy && data.giphy.search) || [];

          if (loading) {
            return <Loading />;
          }

          return (
            <>
              {results.length === 0 && (
                <div className="empty">No results :(</div>
              )}
              {results.map((result, index) => {
                if (!result) {
                  return null;
                }

                return (
                  <Result
                    key={result.id}
                    isSelected={result.id === props.selectedId}
                    onClick={props.setSelectedId.bind(undefined, result.id)}
                    result={result}
                  />
                );
              })}
            </>
          );
        }}
      </Query>
    </div>
  );
};
