import React, { useState } from "react";
import InsideNav from "../NavBar/InsideNav";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
export default function Terms() {
  const [checked0, setchecked0] = useState(false);
  const [checked1, setchecked1] = useState(false);
  const [checked2, setchecked2] = useState(false);
  const [allChecked, setAllchecked] = useState(false);
  const history = useHistory();

  const handleAllChecked = () => {
    setchecked0(!allChecked);
    setchecked1(!allChecked);
    setchecked2(!allChecked);
    setAllchecked(!allChecked);
  };
  const checkBoxStyles = (theme) => ({
    root: {
      "&$checked": {
        color: "#111",
      },
    },
    checked: {},
  });

  const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);
  return (
    <div style={{ width: "100%" }}>
      <InsideNav />
      <div
        style={{ paddingTop: "160px", marginLeft: "20%", marginRight: "20%" }}
      >
        <span style={{ fontWeight: "bold" }}>투영 서비스 이용약관 (필수)</span>
        <CustomCheckbox
          style={{ marginBottom: "2px" }}
          checked={checked0}
          onClick={() => setchecked0(!checked0)}
        />
        <br />
        <div
          style={{ border: "1px solid ", width: "100%", height: "15vh" }}
        ></div>
      </div>
      <br />
      <div style={{ marginLeft: "20%", marginRight: "20%" }}>
        <span style={{ fontWeight: "bold" }}>
          개인 정보 수집 및 이용 동의(필수)
        </span>
        <CustomCheckbox
          style={{ marginBottom: "2px" }}
          checked={checked1}
          onClick={() => setchecked1(!checked1)}
        />
        <br />
        <div
          style={{ border: "1px solid ", width: "100%", height: "15vh" }}
        ></div>
      </div>
      <div style={{ marginLeft: "20%", marginRight: "20%" }}>
        <br />
        <span style={{ fontWeight: "bold" }}>
          프로모션 정보 수신 동의 (선택)
        </span>
        <CustomCheckbox
          style={{ marginBottom: "2px" }}
          checked={checked2}
          onClick={() => setchecked2(!checked2)}
        />
        <br />
        <span>
          &nbsp; 투영에서 제공하는 이벤트/혜택 등의 다양한 정보를 휴대전화,
          e-mail 등을 통해서 받아보실 수 있습니다.
        </span>
      </div>
      <div
        style={{ marginLeft: "20%", marginRight: "20%", textAlign: "center" }}
      >
        <span style={{ fontWeight: "bold" }}>전체동의</span>
        <CustomCheckbox
          style={{ marginBottom: "2px" }}
          checked={allChecked}
          onClick={handleAllChecked}
        />
        <br />
        <Link to="/">
          <Button
            style={{
              backgroundColor: "#AFAFAF",
              borderColor: "#AFAFAF",
              height: "4vh",
              marginTop: "2%",
              width: "10vw",
              marginRight: "1%",
            }}
          >
            취소
          </Button>
        </Link>

        <Button
          style={{
            backgroundColor: "black",
            borderColor: "black",
            height: "4vh",
            marginTop: "2%",
            width: "10vw",
            marginLeft: "1%",
          }}
          onClick={() =>
            history.push({
              pathname: "/signup",
              state: {
                checked0: checked0,
                checked1: checked1,
                checked2: checked2,
              },
            })
          }
        >
          확인
        </Button>
      </div>
    </div>
  );
}
