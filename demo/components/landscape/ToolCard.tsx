import Link from "next/link";
import Image from "next/image";
import { ToolWithContext } from "@/lib/landscape/toolUtils";
import { getStatusBadgeColor } from "@/lib/landscape/searchUtils";

interface ToolCardProps {
  tool: ToolWithContext;
}

export function ToolCard({ tool }: ToolCardProps) {
  const statusColor = getStatusBadgeColor(tool.status);

  return (
    <Link href={tool.url || "#"} target="_blank" rel="noopener noreferrer">
      <div className="w-72 bg-white rounded-lg border border-gray-200 p-4 pb-2 hover:shadow-lg hover:translate-y-[-1px] transition-all duration-300 hover:border-violet-200">
        {/* Header with Logo, Name and Status */}
        <div className="flex justify-between gap-2 mb-4 w-full">
          {/* Tool Logo */}
          <div className="flex items-center gap-2">
            {tool.logo ? (
              <Image
                src={tool.logo}
                alt={tool.name}
                width={36}
                height={36}
                className="size-9 object-contain"
              />
            ) : (
              <div className="size-9 bg-gray-100 rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                  />
                </svg>
              </div>
            )}
            <h3 className="font-semibold text-gray-900 text-base line-clamp-2 leading-tight mb-1">
              {tool.name}
            </h3>
          </div>

          <div className="flex items-center">
            {tool.status && (
              <span
                className={`inline-flex items-center px-1.5 py-0.5 text-xs font-medium border rounded ${statusColor}`}
              >
                {tool.status}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        {tool.description && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">
            {tool.description}
          </p>
        )}

        {/* Category */}
        <div className="text-xs text-gray-500 mb-2 truncate">
          <span>{tool.categoryName}</span>
          {tool.subcategoryName && (
            <>
              <span className="mx-1">•</span>
              <span>{tool.subcategoryName}</span>
            </>
          )}
        </div>

        {/* Tags - Show only first 3 */}
        {tool.tags && tool.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {tool.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded truncate"
              >
                {tag}
              </span>
            ))}
            {tool.tags.length > 3 && (
              <span className="text-xs text-gray-400 self-center">
                +{tool.tags.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
