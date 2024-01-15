
import List from "./List";

function App() {
 
    const fruits = [
      { id: 1, name: "Apple", calories: 20 },
      { id: 2, name: "Banana", calories: 30 },
      { id: 3, name: "Orange", calories: 40 },
      { id: 4, name: "Cherry", calories: 13 },
    ];

    const vegetables = [
      { id: 6, name: "potatoes", calories: 20 },
      { id: 7, name: "celery", calories: 30 },
      { id: 8, name: "tomato", calories: 40 },
      { id: 9, name: "Corn", calories: 13 },
    ];
  return(
    <>
    {fruits.length>0&&    <List items={fruits} category="Fruits"/>}

   {vegetables.length>0 && <List items={vegetables} category="Vegetables"/>} 
    </>
  )

}

export default App;
