import React from "react";

const Skills = () => {
    return (
    <div className='pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16'>
      


      <div className="bg-black/40 max-w-[1300px] mx-auto rounded-xl">
        <div className="px-6 py-10">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="block w-full gray-primary-color text-3xl sm:text-4xl">
              Skills
            </h2>
            <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium
                            leading-relaxed tracking-wide text-gray-400">
              As a BS Computer Science Student, I've gained a lot of knowledge and experiences in different languages, tools, and technologies.
            </p>
          </div>
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <h3 className="text-xl italic text-gray-200">HTML5</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                HTML5 (Hypertext Markup Language 5) is a markup language used for structuring and presenting hypertext documents on the World Wide Web. It was the fifth and final major HTML version that is now a retired World Wide Web Consortium (W3C) recommendation.               </p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <h3 className="text-xl italic text-gray-200">CSS</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                CSS stands for Cascading Style Sheets, a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML, or XHTML).
              </p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <h3 className="text-xl italic text-gray-200">JAVASCRIPT</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                JavaScript is a scripting or programming language that allows you to implement complex features on web pages              </p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <h3 className="text-xl italic text-gray-200">REACT</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless".              </p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <h3 className="text-xl italic text-gray-200">GODOT</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                Godot is a programming language used within the Godot Engine, which is a free and open-source game engine.              </p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <h3 className="text-xl italic text-gray-200">PYTON</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
