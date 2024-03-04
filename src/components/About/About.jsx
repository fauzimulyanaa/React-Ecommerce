import about from '../../assets/about.jpg';

function About() {
  return (
    <div className="mx-[140px] mt-20 font-custom h-auto pb-[350px]">
      <h1 className="text-5xl leading-relaxed mb-10  w-full">
        Explore our <span>collection of sneakers</span> for sneakerheads, athletes, and fashion enthusiasts
      </h1>
      <div className="flex relative ">
        <img src={about} alt="nike" className="-z-10" />
        <h1 className="text-4xl absolute w-[700px] left-[400px] bottom-0 font-bold top-[360px] text-red-500 leading-relaxed uppercase">
          <span>{"Hey ya, We're SkylineTreasures"}</span>
          Step into style with our <span>exclusive sneaker lineup</span> curated for trendsetters, athletes, and collectors
        </h1>
      </div>
      <div className=""></div>
    </div>
  );
}

export default About;
