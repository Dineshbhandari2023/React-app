// import Message from "./Message";
// import Alert from "./components/Alert";
// import Button from "./components/Button/Button";
// import List from "./components/list/List";
import { useState } from "react";
import produce from "immer";
// import { AiFillAmazonCircle } from "react-icons/ai";
// import Like from "./components/Like/Like";
// import Navbar from "./components/Navbar";
// import Cart from "./components/Cart";
// import ExpandableText from "./components/ExpandableText/ExpandableText";
// import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";

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

// function App() {
//   const [games, setgames] = useState({
//     id: 1,
//     player: {
//       name: "Saujal",
//       address: "Itahari",
//     },
//   });
//   const handleClick = () => {
//     setgames({
//       ...games,
//       player: { ...games.player, name: "Dinesh", address: "Mulghat" },
//     });
//   };
//   return (
//     <div>
//       <h1> Game Details</h1>
//       <p>{games.id}</p>
//       <h1>Players Details</h1>
//       <p>
//         Name: {games.player.name}
//         <br />
//         Address: {games.player.address}
//       </p>

//       <button onClick={handleClick}>Click me for the Change</button>
//     </div>
//   );
// }

// function App() {
//   const [samosa, setSamosa] = useState({
//     name: "Samosa",
//     with: ["jhol"],
//   });

//   const handleClick = () => {
//     setSamosa({
//       ...samosa,
//       with: [...samosa.with, "& Aachar"],
//     });
//   };
//   return (
//     <div>
//       <h1>Khaja</h1>
//       <p>{samosa.name}</p> <br />
//       <p>{samosa.with}</p>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// function App() {
//   // const [cart, setcart] = useState({
//   //   discount: 0.1,
//   //   items: [
//   //     { id: 1, productName: "Phone", quantity: 1 },
//   //     { id: 2, productName: "Gopro", quantity: 1 },
//   //   ],
//   // });
//   // const handleClick = () => {
//   //   // let count
//   //   setcart({
//   //     ...cart,
//   //     items: cart.items.map((item) =>
//   //       item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
//   //     ),
//   //   });
//   // };
//   return (
//     <div>
//       {/* <p>Discount: {cart.discount}</p>
//       <p>Items:</p>
//       <ul>
//         {cart.items.map((item) => (
//           <li key={item.id}>
//             {item.productName} - Quantity: {item.quantity}
//           </li>
//         ))}
//       </ul>
//       <button onClick={handleClick}>Click Here</button> */}

//       <ExpandableText>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem eum,
//         molestiae laboriosam reiciendis accusamus perspiciatis, nihil impedit
//         assumenda harum ipsa alias tempora velit unde, esse error blanditiis ex
//         rem. Quod culpa quas, laborum dolore veritatis eaque. Consequuntur ea,
//         quia aspernatur officiis cupiditate doloremque aut maiores nam.
//         Architecto autem velit beatae. Laudantium nobis cupiditate fuga dolorum.
//         Ipsa quia excepturi atque quas suscipit eveniet soluta, consequatur
//         accusantium officia voluptatem doloribus, fugit ipsum? Doloribus quod ut
//         placeat debitis atque mollitia non maiores eaque modi quos voluptatibus
//         sequi commodi possimus magnam at dolore, quis, odio a eveniet itaque.
//         Pariatur aut error quo neque nam consequatur ex consequuntur, ipsum unde
//         incidunt earum accusantium in ea itaque animi amet corrupti facilis
//         dolorum nesciunt dolore? Esse sit accusamus id magnam. Eaque laborum non
//         laboriosam autem? Obcaecati dicta nihil iusto doloremque totam vitae,
//         amet molestias minima voluptatem, et eveniet quaerat aspernatur nam
//         provident enim illum ad illo! Deleniti voluptatum sed, quisquam minima a
//         tenetur neque praesentium vel atque nisi ratione necessitatibus vero
//         tempore eos odio nulla possimus adipisci exercitationem nemo laborum
//         minus quae distinctio numquam! Quaerat ipsam saepe, sapiente odio ex nam
//         est expedita iusto. Assumenda, a. Nobis iste optio totam eum, eos ea
//         iure expedita minus dolore voluptas possimus laudantium rerum ad velit
//         sunt at doloribus saepe, earum nihil alias molestiae. Est ut aut sed
//         dicta enim saepe praesentium quae dolores? Dicta vel ratione dolore
//         doloribus eius quaerat at minus expedita nihil, iure corrupti? Suscipit
//         commodi incidunt porro vero impedit laboriosam eligendi doloremque,
//         repellat expedita praesentium officia, voluptatibus atque pariatur
//         quibusdam molestiae tempore et veniam iusto velit corrupti aspernatur
//         est. Quia voluptate laudantium voluptas tenetur aliquid doloribus
//         nesciunt, et, ut quam cum minima maxime ipsum fugit vero dolorum ducimus
//         rerum ab. Corporis deleniti, architecto odit, ad necessitatibus tempore
//         sequi temporibus quaerat aspernatur similique corrupti voluptatibus
//         veniam molestiae. Eaque exercitationem in veniam, praesentium tempore at
//         id facilis beatae repudiandae amet? Perferendis pariatur provident,
//         vitae ducimus, distinctio expedita corporis minus tenetur inventore
//         placeat quae vero! Iusto voluptate distinctio minus aspernatur odio
//         dicta facere, ab a sunt mollitia voluptatum veritatis! Itaque, quas.
//         Laborum quas culpa maxime doloremque ab nostrum consequuntur facere ea,
//         veritatis perspiciatis optio quae dolore saepe voluptates modi adipisci
//         iste dolorem exercitationem? Necessitatibus laborum veniam error
//         doloremque velit dolor repellat qui a optio temporibus quod neque
//         architecto, iste impedit ratione repudiandae quos magnam reprehenderit!
//         Quo beatae autem maiores minima. Asperiores ipsam exercitationem facilis
//         officia unde non dicta earum minus soluta architecto quia inventore ut
//         nobis nemo dignissimos quas fugiat, delectus veniam. Illo nisi voluptate
//         iusto ab dolore! Architecto tempore earum debitis, incidunt, tenetur
//         quidem sint accusantium ex reprehenderit sunt rem tempora dolor
//         inventore expedita itaque quaerat. Omnis necessitatibus maiores
//         voluptatum fugit distinctio recusandae enim, non quae, perferendis
//         officia praesentium consectetur magni. Quos cupiditate dolorem quasi aut
//         nemo veritatis eum consequuntur dolores soluta! Repellendus aperiam
//         ratione, totam sequi tenetur molestias at! Exercitationem, consequuntur
//         reiciendis eveniet a deserunt natus fugiat ad, dolorum quisquam alias
//         excepturi. Similique at pariatur minus, dolores numquam beatae ad qui
//         odit, adipisci quaerat quidem alias perferendis?
//       </ExpandableText>
//     </div>
//   );
// }

import React from "react";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/Categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Groceries" },
    { id: 3, description: "ccc", amount: 10, category: "utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Entertainment" },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([
              ...expenses,
              { ...expense, id: (expenses.length = 1) },
            ])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
