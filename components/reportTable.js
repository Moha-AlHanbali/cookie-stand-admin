export default function ReportTable({reports, hours}){

    function ReportTable(){

        let branchesSales = []
        for(let i = 0; i<reports.length ; i++ ){
            branchesSales.push(reports[i].hourly_sales)

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

                                <th >{hour}</th>

                                )}
                                <th>Totals</th>
                            </tr>
                        </thead>

                        <tbody>
                            {reports.map(value => 
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
         {reports.length > 0 ? <ReportTable /> : <h2 className = "h-10 my-10 text-3xl font-bold text-gray-700">No Cookie Stands Available</h2>}
        </>
    )
}