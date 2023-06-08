// import React from 'react'
// import Header from '../../components/Header'
// import Footer from '../../components/Footer'
// import BlogHome from '../../components/blog/BlogHome'

// const index = () => {
//   return (
//     <div>
//         <Header />
//         <BlogHome />
//         <Footer />
//     </div>
//   )
// }

// export default index

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import Layouts from "../../layout/Layouts";

const Blog = ({ posts }) => {
  return (
    <Layouts>
      <div className="mt-5">
        {posts.map((post, index) => (
          <Link href={"/blog/" + post.slug} passHref key={index}>
            <div className="card mb-3 pointer" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{post.frontMatter.title}</h5>
                    <p className="card-text">{post.frontMatter.description}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        {post.frontMatter.date}
                      </small>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 m-auto">
                  <Image
                    src={post.frontMatter.thumbnailUrl}
                    className="img-fluid mt-1 rounded-start"
                    alt="thumbnail"
                    width={500}
                    height={400}
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layouts>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  console.log(posts, "posts");

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
