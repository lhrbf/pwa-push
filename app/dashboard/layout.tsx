import { ReactNode } from "react";
import "../styles/main.css";
import Header from "../components/Header";
import Aside from "../components/Aside";
import Footer from "../components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <Aside />
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  );
}
