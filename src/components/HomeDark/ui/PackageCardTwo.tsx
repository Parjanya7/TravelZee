import Image from "next/image";
import React from "react";
import { useCurrency } from "@/context/CurrencyContext";

interface PackageCardTwoProps {
  id: string;
  img: string;
  price: number; 
  discountedPrice?: number;
  destination: string;
  disc: string;
  handleSubscribe: (id: string) => void;
}

const PackageCardTwo = ({
  id,
  img,
  price,
  discountedPrice,
  destination,
  disc,
  handleSubscribe,
}: PackageCardTwoProps) => {
  const { currencySymbol, convertPrice } = useCurrency();

  const convertedPrice = convertPrice(price);
  const convertedDiscountedPrice = discountedPrice
    ? convertPrice(discountedPrice)
    : null;

  const exploreHandler = (id: string): void => {
    handleSubscribe(`/package-details?id=${id}`);
  };

  return (
    <div>
      <div className="overflow-hidden relative">
        <a>
          <Image
            width={364}
            height={295}
            src={img}
            alt="package"
            className="w-full group-hover:scale-105 duration-300"
          />
        </a>
        {discountedPrice && (
          <span className="absolute bg-status-info text-base px-4 py-2 top-0 text-white rotate-[-90deg] origin-top-left-1/3-3/4">
            Special Offer
          </span>
        )}
      </div>

      <div className="bg-white text-dark-1 px-6 pt-5 pb-base">
        <div className="flex justify-between items-center flex-wrap space-y-2">
          <h3 className="text-lg leading-1.5 font-semibold">{destination}</h3>
          <div className="shrink-0 font-medium text-primary-1 text-[22px] flex items-center">
            {discountedPrice ? (
              <>
                <span>
                  {currencySymbol}
                  {convertedDiscountedPrice}
                </span>
                <del className="text-sm text-dark-4 ml-[6px]">
                  {currencySymbol}
                  {convertedPrice}
                </del>
              </>
            ) : (
              <span>
                {currencySymbol}
                {convertedPrice}
              </span>
            )}
          </div>
        </div>

        <p className="text-base leading-1.9 mt-3">{disc}</p>

        <button onClick={() => exploreHandler(id)} className="explore-btn group">
          <span>Explore Now</span>
          <div className="max-w-[24px]">
            <svg
              className="ml-2 group-hover:translate-x-2 duration-200"
              width={27}
              height={14}
              viewBox="0 0 27 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.217443 6.25H18.4827C18.6276 6.25 18.7001 6.30263 18.7001 6.40789V7.59211C18.7001 7.69737 18.6276 7.75 18.4827 7.75H0.217443C0.0724811 7.75 0 7.69737 0 7.59211V6.40789C0 6.30263 0.0724811 6.25 0.217443 6.25Z"
                fill="currentColor"
              />
              <path
                d="M20.7001 12.28L25.0467 7.9333C25.5601 7.41997 25.5601 6.57997 25.0467 6.06664L20.7001 1.71997"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PackageCardTwo;
