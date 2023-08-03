import { useState } from "react";

interface Props {
  americanStates: string[];
  heading: String;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ americanStates, heading, onSelectItem }: Props) => {
  const [selectedItem, setSelectedItem] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {americanStates.length === 0 && <p>There are no states to display.</p>}
      <ul className="list-group">
        {americanStates.map((state, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={state}
            onClick={(event) => {
              //   console.log(state, index);
              //   console.log(event);
              setSelectedItem(index);
              onSelectItem(state);
            }}
          >
            {state}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
