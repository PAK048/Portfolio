import { Loader } from "lucide-react";

export default function loadingPage() {
  return (
    <div className="inset-0 flex items-center justify-center mb-[20px]">
      <Loader className="animate-spin text-gray-500" size={100} />
    </div>
  );
}
