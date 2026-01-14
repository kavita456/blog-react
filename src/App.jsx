import  Login,{Profile,Setting,country} from './UserComponent.jsx'


function App() {
  return (
    <div>
      <h1>first component </h1>
     <Login/>
     <Profile/>
     <Setting/>
     <div>{country}</div>
    </div>
  );
}


export default App;
