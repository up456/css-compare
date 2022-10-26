import "./Pure.css";

function Pure() {
  return (
    <div className="pure__container">
      <label className="pure__label">
        <input className="pure__checkbox" type="checkbox" />
        Pure 라벨
      </label>
      <button className="pure__btn">Pure 버튼</button>
      {/* <button className="pure__btn primary-btn">Pure 버튼</button> */}
      {/* <button className="pure__btn primary-btn mouse-effect">Pure 버튼</button> */}
    </div>
  );
}

export default Pure;
