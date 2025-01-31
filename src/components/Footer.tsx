import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <div className="p-4 text-center text-sm text-gray-600">
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