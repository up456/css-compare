import React from "react";
import styles from "./Post.module.css";

function Post() {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input className={styles.checkbox} type="checkbox" />
        Post 라벨
      </label>
      <button className={styles.btn}>Post 버튼</button>
      {/* <button className={`${styles.btn} primary-btn`}>Post 버튼</button> */}
      {/* <button className={`${styles.btn} primary-btn mouse-effect`}>
        Post 버튼
      </button> */}
    </div>
  );
}

export default Post;
