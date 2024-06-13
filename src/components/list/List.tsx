import { MouseEvent, useState } from "react";
import styled from "styled-components";
import styles from "./List.module.css";

const ListStyle = styled.ul`
  list-style: none;
  padding: 0;
`;
const LiStyle = styled.li<ListItemProps>`
  padding: 5px 0;
  margin: 10px;
  background: ${(props) => (props.active ? "blue" : "lightblue")};
`;

const HeadStyle = styled.h1`
  padding: 0;
  margin: 10px;
`;
interface ListItemProps {
  active: boolean;
}

interface Props {
  items: string[];
  headings: string;
  onSelectItem: (item: string) => void;
}
function List({ items, headings, onSelectItem }: Props) {
  // let selectedIndex = 0;
  const [selectedIndex, setSelectedIndex] = useState(0);

  // arr[0];
  // arr[1];

  //   Event Handler
  // const handleClick = (event: MouseEvent) => {
  //   console.log(event);
  // };
  return (
    <>
      <HeadStyle>{headings}</HeadStyle>
      {items.length === 0 && <p>No Items Found</p>}
      <ListStyle>
        {items.map((item, index) => (
          // <LiStyle
          //   className={
          //     selectedIndex === index
          //       ? "list-group-item active"
          //       : "list-group-item"
          //   }
          <LiStyle
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </LiStyle>
        ))}
      </ListStyle>
    </>
  );
}

export default List;
