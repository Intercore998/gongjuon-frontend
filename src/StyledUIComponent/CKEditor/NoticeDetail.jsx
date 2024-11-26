import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import adminTokenStore from '@store/adminTokenStore';
import styles from './NoticeDetail.module.scss';

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import { LuHome } from 'react-icons/lu';
import { GoChevronRight } from 'react-icons/go';

const NoticeDetail = () => {
  const { id } = useParams();
  const [notice, setNotice] = useState(null);
  const navigate = useNavigate();

  // 로그인 전역 상태
  const { isAuthenticated } = adminTokenStore();

  useEffect(() => {
    // id와 일치하는  공지사항 GET
    const fetchNotice = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/notices/${id}`);
        setNotice(response.data);
      } catch (error) {
        console.error('공지사항 불러오기 실패:', error);
      }
    };
    fetchNotice();
  }, [id]);

  // 공지사항 DELETE
  const handleDelete = async () => {
    const confirmCancel = window.confirm('정말로 이 공지를 삭제 하시겠습니까?');
    if (confirmCancel) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/notices/${id}`);
        alert('공지가 삭제되었습니다.');
        navigate('/notice');
      } catch (error) {
        console.error('공지사항 삭제 실패:', error);
      }
    } else {
      alert('공지사항 삭제가 취소되었습니다.');
    }
  };

  if (!notice) return <div>로딩 중...</div>;

  return (
    <>
      <div className={styles.pathWrap}>
        <div className={styles.pathWrap__textBox}>
          <LuHome />
          <GoChevronRight />
          <span>공지사항</span>
          <GoChevronRight />
          <span>{notice.currentNotice.title}</span>
        </div>
      </div>
      <section className={styles.secWrap}>
        <div className={styles.secWrap__inner}>
          <div className={styles.mheader}>
            <h2 className={styles.mheader__title}>공지사항</h2>
          </div>
          <h2 className={styles.notice__title}>
            <span>{notice.currentNotice.title}</span>
            <span>{new Date(notice.currentNotice.createdAt).toLocaleDateString()}</span>
          </h2>

          <div className={styles.noticeContent} dangerouslySetInnerHTML={{ __html: notice.currentNotice.content }} />

          <div className={styles.navigation}>
            {notice.nextNotice ? (
              <Link className={styles.arrow} to={`/notice/${notice.nextNotice.id}`}>
                <span>
                  <FaChevronUp />
                </span>
                <span>{notice.nextNotice.title}</span>
              </Link>
            ) : (
              <div className={styles.notArrow}>
                <span>
                  <FaChevronUp />
                </span>
                <span>다음 공지사항이 없습니다</span>
              </div>
            )}
            {notice.prevNotice ? (
              <Link className={styles.arrow} to={`/notice/${notice.prevNotice.id}`}>
                <span>
                  <FaChevronDown />
                </span>
                <span>{notice.prevNotice.title}</span>
              </Link>
            ) : (
              <div className={styles.notArrow}>
                <span>
                  <FaChevronDown />
                </span>
                <span>이전 공지사항이 없습니다</span>
              </div>
            )}
          </div>
          {isAuthenticated ? (
            <>
              <div className={styles.detailBtnWrap}>
                <Link className={styles.detailBtn} to="/notice">
                  목록으로
                </Link>
                <div className={styles.detailBtnWrap__secWrap}>
                  <Link className={styles.detailBtn} to={`/notice/${id}/edit`}>
                    수정하기
                  </Link>
                  <span
                    className={styles.detailBtn}
                    onClick={() => {
                      handleDelete();
                    }}
                  >
                    삭제하기
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div className={`${styles.detailBtnWrap} ${styles.detailBtnCenter}`}>
              <Link className={styles.detailBtn} to="/notice">
                목록으로
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default NoticeDetail;
