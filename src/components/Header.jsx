import Hero from "./Hero";

const Header = () => {
  return (
    <div
      className="background-img min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${Hero})` }}
    >
      <Hero />
    </div>
  );
};

export default Header;
