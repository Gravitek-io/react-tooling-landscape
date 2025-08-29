import { ToolListView } from "@/components/landscape/ToolListView";
import { LandscapeData } from "@/lib/landscape/types";
import data from "@/data/landscape.json";

export function DemoList() {
  const landscapeData: LandscapeData = data as LandscapeData;

  return (
    <main className="w-full max-w-screen-2xl mx-auto min-h-screen bg-gray-50 pb-12">
      <ToolListView data={landscapeData} />
    </main>
  );
}
