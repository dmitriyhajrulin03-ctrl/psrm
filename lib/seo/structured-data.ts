export function generateStructuredData(data: {
  type: string;
  [key: string]: unknown;
}) {
  return {
    "@context": "https://schema.org",
    "@type": data.type,
    ...data,
  };
}



