import {Accordion, AccordionBody, AccordionHeader, Card, CardBody, Collapse} from "@material-tailwind/react";
import PageTitle from "@/StyledUIComponent/PageTitle.jsx";
import {useState} from "react";

const items = [
    {
        key: '1',
        label: '공주온밤은 어떤 여행인가요?',
        children: (
            <p>
                공주시가 문화체육관광부 주관 ‘야간관광 특화도시 조성’ 공모사업 선정으로 시작된 야간관광 대표 주제입니다.
                <br /> 밤이 되면 켜지는 공주시의 따뜻한 밤 여행, ‘공주 온(ON) 밤 온(溫) 밤'은 공주시의 아름다운 밤하늘과 공산성을 중심으로 한 화려한 도시야경에 원도심의 따듯한 문화를 접목한 감성 체험여행입니다.
            </p>
        ),
    },
    {
        key: '2',
        label: '공주온밤에는 어떤 체험을 할 수 있나요?',
        children: <p>공주온밤에는 여행중 내가 만든 탄소발자국을 지울 수 있는 기회로 야간 플로깅과 야간에 즐기는 갤러리 투어, 옛날 사람들의 지식문화 나눔 장소의 살롱 문화를 체험할 수 있는 명사초청 밤살롱, 삼삼오오 즐기는 밤 문화의 완성 술익는 밤 등 다양한 프로그램이 세대별 맞춤으로 운영중입니다.</p>,
    },
    {
        key: '3',
        label: '가족과 함께 1박2일로 참가 하고 싶은데, 추천해 주실 수 있는 코스가 있을까요?',
        children: (
            <p>
                네, 물론 프로그램 추천이 가능합니다.
                <br /> 1. 초등학생 가족여행 : 기억을 걷는 밤, 갤러리 밤마실, 야간 도차체험인 제민천 밤학당, 할머니네 밤참 <br />
                2. 대학생과 직장인 가족여행 : 제민천 밤살롱과 신실한 밤, 술 익는 밤, 할머니네 밤참 그리고 공주 페스티벌
                <br />
                3. 젊은 연인과 친구들 : 모든 프로그램 단, 사전예약 신청 프로그램도 있으니, 미리 확인하고 해당날짜 신청해 주세요. 대표 문의전화 : 041-852-1326
            </p>
        ),
    },
    {
        key: '4',
        label: '야간관광은 아직 낯설어서, 안전에는 문제 없을까요?',
        children: (
            <p>
                야관관광 공주온밤은 지정된 장소에서 운영하는 프로그램으로 안전장치와 보안에 대한 대비책이 준비되었습니다.
                <br /> 야간관광을 위한 안전 안심 공간으로 트래블라운지가 조성되어 있으니 안전하게 쉬어갈 수 있는 공간도 마련되어 있습니다.
            </p>
        ),
    },
];

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}
const FAQPage = ()=>{
    const [open, setOpen] = useState(0);
    const handleOpen = (index)=> {
        if(index === open) setOpen(0);
        else setOpen(index)
    };
    return(
        <div className={"w-full h-auto flex flex-col justify-center items-center text-center pb-20"}>
            <PageTitle title="공주온밤 FAQ"/>
            <div className="hd_banner">
                <div className="hd_wrap">
                    <img src="/images/banner/hd_banner1.jpg"/>
                </div>
            </div>
            <p className={"text-4xl font-recipekorea pb-20"}>FAQ</p>
            <div className={"w-full flex justify-center"}>
                <Card className={"max-w-[80%] min-h-[60vh]"}>
                    <CardBody>
                        {items.map((item, index) => (
                            <Accordion open={open === index + 1} icon={
                                <Icon id={index+1} open={open} />
                            }>
                                <AccordionHeader className={"flex items-center gap-2"}
                                                 onClick={() => handleOpen(index + 1)}>
                                    {item.label}
                                </AccordionHeader>
                                <AccordionBody className={"text-left text-xl"}>
                                {item.children}
                                </AccordionBody>
                            </Accordion>
                        ))}
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default FAQPage;