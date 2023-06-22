import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

function Expenses(props) {
  const { items } = props;

  return (
    <Card className="expenses">
      <ExpenseItem
        title={items[0].title}
        amount={items[0].amount}
        date={items[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={items[1].title}
        amount={items[1].amount}
        date={items[1].date}
      ></ExpenseItem>

      <ExpenseItem
        title={items[2].title}
        amount={items[2].amount}
        date={items[2].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
