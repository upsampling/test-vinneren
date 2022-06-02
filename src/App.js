import Main from "./pages/Main";
import { useDataStarWars } from "./services/UseData/useData";

function App () {
  useDataStarWars();
  return <Main/> ;
}

export default App;
