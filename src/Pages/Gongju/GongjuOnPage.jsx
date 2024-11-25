import PageTitle from "@/StyledUIComponent/PageTitle.jsx";


const GongjuOnPage = () => {
    return(
        <>
            <PageTitle title="공주시 야간관광" />
            <div className={"w-full flex flex-col text-center bg-[url('/images/banner/gongjuon_bg.png')] bg-cover p-64 gap-20"}>
                <p className={"font-recipekorea text-white text-5xl"}>공주온밤이란?</p>
                <div className={"w-full h-[20em] bg-white bg-opacity-80 rounded-3xl text-left flex flex-col px-40 justify-center"}>
                    <div className={"grid grid-cols-12 gap-20 relative"}>
                        <div className={"col-span-3 flex bg-black w-60 h-40 absolute -left-[14em] -top-[6em] justify-center items-center"}>
                            <img className={"w-4/6 h-4/6"} src={"/images/banner/gongju_logo.png"} alt={"gongjuon"} />
                        </div>
                        <div className={"col-start-3 col-end-13 w-full"}>
                            <p className={"font-recipekorea text-3xl pb-8 w-full"}>밤이 되면 켜지는 공주시의 따뜻한 밤 여행</p>
                            <span className={"text-lg pb-4 w-full"}>문화체육관광부, 한국관광공사 공모사업인 '2024 야간관광 특화도시 조성사업'에 공주시가 선정되었습니다.<br/></span>
                            <span className={"text-lg pb-4 w-full"}>공주시만이 가진 아기자기하고 따뜻한 매력을 살린 다양한 야간관광 프로그램으로 공주시의 불을 밝히고 있습니다.<br/></span>
                            <span className={"text-lg pb-4 w-full"}>지역명 '공주'를 활용한 공주(Princess)컨셉의 프로그램과, 특산물 밤을 연상시키는 밤 패키지!<br/></span>
                            <span className={"text-lg pb-4 w-full"}>오직 공주시 야간관광 '공주온밤'에서만 즐길 수 있는 다채로운 볼거리, 즐길거리로 여러분 모두 초대합니다.<br/></span>
                        </div>
                    </div>
                </div>
                <p className={"font-recipekorea text-white text-5xl"}>다양한 볼거리</p>
                <div className={"w-full h-auto grid grid-cols-2 gap-10"}>
                    <div
                        className={"rounded-3xl bg-white flex flex-col text-left overflow-hidden relative items-center"}>
                        <img className={"hover:scale-110 hover:rounded-t-3xl duration-300 rounded-t-3xl"}
                             src={"/images/banner/gong_cont01.png"} alt={"fes1"}/>
                        <div className={"w-11/12 pt-8 p-4"}>
                            <p className={"font-recipekorea text-lg"}>제민천 달콤거리</p>
                            <span>밤이 되면 켜지는 제민천 일대의 달콤한 거리</span>
                        </div>
                    </div>
                    <div
                        className={"rounded-3xl bg-white flex flex-col text-left overflow-hidden relative items-center"}>
                        <img className={"hover:scale-110 hover:rounded-t-3xl duration-300 rounded-t-3xl"}
                             src={"/images/banner/gong_cont01.png"} alt={"fes1"}/>
                        <div className={"w-11/12 pt-8 p-4"}>
                            <p className={"font-recipekorea text-lg"}>제민천 달콤거리</p>
                            <span>밤이 되면 켜지는 제민천 일대의 달콤한 거리</span>
                        </div>
                    </div>
                    <div
                        className={"rounded-3xl bg-white flex flex-col text-left overflow-hidden relative items-center"}>
                        <img className={"hover:scale-110 hover:rounded-t-3xl duration-300 rounded-t-3xl"}
                             src={"/images/banner/gong_cont01.png"} alt={"fes1"}/>
                        <div className={"w-11/12 pt-8 p-4"}>
                            <p className={"font-recipekorea text-lg"}>제민천 달콤거리</p>
                            <span>밤이 되면 켜지는 제민천 일대의 달콤한 거리</span>
                        </div>
                    </div>
                    <div
                        className={"rounded-3xl bg-white flex flex-col text-left overflow-hidden relative items-center"}>
                        <img className={"hover:scale-110 hover:rounded-t-3xl duration-300 rounded-t-3xl"}
                             src={"/images/banner/gong_cont01.png"} alt={"fes1"}/>
                        <div className={"w-11/12 pt-8 p-4"}>
                            <p className={"font-recipekorea text-lg"}>제민천 달콤거리</p>
                            <span>밤이 되면 켜지는 제민천 일대의 달콤한 거리</span>
                        </div>
                    </div>
                </div>
                <div className={"w-full h-[500px]"}></div>
                <div className={"w-full h-[500px]"}></div>
                <div className={"w-full h-[500px]"}></div>
                <div className={"w-full h-[500px]"}></div>
            </div>
        </>
    )
}

export default GongjuOnPage;