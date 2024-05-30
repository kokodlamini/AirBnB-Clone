// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import Cards from "./Cards";
import "./Home.css";
// import { listListing } from "../actions/listingActions";

const Home = () => {
  // const dispatch = useDispatch();
  // const listingList = useSelector((state) => state.listingList);
  // const { loading, error, listings } = listingList;

  // useEffect(() => {
  //   dispatch(listListing());
  // }, [dispatch]);

  return (
    <div className="home">
      <Banner />
      {/* //     {loading ? (
  //       <h2>Loading...</h2>
  //     ) : error ? (
  //       <h3>{error}</h3>
  //     ) : (
  //       <div className="home_section">
  //         {listings.map((listing) => (
  //           <Cards
  //             src={listing.img}
  //             title={listing.title}
  //             decription={listing.decription}
  //             price={listing.price}
  //           />
  //         ))}
  //       </div>
  //     )} */}
      <div className="home_section">
        <Cards
          src="https://a0.muscache.com/im/pictures/miso/Hosting-788942081029376066/original/494f646e-a255-49a2-b51a-f1350042964a.jpeg?im_w=960"
          title="Apartment in Randburg"
          decription="Welcome to our cozy Airbnb located in the Bordeaux neighborhood of Johannesburg! This secure and gated community is perfect for those seeking a peaceful and safe environment during their stay. The neighborhood is well-positioned for easy access to public transportation, with the Gautrain bus stop just a short walk away. From there, you can easily reach Sandton CBD and explore all the city has to offer. With limited traffic, you'll have a tranquil and serene experience while still being conveniently located near the hustle and bustle of the city. We can't wait to welcome you to our beautiful neighborhood!"
          price="R315 ZAR night"
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/miso/Hosting-731758887345389127/original/c0f7d68a-165b-4109-8808-339215c0059a.jpeg?im_w=1200"
          title="Villa in Gqeberha"
          decription="Seaview is the holiday destination of choice for anyone wanting a relaxed break. City life be gone! We are all about the waves, the chill, the quiet life with the sound of the waves. All only 12 minutes from the edge of the city, while Seaview boasts a rocky shore with rock pools and swimming gullies there are sandy swimming beaches nearby. A short drive (2-5 minutes) will get you to Maitlands, Kini Bay or Beachview: we will send lots of information on the options prior to arrival. This area is not suited for any loud adult only groups. The sound of your children enjoying themselves will however always be welcomed :)"
          price="R2,218 ZAR night"
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/miso/Hosting-580171268365240168/original/88a9e2b5-25ad-4845-9b42-546abd019b88.jpeg?im_w=960"
          title="Apartment in Cape Town"
          decription="Sea Point is a vibrant suburb of Cape Town, just outside the city centre between Green Point and Bantry Bay. Sea Point is built around Main Road (of which Regent Rd is an extension), with its many shops (Woolworths, Spar and Checkers), takeaways, restaurants (including the fantastic La Mouette), bars and coffee shops - all within walking distance. Just about everything you need is found in this part of the city. The popular Sea Point promenade runs the length of Sea Point’s beachfront, from Bantry Bay to Mouille Point and is a hub of activity, particularly in the early morning or late afternoons to watch the sun set right next to the crystal waters of the Atlantic Seaboard. A number of children’s parks run alongside the promenade. There is also an outdoor gym and a chlorinated swimming pool at the pavilion. It's a great place for running, leisurely strolls, picnics, people watching and taking in the beauty around you. The City Centre, V&A Waterfront and beautiful Clifton and Camps Bay beaches are all a short drive away."
          price="R903 ZAR night"
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/117fc80b-d972-438f-91a3-55ab6b87d3ec.jpg?im_w=960"
          title="Vacation home in Cape Town"
          decription="We located in a neighborhood with large properties. From here you can walk to access the mountain with stunning views of llundadno and Hout Bay. Down the road is world of birds with rescued animals a favorite for kids. The red bus also stops just down the road for you to hop on. Hout Bay beach is a 5-7 min drive and closest shops also 5 mins away. Llundadno beach 10 mins drive. We are also close to constantia wine farms and award winning restaurants and the closest one is 10 mins away. Hout Bay itself have plenty to offer from restaurants to seal safaris. Cape Town is a 30 min drive. Also takes 30 min from the airport if there is no traffic."
          price="R1,950 ZAR night"
        />
      </div>

      <div className="home_section">
        <Cards
          src="https://a0.muscache.com/im/pictures/miso/Hosting-752185468953808170/original/cc7a10b0-a3b0-427e-b3b2-9f5d8f6bc941.jpeg?im_w=960"
          title="Farm stay in uMgungundlovu District Municipality"
          decription="Beef and dairy farmlands surround Enfin Estate. This is a remote gem of the KZN Midlands with one road in and out. Secure and quiet to enjoy the peace, yet only 15 minutes to Windmills/Brahman Hills. Roads are potholed so travel cautiously. Driveway is very steep up to Infinity and Rose Cottage, so engage first gear and floor it. This farm-stay is for the adventurous type who want tranquility and to explore and experience a different kind of Midlands vibe."
          price="R1,700 ZAR night"
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/miso/Hosting-1157043620663443342/original/21676311-62dc-462e-a1c5-149741eb3382.jpeg?im_w=960"
          title="Home in Buffelspoort"
          decription="Take it easy at this unique and tranquil getaway. Get off the grid, wake up to the sounds of nature, swim in streams, enjoy lazy days with panoramic views and explore your surroundings. Set in the beautiful Utopia Bio Diversity Estate, and a nature lovers paradise. Stay at the rustic 'A 'frame chalet look out to beautiful views! Truly fuss free rustic stay and experience swimming in the streams or in one of the three Swimming pools or hike, walk, and birdwatch – this is the place for you!"
          price="R1,450 ZAR night"
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/d639793a-988a-4666-a34c-5dcdfa35877f.jpg?im_w=960"
          title="Home in Bela-Bela"
          decription="Unwind in this stunning newly built 2-bedroom contemporary home in a quiet estate, just a stone’s throw way from Warmbaths Forever Resorts. Each room boasts an en suite bathroom with luxurious amenities. Cool down in the private swimming pool while you enjoy a braai in the stylish Patio with indoor fireplace. The main entertainment area is designed with your comfort in mind, with everything you will need to let you relax and unwind."
          price="R2,476 ZAR night"
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/miso/Hosting-699712997926061424/original/8c11c6e7-11fd-4c93-a770-f8825eb2bf44.jpeg?im_w=960"
          title="Vacation Home in Umhlanga"
          decription="Welcome to this gorgeous modern duplex nestled in the breathtaking Elaleni Coastal Forest Estate. Located within the Woods complex, this double-story 2-bedroom 2-bathroom unit offers a serene retreat amidst nature's beauty. We can arrange additional cleaning or laundry services upon request and at an additional cost, if required.
          Linen & towels as well as an initial supply of tea, coffee, sugar and basic shower amenities are provided."
          price="R1,117 ZAR night"
        />
      </div>
    </div>
  );
};

export default Home;
