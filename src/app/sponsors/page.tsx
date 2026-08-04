/*
  Need updated sponsor list
  bottom looks bad, not sure which approach to take

  Would it be cool to have photos of each sponsor's logo centerfront on the car?
    Maybe cheesy

  

 */

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShimmerTitle from "@/components/ShimmerTitle";
import { colors } from "@/config/colors";
import { Metadata } from "next";
import { SponsorCard, Sponsor } from "./SponsorCard";
import BecomeSponsorButton from "@/components/BecomeSponsorButton";

export const metadata: Metadata = {
  title: "Formula Slug - Sponsors",
  description: "Formula Slug's Website - Our Sponsors",
};

export default function SponsorsPage() {
  const sponsors: Record<string, Sponsor[]> = {
    gold: [
      {
        name: "Zero Motorcycles",
        description: "Leading the way in electric motorcycle innovation.",
        logo: "zero-motorcycles-wordmark-white.png",
        website: "https://www.zeromotorcycles.com/",
      },
      {
        name: "Slugworks",
        description: "Primary support for facilities, equipment, and mentorship.",
        logo: "Slugworks-logo.png",
        website: "https://www.ucsc.edu/",
      },
      {
        name: "Baskin Engineering",
        description: "Primary support for facilities, equipment, and mentorship.",
        logo: "BaskinEngineeringLogo.png",
        website: "https://engineering.ucsc.edu/",
      },
      {
        name: "Tesla",
        logo: "tesla-red-logo.png",
        website: "https://www.tesla.com/",
      },
    ],
    silver: [
      {
        name: "Gene Haas Foundation",
        description: "Supporting our mission with materials and resources",
        logo: "genehaasfoundationlogo.png",
        website: "https://www.ghaasfoundation.org/",
      },
      {
        name: "OnShape",
        logo: "OnShapeLogo.png",
        website: "https://www.onshape.com/",
      },

      {
        name: "Ansys",
        logo: "ansys_logo.png",
        website: "https://www.ansys.com/",
      },

      {
        name: "DigiKey",
        logo: "DigiKey-Logo.png",
        website: "https://www.digikey.com/",
      },

      {
        name: "Black Stallion",
        logo: "BlackStallionLogo.png",
        website: "https://www.blackstallion.com/",
      },
      {
        name: "Intuitive Foundation",
        logo: "IntuitiveFoundation.png",
        website: "https://www.intuitive-foundation.org/",
      },

      {
        name: "Hioki",
        logo: "hioki-logo.png",
        website: "https://www.hioki.com/",
      },

      {
        name: "VectorNav",
        logo: "VectorNavLogo.png", // converted from their SVG logo
        website: "https://www.vectornav.com",
      },

      {
        name: "Hakko",
        logo: "HAKKO_MAIN logo.png",
        website: "https://hakkousa.com/",
      },

      {
        name: "VI-Grade",
        logo: "vi-grade_red.png",
        website: "https://www.vi-grade.com/",
      },

      {
        name: "Hesse Mechatronics",
        logo: "Hesse_Logo_rgb-web.jpg",
        website: "https://www.hesse-mechatronics.com/en/",
      },

      {
        name: "RapidAxis",
        logo: "RapidAxis-logo-standard.png",
        website: "https://rapidaxis.com/",
      },
    ],
    bronze: [
      {
        name: "CalSpan",
        logo: "calspanlogo.png",
        website: "https://calspan.com/",
      },
      {
        name: "FrogzSkin",
        logo: "FrogzSkin.png",
        website: "https://frogzskin.com/"
      },
      {
        name: "Lightning Chart",
        logo: "LightningChartLogo.png",
        website: "https://lightningchart.com/",
      },
      {
        name: "MakPlate",
        logo: "MakPlateLogo.svg",
        website: "https://makplate.com/"
      },
      {
        name: "Total Phase",
        logo: "totalphase-high-res.png", // converted from their SVG logo
        website: "https://www.totalphase.com/",
      },
      {
        name: "Edelbrock",
        logo: "Edelbrock_logo_darkened.png",
        website: "https://www.edelbrock.com/",
      },
      {
        name: "Optrel",
        logo: "optrel_logo_white-red.png",
        website: "https://optrel.us/",
      },
      {
        name: "Rapid Harness",
        logo: "rapid-harness.png",
        website: "https://rapidharness.com/",
      },
      {
        name: "Send Cut Send",
        logo: "sendcutsend-logo-white.png",  // converted from their SVG logo
        website: "https://sendcutsend.com/",
      },
      {
        name: "HMS",
        description: "Essential support for our operations",
        logo: "hms.logo.color.whiteMS.png",
        website: "https://www.hmsmotorsport.com/collections/hms",
      },
      {
        name: "College 9 Senate",
        logo: "ucsc-logo-blue.jpg",
        website: "https://collegenine.ucsc.edu/",
      },
    ],

    specialThanks: [
      {
        name: "Analog Devices",
        logo: "AnalogDevicesLogo.png",
        website: "https://www.analog.com"
      },

      {
        name: "Cable Markers Logo",
        logo: "CableMarkersLogo.jpg",
      },
      {
        name: "Red Bull",
        description: "Gives you Wings",
        logo: "RedBullLogo.svg",
        website: "https://redbull.com",
      },
    ],
  };

  const SponsorTier = ({
    title,
    sponsors,
    color,
  }: {
    title: string;
    sponsors: Sponsor[];
    color: string;
  }) => (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-8" style={{ color }}>
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sponsors.map((sponsor, index) => (
          <SponsorCard key={index} sponsor={sponsor} />
        ))}
      </div>
    </div>
  );

  return (
    <main
      className="min-h-screen text-white"
      style={{ backgroundColor: colors.background.primary }}
    >
      <div className="container mx-auto p-0 sm:px-6 lg:px-8">
        <Navbar />

        {/* Header centered between navbar and content */}
        <div className="pt-[12vh] pb-4">
          <h1 className="text-4xl sm:text-6xl font-bold text-center px-4">
            <ShimmerTitle>Our Sponsors</ShimmerTitle>
          </h1>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xl mb-4" style={{ color: colors.textColor }}>
              Thank you to our amazing sponsors who make Formula Slug possible!
            </p>
            <p className="text-lg" style={{ color: colors.gray[300] }}>
              Your support drives innovation, excellence, and the future of
              electric racing at UC Santa Cruz.
            </p>
          </div>

          {/* Sponsor Tiers */}
          <div className="space-y-6">
            {/* Become a Sponsor button (matches homepage "About Us" styling) */}
            {/* Become a Sponsor button (client) */}
            <BecomeSponsorButton />

            <SponsorTier
              title="Gold Sponsors"
              sponsors={sponsors.gold}
              color={colors.secondary}
            />

            <SponsorTier
              title="Silver Sponsors"
              sponsors={sponsors.silver}
              color={colors.gray[300]}
            />

            <SponsorTier
              title="Bronze Sponsors"
              sponsors={sponsors.bronze}
              color={colors.bronze}
            />

            <SponsorTier
              title="Special Thanks"
              sponsors={sponsors.specialThanks}
              color={colors.gray[50]}
            />
          </div>

          {/* Become a Sponsor Section
          <div 
            className="mt-20 p-8 rounded-lg text-center"
            style={{ backgroundColor: colors.background.secondary }}
          >
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.textColor }}>
              Become a Sponsor
            </h2>
            <p className="text-lg mb-6" style={{ color: colors.gray[300] }}>
              Join our mission to push the boundaries of electric vehicle technology and support the next generation of engineers.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">

                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm" style={{ color: colors.gray[400] }}>
                  Support cutting-edge electric vehicle development
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-sm" style={{ color: colors.gray[400] }}>
                  Invest in hands-on learning through applied engineering
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Competition</h3>
                <p className="text-sm" style={{ color: colors.gray[400] }}>
                  Help us compete at the highest level
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="px-8 py-3 rounded-md font-semibold transition-colors duration-200 hover:opacity-90"
                style={{ backgroundColor: colors.primary, color: colors.textColor }}
              >
                Contact Us About Sponsorship
              </a>
              <a 
                href="mailto:formulaslug@ucsc.edu"
                className="px-8 py-3 rounded-md font-semibold border-2 transition-colors duration-200 hover:opacity-90"
                style={{ 
                  borderColor: 'white', 
                  color: 'white',
                  backgroundColor: 'transparent'
                }}
              >
                Email Us Directly
              </a>
            </div>
          </div>
          */}

          {/* Sponsorship Benefits
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8" style={{ color: colors.textColor }}>
              Sponsorship Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Brand Visibility", description: "Logo placement on car, website, and materials" },
                { title: "Networking", description: "Connect with engineering students and faculty" },
                { title: "Recruitment", description: "Access to talented engineering graduates" },
                { title: "Influence", description: "Get your tools or services in front of numerous future engineers" }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-lg text-center"
                  style={{ backgroundColor: colors.background.secondary }}
                >
                  <h3 className="font-semibold mb-3" style={{ color: colors.textColor }}>
                    {benefit.title}
                  </h3>
                  <p className="text-sm" style={{ color: colors.gray[300] }}>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          */}
        </div>
      </div>
      <Footer />
    </main>
  );
}
