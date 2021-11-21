type PersonListProps = {
    name: {
        first: string,
        last: string
    }[]
}

const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {
                props.name.map((person, i) => {
                    return <h2 key = {i}>{person.first} {person.last}</h2>
                })
            }
        </div>
    )
}

export default PersonList
