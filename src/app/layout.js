import { Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"], 
  display:"swap"
});

export const metadata = {
  title: "Discount App",
  description: "Find the best deals and save more with Discount App",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${figtree.className}`}>
       
          <Navbar />
          {children}
          <Footer />
        
      </body>
    </html>
  );
}
