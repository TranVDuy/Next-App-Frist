import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "",
  };
  
  export default function AboutLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <section>
            {children}
        </section>
    );
  }