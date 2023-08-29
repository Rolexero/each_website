import "./globals.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/Footer";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Elegance Allied Chemicals and Paints",
  description: "Chemicals, Paints, house painting, allied chemicals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full">
        {" "}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
