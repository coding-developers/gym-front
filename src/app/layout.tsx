import "./globals.css";
import { Montserrat } from "next/font/google";
import Providers from "./providers";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
  preload: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={montserrat.className} suppressHydrationWarning >
      <body suppressHydrationWarning >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
