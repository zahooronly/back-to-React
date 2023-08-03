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
  const onSelectHandler = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        americanStates={americanStates}
        onSelectItem={onSelectHandler}
        heading="Cities"
      />
    </div>
  );
}
export default App;
