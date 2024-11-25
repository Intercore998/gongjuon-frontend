import copyLogo from '@assets/image/logo/gongjucf_copyLogo.svg';

function FooterNav() {
  return (
    <>
      <footer className={"w-full bg-black h-[260px] flex items-center justify-center"}>
        <div className={"gap-[20px] w-full m-20"}>
          <div className={"text-gray-400"}>
            <a href="https://www.gongjucf.or.kr/content/107.do"
               target="_blank"
               rel="noopener noreferrer"
               className={"max-w-[260px]"}>
              <div className={"max-w-[260px] mb-4"}>
                <img src={copyLogo} alt="공주문화관광재단 홈페이지 이미지" className={"w-full"} />
              </div>
            </a>
            <ul className={"text-xs"}>
              <li className={"mb-4"}>
                <span>2024 공주 공산성 미디어아트 대표전화 : 041-852-8066</span>
              </li>
              <li className={"mb-4"}>
                <span>[32535] 충청남도 공주시 고마나루길 90(웅진동) 아트센터고마 3F</span>
              </li>
              <li className={"mb-4"}>
                <span>COPYRIGHT  &copy; Gongju Foundation of Culture and Tourism. ALL RIGHTS RESERVED</span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterNav;
