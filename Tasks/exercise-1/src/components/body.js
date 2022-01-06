import React from "react";
import Main from "./main.js";
import Side from "./side.js";
import styles from "./styles.module.css";

export default class Body extends React.Component {
    render() {
        return (
            <div className={styles.mainBody}>
                <Main />
                <Side />
            </div>
        )
    }
}