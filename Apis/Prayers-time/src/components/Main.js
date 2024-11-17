import React, { useEffect, useState } from 'react'
import Singlecard from './SinglCard'
import Dates from './Dates'
import Cities from './Cities'
import moment from 'moment'
import TimeTO from './TimeTO'
export default function Allpriers() {
    const [praier,setPrier] = useState()
    const [city,setciry] = useState('Rabat')
    const [Time,settime] = useState()
    const [prayerTime,setprayerTime] = useState();
    const [prayerTimeR,setprayerTimeR] = useState();
    const [timeUntilPrayer, setTimeUntilPrayer] = useState("")
    useEffect(()=>{
        fetch(`https://api.aladhan.com/v1/timingsByCity?country=MA&city=${city}`)
        .then(res=>res.json())
        .then(res=>setPrier(res.data))
     
    },[city])
     useEffect(()=>{
      function Updatetime(){
        const currentTime = new Date().toLocaleTimeString();
        settime(currentTime)
      }
    
      setInterval(Updatetime,1000)
     
     },[])
     
     useEffect(()=>{
      let iinterval = setInterval(() => {
       {praier && timer()}
      }, 10);
      return ()=>{
        clearInterval(iinterval)
      }
     
     })
     
    
     const TImenow = moment()
  //    useEffect(() => {
  //     const calculateTimeUntilPrayer = () => {
  //       if (prayerTimeR) {
  //         const now = moment();
  //         const nextPrayerTime = moment(prayerTimeR, "HH:mm");
  //         const diff = nextPrayerTime.diff(now);
  
  //         if (diff > 0) {
  //           const duration = moment.duration(diff);
  //           const formattedDuration = `${Math.floor(
  //             duration.asHours()
  //           )}:${duration.minutes()}:${duration.seconds()}`;
  //           setTimeUntilPrayer(formattedDuration);
  //         } else {
  //           setTimeUntilPrayer("00:00:00"); // If the time has passed
  //         }
  //       }
  //       const interval = setInterval(calculateTimeUntilPrayer, 1000);
  //   calculateTimeUntilPrayer();

  //   return () => clearInterval(interval);
  // }});
     function timer(){
      
      if(TImenow.isAfter(moment(praier.timings.Fajr,"hh,mm")) && TImenow.isBefore(moment(praier.timings.Asr,'hh,mm'))){
        setprayerTime('Dhuhr');
        setprayerTimeR(praier.timings.Dhuhr)
      }else if(TImenow.isAfter(moment(praier.timings.Dhuhr,"hh,mm")) && TImenow.isBefore(moment(praier.timings.Maghrib,'hh,mm'))){
        setprayerTime('Asr');
        setprayerTimeR(praier.timings.Asr)
      }else if(TImenow.isAfter(moment(praier.timings.Asr,"hh,mm")) && TImenow.isBefore(moment(praier.timings.Isha,'hh,mm'))){
        setprayerTime('Maghrib');
        setprayerTimeR(praier.timings.Maghrib)
      }else if(TImenow.isAfter(moment(praier.timings.Maghrib,"hh,mm")) && TImenow.isBefore(moment(praier.timings.Fajr,'hh,mm'))){
        setprayerTime('Isha');
        setprayerTimeR(praier.timings.Isha)
      }else {
        setprayerTime('Fajr');
        setprayerTimeR(praier.timings.Fajr)
    }
     } 


// const times = moment().format('dddd')




  return (
    <div>
        
       {praier && 
          
          

         <div className='row'> 
         <div className='col-6'><Dates date={praier.date.readable} time={Time}/>
         <h2>{city}</h2></div>
         <div className='col-5'><TimeTO prayer={prayerTime} timing={timeUntilPrayer}/></div>
            <div className='col-2'> 
                 <Singlecard praierN={"Fajr"} Praier={praier.timings.Fajr} img={"https://imgs.search.brave.com/HMj7MgGkodxZH3f-4Ax02M_Dhc2tejifo8En0TwNlI8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI3/MzY3NTkxOC9waG90/by9xdXJhbi1ob2x5/LWJvb2stb2YtbXVz/bGltcy1pbi10aGUt/bW9zcXVlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1fZjlr/QnNnQW1OajNzNERU/RHBUZzZNVG1mQVI4/TUxvQ09GYldrT2NH/TGt3PQ"}/>
                 </div>  
            <div className='col-2'>
                <Singlecard praierN={"Dhuhr"} Praier={praier.timings.Dhuhr} img="https://imgs.search.brave.com/Emtftf4fS__LqP5XqLj3MfR_t7tTqWbYXaZyaEIkhoM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWRhcmFiaWEuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzAyL3ByYXllci10/aW1lcy1pY2VsYW5k/LTEtMzUweDE1My5q/cGc"/>
                </div>   
            <div className='col-2'> 
                <Singlecard praierN={"Asr"} Praier={praier.timings.Asr} img="https://imgs.search.brave.com/I44CGtmdhnbYAdQkr_7OswlMUODS6RNA_G4_Zn0FPsw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzIxLzU4/LzliLzIxNTg5YmY5/ODE1OWU5ODY4Y2Uz/NjU5MTllNjU5NDEy/LmpwZw" />
                </div> 
            <div className='col-2'>
                <Singlecard praierN={"Maghrib"} Praier={praier.timings.Maghrib}img="https://imgs.search.brave.com/AgPKoC1_EVVFQAWDgQQiOSga0nG3tSboEp9bhB_HH5w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNkL2Ji/Lzk3LzNkYmI5NzNj/ZTYyZGJlNzA0NTQx/MjQwODAwYzYxNWEw/LmpwZw" />
                </div>  
            <div 
            className='col-2'><Singlecard praierN={"Isha"} Praier={praier.timings.Isha} img="https://imgs.search.brave.com/sGd9gnPdt_ddzooUnBsFFrLtmqb-iexa5sPVnMHLC2w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzRiLzhh/LzUwLzRiOGE1MDIz/YmJiYzk0ZDc5ZGJi/ZWMzMzE1YmUxNDhm/LmpwZw" />
            </div> 
            <div className='col-6'><Cities city={city} setcity={setciry} /></div> 
         </div>

       }
       
   
    </div>
  )
}


