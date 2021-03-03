import React, { useContext, useState } from 'react';
import { GlobalContext } from './Context/GlobalState';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
export const List = () => {
    const { list } = useContext(GlobalContext);

    const { deleteBokk } = useContext(GlobalContext);

    const [info, setInfo] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return ( <
        div > {

        } <
        h3 > History < /h3>   <
        ul > {
            list.map(list => {
                return ( <
                    li key = { list.id }

                    >
                    { list.text } < span > { list.amount } <
                    /span >

                    <
                    button onClick = {
                        () => {
                            deleteBokk(list.id);
                        }
                    } > * < /button>

                    <
                    Button variant = "primary"
                    onClick = {
                        () => {
                            handleShow();
                            setInfo(list);

                            console.log(info)
                        }
                    } >
                    Launch demo modal <
                    /Button>

                    <
                    Modal show = { show }
                    onHide = { handleClose } >
                    <
                    Modal.Header closeButton >
                    <
                    Modal.Title > { info.text } < /Modal.Title> < /
                    Modal.Header > <
                    Modal.Body > { info.amount } < /Modal.Body> <
                    Modal.Footer >
                    <
                    Button variant = "secondary"
                    onClick = {


                        handleClose

                    } >
                    close <
                    /Button> <
                    Button variant = "primary"
                    onClick = { handleClose } >
                    Save Changes <
                    /Button> < /
                    Modal.Footer > <
                    /Modal> < /
                    li >



                )
            })
        }

        <
        /
        ul >

        <
        /
        div >
    )
}