import Head from 'next/head'
import React, { useState } from 'react'

export default function Home() {
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
    if (stand == undefined || stand.location == ''){

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
          <p className = "my-10 text-2xl text-gray-500">{ '{' + '"location":' + '"' + standList[0] + '"' + ',"minCustomers":' + standList[1] + ',"maxCustomers":' + standList[2] + ',"avgCookies":' + standList[3] + '}'}</p>
        </div>
      )
      
    }
  }

function Header(){
  return(
    
  <header className="flex items-center w-full h-24 p-6 bg-green-500">

    <h1 className="font-sans text-4xl font-bold text-gray-900 font-family:Helvetica">Cookie Stand Admin</h1>

  </header>
  )
}

function Footer(){
  return(

    <footer className="flex items-center w-full p-6 bg-green-500 border-t">

    <h4 className="text-2xl font-bold text-gray-700 ">Ⓒ2021</h4>

  </footer>
  )
}

function Main(){
  return(
    <main className="flex flex-col items-center justify-center flex-1 w-full text-center bg-green-50">

    <div className = "flex w-2/3 bg-green-200 rounded-lg">


      <form className="w-full px-5 mt-10" onSubmit = {eventHandler}>
        <h2 className = "w-full h-10 mb-5 text-3xl font-bold text-gray-700 ml-50 "> Create Cookie Stand </h2>
        
        <div className="flex w-full mb-5 md:justify-center md:items-center">
            <label className="block pr-4 mt-5 mb-1 font-bold text-gray-700" for="location">
              Location
            </label>
          <div className="md:w-full">
            <input className="w-full px-4 py-2 mt-5 bg-white focus:bg-gray-100" id="location" type="text"/>
          </div>
        </div>


        <div className="flex mb-6 ml-5 ">

            <div className="w-full px-1 mb-6 md:w-1/4">
              <label className="block mb-2 text-sm font-bold tracking-wide text-gray-700 " for="minCustomers">
                Minimum Customers per Hour
              </label>
              <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border appearance-none focus:outline-none focus:bg-white" id="minCustomers" type="number"/>
            </div>

            <div className="w-full px-1 mb-6 md:w-1/4">
              <label className="block mb-2 text-sm font-bold tracking-wide text-gray-700 " for="maxCustomers">
                Maximum Customers per Hour                </label>
              <input className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="maxCustomers" type="number"/>
            </div>

            <div className="w-full px-1 mb-6 md:w-1/4">
              <label className="block mb-2 text-sm font-bold tracking-wide text-gray-700 " for="avgCookies">
                Average Cookies per Sale
              </label>
              <input className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="avgCookies" type="number"/>
            </div>

            <div className="w-full px-1 mb-6 md:w-1/4">
              <button className = "block w-full px-4 py-6 mt-3 text-3xl text-gray-700 bg-green-500">
                Create
              </button>
            </div>

        </div>
                  

      </form>

    </div>

    <div className = "flex justify-center w-2/3 my-10">
      <RenderStand stand = {stand}/>
    </div>

  </main>
  )
}


  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <Main />

      <Footer />
    </div>
  )
}
