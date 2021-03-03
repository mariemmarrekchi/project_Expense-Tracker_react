import React, { useState, useContext } from 'react';
import { GlobalContext } from './Context/GlobalState'
export const Add = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { Add } = useContext(GlobalContext)
    const AddBokk = e => {
        e.preventDefault();

        const newBook = {
            id: Math.floor(Math.random() * 1000000000),
            text,
            amount: +amount
        }
        console.log(newBook.id)

        Add(newBook);
        setText('');
        setAmount("");
    }
    return ( <
        div >

        <
        h3 style = {
            { color: "blue" } } > Add Transaction < /h3> <
        label htmlFor = "text" > Text < /label> <
        input type = "text"
        value = { text }
        onChange = {
            (e) => setText(e.target.value)
        }
        / > <
        label > Amount < /label> <
        p > (negative - expense, positive - income...) < /p> <
        input type = "text"
        value = { amount }
        onChange = {
            (e) => {
                setAmount(e.target.value);
                console.log(e.target.value);

            }
        }
        / > <
        br / > <
        input type = "submit"
        value = "ADD"
        onClick = { AddBokk }
        / > < /
        div >
    )
}