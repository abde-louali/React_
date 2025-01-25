import React, { useEffect, useState } from 'react'
import ArticleComp from './ArticleComp'
import CatalogueComp from './CatalogueComp'
import Oridinateurcata from './Oridinateurcata'
import AjouteArt from './AjouteArt'
export default function Main() {
    const [Article,setarticle] = useState({
        code:'',
        nom:'',
        category:'',
        prix:''
    })
    const [listart ,setlistart] = useState([])
    const [vall,setvall] = useState('')
    const [clicked,setclisked] = useState(false)
    function Search(){
        setclisked(true)
    }
    useEffect(()=>{
        if(clicked == true){
            setclisked(false)
        }
    },[vall])
    function Ajoute(){
        setlistart([...listart,Article])
    }

  return (
    <div>
        {/* <ArticleComp article={Article}/> */}
        <CatalogueComp vall={vall} List={listart} clicked={clicked}/>
        <Oridinateurcata vall={vall} setvall={setvall} onserach={Search}/>
        <AjouteArt Article={Article} setStarticle={setarticle} onadd={Ajoute} />
    </div>
  )
}
