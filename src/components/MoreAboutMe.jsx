import React from "react";
import mobile from '../assets/photo_2025-05-19_21-41-13.jpg';
import  { Link } from 'react-router-dom';

const MoreAboutMe = () => {
    return (
    <div className='pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16'>
      
      <div className="py-16 mb-6 relative bg-black/40 max-w-[1300px] mx-auto rounded-xl">
        <div className="p-7 mx-auto relative">
          <div>
            <h2 className="text-3xl font-bold leading-tight gray-primary-color sm:text-4xl lg:text-5xl">
              This is<span className='italic'> Real Me</span>
            </h2>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-400 md:mt-8">
             I treat everyone with respect and humility. Even though I'm not the best academically, I always do my hardest. 
             In order to have a decent job and repay my parents for everything they have done for me while I have been in school,
             I also want to become proficient in my profession. In order to save them from having to continue working as they age, I want to provide them 
             with a better life while they are still with me. Developing my riding skills and competing internationally to represent my birth country are only 
             two of my many aspirations for my parents and me. In addition, my father has always wanted me to join the military. Also, my father has always wanted me to join the military. 
             I will thus take the test to become a soldier after completing my course. I want my family to live in a large home and be financially secure.
            </p>
            < Link
              to="/FutureInLife"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-all duration-200"
            >
              Check My Future
            </Link>        
          </div>
         
          <img className="flex md:absolute bottom-[25%] right-[10%] w-[240px] md:w-[590px] h-auto overflow-hidden mx-auto rounded-3xl py-8 md:py-0" src={mobile} alt="james"/>
        </div>
      </div>

      <div className="bg-black/40 max-w-[1300px] mx-auto rounded-xl">
        <div className="px-6 py-10">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="block w-full gray-primary-color text-3xl sm:text-4xl">
              Family
            </h2>
            <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium
                            leading-relaxed tracking-wide text-gray-400">
              In this section is ifno about my family.
            </p>
          </div>
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <h3 className="text-xl italic text-gray-200">Mother</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                My mother's name is Evangelene, One of the most strong and affectionate individuals I have ever encountered is my mother. She has consistently been there for us, providing us with unwavering love, patience, and care. She continues to do everything she can for our family, even at difficult circumstances, without complaining. Her strength is quiet but powerful, and her sacrifices often go unnoticed, yet they are the foundation of our lives. I admire her deeply, and I’m so grateful for everything she has done for me and my younger sister.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <h3 className="text-xl italic text-gray-200">Father</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                My father's name is Jimmy. I love him so much because he is one of the people who works hard to support me and my siblings, and helps us continue our studies. He is a dedicated, powerful, and unselfish parent who perseveres through hardship.  Every day, his love and sacrifices motivate me to work even harder and give it my all.  Having a father like him makes me incredibly thankful, and one of my greatest goals is to honor him by returning all that he has done for us.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <h3 className="text-xl italic text-gray-200">Younger Sister</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                My sister name is Ellaine, but her nickname is bebe. She's the second most beautiful girl I know the second most beautiful after my mother, whom I know and love dearly as my sibling. Even though we used to fight a lot when we were younger, I'm still happy that she's my sister. She's the only one I can talk to when I have problems, and she listens to me as well.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreAboutMe;
