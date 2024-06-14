// import Message from "./Message";
// import Alert from "./components/Alert";
// import Button from "./components/Button/Button";
// import List from "./components/list/List";
import { useState } from "react";
import produce from "immer";
// import { AiFillAmazonCircle } from "react-icons/ai";
import Like from "./components/Like/Like";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

// function App() {
//   const [alertVisible, setAlertVisible] = useState(false);
//   return (
//     <div>
//       {/* {alertVisible && (
//         <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>
//       )} */}
//       <Button color="secondary" onClick={() => setAlertVisible(true)}>
//         My Button
//       </Button>
//     </div>
//   );
// }
// export default App;

// const App = () => {
//   let items = ["New York", "Nepal", "Itahari", "kathmandu"];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <AiFillAmazonCircle color="Green" size={80} />
//       <List items={items} headings="cities" onSelectItem={handleSelectItem} />
//     </div>
//   );
// };

// export default App;

// function App() {
//   return (
//     <div>
//       <Like
//         onClick={() => {
//           console.log("Clicked");
//         }}
//       />
//     </div>
//   );
// }

// export default App;
// const [firstname, setFirstName] = useState("");
// const [lastName, setlastName] = useState("");

// function App() {
//   const [person, SetPerson] = useState({
//     firstName: "",
//     lastName: "",
//   });
//   const [loading, setLoading] = useState(false);
//   return <div>{}</div>;
// }

// export default App;

// Updating The Objects
// function App() {
//   const [drink, setDrink] = useState({
//     title: "Americano",
//     price: 5,
//   });

//   const handleClick = () => {
//     // const newDrink = {
//     //   title: drink.title,
//     //   price: 6,
//     // };
//     setDrink({ ...drink, price: 6 });
//   };
//   return (
//     <div>
//       {drink.price}
//       <button onClick={handleClick}>click me</button>
//     </div>
//   );
// }

// function App() {
//   const [customer, setCustomer] = useState({
//     name: "john",
//     address: {
//       city: "Itahari",
//       zipCode: 1234,
//     },
//   });
//   const handleClick = () => {
//     setCustomer({
//       ...customer,
//       address: { ...customer.address, zipCode: 5600 },
//     });
//   };
//   return (
//     <div>
//       {customer.address.zipCode}
//       <button onClick={handleClick}> click Me</button>
//     </div>
//   );
// }

// function App() {
//   const [tags, setTags] = useState(["Dominar", "Mt15"]);

//   const handleClick = () => {
//     //Adding arrays list
//     // setTags([...tags, "Duke"]);

//     //Removing Arrays list
//     // setTags(tags.filter((tag) => tag !== "Mt15"));

//     //Update arrays
//     // setTags(tags.map((tag) => (tag === "Dominar" ? "happiness" : tag)));
//   };
//   return (
//     <div>
//       {tags}
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }

// function App() {
//   const [Vegitables, setVegitables] = useState([
//     { id: 1, name: "Cauli", address: "Dhankuta" },
//     { id: 2, name: "Tomato", address: "Mulghat" },
//   ]);
//   const handleClick = () => {
//     // setVegitables(
//     //   Vegitables.map((Vegitable) =>
//     //     Vegitable.id === 1 ? { ...Vegitable, address: "Vedetar" } : Vegitable
//     //   )
//     // );
//     setVegitables(
//       produce((draft) => {
//         const vegetable = draft.find((Vegitable) => Vegitable.id === 1);
//         if (vegetable) vegetable.address = "Vedetar";
//       })
//     );
//   };
//   return (
//     <div>
//       {Vegitables.map((Vegitable) => (
//         <p key={Vegitable.id}>
//           {Vegitable.name} {Vegitable.address ? "Vedetar" : "New"}
//         </p>
//       ))}
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// function App() {
//   const [cartItems, setCartItems] = useState(["product1", "product2"]);

//   return (
//     <div>
//       <Navbar cartItemsCount={cartItems.length} />
//       <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
//     </div>
//   );
// }
import React from "react";

function App() {
  const [games, setgames] = useState({
    id: 1,
    player: {
      name: "Saujal",
      address: "Itahari",
    },
  });
  const handleClick = () => {
    setgames({
      ...games,
      player: { ...games.player, name: "Dinesh", address: "Mulghat" },
    });
  };
  return (
    <div>
      <h1> Game Details</h1>
      <p>{games.id}</p>
      <h1>Players Details</h1>
      <p>
        Name: {games.player.name}
        <br />
        Address: {games.player.address}
      </p>

      <button onClick={handleClick}>Click me for the Change</button>
    </div>
  );
}

export default App;
