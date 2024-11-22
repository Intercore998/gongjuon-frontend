import {Card, CardBody} from "@material-tailwind/react";


const ProductCard = ({title,content,tags }) => {
    return(
        <Card>
            <CardBody>
                <div className={"grid grid-cols-2 gap-4"} >
                    <img src={"https://catmachine.kr/data/goodsImages/1628476557.jpg"} className={"w-60 h-60"}/>
                    <div className={"flex-col justify-items-start"}>
                        <div>
                            <p>{title}</p>
                        </div>
                        <div className={"grid"}>
                            <p className={"text-3xl"}>content</p>
                        </div>
                        <div className={"flex gap-2"}>
                            {tags.map((tag, index) => {
                                return(<p>{tag}</p>)
                            })}
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default ProductCard;