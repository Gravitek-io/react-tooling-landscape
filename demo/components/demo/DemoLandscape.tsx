import { ToolingLandscape } from "@/components/landscape/ToolingLandscape";
import { LandscapeData } from "@/lib/landscape/types";
import data from "@/data/landscape.json";

export function DemoLandscape() {
  const landscapeData: LandscapeData = data as LandscapeData;

  return (
    <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
      {/* Landscape Component */}
      <ToolingLandscape data={landscapeData} />
    </main>
  );
}
