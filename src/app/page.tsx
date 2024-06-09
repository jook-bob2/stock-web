import * as style from './page.css';

export default function Home() {
  return (
    <section className={style.container}>
      <p>Vanilla-extract를 사용해보니 좋은 느낌</p>
      <p>테마 기능이 강력하다.</p>
      <p>독립적으로 사용할 수 있어서 함수형 컴포넌트와 잘 맞는다.</p>
      <p>유지보수에 굉장히 좋을 것으로 보여진다.</p>
      <p>렌더링 성능이 우수하다.</p>
      <p>tailwind랑 styled-components는 잠시 잊자.</p>
    </section>
  );
}
