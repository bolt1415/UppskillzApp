import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full p-4 text-center text-sm text-gray-600 fixed bottom-0 z-10">
      <div className="relative bottom-0 pb-4 md:pb-0">
        developed with <Heart className="inline h-4 w-4 text-red-500 mx-1" /> by{" "}
        <a
          href="https://x.com/WajihJmil"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline hover:text-gray-800 transition-colors"
        >
          WAJIH
        </a>
      </div>
    </div>
  );
}