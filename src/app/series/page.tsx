import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'devlog - series',
  description: "lani's devlog",
};

export default function Series() {
  return (
    <section className="container-layout">
      <div className="content-layout border-style border-x">
        <ul>
          <li>series1</li>
          <li>series2</li>
          <li>series3</li>
          <li>series4</li>
          <li>series5</li>
          <li>series6</li>
        </ul>
      </div>
    </section>
  );
}
