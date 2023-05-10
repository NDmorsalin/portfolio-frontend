import { useSelector } from "react-redux";
import About from "../Components/Home/About";
import Hero from "../Components/Home/Hero";
import Projects from "../Components/Home/Projects";
import Services from "../Components/Home/Services";
import Skills from "../Components/Home/Skills";
import Technology from "../Components/Home/Technology";

function Home() {
  const { isLoading, admin, error } = useSelector((state) => state.admin);

  if (isLoading) {
    return <h1>loading....</h1>;
  }
  if (error) {
    return <h1>error</h1>;
  }
  return (
    <div id="home">
      <Hero admin={admin?.admin} />

      <About admin={admin?.admin} />

      <Technology admin={admin?.admin} />

      <Skills admin={admin?.admin} />

      <Services admin={admin?.admin} />

      {/* only admin is sended because server send all project on myProject from individual db  */}
      <Projects admin={admin} />
    </div>
  );
}
export default Home;
