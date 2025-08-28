import { Area } from "@/lib/landscape/types";
import { getAreaById } from "@/lib/landscape/areas";

interface LandscapeAreasProps {
  data: Area[];
}

export function LandscapeAreas({ data }: LandscapeAreasProps) {
  return (
    <div className="w-full mx-auto">
      {/* Organize areas in a grid */}
      <div className="grid grid-flow-row grid-cols-2 grid-rows-4 gap-4">
        {/* Area developer-control-plane */}
        <div className="col-span-2 border border-violet-400 border-dashed bg-violet-50 p-4">
          <div className="flex gap-8">
            <p className="text-sm font-bold w-24">
              {getAreaById("developer-control-plane")?.name}
            </p>
            <div className="flex-1 border border-violet-200">Content</div>
          </div>
        </div>

        {/* Area integration-delivery-plane */}
        <div className="border border-violet-400 border-dashed bg-violet-50 p-4">
          <div className="flex gap-8">
            <p className="text-sm font-bold w-24">
              {getAreaById("integration-delivery-plane")?.name}
            </p>
            <div className="flex-1 border border-violet-200">Content</div>
          </div>
        </div>

        {/* Area resource-plane */}
        <div className="row-span-3 border border-violet-400 border-dashed bg-violet-50 p-4">
          <div className="flex flex-col gap-4">
            <div className="w-full mx-auto">
              <p className="text-sm font-bold text-center">
                {getAreaById("resource-plane")?.name}
              </p>
            </div>
            <div className="flex-1 border border-violet-200">Content</div>
          </div>
        </div>

        {/* Area observability-plane */}
        <div className="border border-violet-400 border-dashed bg-violet-50 p-4">
          <div className="flex gap-8">
            <p className="text-sm font-bold w-24">
              {getAreaById("observability-plane")?.name}
            </p>
            <div className="flex-1 border border-violet-200">Content</div>
          </div>
        </div>

        {/* Area security-plane */}
        <div className="border border-violet-400 border-dashed bg-violet-50 p-4">
          <div className="flex gap-8">
            <p className="text-sm font-bold w-24">
              {getAreaById("security-plane")?.name}
            </p>
            <div className="flex-1 border border-violet-200">Content</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandscapeAreas;
