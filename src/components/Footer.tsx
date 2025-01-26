import { Heart, Underline } from "lucide-react";

export default function Footer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-sm text-center text-sm text-gray-600">
      developed with <Heart className="inline h-4 w-4 text-red-500 mx-1" /> by{" "}
      <span className="font-medium">
        WAJIH <Underline className="inline h-4 w-4 ml-1" />
      </span>
    </div>
  );
}