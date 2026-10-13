import profileicon from "../assets/profileIconn.jpg";
const SITE_URL = "https://qllmsoft.com";

export const DEFAULT_AUTHOR = "zain-ul-abedin";

export const authorsData = {
  "zain-ul-abedin": {
  slug: "zain-ul-abedin",
  name: "Zain Ul Abedin",
  jobTitle: "Founder & CEO",
  image: profileicon,
  bio: "Zain is the founder and CEO of QllmSoft. He leads the engineering team and writes technical guides on Artificial Intelligence, ASP.NET Core, C#, APIs, web development and software architecture.",
  knowsAbout: ["Artificial Intelligence", "ASP.NET Core", "C#", "Web Development", "API Development", "Software Architecture"],
  linkedin: "https://www.linkedin.com/in/zain-ul-abedin-b09a613b/",
  github: "https://github.com/zain33",
},
"mahnoor-fatima": {
  slug: "mahnoor-fatima",
  name: "Mahnoor Fatima",
  jobTitle: "SEO & Web Developer",
  image: profileicon,
  bio: "Mahnoor is an SEO  and web developer at QllmSoft. She writes technical guides on Artificial Intelligence, ASP.NET Core, C#, React and web development, and shares what she learns from building real projects.",
  knowsAbout: ["Artificial Intelligence", "ASP.NET Core", "C#", "React", "Web Development", "API Development", "SEO"],
  linkedin: "https://www.linkedin.com/in/mahnoorfatima313/",
  github: "https://github.com/MahnoorFatima313",
},
"ali-ilyas": {
  slug: "ali-ilyas",
  name: "Ali Ilyas",
  jobTitle: "Digital Marketing Lead",
  image: profileicon,
  bio: "Ali leads the digital marketing team at QllmSoft. He writes about digital marketing strategy, lead generation, email marketing and growing B2B software brands online.",
  knowsAbout: ["Digital Marketing", "B2B Lead Generation", "Email Marketing", "Marketing Strategy"],
  linkedin: "https://www.linkedin.com/in/ali-elyas-299057336/",
  github: "https://github.com/AliElyas4517",
},
};

export const authorUrl = (slug) => `${SITE_URL}/author/${slug}`;
export const authorId = (slug) => `${authorUrl(slug)}#person`;
const abs = (src) =>
  !src ? undefined : /^(https?:|data:)/.test(src) ? src : `${SITE_URL}${src}`;


export const personSchema = (a) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": authorId(a.slug),
  name: a.name,
  url: authorUrl(a.slug),
  image: abs(a.image),
  jobTitle: a.jobTitle,
  description: a.bio,
  worksFor: { "@type": "Organization", name: "QllmSoft", url: SITE_URL },
  knowsAbout: a.knowsAbout,
  sameAs: [a.linkedin, a.github].filter(Boolean),
});


export const articleAuthorSchema = (slug) => {
  const a = authorsData[slug] || authorsData[DEFAULT_AUTHOR];
  return {
    "@type": "Person",
    "@id": authorId(a.slug),
    name: a.name,
    url: authorUrl(a.slug),
    sameAs: [a.linkedin, a.github].filter(Boolean),
  };
};