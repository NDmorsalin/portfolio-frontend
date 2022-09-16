import { Route, Routes } from 'react-router-dom';
import Container from './Components/Layout/Container';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import Home from './Pages/Home';

function App() {
    return (
        <div className="dark:bg-slate-800">
            {/* Header */}
            <Header />

            {/* body */}
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Container>

            {/* footer */}
            <Footer />
        </div>
    );
}

export default App;
