import "./styles.css";
import { SelectableGrid } from "./components/SelectableGrid";

export default function App() {
  return (
    <div className="App">
      <h1>Selectable Grid</h1>
      <SelectableGrid rows={10} columns={10} />
    </div>
  );
}
