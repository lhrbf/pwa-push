import { ReactNode } from "react";
import "./styles/main.css";
import Header from "../components/Header";
import Aside from "../components/Aside";
import Footer from "../components/Footer";


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
