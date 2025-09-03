import React from "react";

import { useNavigate } from "react-router-dom";

import BlogItemText from "../BlogItemText";
import EditButtons from "../EditButtons";

import PropTypes from "prop-types";

import "./index.css";

export default function BlogItem({
  index,
  blog,
  imageOrientation,
  onBlogEdit,
  onBlogDelete,
}) {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  
  // Debug: Log the blog object to see its structure
  console.log("BlogItem blog object:", blog);
  console.log("Blog ID:", blog.id, "Blog _id:", blog._id);
  console.log("Blog object keys:", Object.keys(blog));
  console.log("Full blog object:", JSON.stringify(blog, null, 2));
  const navigateToBlog = () => {
    if ((!user && !user?.token) || (!onBlogEdit && !onBlogDelete)) {
      navigate(`/blog/${blog.id || blog._id}`);
    }
  };

  const EditButtonsContainer = () => {
    return (
      <EditButtons
        onEdit={() => onBlogEdit(blog)}
        onDelete={() => onBlogDelete(blog)}
        onNavigate={() => navigate(`/blog/${blog.id || blog._id}`)}
      />
    );
  };
  
  if (imageOrientation === "top") {
    return (
      <div key={index} className="card-1" onClick={navigateToBlog}>
        <img src={blog.image} className="card-img-top" alt="..." />
        <div className="card-text-bottom">
          <BlogItemText blogPost={blog} headerFontSize="20px" />
          {user && user.token && onBlogEdit && onBlogDelete ? (
            <EditButtonsContainer />
          ) : null}
        </div>
      </div>
    );
  } else {
    return (
      <div key={index} className="card-2" onClick={navigateToBlog}>
        <img src={blog.image} className="card-img-left" alt="..." />
        <div className="card-text-right">
          <BlogItemText blogPost={blog} headerFontSize="20px" />
          {user && user.token && onBlogEdit && onBlogDelete ? (
            <EditButtonsContainer />
          ) : null}
        </div>
      </div>
    );
  }
}

BlogItem.propTypes = {
  index: PropTypes.number.isRequired,
  blog: PropTypes.object.isRequired,
  imageOrientation: PropTypes.string.isRequired,
  onBlogEdit: PropTypes.func,
  onBlogDelete: PropTypes.func,
};
