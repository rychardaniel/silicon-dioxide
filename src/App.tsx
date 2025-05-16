import { Body } from "./components/body";
import { Header } from "./components/header";

function App() {
    return (
        <div className="min-h-screen w-screen flex flex-col items-center">
            <Header />
            <Body />
        </div>
    );
}

export default App;
