"use client";

import dynamic from "next/dynamic";
import PackageDataTwo from "@/constant/HomeDark/PackageDataTwo";
import PackageDetailsSlider from "@/components/package/PackageDetailsSlider";
import PackageBookingForm from "@/components/package/PackageBookingForm";
import { useCurrency } from "@/context/CurrencyContext";

const DynamicMap = dynamic(() => import("@/components/package/PackageMap"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

const PackageDetails = ({ id }: { id?: string }) => {
  const { currencySymbol, convertPrice } = useCurrency();

  const deal = PackageDataTwo.packages.find((obj) => obj.id === id);
  const convertedPrice = deal?.price ? convertPrice(Number(deal.price)) : null;
  const formattedPrice = convertedPrice?.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  if (!deal) {
    return (
      <div className="container py-12 text-center text-red-600">
        <h2>Package not found</h2>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-t to-[#FFF1EC] from-white">
      <PackageDetailsSlider slider_images={deal.slider_images ?? []} />

      <div className="container">
        <div className="flex flex-wrap justify-between pb-8 pt-6 mb-8 border-b border-stock-1">
          <div className="pt-2">
            <h1 className="lg:text-2xl md:text-xl text-lg text-dark-1 leading-[1.42] font-medium">
              {deal.title}
            </h1>
            <div className="flex items-center mt-2">
              <ul className="flex lg:gap-3 gap-2 text-primary-1 mr-3 text-sm">
                <li><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star-half" /></li>
              </ul>
              <span className="text-primary-1 lg:text-2md text-md">(20 review)</span>
            </div>
          </div>
          <div className="pt-2">
            <h2 className="font-sans lg:text-[22px] leading-1.2 md:text-xl text-lg font-semibold">
              {currencySymbol}{formattedPrice}
            </h2>
            <div className="text-md font-normal ml-1">{deal.priceCriteria}</div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-base">
          <div className="lg:col-span-8 col-span-12">
            <div className="pack__disc">
              <h5 className="lg:text-2md text-md text-dark-2 font-medium leading-[1.5] font-sans mb-6">
                {deal.disc}
              </h5>
              <p>{deal.about}</p>

              <div className="lg:pt-10 pt-8">
                <h3>What’s included:</h3>
                <br />
                <div>
                  {deal.included?.map((item, index) => (
                    <div className="flex single__count" key={index}>
                      <div className="shrink-0 day__count">
                        <div className="lg:w-[52px] lg:h-[52px] w-10 h-10 rounded-full border border-primary-1 flex justify-center items-center lg:text-lg md:2md text-md font-semibold text-primary-1 bg-white">
                          0{index + 1}
                        </div>
                      </div>
                      <div className="lg:ml-[18px] ml-4 pb-8">
                        <h5 className="lg:text-[22px] text-md font-semibold text-dark-1 !lg:mt-[10px] !mt-2">
                          {item}
                        </h5>
                      </div>
                    </div>
                  )) ?? <p>No inclusions listed.</p>}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 col-span-12 relative">
            <div className="lg:sticky top-[108px]">
              <PackageBookingForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
