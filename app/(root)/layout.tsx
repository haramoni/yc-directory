import React from "react";
import { NavBar } from "../components/NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="font-work-sans">
      <NavBar />
      {children}
    </main>
  );
}
