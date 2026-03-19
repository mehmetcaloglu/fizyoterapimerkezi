import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Fizyoterapist Kadir Temel",
  description:
    "Fzt. Kadir Temel Fizyoterapi Merkezi'nin KVKK Kişisel Verilerin Korunması Kanunu Aydınlatma Metni",
};

export default function KVKKLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
