import { gql } from "@apollo/client";

const GET_ALL_SLUGS = gql`
  query {
    blogs {
      data {
        attributes {
          urlSlug
        }
      }
    }
  }
`;

const GET_ALL_POSTS = gql`
  query {
    blogs {
      data {
        attributes {
          title
          description
          urlSlug
        }
      }
    }
  }
`;

const GET_INDIVIDUAL_POST = gql`
  query ($slugUrl: String!) {
    blogs(filters: { urlSlug: { eq: $slugUrl } }) {
      data {
        attributes {
          title
          content
        }
      }
    }
  }
`;

export { GET_ALL_POSTS, GET_INDIVIDUAL_POST, GET_ALL_SLUGS };
