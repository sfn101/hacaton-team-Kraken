import Navbar from "./components/navbar";
import SkeletonCards from './components/card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="pt-16">

      <Navbar />
      <SkeletonCards />
    </div>
  );
}

export default App;
