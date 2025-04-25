import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-black flex items-center justify-center p-6">
      <div className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} T21. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}

export default Footer;
