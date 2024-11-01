import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`w-screen min-h-screen h-auto no-scrollbar`}>
        {children}
      </body>
    </html>
  );
}
