import Head from "next/head";
import Image from "next/image";
import { Hero } from "../components/Hero";
import Slider from "../components/Slider";
import { SliderData } from "../components/SlideData";
import Instagram from "../components/instagram";
import Portfolio from "../components/Portfolio";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <div className=" bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <Head>
        <title>Event Box</title>
        <meta name="description" content="Event Box" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        heading="We specialize in backdrops and balloons"
        message="სადღესასწაულო კუთხის გაფორმება, შენთვის და შენი მეგობრებისთვის!"
        text="გთავაზობთ ჰელიუმით გაბერილ ბუშტების სხვადასხვა ნაკრებს"
      />
      <Slider slides={SliderData} />
      <Instagram />
      <FAQ />
      <Portfolio />
    </div>
  );
}
