import React, { useState, useEffect } from 'react'
import '../App.css'
import Cards from '../components/CardsComponent/Cards'
import Input from '../components/InputsComponents/Input'

export default function HomePage() {
  const [list, setList] = useState(localStorage.getItem("items") == undefined ? [] : JSON.parse(localStorage.getItem("items")))

  return (
    <div className="App">
      <Input listAction={setList}/>
      <Cards items={list} newSetList={setList} />
    </div>
  )
}
