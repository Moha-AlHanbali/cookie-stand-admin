import useResource from '../hooks/useResource'


export default function ReportTable({hours}){

    const { resources, loading, deleteResource } = useResource();

    function SalesTable(){
        let branchesSales = []
        for(let i = 0; i< resources.length ; i++ ){
            branchesSales.push(resources[i].hourly_sales)

            let totalsArray = []
        for(let i = 0; i < branchesSales[0].length; i++){
            let hourlyTotal = 0
            for(let branch in branchesSales){
                hourlyTotal += branchesSales[branch][i]
            totalsArray[i] = hourlyTotal
            }
        }
        }

        return(
            <>
                <table className = "w-2/3 py-8 my-10 border border-gray-700 md:px-32 ">
                        <thead className = "bg-green-500 border-b border-gray-700 ">
                            <tr>
                                <th>Location</th>
                                {hours.map(hour => 

                                <th key = {hour}>{hour}</th>

                                )}
                                <th>Totals</th>
                            </tr>
                        </thead>

                        <tbody>
                            {resources.map(value => 

                                loading ? <tr><td> PENDING</td></tr> :
                                
                                <tr key={value.id} className = "odd:bg-green-400 even:bg-green-200" >
                                    <td  className = "text-lg border-b border-r border-gray-700 ">{value.location}</td>
                                    {value.hourly_sales.map(sale =>
                                        <td className = "text-lg border-b border-r border-gray-700"> {sale}</td>
                                      )}  
                                    <td className = "text-lg border-b border-r border-gray-700">{value.hourly_sales.reduce(function(a, b){return a + b;}, 0)}</td>
                                </tr>
                                )}
                        </tbody>
                        <tfoot className = "bg-green-500 border-t border-b border-gray-700">
                            <tr>
                                <th className = "border-r border-gray-700 ">Totals</th>
                                {totalsArray.map(sale =>
                                    <th className = "border-r border-gray-700 "> {sale} </th>
                                    )}
                                <th> {totalsArray.reduce(function(a, b){return a + b;}, 0)} </th>
                            </tr>
                        </tfoot>
                </table>
            </>
        )
    }

    return(
        <>
         {resources.length > 0 ? <SalesTable /> : <h2 className = "h-10 my-10 text-3xl font-bold text-gray-700">No Cookie Stands Available</h2>    }
        </>
    )
}