export default function CreateForm({eventHandler}){

  
    return(
    
            <div className = "flex w-2/3 bg-green-300 rounded-lg">
                <div className="w-full">
                    <form className="w-full px-5 mt-10" onSubmit = {eventHandler}>
                        <h2 className = "w-full h-10 mb-5 text-3xl font-bold text-gray-700 ml-50 "> Create Cookie Stand </h2>

                        <div className="flex w-full mb-5 md:justify-center md:items-center">
                            <label className="block pr-4 mt-5 mb-1 ml-4 font-bold text-gray-700" for="location">
                            Location
                            </label>
                        <div className="mb-2 mr-1 md:w-full">
                            <input className="w-full px-4 py-2 mt-5 bg-white focus:bg-gray-100" id="location" type="text" required />
                        </div>
                        </div>


                        <div className="flex mb-3 ">

                            <div className="w-full px-3 mx-3 mb-6 bg-green-200 rounded-lg md:w-1/4">
                            <label className="block my-2 mt-5 text-sm font-bold tracking-wide text-gray-700 " for="minCustomers">
                                Minimum Customers per Hour
                            </label>
                            <input className="block w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border appearance-none focus:outline-none focus:bg-white" id="minCustomers" type="number" required/>
                            </div>

                            <div className="w-full px-3 mx-3 mb-6 bg-green-200 rounded-lg md:w-1/4">
                            <label className="block my-2 mt-5 text-sm font-bold tracking-wide text-gray-700 " for="minCustomers">
                                Maximum Customers per Hour                </label>
                            <input className="block w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border border-gray-200 appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="maxCustomers" type="number" required />
                            </div>

                            <div className="w-full px-3 mx-3 mb-6 bg-green-200 rounded-lg md:w-1/4">
                            <label className="block my-2 mt-5 text-sm font-bold tracking-wide text-gray-700 " for="avgCookies">
                                Average Cookies per Sale
                            </label>
                            <input className="block w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border border-gray-200 appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="avgCookies" type="number" required />
                            </div>

                            <div className="w-full px-1 my-2 md:w-1/4">
                            <button className = "block w-full px-4 py-10 mb-5 text-3xl font-bold text-gray-700 bg-green-500 rounded">
                                Create
                            </button>
                            </div>      
                        </div>      
                    </form>
                </div>
            </div>
    )
}