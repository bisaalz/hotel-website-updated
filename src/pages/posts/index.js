import React from "react";
import { GET_ALL_POSTS } from "../../graphql/queries";
import Link from "next/link";
import graphql from "../../utils/graphqlClient";

function Posts({ posts }) {
  return (
    <div>
      {posts.map(({ attributes }, index) => (
        <Link href={`/posts/${attributes.urlSlug}`} key={index}>
          <h1>{attributes.title}</h1>
          {/* <p>{row.description}</p> */}
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await graphql.query({
    query: GET_ALL_POSTS,
  });

  return {
    props: {
      posts: data.blogs.data,
    },
  };
}
export default Posts;
