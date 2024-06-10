function ListGroup() {
  let items = ["New York", "Nepal", "Itahari", "kathmandu"];

  return (
    <>
      <h1>List Groups</h1>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => {
              console.log(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
