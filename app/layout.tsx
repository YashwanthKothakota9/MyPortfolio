import Header from "@/components/header";
import "./globals.css";
import { Poppins } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  openGraph: {
    title: "Yashwanth | Personal Portfolio",
    description: "Yashwanth is a full stack developer looking for remote work.",
    url: "",
    siteName: "Yashwanth | Personal Portfolio",
    images: [
      {
        url: "/portfolio.png",
        width: 800,
        height: 600,
      },
      {
        url: "/portfolio_dark.png",
        width: 800,
        height: 600,
        alt: "My custom dark alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${poppins.className} bg-teal-50 text-teal-950 relative pt-28 sm:pt-36 dark:bg-slate-900 dark:text-sky-200 dark:text-opacity-90`}
      >
        <div className="bg-emerald-200 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-cyan-900"></div>
        <div className="bg-cyan-200 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-sky-900"></div>

        <Toaster position="top-right" />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
