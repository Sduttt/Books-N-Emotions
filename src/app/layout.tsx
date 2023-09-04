import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

// components
import Notification from "@/components/Notification";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "./api/auth/AuthProvider";
import QueryProvider from "@/components/QueryProvider";

// react-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BooksNEmotions",
  description: "Buy books online at BooksNEmotions",

};

{/* <meta http-equiv="Content-Security-Policy" content="default-src *;
   img-src * 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' *;
   style-src  'self' 'unsafe-inline' *"></meta> */}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta http-equiv="Content-Security-Policy" content="default-src *; img-src * 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' *;
   style-src  'self' 'unsafe-inline' *" />
      </Head>

      <body className={inter.className}>
        <AuthProvider>
          <QueryProvider>
            <Notification />
            <Navbar />
            {children}
            <Footer />
            <ToastContainer position="bottom-right" autoClose={3000} />
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
