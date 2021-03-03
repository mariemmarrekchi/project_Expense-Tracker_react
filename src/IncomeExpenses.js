import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { GlobalContext } from './Context/GlobalState';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export const IncomeExpenses = () => {
    const { list } = useContext(GlobalContext);
    const prix = list.map(list => list.amount);
    const Income = prix.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (prix.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);
    return ( <
        Card className = { useStyles.root } >
        <
        CardContent width = "50px" >
        <
        div > < h2 > Income < span > Expense < /span> < /
        h2 > < p > +$ { Income } < span > -$ { expense } < /span>< /p > < /div > < /
        CardContent >
        <
        /Card>
    );
}