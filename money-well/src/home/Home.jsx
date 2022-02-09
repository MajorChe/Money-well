import React, { useEffect, useState } from "react";
import { useFireStore } from "../hooks/useFireStore";
import styles from "./Home.module.css";
import { useAuthContext } from "../hooks/useAuthContext";
import moment from "moment";

const Home = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const { user } = useAuthContext();
  const { addDocument, response } = useFireStore("transactions");

  const current_date = moment(new Date()).format("YYYY-MM-DD");

  useEffect(() => {
    if (response.success) {
      setName("");
      setAmount("");
      setDate("");
      console.log("hello");
    }
  }, [response.success]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      uid: user.uid,
      name,
      amount,
      date,
    });
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.leftContainer}>
          <form onSubmit={handleSubmit}>
            <h2>Add a Transaction </h2>
            <br></br>
            <label>Transaction name: </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <label>Amount ($): </label>
            <input
              type="number"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              required
            />
            <label>Date: </label>
            <input
              type="date"
              onChange={(e) => setDate(e.target.value)}
              max={current_date}
              value={date}
              required
            />
            <button className="btn">Add to list</button>
          </form>
        </div>
        <div className={styles.rightContainer}>
          <h1>Transactions</h1>
          <div className={styles.item}>
            <h4 onClick={() => console.log("hello")}>x</h4>
            <div className={styles.detail}>
              <h2>Groceries</h2>
              <h2>$150</h2>
            </div>
          </div>
          {/* <div className={styles.item}>
            <h4 onClick={() => console.log("hello")}>x</h4>
            <div className={styles.detail}>
            <h2>Clothes</h2>
            <h2>$250</h2>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
