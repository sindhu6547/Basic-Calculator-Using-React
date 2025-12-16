import React, { Component } from "react";
import './App.css'
// import Welcome from "./components/welcome"
// import Greetings from './components/Greetings'
// import Hello from './components/hello'
// import Message from './components/message'
// import FunctionClick from "./components/functionclick";
// import { ClassClick } from "./components/classclick";
// import Eventbind from "./components/eventbind";
// import ParentComponent from "./components/parentcomponent";
// import Person from "./components/person";
// import NameList from "./components/namelist";
// import Stylesheet from "./components/stylesheet";
// import console from "./components/console"
// import Sindhu from "./components/practice";
// import ChildComponent from "./components/childcomponent";
// import UserGreeeting from "./components/usergreeting";
// import Inline from "./components/inline";
// import Form from "./components/form";
// import Lifecycle from "./components/lifecycle";
// import Table from "./components/table";
//import Counter from "./components/counter";
// import Magic from "./components/reactprac";
// import Effect from "./components/useeffect";
import Calculator from "./components/calculator";
class App extends Component{
  render(){
    return(
      <div className="App">
        {/* <Welcome name="sindhuja" heroname="prabhas"></Welcome> */}
        {/* <Greetings name="sowmya" hero="prabhas"children="dakshith"></Greetings> */}
      {/* <Hello></Hello> */}
      {/* <Message></Message> */}
      {/* <Counter></Counter> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}
      {/* <Eventbind></Eventbind> */}
      {/* <ChildComponent></ChildComponent> */}
      {/* <ParentComponent childname="sindhuja"></ParentComponent> */}
      {/* <Person></Person> */}
      {/* <NameList></NameList> */}
      {/* <Stylesheet primary={true}></Stylesheet> */}
      {/* <console></console> */}
      {/* <Sindhu></Sindhu> */}
      {/* <UserGreeeting></UserGreeeting> */}
      {/* <Inline></Inline> */}
      {/* <Lifecycle></Lifecycle> */}
      {/* <Form></Form> */}
      {/* <Table></Table> */}
      {/* <Counter></Counter> */}
      {/* <Magic></Magic> */}
      {/* <Effect></Effect> */}
      <Calculator></Calculator>
      </div>
    )
  }
}
export default App