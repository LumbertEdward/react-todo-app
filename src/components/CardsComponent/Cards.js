import React, { useState } from 'react'
import {
    Card,
    Stack,
    CardContent
} from '@mui/material';
import '../CardsComponent/css/card.css'

export default function Cards({ items, newSetList }) {
    const [listComplete, setListComplete] = useState(localStorage.getItem("itemsComplete") == undefined ? [] : JSON.parse(localStorage.getItem("itemsComplete")))

    return (
        <>
            {
                items.length > 0 ?
                    <>
                        {
                            items.map((item) => (
                                <Stack direction="row" justifyContent="center" style={{marginBottom: "5px"}}>
                                    <Card sx={{ width: 300 }}>
                                        <CardContent>
                                            <p className="incomplete" onClick={() => {
                                                const updatedItem = {
                                                    id: item.id,
                                                    title: item.title,
                                                    status: true
                                                }

                                                let newItems = items.filter((lstItem) => lstItem.id != updatedItem.id)

                                                // newItems.push(updatedItem)

                                                let cmplt = localStorage.getItem("itemsComplete") == undefined ? [] : JSON.parse(localStorage.getItem("itemsComplete"))

                                                cmplt.push(updatedItem)

                                                setListComplete(cmplt)

                                                localStorage.setItem("itemsComplete", JSON.stringify(cmplt))

                                                localStorage.setItem("items", JSON.stringify(newItems))

                                                newSetList(newItems)
                                            }}>
                                                {item.title}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Stack>
                            ))
                        }
                    </>
                    :
                    null

            }
            {
                listComplete.length > 0 ?
                    <>
                        {
                            listComplete.map((item) => (
                                <Stack direction="row" justifyContent="center"  style={{marginBottom: "5px"}}>
                                    <Card sx={{ width: 300 }}>
                                        <CardContent>
                                            <p className="complete" style={{ color: 'green' }}>
                                                {item.title}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Stack>
                            ))
                        }
                    </>
                    :
                    null
            }
        </>
    )
}
