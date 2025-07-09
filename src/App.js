import './App.css';
import Layout from "./Layout/Layout";
function App() {
  console.log(window.globalCount++);
  return <div className="App">
      <Layout />
    </div>;
}
export default App;