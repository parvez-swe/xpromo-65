"use client";
import { useEffect } from "react";
import FactoryDirectHeroSection from "./FactoryDirectHeroSection";
import LocalStockHeroSection from "./LocalStockHeroSection";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setMounted } from "@/redux/slices/factorySlice";

export default function HeroSection() {
  const dispatch = useDispatch();
  const { isFactoryDirect, mounted } = useSelector(
    (state: RootState) => state.factory
  );
  useEffect(() => {
    dispatch(setMounted());
  }, [dispatch]);

  if (!mounted) return null;

  return (
    <div className="pt-10">
      {isFactoryDirect ? (
        <FactoryDirectHeroSection />
      ) : (
        <LocalStockHeroSection />
      )}
    </div>
  );
}
