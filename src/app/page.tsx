"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQItem from "@/components/FAQItem";
import { colors } from "@/config/colors";
import ShimmerTitle from "@/components/ShimmerTitle";
import StackedCarousel from "@/components/StackedCarousel";

function InteractiveSubteamImage(props: {
  sectionName: string;
  photoName: string;
  isActive: boolean;
  isMobile: boolean;
}) {
  return (
    <div
      id={`${props.sectionName}-section`}
      className="flex-1 h-1/4 md:h-full flex flex-col items-center justify-center relative group cursor-pointer overflow-hidden transition-all duration-500 md:hover:flex-[1.5]"
      onClick={() => {
        window.location.href = `/team?scrollTo=${props.sectionName}`;
      }}
    >
      <div
        className="absolute inset-0 transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundImage: `url(/photos/${props.photoName})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className={`absolute inset-0 transition-opacity duration-300 bg-[#111827] ${
          props.isMobile
            ? props.isActive
              ? "opacity-0"
              : "opacity-50"
            : "opacity-50 group-hover:opacity-0"
        }`}
      />
      <h3 className="text-3xl font-bold mb-4 text-white relative z-10">
        {props.sectionName.charAt(0).toUpperCase() + props.sectionName.slice(1)}
      </h3>
    </div>
  );
}

function HistoryEntry(props: {
  carName: string;
  year: string;
  paragraphs: string[];
  imageComponents: React.ReactNode[];
  imagesOnLeft: boolean;
  imageAspectRatio?: number;
}) {
  return (
    <section
      aria-label={props.carName}
      id={props.carName.toLowerCase()}
      className="w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div
          className={`w-full h-full flex items-center justify-center md:order-${props.imagesOnLeft ? "1" : "2"}`}
        >
          <StackedCarousel
            images={props.imageComponents}
            aspectRatio={props.imageAspectRatio}
          />
        </div>

        <div
          className={`flex flex-col md:order-${props.imagesOnLeft ? "2" : "1"}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center md:text-left text-yellow-300">
            {props.carName}
            <span className="text-gray-300 text-xl px-6">{props.year}</span>
          </h2>
          {props.paragraphs.map((p, i) => (
            <p
              className="text-sm md:text-lg text-gray-100 leading-relaxed mb-3"
              key={i}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const title = "FORMULA SLUG";
  const subtitle = "NEVER HAS THERE BEEN A FASTER SLUG";

  const [subtitleActive, setSubtitleActive] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Configurable delays
  const fallInDelay = 0.02;
  const fallInDuration = (title.length - 1) * fallInDelay * 1000 + 1000;

  useEffect(() => {
    setTitleVisible(true);
    // Trigger subtitle animation after half the main title's fall-in duration
    const subtitleTimeout = setTimeout(
      () => setSubtitleActive(true),
      fallInDuration / 2,
    );

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Add scroll listener for mobile hover effect
    const handleScroll = () => {
      if (!isMobile) return;

      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Calculate the middle 20% of the screen (40% to 60% from top)
      const viewportStart = scrollY + windowHeight * 0.4;
      const viewportEnd = scrollY + windowHeight * 0.6;

      // Get team sections
      const mechanicalEl = document.getElementById("mechanical-section");
      const electricalEl = document.getElementById("electrical-section");
      const softwareEl = document.getElementById("software-section");
      const businessEl = document.getElementById("business-section");

      let newActiveSection = null;

      // Check which section is in the middle 20%
      [
        { el: mechanicalEl, name: "mechanical" },
        { el: electricalEl, name: "electrical" },
        { el: softwareEl, name: "software" },
        { el: businessEl, name: "business" },
      ].forEach(({ el, name }) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          const elementTop = rect.top + scrollY;
          const elementBottom = elementTop + rect.height;

          // Check if the element intersects with the middle 20% zone
          if (elementTop < viewportEnd && elementBottom > viewportStart) {
            newActiveSection = name;
          }
        }
      });

      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => {
      clearTimeout(subtitleTimeout);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between px-4 py-8 sm:p-12 lg:p-24 overflow-hidden"
      style={
        {
          "--shadow-color2": colors.shadowColor2,
          "--shadow-color": colors.shadowColor1,
          "--text-color": colors.textColor,
          "--gradient-from": colors.gradientFrom,
          "--gradient-via": colors.gradientVia,
          "--gradient-to": colors.gradientTo,
          padding: "0px",
        } as React.CSSProperties
      }
    >
      <div
        style={{ height: "100vh", width: "100%" }}
        className="relative flex flex-col items-center justify-between"
      >
        <div className="absolute inset-0 -z-10 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: -2 }}
          >
            <source
              src="/videos/FSDynamicWallpaper_2026_720_noaudio_small.mp4"
              type="video/mp4"
            />
          </video>
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background: `linear-gradient(to bottom right, var(--gradient-from), var(--gradient-via), var(--gradient-to))`,
              opacity: 0.7,
              zIndex: -1,
            }}
          />
        </div>
        <Navbar />
        <h1
          className="w-full text-4xl sm:text-5xl md:text-6xl mt-16 md:mt-32 lg:text-9xl font-bold drop-shadow-lg flex flex-wrap justify-center mb-2 max-w-full break-words px-4 md:px-0"
          style={{
            color: "var(--text-color)",
            opacity: titleVisible ? 1 : 0,
            transition: "opacity 0.7s linear",
          }}
        >
          <ShimmerTitle delayMs={fallInDuration * 0.9}>
            {title.split("").map((char, index) => (
              <span
                key={index}
                className={char === " " ? "inline-block w-4 sm:w-8" : ""}
                style={{
                  display: char === " " ? "inline-block" : "inline",
                  minWidth: char === " " ? "0.25em" : undefined,
                  letterSpacing: "0.03em",

                  // TODO: On chromium-based browsers, ShimmerTitle conflicts with
                  // fall-in animation to cause the title to be invisible. I
                  // *think* it's due to this chromium bug:
                  // https://issues.chromium.org/issues/41385122

                  // animation: `fall-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both ${index * fallInDelay}s`,
                  // animationFillMode: 'both',
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </ShimmerTitle>
        </h1>
        <h1
          className="mt-1 text-xl md:text-2xl font-semibold text-center tracking-widest px-4 md:px-0"
          style={{
            color: "var(--text-color)",
            opacity: subtitleActive ? 0.85 : 0,
            transition: "opacity 0.2s linear",
          }}
        >
          {subtitle.split("").map((char, index) => (
            <span
              key={index}
              className={char === " " ? "inline-block" : ""}
              style={{
                display: char === " " ? "inline-block" : "inline",
                minWidth: char === " " ? "0.5em" : undefined,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        {/* video section */}
        <div className="w-full max-w-6xl mt-12 md:mt-20 mb-8 md:mb-10 px-4 md:px-0 mx-auto flex justify-center">
          <button
            className="px-6 py-3 border-4 border-white bg-transparent shadow-lg transition-colors duration-200 hover:bg-white hover:text-yellow-400 rounded"
            style={{
              borderRadius: "6px",
              color: "var(--text-color)",
              padding: "12px 20px",
            }}
            onClick={() => {
              const aboutSection = document.querySelector("section");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color =
                colors.electricBlue;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color =
                "var(--text-color)";
            }}
          >
            <span
              className="text-2xl md:text-3xl font-bold"
              style={{
                fontFamily: "'Scandia Bold Italic', sans-serif",
                fontStyle: "italic",
              }}
            >
              About Us
            </span>
          </button>
        </div>
        <div className="w-full max-w-6xl mt-8 md:mt-10 mb-20 md:mb-40 px-4 md:px-0 mx-auto flex justify-center">
          <button
            className="px-6 py-3 border-4 border-white bg-transparent shadow-lg transition-colors duration-200 hover:bg-white hover:text-yellow-400 rounded"
            style={{
              borderRadius: "6px",
              color: "var(--text-color)",
              padding: "12px 20px",
            }}
            onClick={() =>
              window.open(
                "https://fsae.slack.com/join/signup#/domain-signup",
                "_blank",
              )
            }
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color =
                colors.electricBlue;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color =
                "var(--text-color)";
            }}
          >
            <span
              className="text-2xl md:text-3xl font-bold"
              style={{
                fontFamily: "'Scandia Bold Italic', sans-serif",
                fontStyle: "italic",
              }}
            >
              Join the Team
            </span>
          </button>
        </div>
      </div>
      <div className="w-screen h-[130vh] md:h-[70vh] relative">
        <div className="flex flex-col md:flex-row w-full h-full z-0">
          <InteractiveSubteamImage
            sectionName="mechanical"
            photoName="sus_pension_FS4_1974.jpg"
            isActive={activeSection === "mechanical"}
            isMobile={isMobile}
          />
          <InteractiveSubteamImage
            sectionName="electrical"
            photoName="VCU_in_car_FS4.jpg"
            isActive={activeSection === "electrical"}
            isMobile={isMobile}
          />
          <InteractiveSubteamImage
            sectionName="software"
            photoName="grafana.png"
            isActive={activeSection === "software"}
            isMobile={isMobile}
          />
          <InteractiveSubteamImage
            sectionName="business"
            photoName="OpenHouseCandid.jpeg"
            isActive={activeSection === "business"}
            isMobile={isMobile}
          />
        </div>
      </div>

      <section className="w-full  mx-0 mt-0 mb-0 px-4 py-10 bg-[#181c2a] bg-opacity-90  shadow-lg flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-4">
          About Us
        </h2>
        <p className="text-lg text-gray-100 mb-4 text-center max-w-6xl">
          Formula Slug is UC Santa Cruz's premier student-run electric vehicle
          team, proudly competing each June in the international Formula SAE
          Electric competition in Michigan. There, we put our student-built
          racecar to the test against teams from around the world in a rigorous
          series of technical inspections, static events (design, cost, and
          business presentations), and dynamic events measuring acceleration,
          handling, endurance, and overall performance.
        </p>
        <p className="text-lg text-gray-100 mb-4 text-center max-w-6xl">
          Our student-led team of aspiring engineers are more than just a
          college organization — we're a team built on collaboration, technical
          excellence, and ambition. Formula Slug members take on real
          engineering challenges, grow into leaders, and work as one cohesive
          team to push the boundaries of electric racecar design through Formula
          SAE. Together, we're proving that a team of dedicated students can
          compete on the international stage.
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-300 mt-8 mb-4">
          Our History
        </h2>

        {/* History section */}
        <div className="w-full max-w-6xl mx-auto px-4 space-y-12">
          <HistoryEntry
            carName={"FS-4"}
            year={"2026"}
            paragraphs={[
              `FS-4 is an ambitious, ground-up redesign following the successes of
              FS-3. This car features our first fully custom battery pack design,
              a brand new suspension system, an improved frame, overhauled
              electrical system, and our first ever complete aerodynamics package.`,

              `Competition faced us with timeline crunches, last-second critical
              mechanical failures, firmware issues, and a rain test failure.
              Despite these challenges, FS-4 was able to pass every technical
              inspection, including Battery, Mechanical, EV Active, Tilt, and
              Rain, up until Brakes, which we missed by just less than 3mph.`,

              `We couldn't be prouder of what we accomplished with FS-4, and we
              can't wait to show the world what we've got with FS-5!`,
            ]}
            imageComponents={[
              <img
                src="/photos/comp_2026_DSC02270.jpg"
                className="w-full h-full object-cover"
                loading="lazy"
                key={1}
              />,
              <img
                src="/photos/FS4_comp_team_photo.png"
                className="w-full h-full object-cover"
                loading="lazy"
                key={2}
              />,
              <img
                src="/photos/crew_pushing_dan_fs4.jpg"
                className="w-full h-full object-cover"
                loading="lazy"
                key={3}
              />,
              <img
                src="/photos/FS-4_front_of_car.jpg"
                className="w-full h-full object-cover"
                loading="lazy"
                key={4}
              />,
            ]}
            imagesOnLeft={true}
          />
          <HistoryEntry
            carName={"FS-3"}
            year={"2025"}
            paragraphs={[
              `Our highest-placing car, FS-3, competed at FSAE Michigan in
              June 2025. The car cleared every inspection — mechanical, HV,
              EV active, rain, tilt, and brake — and successfully took part
              in all dynamic events. In just our third year of official
              competition, FS-3 met our ambitious goal of a Top 20 overall
              finish and secured a Top 3 placement in efficiency, marking a
              new benchmark for Formula Slug's success. The achievements of
              FS-3 set a strong foundation for FS-4, inspiring the team to
              reach even higher in performance, innovation, and competition.`,
            ]}
            imageComponents={[
              <iframe
                className="w-full aspect-video block overflow-hidden rounded-2xl"
                src="https://www.youtube.com/embed/xwFrdFvr7uU"
                title="Formula Slug 2025 FSAE EV Michigan Competition"
                allowFullScreen
                key={1}
              ></iframe>,
              <img
                src="/photos/FS2026-3_small_cropped.jpg"
                className="w-full h-full object-cover"
                loading="lazy"
                key={2}
              />,
              <img
                src="/photos/20250615 MIS UCSC SAE E slug for web-114.jpg"
                className="w-full h-full object-cover"
                loading="lazy"
                key={3}
              />,
            ]}
            imagesOnLeft={false}
            imageAspectRatio={16/9} // YouTube embed is 16:9
          />
          <HistoryEntry
            carName={"FS-2"}
            year={"2019-2024"}
            paragraphs={[
              `FS-2 marked a major milestone as our first car to compete at
              the Formula SAE Electric competition in Michigan. Building on
              the foundation of FS-1, the team passed mechanical technical
              inspection and placed 56th overall — a significant step
              forward for Formula Slug. This era was opened due to new
              opportunities with the support of Baskin Engineering,
              including closer collaboration with Slugworks and the
              resources to rebuild the team after the challenges of the
              pandemic. FS-2 not only advanced our technical capabilities
              but also strengthened our community, setting the stage for the
              achievements of FS-3.`,
            ]}
            imageComponents={[
              <img
                src="/photos/FS2AtComp.jpg"
                className="w-full h-full object-cover"
                loading="lazy"
                key={1}
              />,
              <img
                src="/photos/FS2_on_ground.JPG"
                className="w-full h-full object-cover"
                loading="lazy"
                key={2}
              />,
              <img
                src="/photos/IMG_3812.jpg"
                className="w-full h-full object-cover"
                loading="lazy"
                key={3}
              />,
            ]}
            imagesOnLeft={true}
            imageAspectRatio={1327/822} // FS2AtComp photo is a weird ratio
          />
          <HistoryEntry
            carName={"FS-1"}
            year={"2016-2018"}
            paragraphs={[
              `Building on the progress and experience gained from FS-0, FS-1
              became the first Formula Slug vehicle to compete at the
              Formula SAE Electric competition in Lincoln, Nebraska.
              Although the car did not pass technical inspection, it marked
              a milestone for the team by earning our very first points
              through the static events. This experience proved that we
              could compete on the international stage and provided
              invaluable lessons that shaped the design and engineering of
              every car that followed.`,
            ]}
            imageComponents={[
              <img
                src="/photos/FS1.jpg"
                alt="FS-1 Formula Slug Vehicle"
                className="w-full h-auto object-cover rounded-lg"
                loading="lazy"
                key={1}
              />,
            ]}
            imagesOnLeft={false}
          />
          <HistoryEntry
            carName={"FS-0"}
            year={"2014-2016"}
            paragraphs={[
              `Founded in 2014, Formula Slug was founded on the premise of
              renewable energy in electric vehicles. This led to our first
              vehicle, FS-0. We raised over $16,000 and put in countless
              hours of work. While it didn't go to competition, it served as
              the springboard for Formula Slug's ventures into electric
              vehicle engineering and catalyzed the team's growth and
              guiding principles.`,
            ]}
            imageComponents={[
              <div
                className="w-full max-w-2xl aspect-video rounded-lg overflow-hidden mx-auto md:order-1"
                key={1}
              >
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/W2YDWzCsP7c?si=YlAYGXaJvxtaGviR"
                  title="We Are Formula Slug Documentary"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>,
            ]}
            imagesOnLeft={true}
          />
        </div>

        {/* NEW MEMBER TIMELINE SECTION */}
        <div
          id="new-member-timeline"
          className="w-full max-w-4xl mx-auto mt-16 mb-8"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold mb-8 text-center"
            style={{ color: colors.slugYellow }}
          >
            New Member Timeline
          </h2>
          <div className="text-center text-white">
            {/* Timeline line */}
            <p>
              Coming soon! Check back in a month or two, and in the meantime,
              join our Slack!
            </p>
          </div>
          {/*   <div */}
          {/*     className="absolute left-1/2 transform -translate-x-1/2 w-1 rounded-full hidden md:block" */}
          {/*     style={{ */}
          {/*       height: "calc(100% - 2rem)", */}
          {/*       top: "1rem", */}
          {/*       background: `linear-gradient(to bottom, ${colors.slugYellow}, ${colors.electricBlue}, ${colors.slugYellow})`, */}
          {/*     }} */}
          {/*   ></div> */}
          {/**/}
          {/* Timeline Events */}
          {/*   <div className="space-y-12"> */}
          {/* Intro Meeting 1 */}
          {/*     <div className="flex items-center justify-between"> */}
          {/*       <div className="w-1/12 md:w-5/12"></div> */}
          {/*       <div className="w-2/12 flex justify-center"> */}
          {/*         <div */}
          {/*           className="w-4 h-4 rounded-full z-10" */}
          {/*           style={{ */}
          {/*             backgroundColor: colors.slugYellow, */}
          {/*             border: `4px solid ${colors.electricBlue}`, */}
          {/*           }} */}
          {/*         ></div> */}
          {/*       </div> */}
          {/*       <div className="w-9/12 md:w-5/12 text-left pl-4 md:pl-8"> */}
          {/*         <div */}
          {/*           className="text-white p-4 rounded-xl shadow-lg" */}
          {/*           style={{ */}
          {/*             background: `linear-gradient(to right, ${colors.electricBlue}, ${colors.titleBlue})`, */}
          {/*           }} */}
          {/*         > */}
          {/*           <h3 className="text-lg font-bold mb-2">Intro Meeting #1</h3> */}
          {/*           <p className="text-sm opacity-90"> */}
          {/*             Come to one of our information meetings! */}
          {/*           </p> */}
          {/*           <div */}
          {/*             className="text-xs mt-2 px-2 py-1 rounded-full inline-block font-semibold" */}
          {/*             style={{ */}
          {/*               backgroundColor: colors.slugYellow, */}
          {/*               color: colors.primary, */}
          {/*             }} */}
          {/*           > */}
          {/*             September 25 @ 7:00pm in E2-180 */}
          {/*           </div> */}
          {/*         </div> */}
          {/*       </div> */}
          {/*     </div> */}
          {/* Intro Meeting 2*/}
          {/*     <div className="flex items-center justify-between"> */}
          {/*       <div className="w-9/12 md:w-5/12 text-right pr-4 md:pr-8"> */}
          {/*         <div */}
          {/*           className="text-white p-4 rounded-xl shadow-lg" */}
          {/*           style={{ */}
          {/*             background: `linear-gradient(to right, ${colors.electricBlue}, ${colors.titleBlue})`, */}
          {/*           }} */}
          {/*         > */}
          {/*           <h3 className="text-lg font-bold mb-2">Intro Meeting #2</h3> */}
          {/*           <p className="text-sm opacity-90"> */}
          {/*             Come to one of our information meetings! */}
          {/*           </p> */}
          {/*           <div */}
          {/*             className="text-xs mt-2 px-2 py-1 rounded-full inline-block font-semibold" */}
          {/*             style={{ */}
          {/*               backgroundColor: colors.slugYellow, */}
          {/*               color: colors.primary, */}
          {/*             }} */}
          {/*           > */}
          {/*             September 28 @ 4:00pm in E2-180 */}
          {/*           </div> */}
          {/*         </div> */}
          {/*       </div> */}
          {/*       <div className="w-2/12 flex justify-center"> */}
          {/*         <div */}
          {/*           className="w-4 h-4 rounded-full z-10" */}
          {/*           style={{ */}
          {/*             backgroundColor: colors.slugYellow, */}
          {/*             border: `4px solid ${colors.electricBlue}`, */}
          {/*           }} */}
          {/*         ></div> */}
          {/*       </div> */}
          {/*       <div className="w-1/12 md:w-5/12"></div> */}
          {/*     </div> */}
          {/**/}
          {/* Event 3 */}
          {/*     <div className="flex items-center justify-between"> */}
          {/*       <div className="w-1/12 md:w-5/12"></div> */}
          {/*       <div className="w-2/12 flex justify-center"> */}
          {/*         <div */}
          {/*           className="w-4 h-4 rounded-full z-10" */}
          {/*           style={{ */}
          {/*             backgroundColor: colors.slugYellow, */}
          {/*             border: `4px solid ${colors.electricBlue}`, */}
          {/*           }} */}
          {/*         ></div> */}
          {/*       </div> */}
          {/*       <div className="w-9/12 md:w-5/12 text-left pl-4 md:pl-8"> */}
          {/*         <div */}
          {/*           className="text-white p-4 rounded-xl shadow-lg" */}
          {/*           style={{ */}
          {/*             background: `linear-gradient(to right, ${colors.electricBlue}, ${colors.titleBlue})`, */}
          {/*           }} */}
          {/*         > */}
          {/*           <h3 className="text-lg font-bold mb-2"> */}
          {/*             Individual Subteam Meetings & Workshops */}
          {/*           </h3> */}
          {/*           <p className="text-sm opacity-90"> */}
          {/*             Choose your subteam and start working on real projects */}
          {/*             with experienced members. */}
          {/*           </p> */}
          {/*           <div */}
          {/*             className="text-xs mt-2 px-2 py-1 rounded-full inline-block font-semibold" */}
          {/*             style={{ */}
          {/*               backgroundColor: colors.slugYellow, */}
          {/*               color: colors.primary, */}
          {/*             }} */}
          {/*           > */}
          {/*             October 5th - 17th */}
          {/*           </div> */}
          {/*         </div> */}
          {/*       </div> */}
          {/*     </div> */}
          {/**/}
          {/* Event 4 */}
          {/*     <div className="flex items-center justify-between"> */}
          {/*       <div className="w-9/12 md:w-5/12 text-right pr-4 md:pr-8"> */}
          {/*         <div */}
          {/*           className="text-white p-4 rounded-xl shadow-lg" */}
          {/*           style={{ */}
          {/*             background: `linear-gradient(to right, ${colors.electricBlue}, ${colors.titleBlue})`, */}
          {/*           }} */}
          {/*         > */}
          {/*           <h3 className="text-lg font-bold mb-2"> */}
          {/*             Subteam Onboarding Projects Due */}
          {/*           </h3> */}
          {/*           <p className="text-sm opacity-90"> */}
          {/*             All projects for subteam and major subteams are due */}
          {/*           </p> */}
          {/*           <div */}
          {/*             className="text-xs mt-2 px-2 py-1 rounded-full inline-block font-semibold" */}
          {/*             style={{ */}
          {/*               backgroundColor: colors.slugYellow, */}
          {/*               color: colors.primary, */}
          {/*             }} */}
          {/*           > */}
          {/*             October 17th */}
          {/*           </div> */}
          {/*         </div> */}
          {/*       </div> */}
          {/*       <div className="w-2/12 flex justify-center"> */}
          {/*         <div */}
          {/*           className="w-4 h-4 rounded-full z-10" */}
          {/*           style={{ */}
          {/*             backgroundColor: colors.slugYellow, */}
          {/*             border: `4px solid ${colors.electricBlue}`, */}
          {/*           }} */}
          {/*         ></div> */}
          {/*       </div> */}
          {/*       <div className="w-1/12 md:w-5/12"></div> */}
          {/*     </div> */}
          {/**/}
          {/* Event 5 */}
          {/*     <div className="flex items-center justify-between"> */}
          {/*       <div className="w-9/12 md:w-5/12 text-right pr-4 md:pr-8"> */}
          {/*         <div */}
          {/*           className="text-white p-4 rounded-xl shadow-lg" */}
          {/*           style={{ */}
          {/*             background: `linear-gradient(to right, ${colors.electricBlue}, ${colors.titleBlue})`, */}
          {/*           }} */}
          {/*         > */}
          {/*           <h2 className="text-lg font-bold mb-2"> */}
          {/*             Member Roster Released */}
          {/*           </h2> */}
          {/*           <p className="text-sm opacity-90"> */}
          {/*             New members are assigned to their subteams and onboarding */}
          {/*             is complete! */}
          {/*           </p> */}
          {/*           <div */}
          {/*             className="text-xs mt-2 px-2 py-1 rounded-full inline-block font-semibold" */}
          {/*             style={{ */}
          {/*               backgroundColor: colors.slugYellow, */}
          {/*               color: colors.primary, */}
          {/*             }} */}
          {/*           > */}
          {/*             October 19th */}
          {/*           </div> */}
          {/*         </div> */}
          {/*       </div> */}
          {/*       <div className="w-2/12 flex justify-center"> */}
          {/*         <div */}
          {/*           className="w-4 h-4 rounded-full z-10" */}
          {/*           style={{ */}
          {/*             backgroundColor: colors.slugYellow, */}
          {/*             border: `4px solid ${colors.electricBlue}`, */}
          {/*           }} */}
          {/*         ></div> */}
          {/*       </div> */}
          {/*       <div className="w-1/12 md:w-5/12"></div> */}
          {/*     </div> */}
          {/*   </div> */}
          {/* </div> */}
        </div>

        {/* NEW MEMBER FAQ SECTION */}
        <div
          id="new-member-faq"
          className="w-full max-w-4xl mx-auto mt-16 mb-8"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold mb-8 text-center"
            style={{ color: colors.slugYellow }}
          >
            New Member FAQ
          </h2>
          <div className="space-y-4">
            <FAQItem
              question="What is FSAE?"
              answer="Formula SAE is an international student engineering competition where teams design, build, and race Formula-style vehicles. Teams are evaluated on design, performance, cost, business, and innovation. Formula Slug competes in FSAE Electric Michigan, which is held at Michigan International Speedway in June."
            />
            <FAQItem
              question="How much experience do I need to join the club?"
              answer="You don't need experience to join Formula Slug! All we ask for is a willingness to learn and to put in time when things get tough! We provide a lot of opportunities and resources to learn the skills new members need to get started, but we've found that successful new members often learn on their own and bring their own ideas to the table. In general, successful members are passionate about what they're working on, learning much of their skills and knowledge through their work!"
            />
            <FAQItem
              question="How much time commitment is required?"
              answer="The time commitment varies based on the task provided to you by your subteam lead. Typically, we see that students that put in more time tend to feel more fulfilled at the end of the season. We encourage new members to communicate with their leads and captains regarding the amount of time they are able to commit."
            />
            <FAQItem
              question="Who gets to drive the car?"
              answer="Drivers for competition are chosen through a driver selection process and are members who have worked on the car throughout the year. While most do not drive at competition, we host track days to allow the season's team roster to drive that year's car."
            />
            <FAQItem
              question="What are the major requirements for this club?"
              answer="Regardless of the major, we welcome all UCSC students and majors to the club. We do not restrict members from joining if they are not an engineering major! We have a ton of non-Baskin majors including environmental science, applied physics, economics, bioinformatics, etc!"
            />
            <FAQItem
              question="What type of work do new members get to work on?"
              answer="We would like all members of the team to feel that they have contributed to the car! So, many of the tasks new members work on are directly on the car or directly impact the car - even as a new member, you may be working on a car critical component!"
            />
            <FAQItem
              question="Do you test on campus?"
              answer="Due to space constraints and uneven grounds, testing in Santa Cruz is difficult. We have been lucky to work with Blue Max Kart Club in Davis who allow us to test on their track."
            />
            <FAQItem
              question="How can this club help my career?"
              answer="Our team, and FSAE as a whole, emphasizes building engineers. We hold design reviews, work under constraints, and learn various design skills required for our competition and industry as a whole. Many of these skills, technical and non-technical, help our team members and alumni land jobs and internships at companies such as Zero Motorcycles, Tesla, Rivian, Apple, etc. With the wide network that comes with being a part of FSAE, students are also given the chance to network with other schools and industry professionals." />
            <FAQItem
              question="How do I get access to the lab space?"
              answer="All team members are required to complete the Slugworks (Baskin Engineering's makerspace) canvas course to get access to the club space. The canvas is not out yet but the team will be notified on slack for when it is released!"
            />
          </div>
        </div>

        {/* NEW MEMBER TIMELINE SECTION */}
        <p
          className="text-xs mt-8 md:mt-12"
          style={{
            color: "var(--text-color)",
            opacity: 0.65,
            lineHeight: "1.4",
          }}
        >
          This group is open to all students consistent with state and federal
          law, the UC Nondiscrimination Statement and the Nondiscrimination
          Policy Statement for University of California Publications Regarding
          Student-Related Matters.
        </p>
      </section>

      {/* Animation shit that I spent too much of my time on */}
      <style jsx>{`
        @keyframes fall-in {
          0% {
            transform: translateX(110vw) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translateX(5px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateX(0) rotate(0deg);
            opacity: 1;
          }
        }
        @keyframes shadow-pop {
          0% {
            text-shadow: none;
          }
          60% {
            text-shadow:
              1px -1px 0px var(--shadow-color),
              1.5px -1.5px 0px var(--shadow-color),
              2px -2px 0px var(--shadow-color),
              2.5px -2.5px 0px var(--shadow-color),
              3px -3px 0px var(--shadow-color),
              3.5px -3.5px 0px var(--shadow-color),
              4px -4px 0px var(--shadow-color2),
              4.5px -4.5px 0px var(--shadow-color2),
              5px -5px 0px var(--shadow-color2),
              5.5px -5.5px 0px var(--shadow-color2),
              6px -6px 0px rgb(0, 0, 0);
          }
          100% {
            text-shadow: none;
          }
        }
        .animate-fall-in {
          animation: fall-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
        .shadow-pop-now {
          animation: shadow-pop 1s cubic-bezier(0.12, 0.25, 0.3, 0.5) forwards !important;
        }
        .subtitle-fade-in {
          animation: none;
        }
      `}</style>
      <Footer />
    </main>
  );
}
