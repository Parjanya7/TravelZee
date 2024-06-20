import AboutDataOne from "@/constant/HomeOne/AboutDataOne";
import Image from "next/image";
import Link from "next/link";

const AboutOne = () => {
  return (
    <div className="about_style__one lg:py-30 py-24 relative">
      <div className="container">
        <div className="grid gap-base items-center">
          <div className="div">
            <h5 className="section-sub-title-v1">Terms of Use</h5>
            <h2 className="section-title-v1 max-w-xl">Terms of Use</h2>
            <div className="mt-7 xl:pl-24 lg:pl-20 relative before:content-[''] before:left-0 before:top-4 before:bg-[#d9d9d9] before:w-[10%] before:h-[1px] lg:before:absolute">
              <p className="regular-text-v1">
                These Terms and Conditions (&ldquo;Terms&ldquo;) govern the use
                of services provided by Travelzee World
                (&ldquo;Travelzee,&ldquo; &ldquo;we,&ldquo; &ldquo;us,&ldquo; or
                &ldquo;our&ldquo;). By using our services, you agree to be bound
                by these Terms. Please read them carefully before using any of
                our services. If you do not agree to these Terms, you may not
                use our services.
              </p>
              <h3 className="section-title-v2">1. Booking and Payments:</h3>
              <ul>
                <li className="regular-text-v1">
                  1.1. By making a booking with Travelzee World, you agree to
                  pay the total amount as quoted for the chosen holiday package
                  or service.
                </li>
                <li className="regular-text-v1">
                  1.2. Payment can be made via credit card, bank transfer, or
                  other provided payment methods. All prices are in GBP (British
                  Pound Sterling) unless otherwise stated.
                </li>
                <li className="regular-text-v1">
                  1.3. A deposit may be required at the time of booking, with
                  the full balance due by a specified date prior to the
                  departure.
                </li>
                <li className="regular-text-v1">
                  1.4. Failure to pay the full balance by the specified date may
                  result in the cancellation of your booking and forfeiture of
                  any deposit paid.
                </li>
              </ul>

              <h3 className="section-title-v2">
                2. Cancellations and Refunds:
              </h3>
              <ul>
                <li className="regular-text-v1">
                  2.1. Cancellation policies vary depending on the type of
                  holiday package booked and are subject to the terms and
                  conditions of our suppliers.
                </li>
                <li className="regular-text-v1">
                  2.2. Cancellation requests must be submitted in writing to
                  Travelzee World. Refunds, if applicable, will be processed in
                  accordance with our cancellation policy.
                </li>
                <li className="regular-text-v1">
                  2.3. We reserve the right to charge cancellation fees as
                  outlined in our cancellation policy.
                </li>
              </ul>

              <h3 className="section-title-v2">
                3. Travel Documents and Insurance:
              </h3>
              <ul>
                <li className="regular-text-v1">
                  3.1. It is your responsibility to ensure that you have valid
                  travel documents, including passports, visas, and any other
                  necessary permits, prior to your travel date.
                </li>
                <li className="regular-text-v1">
                  3.2. We recommend purchasing travel insurance to cover any
                  unforeseen circumstances such as trip cancellations, medical
                  emergencies, or lost luggage.
                </li>
              </ul>

              <h3 className="section-title-v2">4. Travel Itinerary:</h3>
              <ul>
                <li className="regular-text-v1">
                  4.1. Our travel itineraries are carefully planned, but
                  circumstances beyond our control may necessitate changes. We
                  reserve the right to alter itineraries or substitute services
                  as necessary.
                </li>
                <li className="regular-text-v1">
                  4.2. We will make reasonable efforts to inform you of any
                  changes to your itinerary in advance.
                </li>
              </ul>

              <h3 className="section-title-v2">5. Liability:</h3>
              <ul>
                <li className="regular-text-v1">
                  5.1. Travelzee World acts as an intermediary between you and
                  third-party service providers such as airlines, hotels, and
                  tour operators. We are not liable for any loss, injury, or
                  damage resulting from acts of negligence or omissions by these
                  third-party providers.
                </li>
                <li className="regular-text-v1">
                  5.2. We recommend that you familiarize yourself with the terms
                  and conditions of our suppliers, as they may impose their own
                  liability limitations.
                </li>
              </ul>

              <h3 className="section-title-v2">6. Code of Conduct:</h3>
              <ul>
                <li className="regular-text-v1">
                  6.1. We expect all customers to conduct themselves in a
                  respectful and responsible manner at all times during their
                  holiday experience.
                </li>
                <li className="regular-text-v1">
                  6.2. Any behavior deemed disruptive, illegal, or in violation
                  of local laws or regulations may result in immediate
                  termination of services without refund.
                </li>
              </ul>

              <h3 className="section-title-v2">7. Data Protection:</h3>
              <ul>
                <li className="regular-text-v1">
                  7.1. Travelzee World is committed to protecting your privacy
                  and personal information in accordance with the General Data
                  Protection Regulation (GDPR) and other applicable laws.
                </li>
                <li className="regular-text-v1">
                  7.2. By using our services, you consent to the collection,
                  processing, and storage of your personal data as described in
                  our Privacy Policy.
                </li>
              </ul>

              <h3 className="section-title-v2">8. Governing Law:</h3>
              <ul>
                <li className="regular-text-v1">
                  8.1. These Terms and any disputes arising out of or in
                  connection with them shall be governed by and construed in
                  accordance with the laws of England and Wales.
                </li>
              </ul>

              <h3 className="section-title-v2">9. Amendments:</h3>
              <ul>
                <li className="regular-text-v1">
                  9.1. Travelzee World reserves the right to amend these Terms
                  at any time without prior notice. Any changes will be
                  effective immediately upon posting on our website.
                </li>
              </ul>

              <h3 className="section-title-v2">10. Contact Information:</h3>
              <ul>
                <li className="regular-text-v1">
                  10.1. If you have any questions or concerns regarding these
                  Terms, please contact us at admin@travelzeeworld.com or +44 7480 784180.
                </li>
              </ul>
              <h3>
                By using our services, you acknowledge that you have read,
                understood, and agree to be bound by these Terms and Conditions.
                Thank you for choosing Travelzee World for your holiday needs.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
