import { LandscapeData } from "@/lib/landscape/types";
import Areas from "./Areas";

interface LandscapeProps {
  data?: LandscapeData;
}

export function Landscape({ data: customerLandscapeData }: LandscapeProps) {
  return (
    <div className="w-full mx-auto">
      {/* Landscape Name */}
      <p className="text-xl font-bold maw-w-md text-center mb-4">
        {customerLandscapeData?.metadata.name}
      </p>

      {/* Landscape View */}
      <Areas data={customerLandscapeData?.areasContents || []} />

      {/* Landscape Metadata */}
      <div className="flex justify-between mx-2 mt-4 text-xs ">
        <p>{customerLandscapeData?.metadata.version}</p>
        <p>{customerLandscapeData?.metadata.lastUpdated}</p>
      </div>
    </div>
  );
}
