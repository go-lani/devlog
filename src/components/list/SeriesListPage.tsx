import { SeriesGroup } from '@/service/posts';

import SeriesListContainer from './SeriesListContainer';

interface Props {
  series: {
    seriesNames: string[];
    seriesGroup: SeriesGroup;
  };
}

export default function SeriesListPage({
  series: { seriesNames, seriesGroup },
}: Props) {
  return (
    <>
      <section className="container-layout border-style grow-0 border-b bg-zinc-800">
        <div className="content-layout border-style relative border-x px-4 pt-16 md:px-5 md:pt-24">
          <div className="flex-start border-style mx-[-1rem] flex border-t p-4 md:mx-[-1.25rem] md:p-5">
            <h1 className="relative text-5xl text-app-white md:text-7xl">
              Series
              <span className="absolute right-[-1.25rem] top-0 text-2xl text-app-red">
                {seriesNames.length}
              </span>
            </h1>
          </div>
        </div>
      </section>
      <section className="container-layout border-style bg-zinc-800">
        <div className="content-layout border-style border-x">
          <SeriesListContainer
            seriesNames={seriesNames}
            seriesGroup={seriesGroup}
          />
        </div>
      </section>
    </>
  );
}
