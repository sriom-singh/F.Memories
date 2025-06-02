
const AboutUs = () => {
  return (
    <div>
      <div className=" mx-auto font-openSans">
        <div className="relative h-96 w-full bg-blend-multiply bg-opacity-60  bg-black bg-right-bottom">
          <img src="./photo-beach.avif" className="w-[100vw] object-cover opacity-60 h-96 " />
          {/* <img className="h-96 w-dvw object-cover " src="https://images.unsplash.com/photo-1612278675615-7b093b07772d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> */}
          <h2 className="md:text-6xl text-white absolute translate left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 text-center  text-white font-medium text-5xl md:pt-6 py-2">
            About Us
          </h2>
        </div>

        <div className="max-w-5xl mx-auto py-10 pb-16 text-black px-7">
          <p className=" pb-4">
            At Framing Memories, we believe that travel
            is more than just visiting new places—it’s about self-discovery,
            cultural immersion, and creating unforgettable memories. Our About
            Us story is built on a passion for exploration and a commitment to
            crafting exceptional travel experiences. Whether you crave a
            relaxing escape, thrilling adventure, or luxurious cruise, we design
            journeys that turn your travel dreams into reality.
          </p>

      
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
