import React from "react";
import styles from "./Home.module.css";
import { TiDelete } from "react-icons/ti";
import moment from "moment";

const TransactionItem = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.date}>
        <p>Date: {props.date}</p>
        <p className={styles.delete} onClick={() => console.log("hello")}>
          <TiDelete />
        </p>
      </div>
      <div className={styles.detail}>
        <h2>{props.name}</h2>
        <h2>$ {props.amount}</h2>
      </div>
    </div>
  );
};

const TransactionList = ({ list }) => {
  const items = list.map((item) => {
    return (
      <TransactionItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        date={item.date}
      />
    );
  });
  return <>{items}</>;
};

export default TransactionList;
