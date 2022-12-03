import React from "react";
import "./Home.css";

const Home = () => {
  //1)HTML골격->리액트로 변경 2)CSS->tailwind로 변경  3)JS 기능 순차적 적용 ㄱ.세션나누기 ㄴ.스크롤 ㄷ.스크롤 애니
  return (
    <div>
      <div className="product-Name">
        <div className="contents title">
          <h1>하데스 모기채</h1>
        </div>
      </div>
      <div className="contents">
        <section className="section" id="section-0">
          <h1>하데스 모기채</h1>
          <div className="sticky image-message">
            <p>모기도 무자비하게</p>
            {/*sticky가 들어간 div가 4번 반복된다. 컨포넌트로 꺼낼까?*/}
          </div>
          <div className="sticky image-message">
            <p>호두도 무자비하게</p>
          </div>
          <div className="sticky image-message">
            <p>
              부술 수 있는
              <br />
              최고급 퇴치 기구
            </p>
          </div>
          <div className="sticky image-message">
            <p>
              늦가을 밤<br />
              모기 같은 그대를
            </p>
          </div>
          <div className="sticky image-message">
            <p>
              퇴치하자!
              <br />
              없애버리자!
            </p>
          </div>
        </section>
        <section className="section" id="section-1">SECTION1</section>
        <section className="section" id="section-2">SECTION2</section>
        <section className="section" id="section-3">SECTION3</section>
      </div>
    </div>
  );
};

export default Home;
