import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="w-full">
      <div className="container mx-auto p-4">
        <div>
          <span className="font-extrabold text-2xl">
            <Link href="/">Dev Stories</Link>
          </span>
        </div>
      </div>
    </header>
  );
};
