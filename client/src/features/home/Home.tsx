import React from 'react'
import './Home.css';

const Home = () => { //1)HTML골격->리액트로 변경 2)CSS->tailwind로 변경  3)JS 기능 순차적 적용 ㄱ.세션나누기 ㄴ.스크롤 ㄷ.스크롤 애니
  return (
    <div >
      <div>
        <div>
          <h1>하데스 모기채</h1>
          <div>
            <p>모기도 무자비하게</p>
          </div>
          <div>
            <p>호두도 무자비하게</p>
          </div>
          <div>
            <p>헤치울 수 있는<br/>최고급 퇴치 기구</p>
          </div>
          <div>
            <p>늦가을 밤<br/>모기 같은 그대에게</p>            
          </div>
          <div>
            <p>심판을 내리는<br/>최고의 도구</p>
          </div>
        </div>
        <div>SECTION2</div>
        <div>
          <div>SECTION3</div>
          <div>SECTION4</div>
        </div>
      </div>
    </div>
  )
}

export default Home