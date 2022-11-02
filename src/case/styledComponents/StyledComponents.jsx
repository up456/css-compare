import React from "react";
import styled from "styled-components";

function StyledComponents(props) {
  const Cotainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: lightcoral;
  `;

  const Label = styled.label`
    accent-color: aqua;
    /* accent-color: var(--mainTheme-color); */
  `;

  const Button = styled.button`
    background-color: aqua;
    color: white;
    cursor: pointer;
  `;

  return (
    <Cotainer>
      <Label>
        <input type="checkbox" />
        Pure 라벨
      </Label>
      <Button className="pure__btn">Pure 버튼</Button>

      {/* <Button className="pure__btn primary-btn">Pure 버튼</Button>
      <Button className="pure__btn primary-btn mouse-effect">Pure 버튼</Button> */}
    </Cotainer>
  );
}

export default StyledComponents;
