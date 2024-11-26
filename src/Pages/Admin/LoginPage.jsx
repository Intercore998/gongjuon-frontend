import {Button, Card, CardBody, CardFooter, CardHeader, Input, Typography} from "@material-tailwind/react";
import {useNavigate} from "react-router";
import useAuth from "@/Hook/useAuth.jsx";


const LoginPage = () => {
    const navigate = useNavigate();
    const [useLogin] = useAuth()

    return(
        <div className={"h-auto w-full flex justify-center"} >
            <Card className={"bg-white md:px-24 md:py-14 py-8 border border-gray-300 max-w-3xl my-40 text-center"}>
                <p className={"font-recipekorea"}>Login</p>
                <CardBody className={"text-left"}>
                    <div className={"flex flex-col gap-4 md:mt-12"}>
                        <div className={"gap-2"}>
                            <label htmlFor="username">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="block font-medium mb-2"
                                >
                                    Your Id
                                </Typography>
                            </label>
                            <Input
                                id="username"
                                color="gray"
                                size="lg"
                                type="text"
                                name="username"
                                placeholder="type your id"
                                className="w-full placeholder:opacity-100 focus:border-t-black border-t-blue-gray-200 z-10"
                                labelProps={{
                                    className: "hidden",
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="block font-medium mb-2"
                                >
                                    Your Password
                                </Typography>
                            </label>
                            <Input
                                id="password"
                                color="gray"
                                size="lg"
                                type="password"
                                name="password"
                                placeholder="********"
                                className="w-full placeholder:opacity-100 focus:border-t-black border-t-blue-gray-200 z-10"
                                labelProps={{
                                    className: "hidden",
                                }}
                            />
                        </div>
                    </div>
                </CardBody>
                <CardFooter className={"text-center flex justify-between gap-4"}>
                    <Button onClick={()=>navigate("/admin/signup")}> Register</Button>
                    <Button onClick={()=>useLogin()}> Login</Button>
                </CardFooter>
            </Card>
        </div>

    )
}

export default LoginPage;