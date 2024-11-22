import {Button, CardFooter, IconButton} from "@material-tailwind/react";


const Paging = ({currentPage,totalPage}) => {

    return(
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Button variant="outlined" size="sm">
                Previous
            </Button>
            <div className="flex items-center gap-2">
                {Array.from({length:totalPage}).map((_,index)=>{
                   return (
                        <IconButton key={index} variant={index+1===currentPage?"outlined":"text"} size="sm">
                            {`${index+1}`}
                        </IconButton>
                   )
                })}
            </div>
            <Button variant="outlined" size="sm">
                Next
            </Button>
        </CardFooter>
    )
}

export default Paging;