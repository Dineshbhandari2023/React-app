// import Message from "./Message";
// import List from "./components/List";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisible(true)}>
        My Button
      </Button>
    </div>
  );
  // let items = ["New York", "Nepal", "Itahari", "kathmandu"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  // return (
  //   <div>
  //     <List items={items} headings="cities" onSelectItem={handleSelectItem} />
  //   </div>
  // );
}
export default App;
