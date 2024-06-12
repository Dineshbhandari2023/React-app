import { MouseEvent, useState } from "react";
interface Props {
  items: string[];
  headings: string;
  onSelectItem: (item: string) => void;
}
function List({ items, headings, onSelectItem }: Props) {
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
      <h1>{headings}</h1>
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
              onSelectItem(item);
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
