import Link from "next/link";
import { notFound } from "next/navigation";

export default async function MenuId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (id !== "kitfo" && id !== "shiro") {
    notFound();
  }

  return (
    <div>
      <p>Dish Id: {id}</p>

      <Link href="/menu/kitfo">Kitfo</Link>
      <Link href="/menu/shiro">Shiro</Link>
    </div>
  );
}