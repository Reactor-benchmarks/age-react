import { memo } from "react";
import './App.css';
import Layout from "./Layout/Layout";
const App = memo(function App() {
  console.log(window.globalCount++);
  return <div className="App">
      <Layout />
    </div>;
});
export default App;