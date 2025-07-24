import { HomeLayout } from "@/components/layout/home-layout";
import { HomePage } from "@/templates/home";
import React from "react";

export default function Home() {
  return (
    <HomeLayout>
      <HomePage />
    </HomeLayout>
  );
}
