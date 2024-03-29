import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whitelabel Checkout in NextJS 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/svg/logo.svg" />
      </head>
      <body className={dmSans.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
