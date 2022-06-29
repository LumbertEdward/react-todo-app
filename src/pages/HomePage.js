import React, { useState, useEffect } from 'react'
import '../App.css'
import Cards from '../components/CardsComponent/Cards'
import Header from '../components/HeaderComponent/header'
import Input from '../components/InputsComponents/Input'

export default function HomePage() {
  const [list, setList] = useState(localStorage.getItem("items") == undefined ? [] : JSON.parse(localStorage.getItem("items")))
  const [listComplete, setListComplete] = useState(localStorage.getItem("itemsComplete") == undefined ? [] : JSON.parse(localStorage.getItem("itemsComplete")))

  return (
    <div className="App">
      <Header allList={setList} allComplete={setListComplete}/>
      <Input listAction={setList}/>
      <Cards items={list} newSetList={setList} compList={listComplete} compFunc={setListComplete} />
    </div>
  )
}
