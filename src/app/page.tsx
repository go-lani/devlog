import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/base/Footer';
import Header from '@/components/base/Header';
import { prefix } from '@/utils/prefix';

export default function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <section className="container-layout flex min-h-screen w-full justify-center bg-zinc-800">
          <div className="content-layout border-style border-x bg-neutral-800 p-8 text-app-white md:p-16">
            <h1 className="hidden-text">이철환(Lani) 프로필</h1>
            <div className="mb-14 break-keep text-xs text-neutral-400 md:mb-8 md:text-base">
              <p className="text-center md:text-right">
                &quot;코드를 읽으면서 짐작했던 기능을 각 루틴이 그대로
                수행한다면
                <br />
                깨끗한 코드라 불러도 되겠다.
                <br />
                코드가 그 문제를 풀기 위한 언어처럼 보인다면
                <br />
                아름다운 코드라 불러도 되겠다.&quot;
              </p>
              <p className="mt-2 text-center md:text-right">
                - 워드 커닝햄(Ward Cunningham)
              </p>
            </div>
            <div>
              <p className="text-xl md:text-3xl">이철환 · Lani</p>
              <div className="mt-10">
                <p className="text-base font-bold md:text-lg">Channel.</p>
                <ul className="mt-2 flex items-center gap-2 md:mt-2">
                  <li>
                    <Link href="https://github.com/go-lani" target="_black">
                      <img
                        src="/assets/images/icons/github.svg"
                        alt="github"
                        className="h-[16px] w-[16px] md:h-[18px] md:w-[18px]"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://cholani.notion.site/cholani/b7629e0716ca40bda70c1038776e8a46"
                      target="_blank"
                    >
                      <img
                        src="/assets/images/icons/resume.svg"
                        alt="mail"
                        className="h-[18px] w-[18px] md:h-[22px] md:w-[22px]"
                      />
                    </Link>
                  </li>
                  <li>
                    <a href="mailto:go.lani.developer@gmail.com">
                      <img
                        src="/assets/images/icons/mail.svg"
                        alt="mail"
                        className="h-[24px] w-[24px] md:h-[22px] md:w-[22px]"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 break-keep text-sm md:mt-16 md:text-base">
              <p className="text-base font-bold md:text-lg">Introduce.</p>
              <p className="mt-2 md:mt-4">
                사용자 중심에서 생각하는 것을 좋아하며, 사용자 행동을 고려한{' '}
                <br className="hidden md:block" />
                <span className="text-app-blue-green">사용자 경험(UX)</span>을
                개선에 관심이 있습니다.
              </p>
              <p className="mt-2 md:mt-4">
                <span className="text-app-blue-green">클린 코드</span>에 관심이
                있고, 개발 지식이 없는 사람도 제 코드를 보고{' '}
                <br className="hidden md:block" />
                어떤 기능을 하는지 알 수 있는 코드를 작성하는 것을 목표 하고
                있습니다.
              </p>
            </div>
            <div className="mt-10 break-keep text-sm md:mt-16 md:text-base">
              <p className="text-base font-bold md:text-lg">Work Experience.</p>
              <ul className="mt-2 md:mt-4">
                <li className="flex gap-4">
                  <p className="w-[150px] shrink-0">
                    2023.07 - <span className="text-app-yellow">now</span>
                  </p>
                  <p>
                    Wemade. <br className="block md:hidden" />
                    <span className="text-xs text-neutral-500 md:text-sm">
                      Front-end Developer
                    </span>
                  </p>
                </li>
                <li className="mt-2 flex gap-4 md:mt-4">
                  <p className="w-[150px] shrink-0">
                    2020.04 - 2023.07
                    <br />
                    <span className="text-sm text-neutral-400">
                      (3년 3개월)
                    </span>
                  </p>
                  <p>
                    Openknowl. <br className="block md:hidden" />
                    <span className="text-xs text-neutral-500 md:text-sm">
                      Front-end Developer, Tech Lead
                    </span>
                  </p>
                </li>
                <li className="mt-2 flex gap-4 md:mt-4">
                  <p className="w-[150px] shrink-0">
                    2017.06 - 2019.09
                    <br />
                    <span className="text-sm text-neutral-400">
                      (2년 3개월)
                    </span>
                  </p>
                  <p>
                    Newriver. <br className="block md:hidden" />
                    <span className="text-xs text-neutral-500 md:text-sm">
                      UI Developer
                    </span>
                  </p>
                </li>
              </ul>
            </div>
            <div className="mt-10 break-keep text-sm md:mt-16 md:text-base">
              <p className="text-base font-bold md:text-lg">
                Other Experience.
              </p>
              <ul className="mt-4">
                <li className="flex gap-4">
                  <p className="w-[150px] shrink-0">2023.06</p>
                  <p>
                    Contributor. <br className="block md:hidden" />
                    <span className="text-xs text-neutral-500 md:text-sm">
                      Next.js 13 번역
                    </span>
                  </p>
                </li>
                <li className="mt-2 flex gap-4 md:mt-4">
                  <p className="w-[150px] shrink-0">
                    2022.04 - <span className="text-app-yellow">now</span>
                  </p>
                  <p>
                    Team101. <br className="block md:hidden" />
                    <span className="text-xs text-neutral-500 md:text-sm">
                      Side Project Team, Front-end Developer
                    </span>
                  </p>
                </li>
                <li className="mt-2 flex gap-4 md:mt-4">
                  <p className="w-[150px] shrink-0">2021.05 - 2021.06</p>
                  <p>
                    베타 리더. <br className="block md:hidden" />
                    <span className="text-xs text-neutral-500 md:text-sm">
                      리액트 네이티브를 다루는 기술
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
