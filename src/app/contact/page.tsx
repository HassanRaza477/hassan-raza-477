export default function Contact() {
    return (
      <div className="bg-gray-900 w-full py-12 px-6">
        <h2 className="text-center text-4xl font-bold text-white mb-12">
          Contact <span className="text-[var(--color)]">Us</span>
        </h2>
        <form className="max-w-3xl mx-auto text-center">
          {/* Input Box 1 */}
          <div className="flex flex-wrap gap-6 justify-center">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full sm:w-[48%] p-3 text-white bg-black border-2 border-[var(--color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color)]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full sm:w-[48%] p-3 text-white bg-black border-2 border-[var(--color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color)]"
            />
          </div>
  
          {/* Input Box 2 */}
          <div className="flex flex-wrap gap-6 justify-center mt-6">
            <input
              type="number"
              placeholder="Phone Number"
              className="w-full sm:w-[48%] p-3 text-white bg-black border-2 border-[var(--color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color)]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full sm:w-[48%] p-3 text-white bg-black border-2 border-[var(--color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color)]"
            />
          </div>
  
          {/* Textarea */}
          <textarea
            cols={30}
            rows={10}
            placeholder="Your Message"
            className="w-full mt-6 p-3 text-white bg-black border-2 border-[var(--color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color)]"
          ></textarea>
  
          {/* Submit Button */}
          <input
            type="submit"
            value="Send Message"
            className="mt-6 bg-[var(--color)] text-black font-bold py-3 px-6 rounded-full border-2 border-transparent cursor-pointer transition-all hover:text-[var(--color)] hover:bg-transparent hover:border-[var(--color)] hover:shadow-[0px_0px_25px_var(--color)]"
          />
        </form>
      </div>
    );
  }
  