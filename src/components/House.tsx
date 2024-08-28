import SwornMember from "./SwornMember";

type HouseProps = {
    name: string;
    sworMembers: Array<string>
}

const House = (props: HouseProps) => {

    return (
        <div>
            <h2>{props.name}</h2>
            {props.sworMembers.length
                ? props.sworMembers.map(member => <SwornMember key={member} id={member}/>) :
                <div>
                    This house has no sworn members
                </div>}

        </div>
    )
}

export default House