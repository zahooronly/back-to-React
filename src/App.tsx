import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  let americanStates = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
  ];
  //   americanStates = [];

  return (
    <div>
      <ListGroup americanStates={americanStates} heading="Cities" />
    </div>
  );
}
export default App;
