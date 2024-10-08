import css from './TransactionLine.module.css';
export default function TransactionLine({
  transaction: { type, amount, currency },
}) {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
}
