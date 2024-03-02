import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Bike from './Bike';
import MyList from './MyList';
import Counter from './Counter';
import List from './List';
import App from './App';
import BasicFormHandling from './BasicFormHandling';

const items = [
  {id:0, name:'John'},
  {id:1, name:'Sam'},
  {id:2, name:'Roy'}
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Bike />
    <MyList items={items}/>
    <Counter />
    <List />
    <BasicFormHandling />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
