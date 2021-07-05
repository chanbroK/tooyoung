//https://www.npmjs.com/package/react-scroll
// 전체 div를 scroll로 감싸서 브라우저의 scroll이 아닌 reactDom의 scroll을 사용해야함
export const scrollAction = (perWidth: number, beforeY: number) => {
  const curY = window.scrollY;
  let newY;
  if (curY % perWidth === 0) {
    return;
  }
  if (curY > beforeY) {
    console.log("down");
  } else {
    console.log("up");
  }
  // if(curY % 500 > 50){
  //   window.scrollTo(scrollX,)
  // }
};
