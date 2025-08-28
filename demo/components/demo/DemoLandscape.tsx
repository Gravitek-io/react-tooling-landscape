import { Landscape } from "@/components/landscape/Landscape";
import { LandscapeData } from "@/lib/landscape/types";
import data from "@/data/landscape.json";

export function DemoLandscape() {
  const landscapeData: LandscapeData = data as LandscapeData;

  return (
    <main className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 xl:px-20 py-8 pb-20">
      {/* Landscape Component */}
      <Landscape data={landscapeData} />
    </main>
  );
}
