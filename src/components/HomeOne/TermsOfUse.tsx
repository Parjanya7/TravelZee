import Image from "next/image";
import Link from "next/link";

const AboutOne = () => {
  return (
    <div className="about_style__one lg:py-30 py-24 relative">
      <div className="container">
        <div className="grid gap-base items-center">
          <div className="div">
            <h5 className="section-sub-title-v1">Terms of Use</h5>
            <h2 className="section-title-v1 max-w-xl">Terms and Conditions of Booking</h2>
            <div className="mt-7 xl:pl-24 lg:pl-20 relative before:content-[''] before:left-0 before:top-4 before:bg-[#d9d9d9] before:w-[10%] before:h-[1px] lg:before:absolute">
              <p className="regular-text-v1">
                When you make a reservation with us, we will organize various aspects of your trip, including flights, accommodations, transfers, tours, train journeys, cruises, ferries, motor coach travel, or any other holiday needs (referred to as &apos;Travel Services&apos; or &apos;Holiday Services&apos;).
                These arrangements constitute a package as defined by the Package Travel and Linked Travel Arrangements Regulations. Therefore, you will benefit from the full range of protections provided under EU law for package holidays.
                Travel Zee World Limited takes full responsibility for the complete and proper execution of the entire travel package.
              </p>
              <p className="regular-text-v1">
                We are Travel Zee World. The terms &quot;we&quot;, &quot;us&quot; , &quot;our&quot; or &quot;Travel Zee World&quot; refer to Travel Zee World. Our registration number is 10IOTPS6294R1ZL whose registered office address is at K.S.Colony, Bankers Colony Near Jesus And Mary Academy, Rahamganj, Darbhanga, Bihar, 846004. Our bookings are subject to the following terms. These terms apply specifically to travel arrangements that you book with us, which we agree to arrange, provide, or carry out as part of our agreement, unless otherwise specified. Any mention of &quot;trip,&quot; &quot;booking,&quot; &quot;contract,&quot; or &quot;travel arrangements&quot; in these terms refers to these specific arrangements.
                Please be aware that Travelzeeworld.com operates under the name Travel Zee World.
              </p>
              <p className="regular-text-v1">
                Your attention is particularly drawn to the following paragraphs which contain important information about your rights and the extent of our liability to you: 6 (Modifications and transfer policy), 7 (Cancellation and modification terms), 8 (Adjustments and Cancellations to your Travel Services), 9(Price Adjustments and Compensation for Package Holidays), 10 (Our responsibility regarding your travel).
              </p>

              <h3 className="section-title-v2">1. Booking and Payment</h3>
              <ul>
                <li className="regular-text-v1">
                  When you make a booking with us, you acknowledge and agree to the following:
                </li>
                <li className="regular-text-v1">
                  I. Accuracy of Information: Ensure that all details for passengers are correct and match the names in their passports.
                </li>
                <li className="regular-text-v1">
                  II. Acceptance of Terms: By booking, you confirm that you have reviewed and agree to the terms and conditions on this page. This includes agreeing on behalf of yourself and all others listed in the booking to adhere to these terms, as well as any applicable conditions from the Service Provider and their website terms of use.
                </li>
                <li className="regular-text-v1">
                  III. Privacy Policy: You acknowledge that you have read our Privacy Policy and will share it with everyone named in the booking.
                </li>
                <li className="regular-text-v1">
                  IV. Age Requirements: You are at least 18 years old and confirm that you and your party meet the age requirements for any restricted services.
                </li>
                <li className="regular-text-v1">
                  V. Confirmation and Payment: Your booking will be confirmed once you have made the required initial or full payment, including any fees. A contract between you and us, you and the Service Provider(s), and, if applicable, you and the agent, will be established only when we send you a confirmation email with a valid reference number (“Booking Confirmation”). Please verify this confirmation and notify us immediately of any errors so we can assist you.
                </li>
                <li className="regular-text-v1">
                  VI. Processing Time: Bookings may take up to 72 hours to process. Confirmation is only finalized when you receive an email with a valid reference number. If there are issues such as payment failure or changes in price or availability, we will attempt to rebook at the same price or contact you to discuss alternatives. Any additional costs due to changes will be communicated prior to final confirmation.
                </li>
                <li className="regular-text-v1">
                  VII. Service Provider Terms: When accessing a Service Provider&apos;s website as part of your booking, you agree to their terms of use.
                </li>
                <li className="regular-text-v1">
                  VIII. Travel Insurance: You are responsible for obtaining travel insurance that covers you and your party, including coverage for COVID-19 and other health-related issues. If you purchase insurance through our platform, it will not be included in your Package.
                </li>
                <li className="regular-text-v1">
                  IX. Group Booking Policy: Multiple bookings made separately will not be treated as a “group” booking. Each booking will be considered independently unless all are made under the same reference number.
                </li>
                <li className="regular-text-v1">
                  X. Instalment Payments: If you choose to pay in instalments, ensure that all payments are made by the due date. We will attempt to collect payments from the same card used for the deposit. If full payment is not received by the Balance Due Date, your booking may be canceled by the Service Provider, and cancellation fees may apply. Ensure payments are completed on time to avoid cancellation.
                </li>
                <li className="regular-text-v1">
                  XI. Accepted Payment Methods: We accept payments via debit/credit cards (Visa, MasterCard, and American Express) without additional fees from us. However, your bank or card issuer may charge foreign transaction fees for non-UK registered cards. Payments are subject to security and fraud checks, and we reserve the right to reject or cancel bookings if these checks are not passed.
                </li>
              </ul>

              <h3 className="section-title-v2">1A. Payment Terms and Conditions</h3>
              <ul>
                <li className="regular-text-v1">
                  I. Deposit Requirement: A deposit must be paid according to the instructions provided at the time of booking.
                </li>
                <li className="regular-text-v1">
                  II. Final Payment: The total balance is due 80 days before your scheduled departure, unless a different arrangement is specified. Your confirmation invoice will detail the exact payment due date.
                </li>
                <li className="regular-text-v1">
                  III. Third-Party Charges: Any additional costs from third-party suppliers must be settled in full and are non-refundable and non-changeable before the booking is confirmed.
                </li>
                <li className="regular-text-v1">
                  IV. Advance Payment for Certain Items: For specific elements of your booking, such as airline tickets, full payment may be required earlier than Travel Zee World’s standard due date. You will be notified if this is necessary, and the early payment will be applied to your non-refundable deposit. If you choose not to make this early payment, alternative arrangements can be considered, although this might result in higher overall costs.
                </li>
                <li className="regular-text-v1">
                  V. Consequences of Late Payment: Failure to make the required payments on time may result in your booking being treated as cancelled by you. In such cases, cancellation fees as outlined in the policy will apply.
                </li>
                <li className="regular-text-v1">
                  VI. Credit Card Payments: When paying by credit card, you accept the outlined cancellation terms and agree not to initiate a chargeback except in cases of confirmed fraud. If you initiate an unjustified chargeback and Travel Zee World incurs related costs, you will be responsible for reimbursing these costs, including any legal fees, as permitted by the credit card issuer’s policies.
                </li>
              </ul>

              <h3 className="section-title-v2">1B. Payment Details and Procedures</h3>
              <ul>
                <li className="regular-text-v1">
                  I. Payment Currency and Charges
                  <ul>
                    <li>Payments must be made in the amount and currency specified.</li>
                    <li>Bank fees and other charges are not included and are the user’s responsibility.</li>
                    <li>Travel Zee World does not collect taxes or levies. Any taxes imposed by hotels or city destinations are the user’s responsibility.</li>
                  </ul>
                </li>
                <li className="regular-text-v1">
                  II. Payment Timing and Methods
                  <ul>
                    <li>Payments must be completed within the specified time limit to avoid cancellation of reservations.</li>
                    <li>Accepted payment methods include:</li>
                    <ul>
                      <li>Bank Transfer: Provide the bank transfer receipt as proof of payment. Follow the procedures outlined in the Travel Zee World confirmation email.</li>
                      <li>Credit/Debit Card: Follow the payment procedures specified by Travel Zee World and/or the relevant payment service provider.</li>
                    </ul>
                  </ul>
                </li>
                <li className="regular-text-v1">
                  III. Confirmation and Issuance
                  <ul>
                    <li>Upon receiving full payment, Travel Zee World will:</li>
                    <li>Place the order.</li>
                    <li>Issue a reservation code that includes:</li>
                    <ul>
                      <li>Booking Code</li>
                      <li>Customer Name</li>
                      <li>Booking Number</li>
                      <li>Booking Details</li>
                      <li>Phone Number / Extension</li>
                    </ul>
                  </ul>
                </li>
              </ul>

              <h3 className="section-title-v2">1C. Payment made by Credit Card & Fraud</h3>
              <ul>
                <li className="regular-text-v1">
                  I. Billing and Refunds
                  <ul>
                    <li>For bookings made through the site, your credit card will be charged by Travel Zee World for the full amount at the time of booking.</li>
                    <li>Refunds, if applicable as detailed in section 7, will be processed in accordance with the reservation conditions and within a reasonable period.</li>
                    <li>For some reservations, payment may need to be made directly to the Vendor.</li>
                  </ul>
                </li>
                <li className="regular-text-v1">
                  II. Security and Fraud Prevention
                  <ul>
                    <li>Travel Zee World uses encryption technology (TLS or SSL) to protect your credit card information during transmission.</li>
                    <li>In case of credit card fraud or unauthorized use, contact your bank or card issuer immediately.</li>
                    <li>Travel Zee World is not liable for credit card fraud or unauthorized use by third parties, unless it results from Travel Zee World&apos;s own fraud, negligence, or wilful action, or as otherwise required by law.</li>
                    <li>Travel Zee World may, at its discretion, provide compensation subject to review and legal requirements. Compensation is only available if the fraud occurred through Travel Zee World&apos;s secure servers and was due to Travel Zee World’s fault or negligence.</li>
                  </ul>
                </li>
                <li className="regular-text-v1">
                  III. Liability and Verification
                  <ul>
                    <li>To make a reservation, you must be at least 18 years old, have full legal capacity, and use a credit or debit card issued in your name with sufficient funds.</li>
                    <li>Ensure all provided details are accurate. Travel Zee World reserves the right to reject certain credit cards and modify available payment methods.</li>
                    <li>Additional information or verification may be required to validate and confirm bookings. Reservations are only confirmed upon receipt of a confirmation email with an e-ticket or voucher.</li>
                    <li>Vendors may implement fraud detection mechanisms, and if fraud is detected, the booking may be voided. Travel Zee World is not responsible for cancellations resulting from such fraud detection.</li>
                  </ul>
                </li>
                <li className="regular-text-v1">
                  IV. Contact and Assistance
                  <ul>
                    <li>For suspected unauthorized transactions or fraud, contact Travel Zee World Customer Service promptly.</li>
                    <li>Ensure all information submitted is accurate to prevent reservation voiding.</li>
                  </ul>
                </li>
              </ul>

              <h3 className="section-title-v2">2. COVID-19</h3>
              <ul>
                <li className="regular-text-v1">
                  Travel Insurance and COVID-19 Policy
                  <ul>
                    <li>Insurance Coverage: Travelers are required to have travel insurance that includes coverage for any COVID-19 related needs and expenses.</li>
                    <li>Changes Due to COVID-19: The status of attractions and dining options may vary due to COVID-19 restrictions. We plan itineraries based on current availability, but restrictions can change unexpectedly.</li>
                    <li>Responsibility for Compliance: Travelers must adhere to local COVID-19 regulations, including any required negative tests for departure or arrival. Travel Zee World is not responsible for any non-compliance with these regulations. Additionally, while at the destination, it is the responsibility of local suppliers to inform travelers about current regulations, such as social distancing and mask-wearing. Travel Zee World does not assume responsibility for any failure to follow these local rules.</li>
                    <li>Handling COVID-19 Cases: If a traveler contracts COVID-19 during the trip, local regulations will be followed. The Tour Leader or Tour Guide will assist in securing medical care, similar to how other medical issues are handled during the tour.</li>
                    <li>Price and Regulation Changes: Our prices reflect the conditions as they are at the time of booking. Any new laws or regulations introduced at the destination may lead to additional charges or necessary adjustments to comply with these changes.</li>
                  </ul>
                </li>
              </ul>

              <h3 className="section-title-v2">3. Data Protection</h3>
              <ul>
                <li className="regular-text-v1">
                  We prioritize the protection of your personal information and will implement necessary security measures to ensure its safety. Your personal details will be shared only with the Service Providers involved in your travel arrangements and other relevant organizations essential for delivering your Travel Services. Additionally, as mentioned in paragraph 1A above, information may be shared as required. To prevent fraud, some data may also be provided to security and credit verification companies.
                  For further details on how we manage your personal data, please consult our Privacy Policy.
                </li>
              </ul>

              <h3 className="section-title-v2">4. Understanding Unavoidable and Extraordinary Circumstances</h3>
              <ul>
                <li className="regular-text-v1">
                  For the purposes of these Terms and Conditions, “Unavoidable and Extraordinary Circumstances” are defined as events that are beyond the control of the party invoking them. These are situations where even the application of all reasonable measures would not prevent the impact of such events.
                  Examples of Unavoidable and Extraordinary Circumstances include, but are not limited to:
                  <ul>
                    <li>Conflict and Security Issues: Instances of warfare, terrorism, and severe security threats.</li>
                    <li>Health Emergencies: Serious outbreaks of disease at the destination, such as epidemics and pandemics.</li>
                    <li>Industrial and Technical Failures: Disruptions like strikes, significant transport problems, and air traffic control interruptions.</li>
                    <li>Natural and Environmental Disasters: Events such as floods, earthquakes, extreme weather, and other natural occurrences that prevent safe travel.</li>
                    <li>Other Major Incidents: Nuclear accidents, fires, and chemical or biological emergencies.</li>
                  </ul>
                </li>
              </ul>

              <h3 className="section-title-v2">5. Handling Special Requests</h3>
              <ul>
                <li className="regular-text-v1">
                  When making a booking, you may provide us with any special requests, such as dietary preferences, specific room locations, or particular hotel amenities. While we will make every effort to communicate these requests to the relevant Supplier, we cannot guarantee that they will be fulfilled. We are not responsible for any special requests that are not met and will not consider this a breach of contract unless we have explicitly confirmed the request. Please be aware that we do not accept bookings that are contingent upon meeting any special requests.
                </li>
              </ul>

              <h3 className="section-title-v2">6. Modification and Transfer Policy</h3>
              <ul>
                <li className="regular-text-v1">
                  Amendments to Your Booking
                  <ul>
                    <li>Administration Fee: A $70 charge per booking will apply, in addition to any fees imposed by the Service Provider.</li>
                    <li>Deadline for Changes: Amendments cannot be made within 5 days of your departure date.</li>
                    <li>Types of Amendments Subject to Charges:</li>
                    <ul>
                      <li>Changing your destination</li>
                      <li>Altering hotel arrangements</li>
                      <li>Correcting names</li>
                    </ul>
                    <li>To request changes, you can directly call us at (+44 20 4600 3689) or email us at (admin@travelzeeworld.com). Note that all changes, even minor adjustments such as correcting a letter in a name, will incur the aforementioned charges. We will submit your request to the Service Provider but cannot guarantee acceptance or fulfillment.</li>
                  </ul>
                </li>
                <li className="regular-text-v1">
                  Service Provider Terms:
                  <ul>
                    <li>Discretion and Fees: Amendments are at the Service Provider&apos;s discretion and subject to their specific terms and conditions, you can directly visit their website and read their specific terms and conditions. Fees may reach up to 100% of the Travel Service cost, particularly for flight bookings, and are likely to increase as the departure date nears.</li>
                    <li>Assistance Limits: While we strive to assist with amendment requests, we cannot assure that changes will be accommodated.</li>
                  </ul>
                </li>
                <li className="regular-text-v1">
                  Special Rate Rooms and Services:
                  <ul>
                    <li>Non-Changeable Options: Certain rooms or services are available at special rates that are non-refundable, non-transferable, and non-changeable. Once confirmed, these bookings cannot be modified, including changes to names, dates, or duration. Cancellation of such bookings may incur a 100% cancellation fee.</li>
                  </ul>
                </li>
                <li className="regular-text-v1">
                  Package Booking Transfers:
                  <ul>
                    <li>Transferring Packages: You may transfer a Package booking to another individual who meets all conditions, with both parties responsible for any outstanding payments and fees related to the transfer.</li>
                    <li>Cancellation and Rebooking: Many Service Providers treat a transfer as a cancellation and rebooking, which could lead to a 100% cancellation charge. Additionally, priority may be given to other customers, which could affect the availability of the exact same booking.</li>
                  </ul>
                  <p>
                    Upon receiving your transfer request, we will endeavor to secure an alternative option and provide details on the transfer process and costs. Please provide us with sufficient notice—ideally 7 days or more before departure—to facilitate the transfer smoothly.
                  </p>
                </li>
              </ul>

              <h3 className="section-title-v2">7. Cancellation and Modification Terms</h3>
              <ul>
                <li className="regular-text-v1">
                  I. Cancellation Policy
                  <ul>
                    <li>Partial Cancellation: Partial cancellations are not allowed. If you need to cancel your entire booking, please provide written notification as soon as possible. If this notification is received outside of our Customer Service hours, it will be processed on the next working day.</li>
                    <li>Cancellation Fees: Costs are incurred when cancelling travel arrangements, particularly for non-refundable flights. As such, cancellation fees are based on the total booking cost, excluding credit/charge card fees and amendment costs. The cancellation fees are:</li>
                    <ul>
                      <li>Over 80 days before departure: Only the deposit is forfeited (including amendment fees).</li>
                      <li>Between 45 and 80 days before departure: 50% of the total holiday price plus a $120 amendment fee.</li>
                      <li>Between 16 and 44 days before departure: 75% of the total holiday price plus a $120 amendment fee.</li>
                      <li>Within 15 days of departure: 100% of the total holiday price.</li>
                    </ul>
                    <li>Note: If a higher deposit was required to secure your booking, this non-refundable amount will be included in the cancellation fees.</li>
                    <li>Travel Insurance: If your cancellation is covered by travel insurance, you may claim these charges from your insurer. Any cancellation charges will be deducted from your payments made to us.</li>
                  </ul>
                </li>
                <li className="regular-text-v1">
                  II. Modification Policy
                  <ul>
                    <li>Requesting Changes: To request changes to your confirmed booking, please submit your request in writing as soon as possible. We will make every effort to accommodate your request, but we cannot guarantee that all changes can be made.</li>
                    <li>Change Fees: Changes to your booking, including holiday dates, will generally be treated as a cancellation of the original booking and a new booking, incurring cancellation fees as detailed above. Changes might also lead to a recalculated holiday price based on the new arrangements.</li>
                    <li>If your change request is feasible, an administration fee of $70 per person per change will apply, along with any additional costs or supplier charges. Please note that these costs tend to increase closer to the departure date, so early notification is advised.</li>
                    <li>Name Changes: Airlines typically do not allow name changes post-confirmation. Requests for name changes will be treated as a cancellation of the existing flight and rebooking at current rates, subject to availability.</li>
                    <li>Non-Amendable Items: Certain components, particularly flights, may not be amendable after confirmation. Any alterations or cancellations could result in a charge up to 100% of those components, in addition to the above-mentioned fees.</li>
                  </ul>
                </li>
              </ul>

              <h3 className="section-title-v2">8. Adjustments and Cancellations of Your Travel Services</h3>
              <ul>
                <li className="regular-text-v1">
                  I. Modification of Travel Services 
                  <p>
                    We, along with the Service Providers, reserve the right to modify your Travel Services as needed. Typically, these modifications are minor, and we will make every effort to inform you of such changes before your departure. For minor changes, our responsibility is limited to providing notice; if you choose to cancel under these circumstances, our standard cancellation fees, as detailed in Section 7, will be applicable.
                  </p>
                  <p>
                    Minor Adjustments: Minor modifications might include, but are not limited to, changes to flight times by less than 12 hours, alterations in airlines or aircraft types, or changes to vehicle types. Changes in accommodation might involve moving to a different property of the same or superior quality within the same area or modifications to the services provided at your accommodation, including those related to COVID-19.
                  </p>
                  <p>
                    Major Changes: Occasionally, significant changes may be necessary. These might include relocating your accommodation to a different area or a property of a lower standard, changing your flight time by more than 12 hours, or altering your departure airport.
                  </p>
                </li>
                <li className="regular-text-v1">
                  II. Handling Significant Changes in Package Bookings
                  <p>
                    In the event that a significant alteration is necessary for Package bookings, we will notify you as quickly as possible. You will have several options:
                  </p>
                  <ul>
                    <li>A. Accept the Change: If the change results in a Package of lower quality or cost, you may be entitled to a price reduction as detailed in Section 9.</li>
                    <li>B. Decline the Change: You may refuse the change, cancel your Package, and consider an alternative Package if offered. If the alternative Package is of lower quality or cost, you may be eligible for a price reduction. If no suitable alternative is available, or if you prefer, we will issue a full refund.</li>
                    <li>C. Cancel and Refund: If you reject the change and opt to cancel your Package, you will receive a full refund and might also be eligible for compensation.</li>
                  </ul>
                  <p>
                    If we have to change or cancel your trip:
                    Compensation
                    Period before departure in which we notify you the Amount you will receive from us:
                  </p>
                  <ul>
                    <li>60-15 days - 5% of the Invoice Value</li>
                    <li>14-3 days - 10% of the Invoice Value</li>
                    <li>Less than three days - 25% of the Invoice Value</li>
                  </ul>
                  <p>
                    You will be given a reasonable period, usually 7 days from receiving the notification, to decide. If no response is received within this period, we will send a reminder. Failure to respond may lead us to proceed as outlined in our earlier communication, which could include terminating the Package and providing a refund.
                  </p>
                </li>
                <li className="regular-text-v1">
                  III. Cancellation of Package Bookings
                  <p>
                    On rare occasions, we or the Service Providers may need to cancel your Package. We will inform you immediately and, where possible, offer an alternative Package. If the alternative Package is of lower quality or cost, you may be entitled to a price reduction. If no alternative is suitable or available, a full refund will be issued.
                  </p>
                  <p>
                    Compensation may be applicable in case of Package, as described in Section 8, except when the cancellation is due to Unavoidable and Extraordinary Circumstances, and we notify you without delay before the Package begins.
                  </p>
                </li>
                <li className="regular-text-v1">
                  IV. Service Provider Refunds or Vouchers
                  <p>
                    If you receive a Service Provider Arrangement (as described in Section 7), any refund due from us for that Travel Service will be adjusted accordingly.
                  </p>
                </li>
                <li className="regular-text-v1">
                  V. Alternatives to Refunds
                  <p>
                    For cancellations resulting from global disruptions (e.g., COVID-19), we might offer options like vouchers for future travel instead of cash refunds. These alternatives are additional to your rights outlined above. We will inform you of such options when discussing your cancellation.
                  </p>
                </li>
              </ul>

              <h3 className="section-title-v2">9. Price Adjustments and Compensation for Package Holidays</h3>
              <ul>
                <li className="regular-text-v1">
                  I. Eligibility for Price Adjustments
                  <p>
                    If you experience a Failure, you may qualify for a price adjustment. This is applicable unless the Failure is caused by you.
                  </p>
                </li>
                <li className="regular-text-v1">
                  II. Compensation for Losses
                  <p>
                    You may be entitled to compensation for any loss or damage resulting from a Failure, unless:
                  </p>
                  <ul>
                    <li>The Failure is attributable to you.</li>
                    <li>The Failure is due to an unforeseeable or unavoidable third-party issue unrelated to the Travel Services.</li>
                    <li>The Failure is due to Unavoidable and Extraordinary Circumstances.</li>
                  </ul>
                </li>
                <li className="regular-text-v1">
                  III. Compensation Limits
                  <p>
                    Compensation may be restricted by international travel conventions. These include:
                  </p>
                  <ul>
                    <li>Montreal Convention: Covers air travel.</li>
                    <li>Athens Convention: Covers sea travel.</li>
                    <li>Berne Convention (COTIF): Covers rail travel.</li>
                    <li>Geneva Convention: Covers road travel.</li>
                    <li>Paris Convention: Covers accommodation services.</li>
                  </ul>
                  <p>
                    These conventions may impose limitations on the amount and conditions for compensation, and these limitations apply to us as if they were imposed directly on us. You can request copies of these conventions for further details.
                  </p>
                </li>
                <li className="regular-text-v1">
                  IV. Terms of Service Providers
                  <p>
                    The terms set by Service Providers for transportation within your Package also limit our liability, similar to the limitations applied directly to us.
                  </p>
                </li>
                <li className="regular-text-v1">
                  V. Liability Cap
                  <p>
                    Our liability concerning your Package is capped at times the total cost of the Package, excluding cases of death, injury, or illness resulting from intentional or negligent actions by us or the Service Providers.
                  </p>
                </li>
                <li className="regular-text-v1">
                  VI. Compensation from Multiple Sources
                  <p>
                    If you receive compensation or a price reduction from another source for the same Failure, this amount may be deducted from any compensation or adjustment we provide.
                  </p>
                </li>
                <li className="regular-text-v1">
                  VII. Exclusions of Liability
                  <p>
                    Outside the situations described above, we do not accept liability for any claims, losses, expenses, or damages related to your Package, except in cases of death, injury, or illness due to our negligence.
                    We are also not liable for any losses or damages related to matters outlined in Section 2.
                  </p>
                </li>
              </ul>

              <h3 className="section-title-v2">10. Our Responsibilities Regarding Your Travel</h3>
              <ul>
                <li className="regular-text-v1">
                  I. Service Delivery
                  <p>
                    We are committed to delivering the travel services as outlined, except in cases where service provision is impeded or altered due to unforeseen circumstances or delays beyond our control. In such instances, we will endeavor to provide alternative services of a comparable standard, but no refunds will be issued under these conditions.
                  </p>
                </li>
                <li className="regular-text-v1">
                  II. Independent Service Providers
                  <p>
                    Please note that airlines, hotels, and other service providers (such as trains, cruises, ferries, motor coaches, and restaurants) operate independently and are not affiliated with us. We cannot be held responsible for any issues arising from their actions or omissions.
                  </p>
                </li>
                <li className="regular-text-v1">
                  III. Terms and Conditions of Travel Documents
                  <p>
                    All travel documents issued by us are governed by the terms and conditions set by the respective service providers and the laws of the service locations. We act solely as an intermediary for the service providers, including accommodations, transportation, and dining. We assume no liability for any incidents, including injury or loss, resulting from their actions or from unforeseeable events.
                  </p>
                </li>
                <li className="regular-text-v1">
                  IV. Baggage and Personal Items
                  <p>
                    Travelers are responsible for their own baggage and personal belongings at all times. We advise obtaining insurance for your baggage. A service fee applies if lost items are found and returned after your trip.
                  </p>
                </li>
                <li className="regular-text-v1">
                  V. Modifications and Cancellations
                  <p>
                    We retain the right to withdraw or modify any advertised travel packages and make necessary changes to ensure the proper execution of travel arrangements.
                  </p>
                </li>
                <li className="regular-text-v1">
                  VI. Responsibilities for Package Tours
                  <p>
                    For packages booked with us, we operate as the &quot;organizer&quot; under the relevant travel regulations. If any services provided are found to be negligent, we will offer appropriate compensation, provided you can demonstrate that the negligence occurred.
                  </p>
                </li>
                <li className="regular-text-v1">
                  VII. Claims for Other Bookings
                  <p>
                    For bookings not classified as packages, our responsibility is limited to selecting suppliers with due care. We are not liable for issues with the actual service provision unless it is proven that we failed in our duty of care, resulting in damage. Provided we have selected suppliers carefully, we accept no responsibility for issues arising from their service or their staff’s actions.
                  </p>
                </li>
              </ul>

              <h3 className="section-title-v2">11. Guest Conduct and Consequences</h3>
              <ul>
                <li className="regular-text-v1">
                  When you book with Travel Zee World, you take responsibility for the behavior of everyone in your party during the trip. If, at any time, your actions—or those of anyone in your group—are deemed by us or any relevant authority to be disruptive, harmful, or problematic, we reserve the right to end your travel arrangements immediately.
                </li>
                <li className="regular-text-v1">
                  Behavioral Expectations
                  <ul>
                    <li>Travel Zee World upholds high standards of behavior and expects all guests to adhere to these standards. The following behaviors will lead to immediate termination of your travel plans and possible exclusion from future bookings:</li>
                    <ul>
                      <li>Verbal Abuse: Using offensive or abusive language towards any individual.</li>
                      <li>I. Bullying: Engaging in any form of bullying behavior.</li>
                      <li>II. Inappropriate Actions: Conduct involving uninvited physical contact, harassment, or any form of violence.</li>
                      <li>III. Intoxication: Excessive drinking or being under the influence of substances.</li>
                      <li>IV. Illegal Substances: Having or using restricted or illegal drugs, except those approved by a medical professional.</li>
                      <li>V. Disruption: Actions that hinder other travelers&apos; enjoyment or the effective operation of the trip.</li>
                      <li>VI. Dangerous Items: Carrying or using dangerous objects like weapons.</li>
                      <li>VII. Legal Issues: Violating the laws of the destination country.</li>
                      <li>VIII. Damage to Reputation: Any behavior that harms the reputation or goodwill of Travel Zee World.</li>
                    </ul>
                  </ul>
                </li>
                <li className="regular-text-v1">
                  Cancellation Policy and Charges
                  <p>
                    If your trip is terminated due to unacceptable conduct, you will be subject to full cancellation fees, and no refunds will be provided. We are not responsible for any additional expenses you may incur as a result, including the costs of alternative accommodation or return travel.
                  </p>
                </li>
                <li className="regular-text-v1">
                  Property Damage
                  <ul>
                    <li>Existing Damage: Report any pre-existing damage to the accommodation staff immediately upon arrival.</li>
                    <li>New Damage: If you cause any damage during your stay, you must pay for the repairs or compensation before the end of your stay or as soon as the costs are confirmed.</li>
                  </ul>
                </li>
                <li className="regular-text-v1">
                  Liability and Legal Responsibility
                  <p>
                    You are responsible for covering any claims or legal costs resulting from damage or misconduct. Criminal proceedings may be initiated if warranted. Travel Zee World is not liable for any expenses related to the removal of a traveler from a trip, flight, ship, or train. By booking, you agree not to hold Travel Zee World or its affiliates responsible for any actions taken under these policies.
                  </p>
                </li>
              </ul>

              <h3 className="section-title-v2">12. Entire Agreement</h3>
              <ul>
                <li className="regular-text-v1">
                  These Terms and Conditions set out the entire agreement and understanding between you and us in connection with your booking and supersede any prior representations, agreements, conditions, negotiations and undertakings whether made orally or in writing.
                </li>
              </ul>

              <h3 className="section-title-v2">13. Dispute Resolution and Service Provider Claims</h3>
              <ul>
                <li className="regular-text-v1">
                  Except where covered by Section 75 of the Consumer Credit Act 1974, you agree not to seek a chargeback or dispute any payments with your credit card issuer against us. All refund and claim rights are strictly governed by the provisions outlined in these Terms and Conditions.
                  Should you pursue a chargeback or file a claim against a Service Provider—whether through cash, vouchers, or other agreements—we are entitled to take reasonable actions to ensure that you do not receive double compensation for the same issue.
                  This could involve temporarily halting any payment obligations we may have to you until the dispute or claim process is completely resolved and all appeal periods have lapsed.
                </li>
              </ul>

              <h3 className="section-title-v2">14. Accommodation Quality and Star Ratings</h3>
              <ul>
                <li className="regular-text-v1">
                  Star ratings serve to indicate the quality and standards of accommodations, reflecting aspects such as the facilities available, the quality of furnishings, the dining options, and overall service.
                </li>
                <li className="regular-text-v1">
                  Please be aware that star ratings are not uniform and can differ greatly from one country to another, and sometimes even within the same country. Not all countries have an official rating system. As a result, the star rating you see should be considered a general guide rather than a definitive assessment of quality. If an accommodation has an official rating from a recognized tourist board, we will do our best to include this information in the description.
                </li>
                <li className="regular-text-v1">
                  The ratings provided are based on information from the Service Providers and may not reflect our personal assessments. We cannot assure the accuracy of these ratings.
                </li>
              </ul>

              <h3 className="section-title-v2">15. In case of Complaint</h3>
              <ul>
                <li className="regular-text-v1">
                  Should you have any concerns or complaints regarding your trip arrangements, you must notify both the relevant service provider and our representative on the spot. For issues that cannot be resolved immediately, we will supply a 24-hour emergency contact number, enabling you to reach us directly if necessary.
                </li>
                <li className="regular-text-v1">
                  It is crucial to report any issues as soon as they arise, as failing to do so may impact your ability to claim compensation. If you are unable to resolve the problem during your trip, please send us a written complaint within 28 days after the end of your trip.
                </li>
              </ul>

              <h3 className="regular-text-v1">
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. Thank you for choosing Travel Zee World for your holiday needs.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
