import React, { StatelessComponent } from "react";
import { GiphySearchQuery_giphy_search } from "./types/GiphySearchQuery";
import { GifId } from "./types";

export interface Props {
  isSelected: boolean;
  onClick: (id: GifId) => void;
  result: GiphySearchQuery_giphy_search | null;
}

export const Result: StatelessComponent<Props> = props => {
  const id = props.result && props.result.id;
  const image =
    props.result &&
    props.result.images &&
    props.result.images.fixed_width_small;

  if (!image) {
    return null;
  }

  return (
    <img
      className={props.isSelected ? "selected" : ""}
      role="option"
      src={image.url}
      onClick={props.onClick.bind(undefined, id)}
      height={image.height}
      width={image.width}
    />
  );
};

export default Result;
