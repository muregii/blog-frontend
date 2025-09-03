import React from "react";
import PropTypes from "prop-types";

import Categories from "../Categories";
import "./index.css";

export default function BlogItemText({ blogPost, headerFontSize }) {
  console.log("BlogItemText blogPost:", blogPost); // Add this line
  return (
    <div>
      <div style={{ display: "flex" }}>
        <p className="date-author-text">
          {blogPost.author?.firstName || 'Unknown'} {blogPost.author?.lastName || 'Author'}
        </p>
        <div className="dot-divider"></div>
        <p className="date-author-text">
          {blogPost.createdAt.substring(0, 10)}
        </p>
      </div>
      <p
        style={{
          fontSize: headerFontSize,
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        {blogPost.title}
      </p>
      <p style={{ fontSize: "16px", color: "#667085", textAlign: "left" }}>
        {blogPost.content && blogPost.content.length > 0 
          ? (typeof blogPost.content[0] === 'string' 
              ? blogPost.content[0].substring(0, 100) + '...'
              : JSON.stringify(blogPost.content[0]).substring(0, 100) + '...'
            )
          : 'No content available'
        }
      </p>
      <Categories blogPost={blogPost?.categories} />
    </div>
  );
}
BlogItemText.propTypes = {
  blogPost: PropTypes.object.isRequired,
  headerFontSize: PropTypes.string.isRequired,
};
