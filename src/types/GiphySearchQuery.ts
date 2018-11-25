/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GiphySearchQuery
// ====================================================

export interface GiphySearchQuery_giphy_search_images_fixed_width_small {
  __typename: "GiphyGIFImageDataFixedWidthSmall";
  height: string;
  url: string;
  width: string;
}

export interface GiphySearchQuery_giphy_search_images {
  __typename: "GiphyGIFImages";
  fixed_width_small: GiphySearchQuery_giphy_search_images_fixed_width_small | null;
}

export interface GiphySearchQuery_giphy_search {
  __typename: "GiphyGIFData";
  /**
   * The item's unique id.
   */
  id: string;
  images: GiphySearchQuery_giphy_search_images;
}

export interface GiphySearchQuery_giphy {
  __typename: "GiphyAPI";
  search: (GiphySearchQuery_giphy_search | null)[] | null;
}

export interface GiphySearchQuery {
  giphy: GiphySearchQuery_giphy | null;
}

export interface GiphySearchQueryVariables {
  searchQuery: string;
}
