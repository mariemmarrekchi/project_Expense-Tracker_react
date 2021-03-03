import './App.css';
import React from 'react';
import { Header_p } from './Header';
import { Balance } from './Balnce';
import { IncomeExpenses } from './IncomeExpenses';
import { List } from './List';
import { Add } from './AddTranscation';
import { GlobalProvider } from './Context/GlobalState'

//coponent facebbok <   Facebook / >
function App() {
    return (

        <
        div className = "App container" >

        <
        GlobalProvider >
        <
        Header_p / >

        <
        Balance / >
        <
        IncomeExpenses / >

        <
        List / >
        <
        Add / >
        <
        /GlobalProvider> < /
        div >
    );
}

export default App;