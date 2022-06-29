import React, { useState, useEffect } from 'react'
import {
    TextField,
    Button,
    Stack
} from '@mui/material';

export default function Input({ listAction }) {
    const [item, setItem] = useState("")

    useEffect(() => {
        let status = false

        return () => {
            if (status == false) {
                // localStorage.clear()
            }
            else {
                status = true
            }
        }
    })


    const handleOnClick = (e) => {
        e.preventDefault();

        if (item != "") {
            let lst = localStorage.getItem("items") == undefined ? [] : JSON.parse(localStorage.getItem("items"))

            const itm = {
                id: Math.random().toString(),
                title: item,
                status: false
            }

            console.log(lst)

            lst.push(itm)
            listAction(lst)
            localStorage.setItem("items", JSON.stringify(lst))
        }
    }

    return (
        <div>
            <Stack direction="row" justifyContent="center" style={{marginBottom: "20px"}}>
                <TextField
                    autoComplete="title"
                    type='text'
                    label="Enter ToDo Item"
                    onKeyUp={(e) => setItem(e.target.value)}
                />
                {/* <input type="text" placeholder="Enter ToDo Item" onChange={(e) => setItem(e.target.value)}/> */}
                <Button onClick={handleOnClick} variant="contained" type="submit">Add</Button>
            </Stack>
        </div>
    )
}
