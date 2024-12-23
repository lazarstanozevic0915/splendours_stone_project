// import "./globals.css";
// import { Raleway, Montserrat } from "next/font/google";

// const raleway = Raleway({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-raleway",
// });

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["300", "600"],
//   variable: "--font-montserrat",
// });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${raleway.variable} ${montserrat.variable}`}>
//         {children}
//       </body>
//     </html>
//   );
// }

// import "./globals.css";
// import { Montserrat } from "next/font/google";
// import localFont from "next/font/local";

// // Define Montserrat
// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["300", "600"],
//   variable: "--font-montserrat",
// });

// // Define Chronicle Display using local fonts
// const chronicleDisplay = localFont({
//   src: [
//     {
//       path: "./fonts/ChronicleDisplay-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./fonts/ChronicleDisplay-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-chronicle-display",
// });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${montserrat.variable} ${chronicleDisplay.variable}`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }


import "./globals.css";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Providers from "./providers"; // Import the ThemeProvider component

// Define Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
});

// Define Chronicle Display using local fonts
const chronicleDisplay = localFont({
  src: [
    // {
    //   path: "./fonts/ChronicleDisplay-Regular.woff2",
    //   weight: "400",
    //   style: "normal",
    // },
    {
      path: "./fonts/Chronicle Display Light Italic.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Chronicle Display Roman.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Chronicle Display Black.woff2",
      weight: "500",
      style: "normal",
    },
    // {
    //   path: "./fonts/ChronicleDisplay-Bold.woff2",
    //   weight: "700",
    //   style: "normal",
    // },
    {
      path: "./fonts/Chronicle Display Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-chronicle-display",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${chronicleDisplay.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

// 'use client'

// import Providers from "./providers"; // Import your theme provider

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <Providers>{children}</Providers>
//       </body>
//     </html>
//   );
// }



