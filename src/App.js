import './App.scss';
import FormBlock from './components/FormBlock';
import Tache from './components/Tache';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
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

  //cote serveur ...
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(res => change(res))
  }, [])

  const suprime = function(item) {
    change(taches.filter((per => per.title !== item.title))) // trier le tableau d'objets => supprimer un element
  }

  const addTache = function(item) {
    change(taches.concat({ title: item, completed: false }))
  }

  const changecheck = function(id) {
    change(taches.map((el, i) => {
      if (i === id) { el.completed = !el.completed; console.log(el); }
      return el
    }))
  }

  return (
    <div className="App">
      <h1>Your tasks at the moment</h1>
      <FormBlock 
        myFunc={direMerci}
        onAddTache = {addTache} 
        name="Alex" 
      />
      {taches.map((pers, index) => {
        return <ErrorBoundary key = {index}>
          <Tache 
            onDel = {suprime.bind(null, pers)} // ou on peut utiliser une fonction de rappel
            onCheck = {changecheck}
            title = {pers.title}
            index = {index}
            completed = {pers.completed}  
        />
        </ErrorBoundary>
      })}
    </div>
  );

}

export default App;
