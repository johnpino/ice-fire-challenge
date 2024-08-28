import SwornMember from "./SwornMember";
import { HomeIcon } from '@heroicons/react/24/solid'

type HouseProps = {
    name: string;
    sworMembers: Array<string>
}

const House = (props: HouseProps) => {

    return (
        <article className="bg-slate-900 p-4">
            <h2 className="mb-2 uppercase font-bold flex gap-2 items-center"><HomeIcon className="size-4" />{props.name}</h2>
            {props.sworMembers.length
                ?
                <div className="grid auto-rows-[1fr] grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-4 ">
                    {props.sworMembers.map(member => <SwornMember key={member} id={member} />)}
                </div>
                :
                <div className="text-sm italic text-gray-400">
                    This house has no sworn members
                </div>}
        </article>
    )
}

export default House