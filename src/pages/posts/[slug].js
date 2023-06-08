import React from "react";
import graphql from "../../utils/graphqlClient";
import { GET_ALL_SLUGS, GET_INDIVIDUAL_POST } from "../../graphql/queries";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

const Posts = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <MDXRemote {...post.content} />
    </div>
  );
};

export async function getStaticPaths() {
  const { data } = await graphql.query({ query: GET_ALL_SLUGS });

  const paths = data.blogs.data.map((post) => {
    return { params: { slug: post.attributes.urlSlug.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await graphql.query({
    query: GET_INDIVIDUAL_POST,
    variables: {
      slugUrl: params.slug,
    },
  });

  const attrs = data.blogs.data[0].attributes;

  const html = await serialize(attrs.content);
  return {
    props: {
      post: {
        title: attrs.title,
        content: html,
      },
    },
  };
}

export default Posts;
