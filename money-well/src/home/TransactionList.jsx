import React from "react";
import styles from "./Home.module.css";
import { TiDelete } from "react-icons/ti";

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
        <h3>{props.name}</h3>
        <h3>$ {props.amount}</h3>
      </div>
    </div>
  );
};

const TransactionList = ({ list }) => {
  // console.log("this is the list", list);
  // const results = [];
  // list.forEach((item) => {
  //   if (item.date in results) {
  //     results[item.date].push(item);
  //   } else {
  //     results[item.date] = [item];
  //   }
  // });
  // console.log("this is results", results); //Array of key value pairs
  // for (let i in results) {
  //   console.log(i);
  //   // console.log(results[i])
  //   results[i].map((item) => console.log("hello", item));
  // }
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
