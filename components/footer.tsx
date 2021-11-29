import React from "react";

export const Footer = () => {
  return (
    <footer className={`bg-black text-white`}>
      <div className="max-w-screen-lg md:px-12 p-6 mx-auto flex">
        <p className="text-xs flex-1 mt-4">
          Made with love by Protocol Labs
        </p>
        <img src="/filecoin_ipfs_logos.png" className="h-12" />
      </div>
    </footer>
  );
};
