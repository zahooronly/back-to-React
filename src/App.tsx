import { useState } from "react";
import Alert from "./components/Alert/Alert";
import Button from "./components/Button/Button";
import Like from "./components/Like/Like";
import ListGroup from "./components/ListGroup/ListGroup";
import ExpenseList from "./expense-traker/components/ExpenseList/ExpenseList";

function App() {
  // let americanStates = [
  //   "Alabama",
  //   "Alaska",
  //   "Arizona",
  //   "Arkansas",
  //   "California",
  //   "Colorado",
  //   "Connecticut",
  //   "Delaware",
  //   "Florida",
  //   "Georgia",
  // ];
  // americanStates = [];
  // const onSelectHandler = (item: string) => {
  //   console.log(item);
  // };
  // const [visibility, setVisibility] = useState(false);

  let expenses = [
    { id: 1, description: "Buy a car", amount: 10000, category: "Car" },
    { id: 2, description: "Buy a house", amount: 100000, category: "House" },
    { id: 3, description: "Buy a bike", amount: 1000, category: "Bike" },
    { id: 4, description: "Buy a laptop", amount: 100, category: "Laptop" },
    { id: 5, description: "Buy a phone", amount: 100, category: "Phone" },
    // create five more objects of laptop category
    { id: 6, description: "Buy a laptop", amount: 100, category: "Laptop" },
    { id: 7, description: "Buy a laptop", amount: 100, category: "Laptop" },
    { id: 8, description: "Buy a laptop", amount: 100, category: "Laptop" },
    { id: 9, description: "Buy a laptop", amount: 100, category: "Laptop" },
    { id: 10, description: "Buy a laptop", amount: 100, category: "Laptop" },
  ];

  return (
    <div>
      {/* <ListGroup
        americanStates={americanStates}
        onSelectItem={onSelectHandler}
        heading="Cities"
        // Alert
      />
      {visibility && (
        <Alert onClose={() => setVisibility(false)}>
          <h1>Alert Component</h1>
        </Alert>
      )}
      <Button clickFunc={() => setVisibility(true)}>Click here</Button>
      <Like clickOnLike={() => console.log("Clicked")} /> */}

      <ExpenseList
        expenses={expenses}
        onDelete={(id) => console.log("Delete", id)}
      />
    </div>
  );
}
export default App;
