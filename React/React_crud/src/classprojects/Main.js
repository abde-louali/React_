import { Ajoute } from "./Ajoute";
import { useState } from "react"
import { Serach } from "./Search";
import { Table } from "./Table";
import 'bootstrap/dist/css/bootstrap.min.css';

let index = 1
export function Main(){ 
    const [isupdated,setnewupdate] = useState(false)
    const [search,setsearch] = useState(false)
    const [Listobjs,setlistobj] = useState([])
    const [objects,setobjects] = useState({
        id:'',
        LIbelle:'',
        prix :'',
        promtion:false
    })
    const [value,setvallsearch] = useState('')
    function Ajouter(){
        const newlist = [...Listobjs,{...objects,id:index}]
        index++
        setlistobj(newlist)
        setobjects({...objects,LIbelle:objects.LIbelle='',prix:objects.prix="" ,promtion:objects.promtion = false})
    }
    function serach(){
    
            setsearch(true) 

            }
   if(search && value=='' ){
     setsearch(false)
    
   }
   function deleteP(id){
      const newlistD = Listobjs.filter(stg=>stg.id!==id)
      setlistobj(newlistD)
   }
 function editP(id){
   const produit =  Listobjs.find(prd=>prd.id === id )
    setobjects({...objects,id:produit.id,LIbelle:produit.LIbelle ,prix:produit.prix ,promtion:produit.promtion})
    setnewupdate(true)
 }
 function UpdatedP(){
    const newliste = Listobjs.map((stg)=>{
        if(stg.id == objects.id){
            return objects
        }return stg
    })
    setlistobj(newliste)
    

      setobjects({...objects,LIbelle:"",prix:"",promtion:false})
    
    setnewupdate(false)
     
 }

return(
    <>
    <div style={{width:"50%", marginLeft:"25%", marginTop:"30px"}}>
    <Ajoute   set={setobjects} list={objects} Onadd={Ajouter} isupdated={isupdated} Update={UpdatedP}/>
    </div>
    <div style={{marginTop:"30px"}}>
    <Serach vallue={value} setsearch={setvallsearch} onsearch={serach}/>
    </div>
    <div style={{marginTop:"30px"}}>
    <Table list={Listobjs} vall={value} isssearch={search} ondelete={deleteP} onedite={editP}/>
    </div>
   
    
    </>
)
}