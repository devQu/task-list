import './App.css';
import FormBlock from './components/FormBlock';
import Contact from './components/Contact';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const direMerci = function(par) {
    console.log(par)
  }
 
  // Par default
  let [taches, change] = useState([
    {title: "Faire qq..", completed: false},
    {title: "Un petit truc", completed: true},
    {title: "Pourquoi pas!", completed: false}
  ])

  // cote serveur ...
  // useEffect(() => {
  //   fetch('http://jsonplaceholder.typicode.com/todos?_limit=5')
  //     .then(response => response.json())
  //     .then(res => change(res))
  // }, [])

  const suprime = function(item) {
    change(taches.filter((per => per.title !== item.title))) // trier le tableau d'objets
  }

  const addPerson = function(item) {
    change(taches.concat({ title: item }))
  }

  const changecheck = function(id) {
    change(taches.map((el, i) => {
      if (i === id) { el.completed = !el.completed; console.log(el); }
      return el
    }))
  }

  return (
    <div className="App">
      <h1>Welcome!</h1>
      <FormBlock 
        myFunc={direMerci}
        onAddPerson = {addPerson} 
        name="Alex" 
      />
      {taches.map((pers, index) => {
        return <Contact 
          key = {index}
          onDel = {suprime.bind(taches, pers)} // ou on peut utiliser une fonction de rappel
          onCheck = {changecheck}
          title = {pers.title}
          index = {index}
          completed = {pers.completed}  
        />
      })}
    </div>
  );

}

export default App;
