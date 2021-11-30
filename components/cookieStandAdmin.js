import React from 'react'

import Head from 'next/head'
import Header from '../components/header';
import Footer from '../components/footer';
import CreateForm from '../components/createForm';
import ReportTable from './reportTable';

import { hours } from '../data';

export default function CookieStandAdmin() {

    // const [stand, setStand] = React.useState();
    const [reports, setReports] = React.useState([]);
    let flag = false

    function eventHandler(event) {
        event.preventDefault()


        const cookieStand = {
            id: reports.length,
            location: event.target.location.value,
            minCustomers: event.target.minCustomers.value,
            maxCustomers: event.target.maxCustomers.value,
            avgCookies: event.target.avgCookies.value,
            // hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
            hourly_sales: calculateHourlySales(event.target.minCustomers.value, event.target.maxCustomers.value, event.target.avgCookies.value),
        }
        // setStand(cookieStand);
        setReports(sales => [...sales, cookieStand])

        flag = true;

        // console.log(cookieStand);
        // console.log(reports);

    }

    function calculateHourlySales(minSales, maxSales, avgCookies){
        let hourly_sales = []
        for(let i = 0 ; i < hours.length ; i++){
            hourly_sales[i] = (Math.floor(Math.random() * (parseInt(maxSales) - parseInt(minSales) + 1) + parseInt(minSales))) * avgCookies
        }
        return hourly_sales

    }
    
    function Main() {
        return (
            <>
                <div className="flex flex-col items-center justify-center flex-1 w-full text-center bg-green-50">
                    <CreateForm eventHandler={eventHandler} />
                    <ReportTable reports={reports} hours = {hours} />
                </div>
            </>
        )
    }
    
    return (
        <>
            <Head>
                <title>Cookie Stand Admin</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Main />

            <Footer standsCount={reports.length} />
        </>
    )
}