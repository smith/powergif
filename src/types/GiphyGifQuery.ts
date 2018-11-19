/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GiphyGifQuery
// ====================================================

export interface GiphyGifQuery_giphy_gif_images_original {
  url: string;
  width: string;
  height: string;
}

export interface GiphyGifQuery_giphy_gif_images {
  original: GiphyGifQuery_giphy_gif_images_original | null;
}

export interface GiphyGifQuery_giphy_gif {
  images: GiphyGifQuery_giphy_gif_images;
}

export interface GiphyGifQuery_giphy {
  gif: GiphyGifQuery_giphy_gif | null;
}

export interface GiphyGifQuery {
  giphy: GiphyGifQuery_giphy | null;
}

export interface GiphyGifQueryVariables {
  id: string;
}
