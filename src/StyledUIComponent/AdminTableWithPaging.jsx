import {Card, CardBody} from "@material-tailwind/react";
import AdminTable from "./AdminTable.jsx";
import Paging from "./Paging.jsx";


const AdminTableWithPaging = ({headers, rows,currentPage,totalPage}) => {

    return(
        <Card className="h-full w-full overflow-scroll">
            <CardBody>
                <AdminTable headers={headers} rows={rows}/>
            </CardBody>
            <Paging  currentPage={currentPage} totalPage={totalPage} />
        </Card>
    )
}

export default AdminTableWithPaging;