import ActivityDetailClient from "./ActivityDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ActivityDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <ActivityDetailClient id={resolvedParams.id} />;
}
