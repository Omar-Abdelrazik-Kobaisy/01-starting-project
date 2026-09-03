import reactImage from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescription = ["Fundamental", "Core Concepts", "Advanced Topics"];

const getRandomDescription = () => {
  return Math.floor(Math.random() * reactDescription.length);
};

const Header = () => {
  const randomDescription = reactDescription[getRandomDescription()];
  return (
    <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {randomDescription} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}
export default Header;
