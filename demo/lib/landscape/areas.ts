export interface LandscapeArea {
  id: string;
  name: string;
  description: string;
}

export const landscapeAreas: LandscapeArea[] = [
  {
    id: "developer-control-plane",
    name: "Developer Control Plane",
    description: "",
  },
  {
    id: "integration-delivery-plane",
    name: "Integration & Delivery Plane",
    description: "",
  },
  {
    id: "observability-plane",
    name: "Observability Plane",
    description: "",
  },
  {
    id: "security-plane",
    name: "Security Plane",
    description: "",
  },
  {
    id: "resource-plane",
    name: "Resource Plane",
    description: "",
  },
];

export function getAreaById(id: string): LandscapeArea | undefined {
  return landscapeAreas.find((area) => area.id === id);
}

export function getAllAreas(): LandscapeArea[] {
  return landscapeAreas;
}
