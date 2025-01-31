import "./globals.css";


export const metadata = {
  title: "Authentic Coffee & Roastery",
  description: "Simply Authentic, Simply Exceptional",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-bv" >{children}</body>
    </html>
  );
}
