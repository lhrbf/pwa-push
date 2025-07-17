import { ReactNode } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/main.css";
import Aside from "./components/Aside";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Push Notifications</title>
      </head>
      <body>
        <Header />
        <main>
          <div className="container">
            <Aside />
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
