import { Category } from "./types";

export interface Area {
  id: string;
  name: string;
  description: string;
  categories: Category[];
}

export const landscapeAreas: Area[] = [
  {
    id: "developer-control-plane",
    name: "Developer Control Plane",
    description: "",
    categories: [],
  },
  {
    id: "integration-delivery-plane",
    name: "Integration & Delivery Plane",
    description: "",
    categories: [],
  },
  {
    id: "observability-plane",
    name: "Observability Plane",
    description: "",
    categories: [],
  },
  {
    id: "security-plane",
    name: "Security Plane",
    description: "",
    categories: [],
  },
  {
    id: "resource-plane",
    name: "Resource Plane",
    description: "",
    categories: [],
  },
];

export function getAreaById(id: string): Area | undefined {
  return landscapeAreas.find((area) => area.id === id);
}

export function getAllAreas(): Area[] {
  return landscapeAreas;
}
