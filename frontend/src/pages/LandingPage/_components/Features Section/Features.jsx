import React from "react";
import aiGraphic from "../../../../public/assets/landing page/ai-powered-graphic.png";
import ideGraphic from "../../../../public/assets/landing page/ide-graphic.png";
import mlGraphic from "../../../../public/assets/landing page/ml-graphic.png";
import securityGraphic from "../../../../public/assets/landing page/security-graphic.png";
import leaderboardGraphic from "../../../../public/assets/landing page/leaderboard-graphic.png";
import Button from "../../../../components/Button";
import wireFeatures from "../../../../public/assets/landing page/wire-features.png";
import wireFeatures2 from "../../../../public/assets/landing page/wire-features-2.png";
import gradient from "../../../../public/assets/gradients/gradient-features.png";

const Features = () => {
  return (
    <div className="pt-24 max-sm:mt-20 relative" id="why">
      <img
        src={wireFeatures}
        alt="wire"
        className="absolute top-20 right-0 md:translate-x-36 max-md:hidden "
      />
      <img
        src={wireFeatures2}
        alt="wire"
        className="absolute top-80 left-0 -translate-x-36 "
      />
      <img
        src={gradient}
        alt="wire"
        className="absolute top-96 right-0 md:translate-x-36 max-md:translate-x-[1.5em]"
      />
      <h1 className="text-6xl max-sm:text-4xl font-medium">Why Choose Kode?</h1>
      <p className="text-gray-200 mt-3">
        At Kode, we believe that coding competitions should be more than just
        challenges—they should be a seamless, innovative experience where
        fairness meets creativity. Here's what sets us apart:
      </p>
      <div className="flex items-center gap-5 mt-8 justify-center flex-wrap ">
        <div className="h-[25em] max-sm:h-[20em] w-[37.7em] max-md:w-[26em] bg-gray-300 rounded-xl flex flex-col items-center justify-center group hover:bg-[#162d2a]  duration-1000 scale-100">
          <img
            src={aiGraphic}
            alt="AI Powered Assistance"
            width={450}
            className="group-hover:translate-y-0 translate-y-6 duration-500 mb-2 max-md:w-[22em] max-sm:w-[18em]"
          />
          <div className="mx-10">
            <h3 className="text-3xl font-medium mt-3 mb-1 max-md:text-2xl">
              AI-Powered Assistance
            </h3>
            <p className="text-sm max-sm:text-xs text-gray-200">
              Enhance your coding with AI-driven hints, real-time plagiarism
              checks, and smarter problem-solving.
            </p>
          </div>
        </div>
        <div className="h-[25em] max-sm:h-[20em] w-[37.7em] max-md:w-[26em] bg-gray-300 rounded-xl flex flex-col items-center justify-center group hover:bg-[#162d2a]  duration-1000 scale-100">
          <img
            src={ideGraphic}
            alt="Built-in IDE"
            width={450}
            className="group-hover:-translate-y-2 translate-y-3 duration-500 mb-2 max-md:w-[22em] max-sm:w-[18em] "
          />
          <div className="mx-10 ">
            <h3 className="text-3xl font-medium mt-3 mb-1 max-md:text-2xl">
              Built-in IDE
            </h3>
            <p className="text-sm max-sm:text-xs text-gray-200">
              No need to jump between tools. Write, test, and submit all in one
              place. (Oh, and it’s lightning fast.)
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5 mt-5 justify-center flex-wrap mb-8">
        <div className="flex flex-col items-center justify-center flex-wrap gap-5">
          <div className="h-[25em] w-[37.7em] max-sm:w-[20em] max-md:w-[26em] bg-gray-300 rounded-xl flex flex-col items-center justify-center group scale-100">
            <img
              src={mlGraphic}
              alt="AI Powered Assistance"
              width={280}
              className="group-hover:rotate-[180deg] translate-y-0 duration-1000 mb-2 rounded-b-[6em] max-md:rounded-b-[4em] max-md:w-[14em]"
            />
            <div className="mx-10 self-start">
              <h3 className="text-3xl font-medium mt-3 mb-1 max-md:text-2xl">
                Multilanguage Support
              </h3>
              <p className="text-sm text-gray-200">
                Python, C++, or your favorite language—Kode! speaks them all.
              </p>
            </div>
          </div>
          <div className="h-[25em] w-[37.7em] max-sm:w-[20em] max-sm:h-[22em] max-md:w-[26em] bg-gray-300 rounded-xl flex flex-col items-center group ">
            <img
              src={securityGraphic}
              alt="Plagiarism Free"
              width={400}
              className="group-hover:scale-110 -translate-y-4 duration-1000 mb-3 max-md:w-[23em] max-sm:w-[17em]"
            />
            <div className="mx-10 self-start">
              <h3 className="text-3xl font-medium mb-1 max-md:text-2xl">
                Plagiarism-Free Assurance
              </h3>
              <p className="text-sm max-sm:text-xs text-gray-200">
                Advanced detection ensures every submission is 100% original,
                fostering integrity and fair competition.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[51.2em] max-md:h-[48em] max-sm:w-[20em] max-sm:h-[38em] w-[37.7em] max-md:w-[26em] bg-gray-300 group flex flex-col items-center justify-center rounded-xl hover:bg-[#162d2a] duration-1000 scale-100">
          <img
            src={leaderboardGraphic}
            alt="Realtime Leaderboard"
            width={470}
            className="group-hover:-translate-y-4 translate-y-4 duration-1000 mb-10 max-md:w-[22em] max-sm:w-[16em]"
          />
          <div className="mx-10 self-start">
            <h3 className="text-3xl font-medium mt-3 mb-1 max-md:text-2xl">
              Real-Time Leaderboards
            </h3>
            <p className="text-sm text-gray-200 max-sm:text-xs">
              Who’s leading the pack? See it unfold live with our dynamic
              leaderboards—because competition is more fun when you can see your
              progress!
            </p>
          </div>
        </div>
      </div>
      <Button className="mb-10 max-sm:mb-0">
        <p className="text-2xl text-center max-md:text-lg max-sm:text-sm">
          Sign Up - Try These Features for Free
        </p>
      </Button>
    </div>
  );
};

export default Features;
