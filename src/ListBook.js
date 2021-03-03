import React, { useContext } from 'react';
export const ListBook = (props) => {

    return (

        <
        li key = { props.id } > { props.text } < span > { props.amount } < /span> 

        <
        button onClick = { null } >
        *
        <
        /button >  < /
        li >
    )

}