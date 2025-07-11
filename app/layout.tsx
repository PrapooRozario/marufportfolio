
import "./globals.css";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased container mx-auto`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
