
export default function CreateForm({eventHandler}){


    return(
    
            <div className = "flex w-2/3 bg-green-200 border-4 border-green-500 border-solid rounded-lg">

                <div className="w-full ">
                    <form className="w-full px-5 mt-5" onSubmit = {eventHandler}>
                        
                        <div className = "flex items-center w-full">
                            <div className="w-2/3 mb-5 md:justify-center md:items-center">
                                <label className="block pr-4 mt-5 mb-1 ml-4 font-bold text-gray-700" for="location">
                                ADD LOCATION
                                </label>
                                <div className="mx-5 ">
                                    <input className="w-full px-4 py-2 mt-5 bg-white focus:bg-gray-100" id="location" type="text" placeholder  = "Cookie Stand Location" required />
                                </div>
                            </div>

                            <div className="w-1/3 mt-12 pl-7">
                                <button className = "block w-11/12 py-4 font-bold text-gray-700 bg-green-500 rounded hover:bg-green-600 active:bg-green-400 text-1xl">
                                    CREATE STAND
                                </button>
                            </div>  
                        </div>

                        <div className="flex mb-3 ">

                            <div className="w-full px-3 mx-3 mb-6 bg-green-200 rounded-lg md:w-1/3">
                            <label className="block my-2 mt-5 text-sm font-bold tracking-wide text-gray-700 " for="minCustomers">
                                Minimum Customers per Hour
                            </label>
                            <input className="block w-full px-4 py-2 leading-tight text-gray-700 bg-gray-100 border appearance-none focus:outline-none focus:bg-white" id="minCustomers" type="number" defaultValue = "0" required/>
                            </div>

                            <div className="w-full px-3 mx-3 mb-6 bg-green-200 rounded-lg md:w-1/3">
                            <label className="block my-2 mt-5 text-sm font-bold tracking-wide text-gray-700 " for="minCustomers">
                                Maximum Customers per Hour                </label>
                            <input className="block w-full px-4 py-2 leading-tight text-gray-700 bg-gray-100 border border-gray-200 appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="maxCustomers" type="number" defaultValue = "0"  required />
                            </div>

                            <div className="w-full px-3 mx-3 mb-6 bg-green-200 rounded-lg md:w-1/3">
                            <label className="block my-2 mt-5 text-sm font-bold tracking-wide text-gray-700 " for="avgCookies">
                                Average Cookies per Sale
                            </label>
                            <input className="block w-full px-4 py-2 leading-tight text-gray-700 bg-gray-100 border border-gray-200 appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="avgCookies" type="number" defaultValue = "0"  required />
                            </div>

    
                        </div>      
                    </form>
                </div>
            </div>
    )
}