import React from 'react'

import Form from './form';

export default function Main(){
    const [stand, setStand] = React.useState();
    let flag = false
    function eventHandler(event){
      event.preventDefault()
   
      const cookieStand = {
        location: event.target.location.value,
        minCustomers: event.target.minCustomers.value,
        maxCustomers: event.target.maxCustomers.value,
        avgCookies: event.target.avgCookies.value,
      }
      setStand(cookieStand);
  
      flag = true;
  
    }
  
    function RenderStand(){
      if (stand == undefined){
  
        return(
          <p></p>
        )
      }
      else{
        // let standString = JSON.stringify({stand})
        let standList = Object.values(stand)
        return (
          <div >
            <h5 className = "text-2xl text-gray-500">Report Table Coming Soon...</h5>
            <p className = "mb-5 text-2xl text-gray-500">{ '{' + '"location":' + '"' + standList[0] + '"' + ',"minCustomers":' + standList[1] + ',"maxCustomers":' + standList[2] + ',"avgCookies":' + standList[3] + '}'}</p>
          </div>
        )
        
      }
    }
    return(
      <>
        <div className="flex flex-col items-center justify-center flex-1 w-full text-center bg-green-50">

          <Form eventHandler = {eventHandler} />
          <div className = "flex justify-center w-2/3 my-10">
            <RenderStand />
          </div>
        </div>

      </>
    )
    
  }