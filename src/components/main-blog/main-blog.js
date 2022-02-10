import React from "react";
import './main-blog.css';
import { Link } from "react-router-dom";
import { blogCards } from "./blog-cards";


export const MainBlog = () => {
    return (
        <section className="main-blog">
            <div className="container">
                <div className="main-blog-inner">
                    <div className="main-blog-top">
                        <h4 className="blog-title">LATEST FROM BLOG</h4>
                        <span className="blog-subtitle">SEE ALL</span>
                    </div>
                    <div className="main-blog-cards">
                        {blogCards.map((el) => {
                            return (
                                <Link to={`/${el.path}`} key={el.id} className="blog_card-link">
                                    <div className="blog_card">
                                        <img src={el.img} alt="blog-card" />
                                        <div className="blog-card-banner">
                                            <span className="blog-card-banner-title">{el.title}</span>
                                            <span className="blog-card-banner-text">{el.text}</span>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>

    )
}