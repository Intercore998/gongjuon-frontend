import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import adminTokenStore from '@store/adminTokenStore';
import NotFound from '@components/NotFound';
import './ckeditor.css';
import styles from './NoticeEditor.module.scss';

const NoticeEditor = ({ isEdit, noticeData }) => {
  const { id } = useParams();

  const [title, setTitle] = useState('');
  // contents ckEditor로 인해 TEXT형싱(html)그대로 전송됨
  const [content, setContent] = useState('');
  // 기본 type notice
  const [type, setType] = useState('notice');

  const { isAuthenticated } = adminTokenStore();

  const navigate = useNavigate();

  useEffect(() => {
    // isEdit인 경우 수정, isEdit이 없는경우 생성
    if (isEdit) {
      const fetchNoticeData = async () => {
        // id와 일치하는 데이터 정보 GET요청
        try {
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/notices/${id}`);
          const noticeData = response.data.currentNotice;
          setTitle(noticeData.title); // 서버에서 가져온 제목 설정
          setContent(noticeData.content); // 서버에서 가져온 내용 설정
          setType(noticeData.type); // 서버에서 가져온 공지사항 타입 설정
        } catch (error) {
          console.error('공지사항 불러오기 실패:', error);
        }
      };
      fetchNoticeData(); // 공지사항 데이터를 서버에서 가져옴
    }
  }, [isEdit, id]);

  // 커스텀 이미지 업로드 어댑터
  const customUploadAdapter = (loader) => {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const formData = new FormData();
          loader.file.then((file) => {
            formData.append('image', file);
            // 서버로 이미지 업로드
            axios
              .post(import.meta.env.VITE_API_URL + '/upload/upload-image', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              })
              .then((res) => {
                console.log(res.data);
                resolve({
                  default: import.meta.env.VITE_API_IMGURL + res.data.url, // 서버에서 받은 이미지 URL
                });
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      },
      abort: () => {
        // 업로드 중단 시 처리
      },
    };
  };

  // ckEditor PlugIn 설정
  function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return customUploadAdapter(loader);
    };
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      type,
      content, // CKEditor에서 저장한 HTML 내용
    };

    try {
      // isEdit이 있는경우 update, isEdit이 아닌 경우 create
      const response = isEdit
        ? await axios.put(`${import.meta.env.VITE_API_URL}/notices/${id}`, formData, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
        : await axios.post(`${import.meta.env.VITE_API_URL}/notices`, formData, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
      alert(isEdit ? '공지사항이 수정되었습니다.' : '공지사항이 작성되었습니다.');
      navigate('/notice');
    } catch (error) {
      console.error('공지사항 작성/수정 실패:', error.response ? error.response.data : error.message);
      alert('공지사항 작성에 실패했습니다. 오류를 확인하세요.');
    }
  };

  return (
    <>
      {isAuthenticated ? (
        <section className={styles.secWrap}>
          <div className={styles.secWrap__inner}>
            <div className={styles.mheader}>
              <h2 className={styles.mheader__title}>{isEdit ? '공지사항 수정' : '공지사항 작성'}</h2>
            </div>

            <div className={styles.formBox}>
              <label className={styles.formBox__label} htmlFor="noticeSel">
                공지 & 뉴스 선택
              </label>
              <select id="noticeSel" className={styles.titleInput} value={type} onChange={(e) => setType(e.target.value)}>
                <option value="notice">공지</option>
                <option value="news">뉴스</option>
              </select>
            </div>

            {/* 제목 입력 */}

            <div className={styles.formBox}>
              <label className={styles.formBox__label} htmlFor="title">
                제목
              </label>
              <input id="title" className={styles.titleInput} type="text" placeholder="제목을 입력하세요" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            {/* CKEditor */}
            <div className={styles.ckeditor__container}>
              <CKEditor
                editor={ClassicEditor}
                data={content}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setContent(data); // 에디터에서 작성한 HTML을 content로 저장
                }}
                config={{
                  extraPlugins: [MyCustomUploadAdapterPlugin], // Custom Upload Adapter 사용
                }}
              />
            </div>

            <button className={styles.submitBtn} onClick={handleSubmit}>
              {isEdit ? '수정하기' : '작성하기'}
            </button>
          </div>
        </section>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default NoticeEditor;
