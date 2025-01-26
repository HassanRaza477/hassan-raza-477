export default function Hero() {
  return (
    <div className="bg-black text-white w-full h-screen flex flex-col md:flex-row justify-center items-center gap-12 p-4">
      {/* Hero Image */}
      <div
        className="w-[350px] h-[450px] shadow-lg shadow-[var(--color)] rounded-lg overflow-hidden bg-[url('/images/client1.jpg')] bg-cover bg-center"
      ></div>


      {/* Hero Content */}
      <div className="flex flex-col justify-center items-start md:w-1/2 h-auto">
        <h1 className="text-[1.5rem] font-bold text-[var(--color)] mt-6">
          Hello I am Hassan Raza
        </h1>
        <p className="mb-5 mt-4 text-justify">
          Hey I am Hassan Raza and I am a Web Developer and Digital Marketer
          with a knack for crafting clean innovative and user centered digital
          experiences. With a keen eye for detail and a love for creativity I
          bring ideas to life, blending design and functionality to make projects
          both beautiful and impactful.
        </p>
        <a
          href="/"
          className="mt-5 bg-[var(--color)] text-black px-5 py-3 rounded-full border-2 border-transparent transition duration-300 ease-in hover:text-[var(--color)] hover:bg-transparent hover:border-[var(--color)] hover:shadow-[0_0_25px_var(--color)]"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
}
