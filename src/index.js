import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

let nama = "Lulu Fitri Ramadani";
function Welcome(props) {
  return <h1>WELLCOME, NICE TO MEET YOU {props.nama}</h1>;
}

function App() {
  if (nama == "") {
    return <button>Login</button>;
  } else {
    return <Welcome nama={nama} />;
  }
}

root.render(<App />);
