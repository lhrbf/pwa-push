"use client";
import Profile from "./Profile";
import "../styles/header/header.css";
import LogoutButton from "./LogoutButton";

export default function Header() {
  return (
    <header>
      <Profile />
      <LogoutButton />
    </header>
  );
}