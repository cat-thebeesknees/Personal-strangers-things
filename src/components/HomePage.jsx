//Homepage should only have Nav tabs and welcome message
import Navbar from "./NavBar";
export const Home = () => {
  return (
    <div className="home">
      <Navbar />
        <div>
      <h1>Welcome to MCJ Connections!</h1>
      </div>
    </div>
  );
};


export default Home;

