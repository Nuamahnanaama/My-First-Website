"use client"
import Image from "next/image";
import Halfpg from '../Components/Halfpg';
import Story from "../Components/Story";
import Category from "../Components/Category";
import Props from "../Components/Props";
import About from "@/Components/About";
import Base from "@/Components/Base";


export default function Home() {
  return (
    <div>
      <div>
        <Halfpg />
        <Story />
        <Category />
        <About />
        <Base />

      </div>
    </div>
  );
}
