import React, { useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
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
              required
            />
            <label>Amount ($): </label>
            <input
              type="number"
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            <label>Date: </label>
            <input
              type="date"
              onChange={(e) => setDate(e.target.value)}
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
