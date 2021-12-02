import useResource from '../hooks/useResource';

export default function CookieStandTable({ hours }) {

    const { resources, loading, deleteResource } = useResource();

    function SalesTable() {
        let branchesSales = []
        for (let i = 0; i < resources.length; i++) {
            branchesSales.push(resources[i].hourly_sales)

            let totalsArray = []
            for (let i = 0; i < branchesSales[0].length; i++) {
                let hourlyTotal = 0
                for (let branch in branchesSales) {
                    hourlyTotal += branchesSales[branch][i]
                    totalsArray[i] = hourlyTotal
                }
            }
        }

        
        return (

            <>
                    <table className="w-2/3 py-8 my-10 border border-gray-700 md:px-32 ">
                        <thead className="bg-green-400">
                            <tr>
                                <th className="py-2 border-2 border-green-600">Location</th>
                                {hours.map(hour =>

                                    <th key={hour} className="border-2 border-green-600">{hour}</th>

                                )}
                                <th className="border-2 border-green-600">Totals</th>
                            </tr>
                        </thead>

                        <tbody>
                            {resources.map(value =>
                                    <tr key={value.id} className="odd:bg-green-300 even:bg-green-200" >
                                        <td className="py-2 text-lg border-2 border-green-600"> <span onClick={() => deleteResource(value.id)}><button className="justify-start pr-2 text-lg font-bold text-red-700">x</button></span> <span className="">{value.location} </span></td>
                                        {value.hourly_sales.map(sale =>
                                            <td className="py-2 text-lg border-2 border-green-600"> {sale}</td>
                                        )}
                                        <td className="py-2 text-lg border-2 border-l-2 border-green-600 -2">{value.hourly_sales.reduce(function (a, b) { return a + b; }, 0)}</td>
                                    </tr>
                            )}
                        </tbody>
                        <tfoot className="bg-green-400 border-2 border-green-600">
                            <tr>
                                <th className="py-2 border-2 border-green-600 ">Totals</th>
                                {totalsArray.map(sale =>
                                    <th className="border-2 border-green-600 " > {sale} </th>
                                )}
                                <th className="border-2 border-green-600"> {totalsArray.reduce(function (a, b) { return a + b; }, 0)} </th>
                            </tr>
                        </tfoot>
                    </table>
            </>
        )
    }

    return (
        <>
            {!loading ? (resources.length > 0 ? <SalesTable /> : <h2 className="h-10 my-10 text-3xl font-bold text-gray-700">No Cookie Stands Available</h2>) : <h2 className="h-10 my-10 text-3xl font-bold text-gray-700"> Fetching Data from API... </h2>}
        </>
    )
}