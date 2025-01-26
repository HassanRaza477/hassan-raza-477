import Image from "next/image";
export default function About() {
  return (
    <section className="w-full h-screen bg-gray-900 flex flex-col md:flex-row justify-center items-center gap-12 px-4 py-8">
      {/* About Image */}
      <div className="w-[350px] h-[450px] shadow-lg shadow-[var(--color)] rounded-lg overflow-hidden">
        <Image
          src="/images/client1.jpg"
          alt="About Me"
          width={500} // Specify width
          height={500} // Specify height
          className="w-full h-full object-cover rounded-lg transition duration-300 ease-in cursor-pointer hover:shadow-[0_0_25px_var(--color),_0_0_50px_var(--color),_0_0_100px_var(--color)]"
        />

      </div>

      {/* About Content */}
      <div className="flex flex-col justify-center items-start md:w-1/2 text-white">
        <h2 className="text-4xl font-bold text-[var(--color)] mb-6">
          About Me
        </h2>
        <p className="text-base leading-8">
          Hey  I am Hassan Raza a passionate Web Developer and Digital
          Marketer with a flair for creating innovative clean and
          user focused digital experiences. My focus lies in blending
          functionality with creativity to craft solutions that are both
          impactful and visually appealing.
        </p>
      </div>
    </section>
  );
}
