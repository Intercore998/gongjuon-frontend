import {Card, Typography} from "@material-tailwind/react";


const AdminTable = ({headers,rows}) => {

    return(
        <Card className="h-full w-full overflow-scroll">
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead className="bg-gray-200">
                <tr>
                    {headers.map((header, index) => (
                        <th key={index} className="border border-gray-300 px-4 py-2 text-left">
                            {header}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-100">
                        {headers.map((header, colIndex) => (
                            <td
                                key={colIndex}
                                className="border border-gray-300 px-4 py-2"
                            >
                                {header ? row[header.toLowerCase()] || "" :
                                    <button className="text-blue-500">Edit</button>}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </Card>
    )
}

export default AdminTable;