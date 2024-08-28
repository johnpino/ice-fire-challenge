import House from "@/components/House";
import Navigation from "@/components/Navigation";
import { getHouses } from "@/utils/getHouses";
import Link from "next/link";

export default async function Home({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const pageParam = searchParams.page
  const houses = await getHouses(pageParam)

  return (
    <main className="container mx-auto">
      <h1 className="font-bold text-6xl mb-4">Ice & Fire</h1>

      <section className="flex gap-2 flex-col">
        {houses.data.map((house: any) => {
          return <House key={house.name} name={house.name} sworMembers={house.swornMembers.map((member: any) => member.split('/').slice(-1)[0])} />
        })}
      </section>

      <Navigation first={houses.first} prev={houses.prev} next={houses.next} last={houses.last} current={pageParam ?? '1'} />

    </main>
  );
}
