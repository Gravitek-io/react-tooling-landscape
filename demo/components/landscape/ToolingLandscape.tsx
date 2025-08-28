import { LandscapeData } from "@/lib/landscape/types";
import LandscapeAreas from "./LandscapeAreas";

interface ToolingLandscapeProps {
  data?: LandscapeData;
}

export function ToolingLandscape({
  data: providedData,
}: ToolingLandscapeProps) {
  return (
    <div className="w-full mx-auto">
      {/* Landscape Name */}
      <p className="text-xl font-bold maw-w-md text-center mb-4">
        {providedData?.metadata.name}
      </p>

      {/* Landscape View */}
      <LandscapeAreas data={providedData?.areas || []} />

      {/* Landscape Metadata */}
      <div className="flex justify-between mx-2 mt-4 text-xs ">
        <p>{providedData?.metadata.version}</p>
        <p>{providedData?.metadata.lastUpdated}</p>
      </div>
    </div>
  );
}
