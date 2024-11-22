import {Card} from "@material-tailwind/react";


const Table = ({headers, rows})=>{

    return(
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead className="bg-gray-200">
                <tr>
                    {headers.map((header, index) => (
                        header ?
                        <th key={index} className="border border-gray-300 px-4 py-2 text-left">
                            {header}
                        </th> : null)
                    )}
                </tr>
                </thead>
                <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-100">
                        {headers.map((header, colIndex) =>
                            header ? ( // 빈 헤더에 대응되는 열은 생략
                            <td
                                key={colIndex}
                                className="border border-gray-300 px-4 py-2"
                            >
                                {row[header.toLowerCase()] || ""}
                            </td>
                        ) : null
                        )}
                    </tr>
                ))}
                </tbody>
            </table>
    )
}

export default Table;