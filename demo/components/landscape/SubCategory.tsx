import { LandscapeSubcategory } from "@/lib/landscape/types";
import { Tool } from "./Tool";

interface SubCategoryProps {
  data: LandscapeSubcategory;
}

export function SubCategory({ data }: SubCategoryProps) {
  const subCategory = data;
  const tools = subCategory.tools;

  if (tools && tools.length > 0) {
    return (
      <div className="w-fit">
        {/* Subcategory Title */}
        <div className="bg-violet-300 p-2 rounded-t-md border border-violet-300">
          <p className="text-sm font-bold text-center">{subCategory.name}</p>
        </div>
        {/* Tools */}
        <div className="p-2 rounded-b-md border border-violet-300  bg-white">
          <ul className="flex flex-wrap gap-1 justify-center">
            {tools.map((tool) => (
              <li key={tool.id}>
                <Tool tool={tool} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default SubCategory;
