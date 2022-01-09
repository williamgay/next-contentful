import request, { GraphQLClient, gql } from "graphql-request";

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}`;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  },
});

export const getPosts = async () => {
  const postsQuery = gql`
    {
      blogPostCollection {
        items {
          title
          excerpt
          slug
          date
        }
      }
    }
  `;

  //  const posts = await graphQLClient.request(postsQuery);

  return graphQLClient.request(postsQuery);
};

export const getPost = async (slug) => {
  console.log("HERE IT IS " + slug);
  const postQuery = await gql`
    query {
      blogPostCollection(where: { slug: "${slug}" }) {
        items {
          title
          excerpt
          slug
          date
          imagesCollection {
            items{
              url
              title
              width
              height
            }
          }
          body {
            json
          }
        }
      }
    }
  `;

  return graphQLClient.request(postQuery, {
    slug,
  });
};
