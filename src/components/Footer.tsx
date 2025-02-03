import { Heart } from "lucide-react";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    console.log("Footer component mounted");
  }, []);

  return (
    <footer className="w-full p-4 text-center text-sm bg-gradient-to-r from-[#6767EA] to-[#60A5FA]">
      <div className="opacity-30 select-none hover:opacity-70 transition-opacity duration-300 text-black">
        <span className="font-medium tracking-wider">
          developed with <Heart className="inline h-4 w-4 text-red-500/70 mx-1" /> by{" "}
          <a
            href="https://x.com/WajihJmil"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:text-primary transition-colors text-black"
          >
            WAJIH
          </a>
        </span>
      </div>
    </footer>
  );
}