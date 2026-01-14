function App() {
  return (
    <div>
      <h1>first component {add()}</h1>
      <Fruit />
      <Colour />
    </div>
  );
}

function Fruit() {
  return <div>this is my second componenet</div>;
}

function Colour() {
  return <div> this colour is red</div>;
}

function add() {
  return 7 + 8;
}

export default App;
