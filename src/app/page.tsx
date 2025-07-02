import Link from 'next/link';
import { DiNpm } from 'react-icons/di';

import Footer from '@/components/base/Footer';
import Header from '@/components/base/Header';
import DirectlyInstallPrompt from '@/components/common/DirectlyInstallPrompt';
import { getExperiencies } from '@/service/experiencies';

export default async function App() {
  const { work, other } = await getExperiencies();
  return (
    <>
      <DirectlyInstallPrompt />
      <Header />
      <main className="flex flex-col">
        <section className="container-layout flex min-h-screen w-full justify-center bg-zinc-800">
          <div className="content-layout border-style border-x bg-neutral-800 p-8 text-app-white lg:p-16">
            <h1 className="hidden-text">이철환(Lani) 프로필</h1>
            <div className="mb-14 break-keep text-xs text-neutral-400 lg:mb-8 lg:text-base">
              <p className="text-center lg:text-right">
                &quot;코드를 읽으면서 짐작했던 기능을 각 루틴이 그대로
                수행한다면
                <br />
                깨끗한 코드라 불러도 되겠다.
                <br />
                코드가 그 문제를 풀기 위한 언어처럼 보인다면
                <br />
                아름다운 코드라 불러도 되겠다.&quot;
              </p>
              <p className="mt-2 text-center lg:text-right">
                - 워드 커닝햄(Ward Cunningham)
              </p>
            </div>
            <div>
              <p className="text-xl lg:text-3xl">이철환 · Lani</p>
              <div className="mt-10">
                <p className="text-base font-bold lg:text-lg">Channel.</p>
                <ul className="mt-2 flex items-center gap-2 lg:mt-2">
                  <li>
                    <Link href="https://github.com/go-lani" target="_black">
                      <img
                        src="/assets/images/icons/github.svg"
                        alt="github"
                        className="h-[16px] w-[16px] lg:h-[18px] lg:w-[18px]"
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
                        className="h-[18px] w-[18px] lg:h-[22px] lg:w-[22px]"
                      />
                    </Link>
                  </li>
                  <li>
                    <a href="mailto:go.lani.developer@gmail.com">
                      <img
                        src="/assets/images/icons/mail.svg"
                        alt="mail"
                        className="h-[24px] w-[24px] lg:h-[22px] lg:w-[22px]"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 break-keep text-sm lg:mt-16 lg:text-base">
              <p className="text-base font-bold lg:text-lg">Introduce.</p>
              <p className="mt-2 lg:mt-4">
                사용자 중심의 사고를 바탕으로{' '}
                <span className="text-app-blue-green">UX 개선</span>에 관심을
                가지고 있으며, <br className="hidden lg:block" />
                개발 지식이 없는 사람도 직관적으로 이해할 수 있는{' '}
                <span className="text-app-blue-green">클린 코드</span> 작성을
                추구합니다.
              </p>
              <p className="mt-2 lg:mt-4">
                <span className="text-app-blue-green">협업</span>을 통해 문제를
                해결하는 과정에서 재미를 느끼고,{' '}
                <br className="hidden lg:block" />더 나은 결과물을 위한{' '}
                <span className="text-app-blue-green">아이디어 제안</span>과{' '}
                <span className="text-app-blue-green">토론</span>
                을 즐기며
                <br />
                <span className="text-app-blue-green">지속적인 학습</span>을
                통해 더 나은 개발자가 되기 위해 노력하고 있습니다.
              </p>
            </div>
            <div className="mt-10 break-keep text-sm lg:mt-16 lg:text-base">
              <p className="text-base font-bold lg:text-lg">Work Experience.</p>
              <ul className="mt-2 flex flex-col gap-4 lg:mt-4">
                {work.map((w) => (
                  <li className="flex gap-4" key={w.id}>
                    <p className="w-[130px] shrink-0 lg:w-[150px]">
                      {w.period}
                      {w.inProgress ? (
                        <>
                          {' '}
                          - <span className="text-app-yellow">now</span>
                        </>
                      ) : (
                        <>
                          <br />
                          <span className="text-sm text-neutral-400">
                            {w.tenureDuration}
                          </span>
                        </>
                      )}
                    </p>
                    <p>
                      {w.company} <br className="block lg:hidden" />
                      <span className="text-xs text-neutral-500 lg:text-sm">
                        {w.tenureDetails}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 break-keep text-sm lg:mt-16 lg:text-base">
              <p className="text-base font-bold lg:text-lg">
                Other Experience.
              </p>
              <ul className="mt-4 flex flex-col gap-4">
                {other.map((o) => (
                  <li
                    className="flex flex-col gap-1 lg:flex-row lg:gap-4"
                    key={o.id}
                  >
                    <p className="w-[130px] shrink-0 lg:w-[150px]">
                      {o.period}
                      {o.inProgress && (
                        <>
                          {' '}
                          - <span className="text-app-yellow">now</span>
                        </>
                      )}
                    </p>
                    <div className="shrink">
                      {o.role} <br className="block lg:hidden" />
                      {o.projects ? (
                        o.projects.map((p) => (
                          <span
                            className="flex gap-2 text-xs text-neutral-500 lg:items-center lg:text-sm"
                            key={p.name}
                          >
                            {p.type === 'extension' && (
                              <img
                                src="/assets/images/icons/extension.svg"
                                alt="chrome extension"
                                className="h-[16px] w-[16px] self-center lg:h-[22px] lg:w-[22px]"
                              />
                            )}
                            {p.type === 'npm' && (
                              <>
                                <i className="hidden shrink-0 lg:block">
                                  <DiNpm
                                    size="2rem"
                                    color="rgb(203 3 3 / 80%)"
                                  />
                                </i>
                                <i className="mt-[5px] flex shrink-0 lg:hidden">
                                  <DiNpm
                                    size="1.5rem"
                                    color="rgb(203 3 3 / 80%)"
                                  />
                                </i>
                              </>
                            )}
                            <Link
                              href={p.link}
                              target="_blank"
                              className="my-[7px] flex shrink  items-center gap-1 break-all"
                            >
                              {p.name}
                              {p.type === 'extension' && (
                                <img
                                  src={`/assets/images/icons/${p.logo}`}
                                  alt="chrome extension"
                                  className="h-[16px] w-[16px] lg:h-[20px] lg:w-[20px]"
                                />
                              )}
                            </Link>
                            {p.type === 'npm' && (
                              <Link
                                href={p.docs}
                                className="my-[7px] shrink italic text-cyan-700"
                              >
                                example
                              </Link>
                            )}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-neutral-500 lg:text-sm">
                          {o.details}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-36 text-center text-xs italic text-neutral-600 lg:text-sm">
              Last Updated on 18th, June, 2025
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
