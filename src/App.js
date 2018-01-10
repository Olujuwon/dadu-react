import React, { Component } from 'react';
import logo from './imgs/sun.svg';
import './App.css';
import InputForm from './components/inputcomp';
import TodoList from './components/listitems';
import data from './data/data.json';
import data2 from './data/data2.json';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todoArr : data,
      doneArr : data2
    }
  }
  addNew = (itm, qty)=>{
    let todo = this.state.todoArr
    let newArr = {
      item : itm,
      quantity : qty
    }
    todo.unshift(newArr)
    this.setState({todoArr:todo})

  }
  deleteItem = (id)=>{
    let items = this.state.todoArr
    items.splice(id, 1)
    this.setState({todoArr:items})
    console.log('delete botton pressed' + id)
}
deleteItemX= (id)=>{
  let items = this.state.doneArr
  items.splice(id, 1)
  this.setState({doneArr:items})
  console.log('delete botton pressed' + id)
}
 doItem = (id)=>{
   let todo = this.state.todoArr
   let done = this.state.doneArr
   let cut = todo.splice(id,1)
    done.unshift(...cut)
   this.setState({todoArr:todo})
   this.setState({doneArr:done})
    console.log('this item has been done' + cut)
}
doItemX = (id)=>{
  let todo = this.state.todoArr
  let done = this.state.doneArr
  let cut = done.splice(id,1)
   todo.unshift(...cut)
  this.setState({todoArr:todo})
  this.setState({doneArr:done})
   console.log('this item has been done' + cut )
}
  render() {
    return (
      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Dadu Productivity App</h1>
          </header>
          <InputForm  onAddNew={this.addNew}/>
          <div className='list'>
            <ul className='todo'>
              <TodoList todo={this.state.todoArr} onDelete={this.deleteItem} onAdd={this.doItem}/>
            </ul>
            <hr/>
            <ul className='done'>
              <TodoList todo={this.state.doneArr} onDelete={this.deleteItemX} onAdd={this.doItemX}/>
            </ul>
          </div>
      </div>
    );
  }
}


export default App;
