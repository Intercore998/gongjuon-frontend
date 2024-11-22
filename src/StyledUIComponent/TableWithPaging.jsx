import {Card, CardBody} from "@material-tailwind/react";
import Table from "./Table.jsx";
import Paging from "./Paging.jsx";


const TableWithPaging = ({headers, rows, currentPage, totalPage}) => {
    return(
        <Card className="h-full w-full overflow-scroll">
            <CardBody>
                <Table headers={headers} rows={rows} />
            </CardBody>
            <Paging currentPage={currentPage} totalPage={totalPage} />
        </Card>
    )
}

export default TableWithPaging;