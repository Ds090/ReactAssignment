// import logo from './logo.svg';
import './App.css';
import Person from './CreateComp';
import Button from './Button';
import Header from './Header';
import List from './List';

function App() {

  const handleClick = () => {
    console.log("Button clicked!");
  }

  const listItems = ['Apple', 'Banana', 'Orange', 'Grapes'];
  return (
    <div>
      <h1>Person Information:</h1>
      <Person name = "Divanshu" age = {30}/>

      <h1>Button Component Example:</h1>
      <Button text = "Click Me" onClick = {handleClick}/>

      <h1>Header Component Example:</h1>
      <Header title = "Hello!"/>

      <h1>List Component Example:</h1>
      <List items = {listItems}/>

    </div>
  );
}



export default App;
