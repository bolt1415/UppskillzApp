import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full p-4 mt-8 text-center text-sm text-gray-600 static bottom-0">
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
  );
}