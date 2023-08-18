import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'devlog - posts',
  description: "lani's devlog",
};

export default function Posts() {
  return (
    <section className="container-layout">
      <div className="content-layout border-style border-x-2">
        <ul>
          <li>post1</li>
          <li>post2</li>
          <li>post3</li>
          <li>post4</li>
          <li>post5</li>
          <li>post6</li>
        </ul>
      </div>
    </section>
  );
}
