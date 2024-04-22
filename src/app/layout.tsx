import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
// import { Navbar } from "@/components/component/Navbar";
// import { Footer } from "@/components/component/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linux Club",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Navbar /> */}
      <body className={inter.className}>{children}</body>
      {/* <Footer /> */}
    </html>
  );
}
