import { useState } from "react";
import Alert from "./components/Alert/Alert";
import Button from "./components/Button/Button";
// import ListGroup from "./components/ListGroup/ListGroup";

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
  //   americanStates = [];
  // const onSelectHandler = (item: string) => {
  //   console.log(item);
  // };
  const [visibility, setVisibility] = useState(false);
  return (
    <div>
      {/* <ListGroup
        americanStates={americanStates}
        onSelectItem={onSelectHandler}
        heading="Cities"Alert
      /> */}
      {visibility && (
        <Alert onClose={() => setVisibility(false)}>
          <h1>Alert Component</h1>
        </Alert>
      )}
      <Button clickFunc={() => setVisibility(true)}>Click here</Button>
    </div>
  );
}
export default App;
