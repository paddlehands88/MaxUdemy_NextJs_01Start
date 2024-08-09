import React from "react";

const BlogPostpage = ({ params }) => {
  return (
    <section>
      <h1>Blog Post Page</h1>
      <p>{params.slug}</p>
    </section>
  );
};

export default BlogPostpage;
