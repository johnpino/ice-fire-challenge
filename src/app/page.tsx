import { getHouses } from "@/utils/getHouses";
import Link from "next/link";

export default async function Home({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const pageParam = searchParams.page
  const houses = await getHouses(pageParam)

  return (
    <main>
      {houses.data.map((house: any) => {
        return <div key={house.name}>{house.name}</div>
      })}

      {houses.first && <Link href={{ pathname: '/', query: { page: houses.first } }}>First</Link>}
      {houses.prev && <Link href={{ pathname: '/', query: { page: houses.prev } }}>Prev</Link>}
      {houses.next && <Link href={{ pathname: '/', query: { page: houses.next } }}>Next</Link>}
      {houses.last && <Link href={{ pathname: '/', query: { page: houses.last } }}>Last</Link>}
    </main>
  );
}
