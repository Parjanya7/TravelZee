// CurrencyContext.tsx
"use client";
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Currency = "GBP" | "INR" ;

interface CurrencyContextType {
  currency: Currency;
  currencySymbol: string;
  convertPrice: (priceInBase: number) => number;
  setCurrency: (currency: Currency) => void;
}

const currencySymbols: Record<Currency, string> = {
  // EUR: "€",
  INR: "₹",
  GBP: "£",
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>("GBP");
  const [conversionRates, setConversionRates] = useState<Record<Currency, number>>({
    // EUR: 1,
    INR: 82,
    GBP: 0.85,
  });

  const fetchRates = async () => {
    try {
      const res = await fetch("https://open.er-api.com/v6/latest/GBP");
      const data = await res.json();

      setConversionRates({
        // EUR: 1,
        INR: data.rates.INR,
        GBP: data.rates.GBP,
      });
    } catch (err) {
      console.error("Failed to fetch exchange rates", err);
    }
  };

  useEffect(() => {
    fetchRates();
  }, []);

  const currencySymbol = currencySymbols[currency];

  const convertPrice = (priceInBase: number) => {
    const rate = conversionRates[currency];
    return +(priceInBase * rate).toFixed(2);
  };

  return (
    <CurrencyContext.Provider
      value={{ currency, currencySymbol, convertPrice, setCurrency }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};
