import { useState, useEffect, useRef } from 'react';
import styles from './NoticeList.module.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import adminTokenStore from '@store/adminTokenStore';
import dayjs from 'dayjs';
import HelmetTitle from '../../components/common/helmetTitle/HelmetTitle';
import { motion, useInView } from 'framer-motion';

import { LuHome } from 'react-icons/lu';
import { GoChevronRight } from 'react-icons/go';

const NoticeList = () => {
  const [notices, setNotices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // 로그인 유무 전역 상태관리
  const { isAuthenticated } = adminTokenStore();

  // 보여지는 프로그램 개수와 10개씩 묶은 페이지 개수
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // 현재 보여지는 페이지 공지
  const currentItems = notices.slice(indexOfFirstItem, indexOfLastItem);

  //총 페이지 개수
  const totalPages = Math.ceil(notices.length / itemsPerPage);

  // 이전 버튼
  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // 페이지 이동 버튼
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 다음 버튼
  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  // 공지사항 전체 GET요청
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL + '/notices');
        setNotices(response.data);
      } catch (error) {
        console.error('공지사항 불러오기 실패:', error);
      }
    };
    fetchNotices();
  }, []);

  // 애니메이션 라이브러리 설정 값
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const motionVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <HelmetTitle title="공지사항" />
      <div className={styles.pathWrap}>
        <div className={styles.pathWrap__textBox}>
          <LuHome />
          <GoChevronRight />
          <span>공지사항</span>
        </div>
      </div>
      <section className={styles.secWrap}>
        <motion.div ref={ref} variants={motionVariant} initial="hidden" animate={inView ? 'visible' : 'hidden'} className={styles.secWrap__inner}>
          <motion.div variants={itemVariants} transition={{ duration: 0.5 }} className={styles.mheader}>
            <h2 className={styles.mheader__title}>공지사항</h2>
          </motion.div>

          <motion.div variants={itemVariants} transition={{ duration: 0.5 }} className={styles.noticesWrap}>
            {notices.length === 0 ? (
              <div className={styles.noNotices}>공지사항이 없습니다.</div>
            ) : (
              <div className={styles.tableContainer}>
                <table className={styles.noticeTable}>
                  <thead>
                    <tr>
                      <th className={styles.num}>번호</th>
                      <th className={styles.types}>유형</th>
                      <th className={styles.notiT}>제목</th>
                      <th className={styles.writeDay}>작성일</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((notice, index) => {
                      const reversedIndex = notices.length - (currentPage - 1) * itemsPerPage - index;

                      // 유형을 한글로 변환
                      const noticeType = notice.type === 'news' ? '뉴스' : '공지사항';

                      // 유형에 따라 클래스 이름 결정
                      const typeClass = notice.type === 'news' ? styles.typeNews : styles.typeNotice;

                      return (
                        <tr key={notice.id} className={styles.noticeItem}>
                          <td className={styles.num}>{reversedIndex}</td>
                          <td className={styles.types}>
                            <span className={`${styles.noticeType} ${typeClass}`}>{noticeType}</span>
                          </td>
                          <td className={styles.notiT}>
                            <Link to={`/notice/${notice.id}`} className={styles.noticeLink}>
                              {notice.title}
                            </Link>
                          </td>
                          <td className={styles.writeDay}>{dayjs(notice.createdAt).format('YYYY-MM-DD')}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>

          <motion.div variants={itemVariants} transition={{ duration: 0.5 }} className={styles.pagination}>
            <button onClick={handlePrev} disabled={currentPage === 1}>
              이전
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button key={i} onClick={() => handlePageClick(i + 1)} disabled={currentPage === i + 1} className={currentPage === i + 1 ? styles.active : ''}>
                {i + 1}
              </button>
            ))}
            <button onClick={handleNext} disabled={currentPage === totalPages}>
              다음
            </button>
          </motion.div>
          {isAuthenticated && (
            <motion.div variants={itemVariants} transition={{ duration: 0.5 }} className={styles.createBtn}>
              <Link to="/notice/create" className={styles.createLink}>
                공지 작성
              </Link>
            </motion.div>
          )}
        </motion.div>
      </section>
    </>
  );
};

export default NoticeList;
