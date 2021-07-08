//https://www.npmjs.com/package/react-scroll
// 전체 div를 scroll로 감싸서 브라우저의 scroll이 아닌 reactDom의 scroll을 사용해야함
let beforeY = 0;
export const scrollAction = (perHeight: number) => {
  const curY = window.scrollY;
  if (curY % perHeight === 0) {
    return;
  }
  if (curY > beforeY) {
    console.log("down");
    window.scrollTo(window.scrollX, window.scrollY + perHeight);
  } else {
    console.log("up");
    window.scrollTo(window.scrollX, window.scrollY - perHeight);
  }
  // if(curY % 500 > 50){
  //   window.scrollTo(scrollX,)
  // }
};
