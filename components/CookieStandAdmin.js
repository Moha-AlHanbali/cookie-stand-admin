import React from 'react'

import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';
import CreateForm from './CreateForm';
import ReportTable from './ReportTable';

import { hours } from '../data';
import useResource from '../hooks/useResource'

export default function CookieStandAdmin({ logout, user }) {

    const { resources, loading, createResource } = useResource();

    function eventHandler(event) {
        event.preventDefault()

        console.log("resources", resources.length, resources);

        const cookieStand = {
            location: event.target.location.value,
            id: resources.length,
            description: "Cookie Stand",
            hourly_sales: calculateHourlySales(event.target.minCustomers.value, event.target.maxCustomers.value, event.target.avgCookies.value),
            minimum_customers_per_hour: parseInt(event.target.minCustomers.value),
            maximum_customers_per_hour: parseInt(event.target.maxCustomers.value),
            average_cookies_per_sale: parseInt(event.target.avgCookies.value),
            owner: user.id,
        }

        createResource(cookieStand)

        event.target.reset();


    }

    function calculateHourlySales(minSales, maxSales, avgCookies) {
        let hourly_sales = []
        for (let i = 0; i < hours.length; i++) {
            hourly_sales[i] = (Math.floor(Math.random() * (maxSales - minSales + 1)) + minSales) * avgCookies
        }
        return hourly_sales

    }

    function Main() {
        return (
            <>
                <div className="flex flex-col items-center justify-center flex-1 w-full text-center bg-green-50">
                    <CreateForm eventHandler={eventHandler} />
                    {loading? <h2 className="h-10 my-10 text-3xl font-bold text-gray-700"> Fetching Data from API... </h2>:  <ReportTable hours={hours} />}
                    
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

            <Header logout={logout} user={user} />

            <Main />

            {!loading ? (resources.length > 0 && !loading ? <Footer standsCount={resources.length} />: <Footer standsCount={0} />) : <> </>}
        </>
    )
}