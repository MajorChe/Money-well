import React from "react";
import styles from "./Home.module.css";
import { TiDelete } from "react-icons/ti";
import moment from "moment";
import { useFireStore } from "../hooks/useFireStore";

const TransactionItem = (props) => {
  const { deleteDocument, response } = useFireStore("transactions");
  const handleDelete = () => {
    deleteDocument(props.id);
    alert("Record deleted")
  };
  return (
    <div className={styles.item}>
      <p className={styles.delete} onClick={handleDelete}>
        <TiDelete />
      </p>
      <div className={styles.detail}>
        <h2>{props.name}</h2>
        <h2>$ {props.amount}</h2>
      </div>
      <p className={styles.created}>
        Transaction recorded on:{" "}
        {moment(props.createdAt).format("DD MMM, YYYY")}&nbsp;&nbsp;
      </p>
    </div>
  );
};

const TransactionList = ({ list }) => {
  const sortedByDate = [];
  list.forEach((item) => {
    if (item.date in sortedByDate) {
      sortedByDate[item.date].push(item);
    } else {
      sortedByDate[item.date] = [item];
    }
  });
  const items = Object.values(sortedByDate).map((item, index) => {
    return (
      <div key={index}>
        <p className={styles.date}>
          Date of purchase: {moment(item[0].date).format("D MMM YYYY")}
        </p>
        {item.map((subitem) => {
          return (
            <TransactionItem
              key={subitem.id}
              id={subitem.id}
              name={subitem.name}
              amount={subitem.amount}
              date={subitem.date}
              created={subitem.createdAt}
            />
          );
        })}
      </div>
    );
  });
  return <>{items}</>;
};

export default TransactionList;
