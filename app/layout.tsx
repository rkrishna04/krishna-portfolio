import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krishna Rathwa — Data & AI Developer",
  description:
    "Personal portfolio of Krishna Rathwa — MCA (AI) graduate specializing in Data Analytics, Business Intelligence, Python, SQL, and full-stack development. Inspired by Indian heritage design.",
  keywords: [
    "Krishna Rathwa",
    "Data Analytics",
    "AI Developer",
    "Python",
    "SQL",
    "Power BI",
    "Full Stack",
    "Portfolio",
  ],
  authors: [{ name: "Krishna Rathwa" }],
  openGraph: {
    title: "Krishna Rathwa — Data & AI Developer",
    description:
      "MCA (AI) graduate specializing in Data Analytics, Business Intelligence & Full-Stack Development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
