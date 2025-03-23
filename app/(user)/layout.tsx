import type { Metadata } from "next";
import "../globals.css"; // Ensure this is the correct path to your global styles
import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import { ReduxProvider } from "@/redux/Provider";

export const metadata: Metadata = {
  title: "x-promo",
  description: "x-promo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` font-montserrat `}>
        <ReduxProvider>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
