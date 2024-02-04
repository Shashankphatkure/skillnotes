import "@/styles/globals.css";

import { Metadata } from "next";
import { ReactNode } from "react";
import Providers from "./providers";

const title =
  "Skillconotes - editor with AI-powered autocompletions";
const description =
  "Skillconotes is an editor with AI-powered autocompletions. It helps you write better code faster. It's like having an extra pair of hands.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "@steventey",
  },
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
