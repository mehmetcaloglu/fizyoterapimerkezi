import { services } from "@/data/mockData";
import ServiceDetailClient from "./ServiceDetailClient";

// Hostinger statik export için gerekli
export function generateStaticParams() {
  return services.map((s) => ({ id: s.id }));
}

export default function ServiceDetailPage() {
  return <ServiceDetailClient />;
}
