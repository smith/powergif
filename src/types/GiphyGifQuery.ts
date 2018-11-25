/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GiphyGifQuery
// ====================================================

export interface GiphyGifQuery_giphy_gif_images_original {
  __typename: "GiphyGIFImageDataOriginal";
  url: string;
  width: string;
  height: string;
}

export interface GiphyGifQuery_giphy_gif_images {
  __typename: "GiphyGIFImages";
  original: GiphyGifQuery_giphy_gif_images_original | null;
}

export interface GiphyGifQuery_giphy_gif {
  __typename: "GiphyGIFData";
  images: GiphyGifQuery_giphy_gif_images;
}

export interface GiphyGifQuery_giphy {
  __typename: "GiphyAPI";
  gif: GiphyGifQuery_giphy_gif | null;
}

export interface GiphyGifQuery {
  giphy: GiphyGifQuery_giphy | null;
}

export interface GiphyGifQueryVariables {
  id: string;
}
