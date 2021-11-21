import React from 'react'

type personProps = {
    name: {
        fname: string,
        lname: string
    }
}

const Person = (props: personProps) => {
    return (
        <div>
            {props.name.fname} {props.name.lname}
        </div>
    )
}

export default Person
