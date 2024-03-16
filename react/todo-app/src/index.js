import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import useFetch from './useFetch';

const Home = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
      <>
        {data && data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
      </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
