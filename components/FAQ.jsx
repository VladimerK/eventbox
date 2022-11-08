import React from "react";
import { FAQdata } from "./FAQdata";

const FAQ = () => {
  return (
    <div>
      <section className="text-gray-700">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              ხშირად დასმული კითხვები
            </h1>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="w-full lg:w-1/2 px-4 py-2">
              {FAQdata.map((post) => (
                <details key={post.name} className="mb-4">
                  <summary className="font-semibold bg-purple-200 rounded-md py-2 px-4">
                    {post.name}
                  </summary>

                  <span>{post.text}</span>
                </details>
              ))}
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-purple-200 rounded-md py-2 px-4">
                  როგორი სახის გაფორმება შეგვიძლია?
                </summary>

                <span className="px-4 py-2">
                  ნებისმიერი სახის გაფორმება შეგვიძლია თქვენზე მორგებული დღესასწაულსითვის,  პროფესიონალურად დაგიგეგმავთ და აგისრულებთ ოცნენებს
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-purple-200 rounded-md py-2 px-4">
                  How many sites I can create at once?
                </summary>

                <span className="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-purple-200 rounded-md py-2 px-4">
                  How can I communicate with you?
                </summary>

                <span className="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
