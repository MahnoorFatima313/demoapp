import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Calendar, ArrowLeft, User, Tag } from "lucide-react";
import blogPostsData from "../data/blogPostsData";
import "./BlogArticle.css";
import SEO from "../components/SEO";
import {
  authorsData,
  DEFAULT_AUTHOR,
  articleAuthorSchema,
} from "../data/authorsData";
import { ArticleServiceLink } from "../components/RelatedReading";

const SectionListItem = ({ text }) => <li>{text}</li>;

const SectionParagraph = ({ text }) => {
  const isWorkflow =
    typeof text === "string" &&
    text.includes("Plan → Code → Test → Build → Deploy → Monitor");

  if (!isWorkflow) {
    return <p>{text}</p>;
  }

  const steps = text.split("→").map((s) => s.trim());

  return (
    <div className="workflow-inline">
      {steps.map((step) => (
        <span key={step} className="workflow-chip">
          {step}
        </span>
      ))}
    </div>
  );
};

const BlogSection = ({ heading, paragraphs, list, html, table, detailedList }) => (
  <div className="blog-article-section">
    {heading && <h2>{heading}</h2>}

    {html && <div dangerouslySetInnerHTML={{ __html: html }} />}

    {!html && (
      <>
        {paragraphs &&
          paragraphs.map((p, i) => <SectionParagraph key={i} text={p} />)}

        {detailedList && (
          <div
            className="detailed-blog-list"
            style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}
          >
            {detailedList.map((item, itemIdx) => (
              <div
                key={itemIdx}
                className="detailed-blog-card"
                style={{
                  padding: "15px",
                  background: "#f9f9f9",
                  borderRadius: "8px",
                  marginBottom: "15px",
                  borderLeft: "4px solid #0066cc",
                }}
              >
                <h3 style={{ margin: "0 0 5px 0", color: "#111" }}>{item.name}</h3>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#666",
                    fontWeight: "bold",
                    margin: "0 0 8px 0",
                  }}
                >
                  HUB: {item.hub}
                </p>
                <p style={{ margin: "0 0 8px 0", fontSize: "14px" }}>
                  <strong>Specialties:</strong> {item.specialties}
                </p>
                <p
                  style={{
                    fontStyle: "italic",
                    color: "#444",
                    margin: "0",
                    background: "#fff",
                    padding: "10px",
                    borderRadius: "4px",
                  }}
                >
                  "{item.insight}"
                </p>
              </div>
            ))}
          </div>
        )}

        {list && (
          <ul className="blog-article-list">
            {list.map((item, i) => (
              <SectionListItem key={i} text={item} />
            ))}
          </ul>
        )}
      </>
    )}

    {table && (
      <div className="blog-table-wrapper">
        <table className="blog-table">
          <thead>
            <tr>
              {table.headers.map((header, i) => (
                <th key={i}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
);

const BlogArticle = () => {
  const { slug } = useParams();
  const post = blogPostsData[slug];

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const SITE = "https://qllmsoft.com";
  const abs = (src) =>
    !src ? undefined : /^(https?:|data:)/.test(src) ? src : `${SITE}${src}`;

  const authorSlug = post.author || DEFAULT_AUTHOR;
  const author = authorsData[authorSlug] || authorsData[DEFAULT_AUTHOR];

  const schemas = (post.schemas || []).map((s) =>
    ["Article", "TechArticle"].includes(s["@type"])
      ? {
          ...s,
          author: articleAuthorSchema(authorSlug),
          image: [abs(post.image), abs(post.secondaryImage)].filter(Boolean),
        }
      : s
  );

  const sections = post.sections || [];

  return (
    <main
      className={`blog-article-page${
        slug === "role-based-vs-policy-based-authorization-asp-net-core"
          ? " blog-article-page--role-policy"
          : ""
      }`}
    >
      <SEO
        title={post.seoTitle || post.title}
        description={post.description}
        url={post.canonicalUrl}
        image={abs(post.image)}
        schema={schemas[0]}
      />

      {schemas.slice(1).map((additionalSchema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(additionalSchema)}
        </script>
      ))}

      {/* Hero Section */}
      <section className="blog-article-hero">
        <div className="container">
          <Link to="/blog" className="back-to-blog">
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
          <div className="blog-article-meta">
            <span className="blog-article-category">
              <Tag size={14} />
              {post.category}
            </span>
            <span className="blog-article-date">
              <Calendar size={14} />
              {post.date}
            </span>
            <span className="blog-article-author">
              <User size={14} />
              <Link to={`/author/${author.slug}`} rel="author">
                {author.name}
              </Link>
            </span>
          </div>
          <h1>{post.title}</h1>
          <p className="blog-article-description">{post.description}</p>
        </div>
      </section>

      {/* Article Content */}
      <section className="blog-article-content">
        <div className="container">
          <div className="blog-article-layout">
            {/* Main Content */}
            <article className="blog-article-main">
              {sections[0] && <BlogSection {...sections[0]} />}

              {/* SECOND IMAGE */}
              {post.secondaryImage && (
                <figure className="blog-inline-editorial-image">
                  <img
                    src={post.secondaryImage}
                    alt={post.secondaryImageMeta?.alt || post.title}
                    loading="lazy"
                    className="blog-inline-editorial-image__img"
                  />

                  {post.secondaryImageMeta?.caption && (
                    <figcaption className="editorial-caption">
                      {post.secondaryImageMeta.caption}
                    </figcaption>
                  )}
                </figure>
              )}

              {sections.slice(1).map((section, index) => (
                <BlogSection key={index} {...section} />
              ))}

              <ArticleServiceLink slug={slug} />

              {/* Author box */}
              <aside className="author-box">
                <img
                  src={author.image}
                  alt={author.name}
                  width="72"
                  height="72"
                  loading="lazy"
                />
                <div>
                  <p className="author-box__label">Written by</p>
                  <h3>
                    <Link to={`/author/${author.slug}`} rel="author">
                      {author.name}
                    </Link>
                  </h3>
                  <p className="author-box__title">{author.jobTitle}, QllmSoft</p>
                  <p>{author.bio}</p>
                </div>
              </aside>
            </article>

            {/* Sidebar */}
            <aside className="blog-article-sidebar">
              <div className="sidebar-image">
                <img src={post.image} alt={post.title} loading="lazy" />
              </div>

              <div className="sidebar-cta">
                <h3>Ready to Start Your Project?</h3>
                <p>
                  Let us discuss how QllmSoft can help transform your business
                  with custom software solutions.
                </p>
                <Link to="/contact" className="btn btn-primary">
                  Get Free Quote
                </Link>
              </div>

              <div className="sidebar-contact">
                <h4>Quick Contact</h4>
                <p>
                  <strong>Email:</strong> qllmsoft@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong> +92 334 8229288
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="blog-article-cta">
        <div className="container">
          <h2>Need Expert Software Development?</h2>
          <p>
            Partner with QllmSoft for reliable, scalable, and innovative
            solutions.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
};

export default BlogArticle;