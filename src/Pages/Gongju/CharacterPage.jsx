import PageTitle from "@/StyledUIComponent/PageTitle.jsx";


const CharacterPage = () => {

    return(
        <>
            <PageTitle title="공주시 야간관광 캐릭터" />
            <div className="w-full text-center text-5xl p-5 font-recipekorea">
                <div className="flex flex-col gap-20 p-20 items-center justify-center">
                    <h2>공주시 야간관광 캐릭터</h2>

                    <div className="w-9/12">
                        <div className="cc"><img src="public/images/banner/character_img1.png" alt="공주온밤 야간관광 캐릭터"/></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CharacterPage;