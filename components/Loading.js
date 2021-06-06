import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loaderContainer}>
      <img src="/loading.gif" alt="Loading"></img>
    </div>
  );
};

export default Loading;
