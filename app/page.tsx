"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FormLogin from "./components/FormLogin";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "var(--bg-primary)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontSize: "2rem",
              zIndex: 9999,
            }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: 16, animation: "spin 1s linear infinite" }}
            >
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="#fff"
                strokeWidth="4"
                strokeDasharray="31.4 31.4"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {!showSplash && (
        <>
          <FormLogin />
        </>
      )}
    </>
  );
}
