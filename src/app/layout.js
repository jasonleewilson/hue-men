import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "hue-men.com",
  description: "hue-men.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <GoogleTagManager gtmId='GTM-WXFP2FT5' />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
