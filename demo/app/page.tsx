import { DemoHeader } from "@/components/demo/DemoHeader";
import { DemoLandscape } from "@/components/demo/DemoLandscape";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DemoHeader />
      <DemoLandscape />
    </div>
  );
}
