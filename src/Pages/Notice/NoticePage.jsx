import TableWithPaging from "@/StyledUIComponent/TableWithPaging.jsx";
import {useLocation} from "react-router-dom";
import TapNavigator from "@/StyledUIComponent/TapNavigator.jsx";
import {useNavigate} from "react-router";

const nameMap = {
    id: "게시글 번호",
    title: "제목",
    viewCount: "조회수",
    createdAt: "작성일",
};

const data = [
    { id: 1, title: "공지사항 1", viewCount: 100, createdAt: "2024-11-26" },
    { id: 2, title: "공지사항 2", viewCount: 150, createdAt: "2024-11-25" },
];

const pagingInfo = {
    currentPage: 1,
    totalPages: 5,
};


const Taps = [
    {label:"공지사항", path:"/notice",},
    {label:"뉴스",path:"/news"}
]

const NoticePage = ({page}) => {
    const location = useLocation();
    const navigate = useNavigate();
    // 현재 URI 경로에 맞는 Taps 배열의 인덱스 찾기
    const activeIndex = Taps.findIndex((tab) => location.pathname.includes(tab.path))+1;

    const handlePageChange = (newPage) => {
        console.log("Change to page:", newPage);
        useNavigate(newPage)
        // Fetch new data here
    };


    return (
        <div className="flex flex-col items-center min-h-[100vh] pb-20">
            <div className={`w-full h-auto`}>
                <img className={"object-cover"} alt={"banner"} src={`/images/banner/hd_banner${activeIndex}.jpg`} />
            </div>
            <TapNavigator Taps={Taps} />
            <div className="w-full flex justify-center mt-10">
                <div className="w-8/12 min-h-[80vh]">
                    <TableWithPaging
                        nameMap={nameMap}
                        data={data}
                        pagingInfo={pagingInfo}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default NoticePage;