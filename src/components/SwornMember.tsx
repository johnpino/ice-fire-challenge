import getSwornMember from "@/utils/getSwornMember"

type SwornMemberProps = {
    id: string
}

const SwornMember = async (props: SwornMemberProps) => {
    const swornMember = await getSwornMember(props.id)

    return (
        <div className={`p-2 rounded-sm ${swornMember.died ? 'bg-slate-800 text-gray-400' : 'bg-slate-700'}`}>
            <h3 className="font-bold uppercase text-sm">{swornMember.name}</h3>
            <span className={`text-xs ${swornMember.died ? '' : 'text-green-600'}`}>{swornMember.died ? `Death: ${swornMember.died}` : 'Alive'}</span>
        </div>
    )
}

export default SwornMember