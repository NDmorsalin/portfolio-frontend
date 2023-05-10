import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Container from "./Components/Layout/Container";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import { fetchAdmin } from "./feature/adminSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdmin());
  }, [dispatch]);

  return (
    <div className="dark:bg-slate-800 bg-slate-200 dark:text-slate-300 text-slate-800">
      {/* Header */}
      <Header />

      {/* body */}
      <Container>
        <Outlet />
      </Container>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
