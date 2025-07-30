import { ReactNode } from "react";
import "../styles/main.css";
import Header from "../components/Header";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import "../styles/dashboard/styles.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <div className="layout">
          <Aside />
          <div className="container">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
