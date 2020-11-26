import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const direMerci = function(par) {
    console.log(par)
  }
 
  // Par default
  const [taches, change] = useState([
    {title: "Faire qq..", completed: false},
    {title: "Un petit truc", completed: false},
    {title: "Pourquoi pas!", completed: false}
  ])

  // cote serveur ...
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(res => change(res))
  }, [])

  const suprime = function(item) {
    change(taches.filter((per => per.title !== item.title))) // trier le tableau d'objets
  }

  const addPerson = function(item) {
    change(taches.concat({ title: item }))
  }

  return (
    <div className="App">
      Bienvenue!
      <Header 
        myFunc={direMerci}
        onAddPerson = {addPerson} 
        name="Alex" 
      />
      {taches.map((pers, index) => {
        return <Contact 
          key = {index}
          onDel = {suprime.bind(taches, pers)} // ou on peut utiliser une fonction de rappel
          title = {pers.title}  
        />
      })}
    </div>
  );

}

export default App;
