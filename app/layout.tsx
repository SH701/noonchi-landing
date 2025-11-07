import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noonchi Landing",
  description: "Noonchi Landing Page",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
