import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Linkedin, Github, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import blogPostsData from "../data/blogPostsData";
import {
  authorsData,
  DEFAULT_AUTHOR,
  authorUrl,
  authorId,
  personSchema,
} from "../data/authorsData";
import "./AuthorPage.css";

const SITE = "https://qllmsoft.com";


const absImage = (src) => {
  if (!src) return undefined;
  if (/^(https?:|data:)/.test(src)) return src;
  return `${SITE}${src}`;
};

const AuthorPage = () => {
  const { authorSlug } = useParams();
  const author = authorsData[authorSlug];

  if (!author) return <Navigate to="/blog" replace />;

  const posts = Object.entries(blogPostsData)
    .filter(([, p]) => (p.author || DEFAULT_AUTHOR) === authorSlug)
    .sort(([, a], [, b]) => new Date(b.date) - new Date(a.date));

  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": authorUrl(authorSlug),
    url: authorUrl(authorSlug),
    name: `${author.name} – Author at QllmSoft`,
    mainEntity: { "@id": authorId(authorSlug) },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: author.name,
        item: authorUrl(authorSlug),
      },
    ],
  };

  return (
    <main className="author-page">
      <SEO
        title={`${author.name} – ${author.jobTitle} at QllmSoft | Author`}
        description={`${author.bio} Read articles by ${author.name} on the QllmSoft blog.`}
        url={authorUrl(authorSlug)}
        image={absImage(author.image)}
        schema={profileSchema}
      />

      {/* Keep thin pages out of the index until the author has posts */}
      {posts.length === 0 && (
        <Helmet>
          <meta name="robots" content="noindex, follow" />
        </Helmet>
      )}

      {[personSchema(author), breadcrumbSchema].map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}

      {/* Hero */}
      <section className="author-hero">
        <div className="author-shapes" aria-hidden="true">
          <span className="shape shape--blob"></span>
          <span className="shape shape--ring"></span>
          <span className="shape shape--triangle"></span>
          <span className="shape shape--dots"></span>
          <span className="shape shape--square"></span>
        </div>

        <div className="container author-hero__inner">
          <div className="author-avatar">
            <img src={author.image} alt={author.name} width="160" height="160" />
          </div>

          <div className="author-hero__text">
            <p className="author-eyebrow">Author at QllmSoft</p>
            <h1>{author.name}</h1>
            <p className="author-hero__title">{author.jobTitle}</p>
            <p className="author-hero__bio">{author.bio}</p>

            <ul className="author-topics">
              {author.knowsAbout.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <div className="author-links">
              {author.linkedin && (
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer me"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
              )}
              {author.github && (
                <a
                  href={author.github}
                  target="_blank"
                  rel="noopener noreferrer me"
                >
                  <Github size={18} /> GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="container author-posts">
        <h2 className="author-posts__title">Articles by {author.name}</h2>

        {posts.length === 0 && <p>New articles coming soon.</p>}

        <div className="blog-grid">
          {posts.map(([slug, post]) => (
            <article className="blog-card" key={slug}>
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} loading="lazy" />
                <span className="blog-card-category">{post.category}</span>
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-title">
                  <Link to={`/blog/${slug}`}>{post.title}</Link>
                </h3>
                <p className="blog-card-description">{post.description}</p>
                <Link to={`/blog/${slug}`} className="blog-card-link">
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AuthorPage;