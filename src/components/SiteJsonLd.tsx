import { COMPANY_NAME, COMPANY_PHONE } from "@/lib/brand";
import { getSiteUrl, siteConfig } from "@/lib/site";

export function SiteJsonLd() {
  const url = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: COMPANY_NAME,
    description: siteConfig.description,
    url,
    image: `${url}${siteConfig.ogImagePath}`,
    telephone: COMPANY_PHONE,
    areaServed: "IN",
    serviceType: ["Architecture", "Interior Design", "Urban Design"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
