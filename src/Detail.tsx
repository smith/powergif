import React, { StatelessComponent } from "react";
import { GifId } from "./types";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { GiphyGifQueryVariables, GiphyGifQuery } from "./types/GiphyGifQuery";
import Loading from "./Loading";

export interface Props {
  id?: GifId;
}

export const query = gql`
  query GiphyGifQuery($id: String!) {
    giphy {
      gif(id: $id) {
        images {
          original {
            url
            width
            height
          }
        }
      }
    }
  }
`;

export const Detail: StatelessComponent<Props> = props => {
  if (!props.id) {
    return null;
  }
  const variables = { id: props.id };

  return (
    <div className="Detail">
      <Query<GiphyGifQuery, GiphyGifQueryVariables>
        query={query}
        variables={variables}
      >
        {({ data, loading }) => {
          if (loading) {
            return <Loading />;
          }

          const image =
            data &&
            data.giphy &&
            data.giphy.gif &&
            data.giphy.gif.images &&
            data.giphy.gif.images.original;

          if (!image) {
            return null;
          }

          return (
            <img src={image.url} height={image.height} width={image.width} />
          );
        }}
      </Query>
    </div>
  );
};
