/*
  I'm really not sure how to make this look good,
  I want big high quality photos of every subteam doing their work and a small photo of the subteam leader.
  Each team needs a blurb, no call to action, that's what the join team is for
  Front page links need to have seperate anchor tags here, we also need outreach/finance on front page
*/

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShimmerTitle from "@/components/ShimmerTitle";
import SubteamCard from "./subteamComponent";
import CaptainCard from "./captainComponent";
import { colors } from "@/config/colors";
import { Metadata } from "next";
import ScrollToSection from "./ScrollToSection";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Formula Slug - Team",
  description: "Formula Slug's Website - Meet the Team",
};

export default function TeamPage() {
  const CompositesBlurb =
    "Pushing the limits of performance starts with cutting weight without compromising strength. Our composites team engineers precision carbon fiber components such as the aerodynamics package, steering wheel, seat, body shell, and battery fan cowling Every part we craft blends lightweight efficiency with durability that endures the high forces of racing.";
  const VDBlurb =
    "Vehicle Dynamics is the invisible foundation of all motor vehicles. Our members often work between subteams, focusing on the physics behind every static and dynamic property of our cars. We design things that often cannot be seen, but are impossible to ignore. If you’re looking for a physics/mathematics-driven position, please consider joining Vehicle Dynamics!";
  const ErgonomicsBlurb =
    "The Ergonomics team focuses on systems that directly interact with the driver, focused on driver performance, connection, usability, safety, and comfort. We are responsible for the research, design, manufacturing, and testing of the pedal box, driver seating, steering system, brakes, and play a large role in the overall cockpit/chassis design. Our work heavily impacts the drivability and driving experience of the car.";
  const BatteryBlurb =
    "The Battery Team builds the high voltage lithium-ion battery pack that powers the car—it’s a subteam where mechanical and electrical work come together. With tasks ranging from pack design to modeling the container and cooling systems, we ensure the battery delivers power safely and reliably.";
  // const OutreachBlurb =
  //   "The Outreach Team at Formula Slug is responsible for both internal and external promotion, helping to shape and maintain the team’s image and brand. Through social media, partnerships with industry and academia, and engaging storytelling, the team connects with supporters, potential sponsors, and new talent. By showcasing the daily innovations and the collaboration behind every project, Outreach highlights Formula Slug not just as a team that engineers a car, but as a supportive, hands-on community dedicated to excellence both on and off the track.";
  // const FinanceBlurb =
  //   "The finance team is an amazing opportunity to gain experience understanding how different parts of an organization come together to make financial decisions. We work directly with subteams to create budgets and track expenses, while also coordinating fundraising efforts and developing financial proposals.";
  const BusinessBlurb =
    "The Business team at Formula Slug is responsible for raising, managing, and organizing the team's budget. Building a formula style racecar is certainly not cheap, and Business team exists to solve that issue. Through social media, industry sponsorships, and creative storytelling, the team connects with the Santa Cruz community to come together and build each iteration of FS. Business team shows members how to bring a product from inception to completion, from a few designs to a complete, full-scale car, and all the financing behind it.";
  const AerodynamicsBlurb =
    "The aerodynamics subteam develops high-performance wings and bodywork to optimize downforce and minimize drag for maximum lap times. Join us to gain hands-on experience with CFD analysis, wind tunnel testing, and composite manufacturing while designing the aerodynamic package that gives our car its competitive edge.";
  const ChassisBlurb =
    "The Chassis is the glue that holds the car together. As a member of the chassis team you will learn top level system integration, how to work with complex CAD structures in Onshape, and perform simulations using Ansys to create lightweight & rigid steel tube frame";
  const ManufacturingBlurb =
    "Have you ever wanted to manufacture a car? To be hands on with almost every part? On Manufacturing, you’ll get experience making parts with industry-grade machines like mills and routers. You’ll learn not just how to use the tools, but the theory and decision-making behind them. With opportunities to pursue CAM, material science, and cost logistics—skills that translate directly into future careers. If you're unfamiliar, we’ll guide you through the path to expertise; all we’re looking for is dedicated people to go the distance!";
  const WeldingBlurb =
    "The Welding Team’s focus is on welding our critical components, from aluminum to chromoly, we handle it all. We specialize in TIG welding, a process valued for its precision, strength, and reliability. If you’re ready to build with skill and join a hands-on team, come be part of the Welding Team!";
  const SuspensionBlurb =
    "Suspension Team puts the car in motion. We design and engineer the system that links the drivetrain, steering, braking, and aerodynamic components to the chassis and wheels. By applying advanced physics and mathematics, we develop precise kinematic geometries that align with our vehicle dynamics objectives. Through rigorous force and load analyses, we bring the car to life, optimizing for performance in acceleration, braking, and cornering while ensuring the highest levels of driver safety.";
  const LowVoltageBlurb =
    "The Low Voltage system ties the whole car together, providing a communication network, safety systems, and power for everything but the motor. We manage the design of multiple cross-functional PCBs, as well as the car's wire harness. You might enjoy working on the LV system if you're interested in circuit design, logic puzzles, PCB Layout, or soldering!";
  const PowerElectronicsBlurb =
    "Power Electronics manages the components of the Battery including the cells, busbars, fuses, isolation relays, and the rest of the Battery Tray. We also manage power distribution for the low voltage system, including DC-DC conversion. Lastly we research novel projects including a custom in-house DC-DC Converter and Motor Controller!";
  const FirmwareBlurb =
    "Firmware is all the code that runs on the car to control and interconnect the electrical system. We program everything from battery management and throttle control to data logging and dashboard screens. If you love C++ and microcontrollers or want to help out with mission-critical software, then you will enjoy working on firmware!";
  const PowertrainBlurb =
    "Powertrain includes both the design of the mechanical drivetrain, which transfers torque from the motor to the wheels, and the placement of the tractive system electrical components including the motor, motor controller, high voltage cabling, and the required enclosures around them. Powertrain design requires optimizing torque delivery and minimizing weight whlie ensuring reliability during harsh driving."; // TODO
  // const SoftwareBlurb =
  //   "The software team develops tools and systems that support vehicle simulation and autonomous driving. We build models to predict performance, design algorithms for control and perception, and ensure the car can make real-time decisions on and off the track. Our work connects data, software, and hardware to improve both driver and vehicle performance. The software team will be a big commitment and we expect dedication and curiosity whether you come in with no experience or lots of experience.";
  const AutonomousBlurb =
    "Autonomous is a challenge that involves racing without a driver, creating challenging computer vision and vehicle dynamics problems. This requires combining multiple types of sensors, such as cameras, lidar, and inertial measurement to interpret the vehicle’s surroundings and determine optimal control. This is a multidisciplinary effort spanning machine learning, vehicle dynamics modeling, as well as electrical and mechanical design to extract maximum performance from our race car.";
  const DataBlurb =
    "The Software Data team is focused on analyzing the data that helps drive our team's decisions. We develop telemetry systems, data logging pipelines, and validation tools to help evaluate the car's performance and guide future designs. We work closely with the Electrical team, Firmware team, and Mechanical team to design reliable data acquisition systems and turn it into meaningful insights. If you're interested in programming, data analytics, or building software that supports the team, the Data team is the place for you!";
  const SimsBlurb =
    "The simulation team focuses on modeling different aspects of the car to predict and improve its performance. We simulate everything from the tires to the battery to the suspension and more. If you enjoy physics, coding, and want to help design the car, this is the sub-team for you!";

  return (
    <main
      className="min-h-screen text-white"
      style={{ backgroundColor: colors.background.primary }}
    >
      <ScrollToSection />

      <div className="m-0 p-0 w-full">
        <Navbar />
        <div className="grid grid-cols-1 grid-rows-1 pb-5">
          {/* The ::after and ::before elements are used to create gradient
          fade-outs on the top and bottom portions of the image */}
          <div
            className={`
              col-start-1 row-start-1 relative overflow-hidden
              before:absolute before:w-full before:h-1/4
              before:top-0 before:left-0 before:bg-linear-to-t
              before:from-neutral-800/0 before:to-neutral-800/70
              after:absolute after:w-full after:h-1/4
              after:bottom-0 after:left-0 after:bg-linear-to-b
              after:from-gray-900/0 after:to-gray-900/60
            `}
          >
            <Image
              src={`/photos/FS2026-3_small_cropped.jpg`}
              alt={"Team Photo"}
              width={2048}
              height={1152}
              sizes="100vw"
              priority
              className="w-full h-auto block"
            />
          </div>

          {/* Meet the Team - centered between navbar and captains */}
          <div className="pt-[12vh] pb-8 col-start-1 row-start-1 z-1">
            <h1 className="text-4xl sm:text-6xl font-bold text-center px-4 drop-shadow-black drop-shadow-lg">
              <ShimmerTitle>Meet the Team</ShimmerTitle>
            </h1>
          </div>
        </div>

        <div>
          <div className="flex flex-col px-2">
            {/* Captains Section */}
            <div className="flex flex-col items-center justify-center w-full py-6 mt-6">
              <h2
                className="text-5xl font-semibold mb-6 text-center"
                style={{
                  color: "white",
                  textShadow: `1px 2px 0px ${colors.electricBlue}`,
                }}
              >
                Captains
              </h2>

              {/* Desktop: 6 cards in one row, Mobile: 2 + 2 + 2 split */}
              <div className="hidden lg:flex flex-row justify-center w-full px-4">
                {/* <div className="flex justify-center w-full mb-6 gap-4"> */}
                <div className="w-1/7 px-2">
                  <CaptainCard
                    captainName="Victor Kalastirsky"
                    team="Team Captain"
                    photoPath="VictorKalastirsky.jpg"
                    aspectRatio={3 / 4}
                  />
                </div>
                <div className="w-1/7 px-2">
                  <CaptainCard
                    captainName="Caleb Shin"
                    team="Team Captain"
                    photoPath="CalebShin.jpg"
                    aspectRatio={3 / 4}
                  />
                </div>
                <div className="w-1/7 px-2">
                  <CaptainCard
                    captainName="Naveen Challa"
                    team="Treasurer"
                    photoPath="NaveenChalla.jpg"
                    aspectRatio={3 / 4}
                  />
                </div>
                {/* </div> */}
                {/* <div className="flex justify-center w-full mb-6 gap-4"> */}
                <div className="w-1/7 px-2">
                  <CaptainCard
                    captainName="Gavin Leach"
                    team="Mechanical Captain"
                    photoPath="GavinLeach.jpg"
                    aspectRatio={3 / 4}
                  />
                </div>
                <div className="w-1/7 px-2">
                  <CaptainCard
                    captainName="Jack Nystrom"
                    team="Electrical Captain"
                    photoPath="JackNystrom.jpg"
                    aspectRatio={3 / 4}
                  />
                </div>
                <div className="w-1/7 px-2">
                  <CaptainCard
                    captainName="Daniel Rhee"
                    team="Software Captain"
                    photoPath="DanielRhee.jpg"
                    aspectRatio={3 / 4}
                  />
                </div>
                {/* </div> */}
              </div>

              {/* Mobile/Tablet: 3 rows */}
              <div className="lg:hidden w-full px-4">
                {/* First row - 2 captains */}
                <div className="flex justify-center w-full mb-6 gap-6">
                  <div className="w-1/2">
                    <CaptainCard
                      captainName="Victor Kalastirsky"
                      team="Team Captain"
                      photoPath="VictorKalastirsky.jpg"
                      aspectRatio={3 / 4}
                    />
                  </div>
                  <div className="w-1/2">
                    <CaptainCard
                      captainName="Caleb Shin"
                      team="Team Captain"
                      photoPath="CalebShin.jpg"
                      aspectRatio={3 / 4}
                    />
                  </div>
                </div>

                {/* Second row - 2 captains */}
                <div className="flex justify-center w-full mb-6 gap-6">
                  <div className="w-1/2">
                    <CaptainCard
                      captainName="Naveen Challa"
                      team="Treasurer"
                      photoPath="NaveenChalla.jpg"
                      aspectRatio={3 / 4}
                    />
                  </div>
                  <div className="w-1/2">
                    <CaptainCard
                      captainName="Gavin Leach"
                      team="Mechanical Captain"
                      photoPath="GavinLeach.jpg"
                      aspectRatio={3 / 4}
                    />
                  </div>
                </div>

                {/* Third row - 2 captains */}
                <div className="flex justify-center w-full mb-6 gap-6">
                  <div className="w-1/2">
                    <CaptainCard
                      captainName="Jack Nystrom"
                      team="Electrical Captain"
                      photoPath="JackNystrom.JPG"
                      aspectRatio={3 / 4}
                    />
                  </div>
                  <div className="w-1/2">
                    <CaptainCard
                      captainName="Daniel Rhee"
                      team="Software Captain"
                      photoPath="DanielRhee.JPG"
                      aspectRatio={3 / 4}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Business Team Section */}
            <div
              id="business"
              className="flex flex-col items-center justify-center w-full py-6 mt-10"
            >
              <h2
                className="text-5xl font-semibold mb-8 text-center"
                style={{
                  color: "white",
                  textShadow: `1px 2px 0px ${colors.electricBlue}`,
                }}
              >
                Business Team
              </h2>
              <div className="flex flex-col lg:flex-row justify-center w-full px-4 gap-4">
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Business"
                    photoPaths={["OpenHouseCandid.jpeg"]}
                    blurb={BusinessBlurb}
                    leadName="Anshoul Bhow"
                    leadPhotoPath="AnshoulBhow.jpg"
                    aspectRatio={16 / 9}
                  />
                </div>
              </div>
            </div>

            {/* Electrical Team Section */}
            <div
              id="electrical"
              className="flex flex-col items-center justify-center w-full py-6 mt-10"
            >
              <h2
                className="text-5xl font-semibold mb-8 text-center"
                style={{
                  color: "white",
                  textShadow: `1px 2px 0px ${colors.electricBlue}`,
                }}
              >
                Electrical Team
              </h2>

              <div className="flex flex-col lg:flex-row justify-center w-full px-4 gap-6">
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Low Voltage"
                    photoPaths={["VCU_in_car_FS4.jpg"]}
                    blurb={LowVoltageBlurb}
                    leadName="Luca Younes"
                    leadPhotoPath="LucaYounes.jpg"
                    aspectRatio={16 / 9}
                  />
                </div>
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Power Electronics"
                    photoPaths={["Battery_FS4_IMG_7599.jpg"]}
                    blurb={PowerElectronicsBlurb}
                    leadName="Edmund Lai"
                    leadPhotoPath="EdmundLai.jpg"
                    aspectRatio={16 / 9}
                  />
                </div>
                {/* </div> */}
                {/**/}
                {/* <div className="flex flex-col lg:flex-row justify-center w-full px-4 gap-6"> */}
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Firmware"
                    photoPaths={["mcp2515_deadbeef.jpg"]}
                    blurb={FirmwareBlurb}
                    leadName="Jackson Pinsonneault"
                    leadPhotoPath="JacksonPinsonneault.jpg"
                    aspectRatio={16 / 9}
                  />
                </div>
              </div>
            </div>

            {/* Software Team Section */}
            <div
              id="software"
              className="flex flex-col items-center justify-center w-full py-6 mt-10"
            >
              <h2
                className="text-5xl font-semibold mb-8 text-center"
                style={{
                  color: "white",
                  textShadow: `1px 2px 0px ${colors.electricBlue}`,
                }}
              >
                Software Team
              </h2>

              <div className="flex flex-col lg:flex-row justify-center w-full px-4 gap-6">
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Autonomous"
                    photoPaths={["ConeRecognition.png"]}
                    blurb={AutonomousBlurb}
                    leadName="Abhi Adari"
                    leadPhotoPath="AbhiAdari.jpg"
                    aspectRatio={16 / 9}
                  />
                </div>
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Data"
                    photoPaths={["grafana.png"]}
                    blurb={DataBlurb}
                    leadName="Raina Chatterjee"
                    leadPhotoPath="RainaChatterjee.jpg"
                    aspectRatio={16 / 9}
                  />
                </div>
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Simulations"
                    photoPaths={["cell_voltage_model.png"]}
                    blurb={SimsBlurb}
                    leadName="Tribhuvani Ayyagari"
                    leadPhotoPath="TribhuvaniAyyagari.jpg"
                    aspectRatio={16 / 9}
                  />
                </div>
              </div>
            </div>

            {/* Mechanical Team Section */}
            <div
              id="mechanical"
              className="flex flex-col items-center justify-center w-full py-6 mt-10"
            >
              <h2
                className="text-5xl font-semibold mb-8 text-center"
                style={{
                  color: "white",
                  textShadow: `1px 2px 0px ${colors.electricBlue}`,
                }}
              >
                Mechanical Team
              </h2>

              {/* First row - 3 cards */}
              <div className="flex flex-col lg:flex-row justify-center w-full px-4 mb-8 gap-6">
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Battery"
                    photoPaths={["BatteryFS4.jpg"]}
                    blurb={BatteryBlurb}
                    leadName="Aethlyn Lim"
                    leadPhotoPath="AethlynLim.jpg"
                    aspectRatio={16 / 9}
                  />
                </div>
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Aerodynamics"
                    photoPaths={["crew_pushing_dan_fs4.jpg"]}
                    blurb={AerodynamicsBlurb}
                    leadName="Ayrton Tyler"
                    leadPhotoPath="AyrtonTyler.jpg"
                    aspectRatio={16 / 9}
                  />
                </div>
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Ergonomics"
                    photoPaths={["egress_cockpit_FS4.jpg"]}
                    blurb={ErgonomicsBlurb}
                    leadName="Ruhan Gianchandani"
                    leadPhotoPath="RuhanGianchandani.jpg"
                    aspectRatio={16 / 9}
                  />
                </div>
              </div>

              {/* Second row - 3 cards */}
              <div className="flex flex-col lg:flex-row justify-center w-full px-4 mb-8 gap-6">
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Chassis"
                    photoPaths={["gavin_chassis.jpg"]}
                    blurb={ChassisBlurb}
                    leadName="Archie Belov"
                    leadPhotoPath="ArchieBelov.jpg"
                    aspectRatio={16 / 9}
                  />
                </div>
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Suspension"
                    photoPaths={["sus_pension_FS4_1950.jpg"]}
                    blurb={SuspensionBlurb}
                    leadName="Joseph Sena"
                    leadPhotoPath="JosephSena.jpg"
                    aspectRatio={16 / 9}
                  />
                </div>
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Powertrain"
                    photoPaths={["FS4_drivetrain_comp.jpg"]}
                    blurb={PowertrainBlurb}
                    leadName="Cameron Bannasch"
                    leadPhotoPath="CameronBannasch.jpg"
                    aspectRatio={16 / 9}
                  />
                </div>
              </div>

              {/* Second row - 3 cards */}
              <div className="flex flex-col lg:flex-row justify-center w-full px-4 mb-8 gap-6">
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Vehicle Dynamics"
                    photoPaths={["FS4-Tilt.png"]}
                    blurb={VDBlurb}
                    leadName="Julian Baldwin"
                    leadPhotoPath="JulianBaldwin.jpg"
                    aspectRatio={16 / 9}
                  />
                </div>
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Welding"
                    photoPaths={["FS4_welding.jpg"]}
                    blurb={WeldingBlurb}
                    leadName="Liza Orekhova"
                    leadPhotoPath="LizaOrekhova.jpg"
                    aspectRatio={16 / 9}
                  />
                </div>
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Manufacturing"
                    photoPaths={["Manf_Pedalbox_FS4.jpg"]}
                    blurb={ManufacturingBlurb}
                    leadName="Ben Grau"
                    leadPhotoPath="BenjaminGrau.jpg"
                    aspectRatio={16 / 9}
                  />
                </div>
              </div>

              {/* Third row - 1 cards */}
              <div className="flex flex-col lg:flex-row justify-center w-full px-4 mb-8 gap-6">
                <div className="w-full lg:w-1/3"></div>
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Composites"
                    photoPaths={["FS2026-Wing-8.jpg"]}
                    blurb={CompositesBlurb}
                    leadName="Dayton Nguyen"
                    leadPhotoPath="DaytonNguyen.png"
                    aspectRatio={16 / 9}
                  />
                </div>
                <div className="w-full lg:w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
