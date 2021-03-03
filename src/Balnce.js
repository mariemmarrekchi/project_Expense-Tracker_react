import React, { useContext } from 'react';
import { GlobalContext } from './Context/GlobalState';

export const Balance = () => {
    const { list } = useContext(GlobalContext);
    const prix = list.map(list => list.amount);
    console.log(list);
    const total = prix.reduce((acc, item) => (acc += item), 0).toFixed(1);
    return (

        <
        >

        <
        h2 id = "balance" > Your Balance < /h2>  <
        h4 > $ { total > 200 ? (total * 2.5) / 10 : total } < /h4> 

        <
        / >
    )
}