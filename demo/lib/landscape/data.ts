import { LandscapeAreaContent } from "./types";

export function getAreaContentById(
  data: LandscapeAreaContent[],
  id: string
): LandscapeAreaContent | undefined {
  return data.find((areaContent) => areaContent.id === id);
}
