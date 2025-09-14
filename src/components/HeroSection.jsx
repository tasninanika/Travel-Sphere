const HeroSection = ({ bgImage, children }) => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content on top of overlay */}
      <div className="relative container mx-auto px-4 md:px-8 lg:px-12 pt-40">
        {children}
      </div>
    </div>
  );
};

export default HeroSection;
