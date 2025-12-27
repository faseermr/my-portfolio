import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes"; // import ThemeProvider

export const metadata = {
  title: "Faseer Ahmed | Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        {/* Wrap your app with ThemeProvider */}
        <ThemeProvider attribute="class">
          <Navbar />
          <main className="min-h-screen px-6 md:px-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
