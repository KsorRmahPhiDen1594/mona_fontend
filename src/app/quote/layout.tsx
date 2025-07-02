import { ReactNode } from "react";

interface QuoteLayoutProps {
  children: ReactNode;
}

export default function QuoteLayout({ children }: QuoteLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <main>{children}</main>
    </div>
  );
}