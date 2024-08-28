import getSwormMember from "@/utils/getSwornMember"

type SwornMemberProps = {
    id: string
}

const SwornMember = async (props: SwornMemberProps) => {
    const swornMember = await getSwormMember(props.id)

    console.log(swornMember)
    return (
        <div>
            <h3>{swornMember.name}</h3>
            <span>{swornMember.died ? `Death: ${swornMember.died}` : 'Alive'}</span>
        </div>
    )
}

export default SwornMember