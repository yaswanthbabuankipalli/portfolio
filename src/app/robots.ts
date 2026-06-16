import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://yaswanth-babu-ankipalli-portfolio.netlify.app/sitemap.xml",
  };
}
