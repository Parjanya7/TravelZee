import AboutDataOne from "@/constant/HomeOne/AboutDataOne";
import Image from "next/image";
import Link from "next/link";

const AboutOne = () => {
  return (
    <div className="about_style__one lg:py-12 py-10 relative">
      <div className="container">
        <div className="grid lg:grid-rows-2 items-center">
          <div className="div">
          <p className="regular-text-v1">Travel Zee World is registered in Bihar with Registration Number 10IOTPS6294R1ZL. Registered Office Address: K.S.Colony, Bankers Colony Near Jesus And Mary Academy, Rahamganj, Darbhanga, Bihar, 846004 
          </p>
            <h2 className="section-sub-title-v1">
              About Travel Zee World
            </h2>
            {/* <h2 className="section-title-v1 max-w-xl">{AboutDataOne.title}</h2> */}
            <div className="mt-7 xl:pl-24 lg:pl-20 relative before:content-[''] before:left-0 before:top-4 before:bg-[#d9d9d9] before:w-[10%] before:h-[1px] lg:before:absolute">
             <p className="regular-text-v1">
               Discover Travel Zee World, where exceptional travel planning meets outstanding service. We specialize in booking flights, hotels, and vacation packages, delivering a level of excellence that sets us apart. As an independent travel agency, we offer unbiased advice and personalized options to fit your travel needs at great prices. Explore our website to find a diverse selection of vacation options, no matter your destination or the time of year. Choose Travel Zee World and let us make your travel dreams a reality!
             </p>
             <h2 className="section-title-v1 max-w-xl">Customer Service</h2>
              <p className="regular-text-v1">Travel Zee World is dedicated to offering unparalleled support, available 24/7 to meet all your travel needs. Our knowledgeable travel experts meticulously plan your journey, ensuring every aspect is handled with utmost care. From all-inclusive vacation packages and flights to luxury adventures, we provide a vast array of options that cater to all budgets. Benefit from a personalized travel experience that aligns with your preferences and financial requirements. With our global network of partners, you can be confident that every detail will be taken care of, ensuring a smooth and enjoyable trip.
                We aim to deliver exceptional travel services and experiences to every client. Recognizing the importance of your vacation, Travel Zee World is committed to finding the best deals on hotels and flights to make your trip truly memorable.
             </p>
             <h2 className="section-title-v1 max-w-xl">
              Why Booking with Travel Zee World?
              </h2>
              <p className="regular-text-v1">
                At Travel Zee World, we are driven by a clear mission: to provide you with budget-friendly trips and vacation packages without any hidden costs. Our deep expertise and extensive knowledge of global travel deals ensure that your next journey is completely hassle-free. After booking, you can securely complete your payment through our encrypted server, and you&apos;ll receive your comprehensive itinerary via email within 24 hours. This itinerary includes all essential details, from check-in times to practical tips on local time zones, currency, and weather. We offer a wide range of affordable, high-quality vacation packages, whether you&apos;re dreaming of a beachside retreat or an exciting city escape. Our all-inclusive options cater to both leisure and business travelers, ensuring there&apos;s something for everyone. At Travel Zee World, we are committed to delivering the best prices possible. Whether you&apos;re searching for an all-inclusive getaway in Mexico or a fantastic flight deal, you&apos;ll find significant savings with us. With access to over a million hotels worldwide at competitive rates, we make finding your ideal accommodation easy and affordable. Our dedication to providing an exceptional travel experience sets us apart. With our extensive selection of deals and accommodations, we ensure that your vacation is tailored to your unique needs while keeping costs down. We value your travel experience and work hard to make it memorable—so don&apos;t wait. Secure your great deal today and start your next adventure with us!
              </p>
              <h5 className="font-sans text-dark-1 text-md font-medium mt-4">
                Speak to our Destination Experts at Direct Call{" "}
                {AboutDataOne.contact}
              </h5>
            </div>
            <ul className="pt-6 lg:text-md text-base">
              {AboutDataOne.features.map((item, index) => (
                <li
                  className="flex items-center font-sans text-dark-3 mt-4"
                  key={index + 1}
                >
                  <div className="text-primary-1 flex-shrink-0 text-2md">
                    <i className="bi bi-check-circle" />
                  </div>
                  <span className="ml-3">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link href="/contact" className="btn_primary__v1">
                Contact Us
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.42505 16.5999L12.8584 11.1666C13.5 10.5249 13.5 9.4749 12.8584 8.83324L7.42505 3.3999"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="">
            <Image
              src={AboutDataOne.imgUrl}
              alt="about-img"
              width={1200}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
