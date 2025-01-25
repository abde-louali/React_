import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { Main } from './classprojects/Main';
import Ajoute from './ExamPrepa/Ajoute';
import Table from './ExamPrepa/Table';
import Search from './ExamPrepa/Search';
import Update from './ExamPrepa/Update';
import Delete from './ExamPrepa/Delete';
import { useEffect, useState } from 'react';
import { Main } from './classprojects/Main';

function App() {
  // const [Stagire,setStagaire] = useState({
  //   id:'',
  //   name:'',
  //   email:'',
  //   age:''
  // })
  // const [Updatedstg,setUpdatedstg] = useState({
  //   id:'',
  //   name:'',
  //   email:'',
  //   age:''
  // })
  // const [Liststagires,setliststagires] = useState([])
  // const [vall,setvall] = useState('')
  // const [isclicked,setisclicked] = useState(false)
  // const [deleteId,setdeleteId] = useState('')
  // const [errorrs,seterror ] = useState('')
  // function Onajoute(){
  //  const exists =  Liststagires.find(stg=>Stagire.id == stg.id)
  //  const {age,name} = Stagire;
  //  if(name.length<4){
  //   seterror('incorrect name')
  //  }
  //  else if(age<18 || age>26){
  //   seterror('incorrect age')
  //  }
  //  else if(exists){
  //   seterror('already exists')
   
  //  }else{
  //   setliststagires([...Liststagires,Stagire])
  //  }
  //  setStagaire({...Stagire,id:'',name:'',email:'',age:''})
  // }
  // useEffect(() => {
  //   if (errorrs) {
  //     alert(errorrs);
  //   }
  // }, [errorrs]);

  // function SearchStg(){
  
  //     setisclicked(true)
  
  // }
  //   useEffect(()=>{
  //     if(isclicked == true){
  //       setisclicked(false)
  //     }
  //   },[vall])
  // function UpdatedStg(){
  //   const newlist = Liststagires.map((stg)=>{
  //     if(stg.id == Updatedstg.id){
  //       return Updatedstg
  //     }return stg
  //   })

  //   setliststagires(newlist)
  // }

  // function Deletestg(){
  //  const newlist = Liststagires.filter(stg=>stg.id!==deleteId)
  //  setliststagires(newlist)
  // }
    
  return (
    <div className="App">
      <Main/>
      {/* <Ajoute Stagire={Stagire} setStagaire={setStagaire} Add={Onajoute}/>
      <Search vall={vall} setvall={setvall} onsearch={SearchStg}/>
      <Table List={Liststagires} vall={vall} isclicked={isclicked}/>
      <Update UpdatedStagire={Updatedstg} setUpdatedStagaire={setUpdatedstg} OnUpdate={UpdatedStg}/>
      <Delete stg={deleteId} setstg={setdeleteId} Ondelete={Deletestg}/> */}
    </div>
  );
}

export default App;
