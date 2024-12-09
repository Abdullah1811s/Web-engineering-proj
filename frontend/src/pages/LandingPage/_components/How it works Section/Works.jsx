import React from "react";
import worksLine from "../../../../public/assets/landing page/works-line.png";
import Button from "../../../../components/Button";
import circleRight from "../../../../public/assets/landing page/works-circle-rright.png";
import circleLeft from "../../../../public/assets/landing page/works-circle-left.png";


const Works = () => {
  return (
    <div className="pt-28 max-sm:pt-4 max-sm:mt-40 relative" id="works">
      <img src={circleRight} width={300} className="absolute top-40 -right-36 max-lg:hidden" />
      <img src={circleLeft} width={300} className="absolute bottom-40 -left-36 max-lg:hidden" />
      <h1 className="text-6xl max-sm:text-4xl font-medium">How it works?</h1>
      <p className="text-gray-200 mt-3">
        Competing with Kode! is as easy as 1-2-3.
      </p>
      <div className="relative w-[40em] max-sm:w-[20em]  mx-auto h-[82em] max-sm:h-[46rem]">
        <div className="absolute right-2 top-5 max-sm:top-2 max-sm:-right-2 z-10">
          <h1 className="text-3xl w-[12em] max-sm:text-sm">
            <span className="text-[#179585]">1. Create</span> Your Account
          </h1>
          <p className="text-gray-200 w-[21em] text-sm z-10 max-sm:text-xs max-sm:w-[17em]">
            Sign up in seconds and unlock access to a world of coding
            challenges.
          </p>
        </div>
        <div className="absolute -left-2 top-[17em] max-sm:-left-4 max-sm:top-[9em] z-10">
          <h1 className="text-3xl w-[12em] max-sm:w-[14em] max-sm:text-sm max-sm text-right">
            <span className="text-[#179585]">2. Pick</span> Your Challenge
          </h1>
          <p className="text-gray-200 w-[23em] max-sm:w-[16.2em] text-right text-sm max-sm:text-xs z-10">
            Find the perfect competition tailored to your skills{" "}
            <span className="max-sm:hidden">
              and interests—whether you're a beginner or a pro.
            </span>
          </p>
        </div>
        <div className="absolute right-4 top-[32em] max-sm:top-[16.2em] z-10 max-sm:scale-90">
          <h1 className="text-3xl w-[12em] max-sm:text-sm">
            <span className="text-[#179585]">3. Kode</span> Like a Pro
          </h1>
          <p className="text-gray-200 w-[21em] text-sm max-sm:text-xs max-sm:w-[15em] ">
            Dive into our powerful built-in IDE to write, test, and perfect your
            code<span className="max-sm:hidd">—all in one place.</span>
          </p>
        </div>
        <div className="absolute left-1 top-[52.5em] max-sm:top-[27.6em] max-sm:left-4 z-10">
          <h1 className="text-3xl w-[14em] max-sm:text-sm">
            <span className="text-[#179585]">4. Submit</span> with Confidence
          </h1>
          <p className="text-gray-200 w-[28em] text-right text-sm max-sm:text-xs max-sm:w-[15em]">
            <span className="max-sm:hidden">
              Submit your solution hassle-free.
            </span>{" "}
            We’ll handle real-time plagiarism checks and precise scoring.
          </p>
        </div>
        <div className="absolute left-28 top-[73.8em] max-sm:top-[39.5em] max-sm:left-16 z-10">
          <h1 className="text-3xl w-[14em] max-sm:text-sm">
            <span className="text-[#179585]">5. Watch</span> the Action Unfold
          </h1>
          <p className="text-gray-200 w-[28em] text-center text-sm max-sm:text-xs max-sm:w-[16em]">
            Climb the leaderboard, see your rank in real time, and celebrate
            your wins!
          </p>
        </div>
        <div className="relative z-0">
          <img
            src={worksLine}
            width={600}
            className="mx-auto my-10 mb-14 max-sm:w-[20em]"
          />
          <div className="sticky bottom-0 bg-gray-900 h-[22em] opacity-85 w-full z-10"></div>
        </div>
      </div>
      <Button className="mb-24 z-10 max-sm:mb-0 scale-100">
        <p className="text-2xl text-center max-sm:text-sm z-20">
          Your coding journey starts here! Sign up and join the next competition
          now.
        </p>
      </Button>
    </div>
  );
};

export default Works;
