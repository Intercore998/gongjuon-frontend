const Table = ({ nameMap, data }) => {
    return (
        <div className="overflow-hidden rounded-lg shadow-md">
            <table className="w-full text-left table-auto border-collapse">
                <thead>
                <tr className="bg-gray-200">
                    {Object.values(nameMap).map((header, index) => (
                        <th key={index} className="px-4 py-2 font-semibold text-gray-800 border-b">
                            {header}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.length > 0 ? (
                    data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="even:bg-gray-50">
                            {Object.keys(nameMap).map((key, colIndex) => (
                                <td key={colIndex} className="px-4 py-2 text-gray-600 border-b">
                                    {row[key]}
                                </td>
                            ))}
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td
                            colSpan={Object.keys(nameMap).length}
                            className="px-4 py-6 text-center text-gray-500"
                        >
                            No data available.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;