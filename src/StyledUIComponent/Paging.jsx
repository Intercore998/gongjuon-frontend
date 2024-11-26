import {Button, CardFooter, IconButton} from "@material-tailwind/react";
import {useParams} from "react-router-dom";


const Paging = ({totalPage, onPageChange}) => {
    const {id} = useParams();
    const currentPage = parseInt(id) || 1;
    console.log(currentPage,totalPage);
    return(
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4 rounded-b-3xl">
            <div className={"flex-1"}>
                {currentPage>1&&(
                    <Button variant="outlined" size="sm"
                            onClick={() => onPageChange(currentPage - 1)}>
                        Previous
                    </Button>)}
            </div>
            <div className="flex items-center justify-center gap-2 flex-1">
                {Array.from({length:totalPage}).map((_,index)=>{
                   return (
                        <IconButton key={index} variant={index+1===currentPage?"outlined":"text"} size="sm"
                                    onClick={() => onPageChange(index+1)}>
                            {`${index+1}`}
                        </IconButton>
                   )
                })}
            </div>
            <div className={"flex-1 flex justify-end"}>
                {totalPage>currentPage&&(
                    <Button variant="outlined" size="sm" onClick={() => onPageChange(currentPage+1)}>
                        Next
                    </Button>)
                    }
            </div>
        </CardFooter>
    )
}

export default Paging;