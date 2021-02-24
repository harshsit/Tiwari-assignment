import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state={
        name:'',

  }
  var str = document.getElementById("id1"); 
  if (str.value ==null) { 
      str.focus(); 
      return; 
  } 
  var a = "ASCII Code is == >  "; 
  document.getElementById("demo").innerHTML 
      = a + str.value.charCodeAt(0);

  return (
    <div className="App">
      <p> 
        Enter any character: 
        <input type="text" id="id1" 
            name="text1" maxLength="1"/> 
    </p> 
  
    <button onclick="myFunction()"> 
        Get ASCII code 
    </button> 
  
    <p id="demo" style="color:red;"> </p>
    </div>
  );
}
}

export default App;
