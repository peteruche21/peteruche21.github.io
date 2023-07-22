import "./App.css";
import Socials from "./components/Socials";
import TypeWriter from "./components/Typewriter";

function App() {
  const sentences = ["Software Developer", "Full-Stack Developer", "Smart-Contract Engineer", "Technical Writer"];

  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-sm text-indigo-600 font-medium">welcome</h1>
          <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">I am Peter Anyaogu,</h2>
          <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            <TypeWriter sentences={sentences} />
          </h2>
          <p className="max-w-2xl mx-auto">
            self-organised full-stack developer with experience developing and optimising software platforms. Have
            strong scripting/design and technical writing skills, Good understanding of Infrastructure-as-a-Code
            concepts.
          </p>
          <div className="items-center justify-center gap-x-3 space-y-5 sm:flex sm:space-y-0">
            <a
              href="https://tinyurl.com/anyaogu-cv-07-23"
              target="_blank"
              rel="noreferrer"
              className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
            >
              CV
            </a>
            <Socials />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
