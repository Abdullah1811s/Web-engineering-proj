import React, { useRef } from "react";
import head from "../../../../../public/assets/Kody/head-without-eye.png";
import eye from "../../../../../public/assets/Kody/eye.png";
import body from "../../../../../public/assets/Kody/body.png";
import wingLeft from "../../../../../public/assets/Kody/wing-left.png";
import wingRight from "../../../../../public/assets/Kody/wing-right.png";
import footLeft from "../../../../../public/assets/Kody/foot-left.png";
import footRight from "../../../../../public/assets/Kody/foot-right.png";
import tail from "../../../../../public/assets/Kody/tail.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const AnimatedKody = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const eyeLeftRef = useRef();
  const eyeRightRef = useRef();
  const tailRef = useRef();
  const fullBodyRef = useRef();
  const wingRightRef = useRef();
  const wingLeftRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(
      wingLeftRef.current,
      { rotate: 110, duration: 0.8, y: -60, x: -10, ease: "power2.inOut" },
      0
    )
      .to(eyeLeftRef.current, { y: -8, duration: 1.2, ease: "power2.inOut" }, 0)
      .to(
        eyeRightRef.current,
        { y: -8, duration: 1.2, ease: "power2.inOut" },
        0
      )
      .to(wingLeftRef.current, {
        rotate: 70,
        duration: 0.8,
        y: -40,
        x: -15,
        ease: "power2.inOut",
      })
      .to(wingLeftRef.current, {
        rotate: 110,
        duration: 0.8,
        y: -60,
        x: -10,
        ease: "power2.inOut",
      })
      .to(
        wingLeftRef.current,
        { rotate: 0, duration: 0.8, y: 0, x: 0, ease: "power2.inOut" },
        2.4
      )
      .to(
        wingRightRef.current,
        { rotate: 0, duration: 0.8, y: 0, x: 0, ease: "power2.inOut" },
        2.4
      )
      .to(
        eyeLeftRef.current,
        { y: -12, duration: 0.8, ease: "power2.inOut" },
        2.4
      )
      .to(
        eyeRightRef.current,
        { y: -12, duration: 0.8, ease: "power2.inOut" },
        2.4
      )
      .to(
        tailRef.current,
        {
          rotate: 100,
          duration: 1,
          y: -10,
          x: 25,
          ease: "power2.inOut",
        },
        2.4
      )

      .to(
        fullBodyRef.current,
        { y: -50, duration: 1, ease: "power2.inOut" },
        2.4
      )
      .to(
        fullBodyRef.current,
        { y: -30, duration: 0.7, ease: "power2.inOut" },
        2.9
      )
      .to(
        wingLeftRef.current,
        { rotate: 90, duration: 0.8, y: -40, x: -10, ease: "power2.inOut" },
        3.6
      )
      .to(
        wingRightRef.current,
        { rotate: -90, duration: 0.8, y: -40, x: 10, ease: "power2.inOut" },
        3.6
      )
      .to(
        tailRef.current,
        {
          rotate: 40,
          duration: 0.5,
          y: 0,
          x: 10,
          ease: "power2.inOut",
        },
        3.6
      )
      .to(
        wingLeftRef.current,
        { rotate: 0, duration: 0.8, y: 0, x: 0, ease: "power2.inOut" },
        4
      )
      .to(
        wingRightRef.current,
        { rotate: 0, duration: 0.8, y: 0, x: 0, ease: "power2.inOut" },
        4
      )
      .to(
        tailRef.current,
        {
          rotate: 100,
          duration: 1,
          y: -10,
          x: 25,
          ease: "power2.inOut",
        },
        4
      )
      .to(
        fullBodyRef.current,
        { y: -100, duration: 1, ease: "power2.inOut" },
        3.8
      )
      .to(
        wingLeftRef.current,
        { rotate: 0, duration: 2, y: 0, x: 0, ease: "power2.inOut" },
        4.8
      )
      .to(
        wingRightRef.current,
        { rotate: 0, duration: 2, y: 0, x: 0, ease: "power2.inOut" },
        4.8
      )
      .to(
        tailRef.current,
        {
          rotate: 0,
          duration: 2,
          y: 0,
          x: 0,
          ease: "power2.inOut",
        },
        4.8
      )
      .to(
        eyeLeftRef.current,
        { y: 0, duration: 1, ease: "power2.inOut" },
        4.6
      )
      .to(
        eyeRightRef.current,
        { y: 0, duration: 1, ease: "power2.inOut" },
        4.6
      )
      .to(fullBodyRef.current, { y: 0, duration: 1.2, ease: "back.in" }, 4.4);

    ScrollTrigger.create({
      trigger: fullBodyRef.current,
      start: "top 70%",
      end: "top 20%",
      animation: tl,
      onEnter: () => {
        tl.restart();
      },
    });
  }, []);

  return (
    <div
      className="relative h-[16.6em] w-[20em] mx-auto scale-110"
      ref={fullBodyRef}
    >
      <img
        ref={tailRef}
        src={tail}
        alt="kody"
        width={150}
        className="absolute bottom-2 right-10"
      />
      <img
        Src={body}
        alt="kody"
        width={150}
        className="absolute top-[8.1em] left-1/2 -translate-x-1/2"
      />
      <img
        ref={wingLeftRef}
        src={wingLeft}
        alt="kody"
        width={90}
        className="absolute top-[8.5em] left-6 rotate-90 -translate-y-10 -translate-x-3"
      />
      <img
        ref={wingRightRef}
        src={wingRight}
        alt="kody"
        width={90}
        className="absolute top-[8.5em] right-6 -rotate-90 -translate-y-10 translate-x-3"
      />
      <img
        src={footLeft}
        alt="kody"
        width={50}
        className="absolute bottom-0 left-24"
      />
      <img
        src={footRight}
        alt="kody"
        width={50}
        className="absolute bottom-0 right-24"
      />
      <img
        src={head}
        alt="kody"
        width={200}
        className="absolute top-0 left-1/2 -translate-x-1/2"
      />
      <img
        src={eye}
        alt="kody"
        ref={eyeLeftRef}
        width={30}
        className="absolute top-[5.6em] left-[7.7em] -translate-x-1/2"
      />
      <img
        src={eye}
        alt="kody"
        ref={eyeRightRef}
        width={30}
        className="absolute top-[5.6em] right-[5.6em] -translate-x-1/2"
      />
    </div>
  );
};

export default AnimatedKody;
