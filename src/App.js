import Header from "./Components/Header/Header";
import RowPost from "./Components/Row/RowPost";

function App() {
  const category = ['shooter','racing','action','Sports']
  return (
    <div className="container-fluid">
      <Header />
      <RowPost title={'SHOOTING'} cat={category[0]} />
      <RowPost title={'RACING'} cat={category[1]} />
      <RowPost title={'ACTION'} cat={category[2]} />
      <RowPost title={'SPORTS'} cat={category[3]} />

    </div>

  );
}

export default App;
