import { useEffect } from "react";

<SEO
  title="Home | Mendi Stephen & Margaret Chuo Memorial Foundation"
  description="Honoring a legacy of service through education support, community development, and meaningful impact."
/>


export default function SEO({ title, description }) {
  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}
