import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased container max-w-screen-2xl mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
