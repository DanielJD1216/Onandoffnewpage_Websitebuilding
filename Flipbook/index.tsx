import HTMLFlipBook from "react-pageflip";
import { Page0, Page1, Page2, Page3, Page4 } from "./Pages";

export default function Flipbook() {
  const totalPages = 5;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-brand-ivory">
      <HTMLFlipBook width={1000} height={600} className="shadow-2xl">
        <Page0 isActive={true} />
        <Page1 isActive={false} />
        <Page2 isActive={false} />
        <Page3 isActive={false} />
        <Page4 isActive={false} />
      </HTMLFlipBook>

      {/* Progress Indicator */}
      <div className="progress-indicator fixed bottom-6 bg-brand-gold text-brand-ivory px-4 py-2 rounded-full shadow-lg text-sm font-bold">
        Page 1 of {totalPages}
      </div>
    </div>
  );
}
