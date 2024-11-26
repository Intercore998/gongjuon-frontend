import { FaPlay } from 'react-icons/fa6';
import { FaPause } from 'react-icons/fa6';
import { FaChevronLeft } from 'react-icons/fa6';
import { FaChevronRight } from 'react-icons/fa';


// stop play 버튼이 있는 subTitle
function TitleSlideButton({ title, isPlay, toggleAutoplay, swiper }) {
  return (
    <>
      <div className={""}>
        <h3 className={""}>{title}</h3>
        <div className={""}>
          <button
            onClick={() => {
              swiper?.slidePrev();
            }}
            title="이전 버튼"
          >
            <FaChevronLeft className={""} />
          </button>
          <button onClick={toggleAutoplay} title={isPlay ? '정지버튼' : '재생 버튼'}>
            {isPlay ? <FaPause className={""} /> : <FaPlay className={""} />}
          </button>
          <button
            onClick={() => {
              swiper?.slideNext();
            }}
          >
            <FaChevronRight className={""} />
          </button>
        </div>
      </div>
    </>
  );
}

export default TitleSlideButton;
