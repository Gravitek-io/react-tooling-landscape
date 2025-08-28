import { LandscapeAreaContent } from "@/lib/landscape/types";
import Category from "./Category";

interface AreaContentProps {
  data: LandscapeAreaContent | undefined;
}

export function AreaContent({ data }: AreaContentProps) {
  const customerAreaContent = data;

  if (customerAreaContent && customerAreaContent.categories.length > 0) {
    return (
      <div className="flex flex-wrap gap-2 justify-center">
        {customerAreaContent.categories.map((category) => (
          <Category key={category.id} data={category} />
        ))}
      </div>
    );
  }
}

export default AreaContent;
