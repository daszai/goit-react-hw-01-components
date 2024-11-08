import style from "./TransactionHistory.module.css";

const Item = ({ id, type, amount, currency }) => {
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

const TransactionHistory = ({ items }) => (
  <table className={style["transaction-history"]}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>{items.map(Item)}</tbody>
  </table>
);

export default TransactionHistory;
