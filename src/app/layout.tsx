import "./globals.css";
import Providers from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ height: "100dvh" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
