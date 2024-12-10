import localFont from "next/font/local";
import "./globals.css";
import HeaderTop from "./components/HeaderTop";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "MyTradingReport.com",
  description: "MyTradingReport.com",
  keywords:"Free, MyTradingReports,Free Trading,report",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
    <HeaderTop/>
        {children}
      </body>
    </html>
  );
}
