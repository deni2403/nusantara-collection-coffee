import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Authentic Coffee & Roastery",
  description: "Simply Authentic, Simply Exceptional",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16831151161"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16831151161');
          `}
        </Script>
      </head>
      <body className="font-bv">{children}</body>
    </html>
  );
}
