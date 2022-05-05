import Cube from "./components/Cube";
import Title from "./components/Title";

import "./app.scss";
const App = () => {
  return (
    <div className='app'>
      <Title />
      <Cube className='cube' />
    </div>
  );
};

export default App;
