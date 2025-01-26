import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 text-center text-sm text-gray-600">
      developed with <Heart className="inline h-4 w-4 text-red-500 mx-1" /> by{" "}
      <a
        href="https://twitter.com/wajih"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium underline hover:text-gray-800 transition-colors"
      >
        WAJIH
      </a>
    </div>
  );
}
