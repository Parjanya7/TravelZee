// app/(home)/package-details/page.tsx
import PackageDetails from "@/components/PackageDetails";

export default function PackageDetailsPage({
  searchParams,
}: {
  searchParams: { id?: string };
}) {
  return <PackageDetails id={searchParams.id} />;
}
