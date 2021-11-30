export default function Form({eventHandler}){
    return(
    
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
      )
}