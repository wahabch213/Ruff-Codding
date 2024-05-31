import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="about">
        <h1>Home Page</h1>
        <p>
          Lorem ipsum dolor sit isi nostrum obcaecati optio pariatur perferendis
          perspiciatis
              </p>
              <Link to={'/About'}>About Us</Link>
      </div>
    </>
  );
};

export default Home;
