import { MouseEvent, useState } from "react";
function List() {
  let items = ["New York", "Nepal", "Itahari", "kathmandu"];
  // let selectedIndex = 0;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // arr[0];
  // arr[1];

  //   Event Handler
  // const handleClick = (event: MouseEvent) => {
  //   console.log(event);
  // };
  return (
    <>
      <h1>List Groups</h1>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
