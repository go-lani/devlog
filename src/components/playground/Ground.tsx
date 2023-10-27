'use client';

import '@lani.ground/react-modal/css';
import { ImageViewerProvider } from '@lani.ground/react-image-viewer';
import '@lani.ground/react-image-viewer/css';

export default function Ground() {
  return (
    <>
      <main className="flex flex-col text-white">
        <h1 className="p-20 text-2xl">playground</h1>
        <ImageViewerProvider
          controller={{
            prev: (
              <button type="button">
                <img
                  src="/assets/images/icons/left-arrow-white.svg"
                  alt="이전"
                  className="w-[50px]"
                />
              </button>
            ),
            next: (
              <button type="button" className="opacity-100 disabled:opacity-30">
                <img
                  src="/assets/images/icons/right-arrow-white.svg"
                  alt="다음"
                  className="w-[50px]"
                />
              </button>
            ),
          }}
        >
          <div style={{ width: '800px', margin: '0 auto' }} data-v-176fb824="">
            <p>
              <br />
            </p>
            <p>
              <strong>
                <span>계정 인증</span>
              </strong>
            </p>
            <p>
              <br />
            </p>
            <p>
              <img
                src="https://file.nightcrows.co.kr/upload/live/guideGame/3/1687948161419-2e3a375b-1a4e-4f81-ac10-54c95b2e007e.jpg"
                alt=""
                style={{ width: '100%' }}
              />
            </p>
            <p id="isPasted">
              · 2023년 6월 28일(수) 17시 이후부터 신규 생성 후 게임에 접속하는
              계정에 한해 계정 인증 절차가 추가됩니다.
            </p>
            <p>
              · 6월 28일(수) 17시 이전에 생성한 계정이라도 추가 인증이 필요할
              경우 인증을 요청할 수 있습니다.
            </p>
            <p>
              <br />
            </p>
            <p>
              <img
                src="https://file.nightcrows.co.kr/upload/live/guideGame/3/1687948173009-93a7da77-4e91-4534-b5ab-f7b4d82bf425.jpg"
                alt=""
                style={{ width: '100%' }}
              />
            </p>
            <p id="isPasted">
              · ‘인증하기’ 버튼을 클릭하여 계정 인증 절차 진행할 수 있습니다.
            </p>
            <p>
              <br />
            </p>
            <p>
              <img
                src="https://file.nightcrows.co.kr/upload/live/guideGame/3/1687948185774-39ea0744-9c7e-4a7c-b816-33bcd0fe5b20.jpg"
                alt=""
                style={{ width: '100%' }}
              />
            </p>
            <p id="isPasted">
              1. &nbsp;계정 인증을 위해 ‘개인 정보 수집 · 이용 동의’가
              필요합니다.
            </p>
            <p>
              2. ‘개인 정보 수집 · 이용 동의’를 완료하신 뒤 ‘인증하기’ 버튼을
              클릭하여 모바일 인증을 진행합니다.
            </p>
            <p>
              <br />
            </p>
            <p>
              <img
                src="https://file.nightcrows.co.kr/upload/live/guideGame/3/1687948262377-327d93ed-2501-4865-9588-f6d3968dacd5.jpg"
                alt=""
                style={{ width: '100%' }}
              />
            </p>
            <p>
              · ‘개인 정보 수집 · 이용 동의’와 모바일 인증을 통한 ‘인증하기’
              절차가 완료되면 정상적으로 게임 이용이 가능합니다.
            </p>
            <p>
              <br />
            </p>
            <p>
              <img
                src="https://file.nightcrows.co.kr/upload/live/guideGame/3/1687948245348-60795a5e-0285-4f37-9821-535cfba9e7e9.jpg"
                alt=""
                style={{ width: '100%' }}
              />
            </p>
            <p id="isPasted">
              · 계정 인증 완료 후 ‘게임 접속’ 버튼을 클릭하여 나이트 크로우
              세계로 모험을 시작하세요.
              <br />
              <span>
                ※ 휴대전화 번호 1개당 최대 3개의 계정을 등록/인증하여 사용할 수
                있습니다.
              </span>
            </p>
            <p>
              <br />
            </p>
            <p>
              <strong>
                <span>계정 인증 해제</span>
              </strong>
            </p>
            <p>
              · 계정 탈퇴를 진행하실 경우 인증 내역이 삭제되지 않기 때문에,
              별도로 계정 인증 해제가 필요합니다.
            </p>
            <p>
              <br />
            </p>
            <p>
              <span>
                <img
                  src="https://file.nightcrows.co.kr/upload/live/guideGame/3/1693450050413-1358a945-ca72-4a4b-82a2-b3d491dc6491.jpg"
                  alt=""
                  style={{ width: '100%' }}
                />
              </span>
              · 계정 인증 해제는{' '}
              <a
                href="https://nightcrows.co.kr/mypage"
                target="_blank"
                rel="noopener noreferrer"
              >
                [공식 커뮤니티 &gt; 마이페이지]
              </a>{' '}
              메뉴에서 가능하며, 마이페이지는 직업 아이콘이나 단원님의 캐릭터
              이름을 클릭하시면 이동하실 수 있습니다.
            </p>
            <p>
              <br />
            </p>
            <p>
              <img
                src="https://file.nightcrows.co.kr/upload/live/guideGame/3/1693450074396-89bc6a9d-f6c8-43a7-81d5-e93955a68b8a.jpg"
                alt=""
                style={{ width: '100%' }}
              />
            </p>
            <p>
              · [마이페이지] 하단에 ‘인증 계정 정보’ 목록에서 단원님의 인증
              정보로 인증된 계정 목록을 확인하실 수 있으며, 로그인된 계정의
              인증을 해제하실 수 있습니다.
            </p>
            <p>
              <br />
            </p>
            <p>
              <img
                src="https://file.nightcrows.co.kr/upload/live/guideGame/3/1693450083124-5c7fc490-ae39-4dd0-abff-1e7d26c72c6b.jpg"
                alt=""
                style={{ width: '100%' }}
              />
            </p>
            <p id="isPasted">
              · 인증 해제를 원하실 경우 캐릭터 이름 우측의 &nbsp;[인증 해제]
              버튼을 클릭하시면 인증 해제를 진행하실 수 있습니다.
            </p>
            <p>
              <br />
            </p>
            <p>
              <img
                src="https://file.nightcrows.co.kr/upload/live/guideGame/3/1693450104702-e6e6001a-de1e-449c-9650-89bdd12ba8e4.jpg"
                alt=""
                style={{ width: '100%' }}
              />
            </p>
            <p id="isPasted">
              · 인증 해제 팝업에서 ‘확인’ 버튼을 클릭하면 계정 인증이 해제가
              완료됩니다.
            </p>
            <p>
              <span>
                * 인증 해제 후 게임 접속을 진행하면 ‘계정 인증’ 절차가
                필요합니다.
              </span>
            </p>
            <p>
              <span>
                * 인증을 해제하지 않고 탈퇴를 진행하셨을 경우, 고객센터를 통해
                문의를 접수해 주시길 부탁드립니다.
              </span>
            </p>
          </div>
        </ImageViewerProvider>
      </main>
    </>
  );
}
