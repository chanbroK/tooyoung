import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade"; // Import react-reveal(Fade)
// https://velog.io/@nomadhash/React-react-reveal%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%B4%EC%84%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EB%A7%8C%EB%93%A4%EA%B8%B0
//https://shylog.com/react-custom-hooks-scroll-animation-fadein/
// https://github.com/jus0k/scroll-hooks
const IntroBlock = styled.div`
  margin-bottom: 135px;
  @media (max-width: 768px) {
    padding: 25px;
  }

  h1 {
    margin: 0;
    font-weight: 300;
    font-size: 45px;
    @media (max-width: 768px) {
      font-size: 30px;
    }
  }
  h3 {
    font-weight: 200;
    font-size: 15px;
  }
`;

const App = () => {
  return (
    <div>
      <Fade bottom>
        {/*  위에서 Import한 Fade모듈을 컴포넌트 형태로 감싸주면 영역 내부의
        태그들만 영향을 받게 된다. 또한 top, bottom 등 방향을 설정해줄 수 있음.
        */}
        <IntroBlock>
          <h1>
            행사 기획자에서 부터 <br />
            퍼스널 트레이너, <br />
            그리고 <strong>개발자</strong>를 꿈꾸기 까지
          </h1>
          <h3>
            Lorem Ipsum is simply dummy text of the <br />
            printing and typesetting industry. Lorem Ipsum has been <br />
            the industry's standard dummy text ever since the 1500s
          </h3>
        </IntroBlock>
      </Fade>
    </div>
  );
};

export default App;
