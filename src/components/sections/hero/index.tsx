const Hero = () => {
  return (
    <section id="hero" className="max-w-4xl w-full px-5 sm:px-10">
      <div className="flex justify-center relative py-40 z-10">
        <h1 className="text-black-100 text-5xl font-bold text-center">
          Hi, I&apos;m Mateus Lopes, a{" "}
          <span className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">
            Full Stack Developer
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
