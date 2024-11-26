import Table from "./Table";
import Paging from "./Paging";

const TableWithPaging = ({ nameMap, data, pagingInfo, onPageChange }) => {
    return (
        <div className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md">
            <Table nameMap={nameMap} data={data} />
            <Paging
                currentPage={pagingInfo.currentPage}
                totalPage={pagingInfo.totalPages}
                onPageChange={onPageChange}
            />
        </div>
    );
};

export default TableWithPaging;