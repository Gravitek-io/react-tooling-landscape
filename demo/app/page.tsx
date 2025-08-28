import { DemoHeader } from "@/components/demo/DemoHeader";
import { DemoLandscape } from "@/components/demo/DemoLandscape";
import { ScreenshotHelper } from "@/components/demo/ScreenshotHelper";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DemoHeader />
      <DemoLandscape />
      <ScreenshotHelper />
    </div>
  );
}
