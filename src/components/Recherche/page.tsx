"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import React from "react";

const Recherche: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Rechercher" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5"></div>
    </>
  );
};

export default Recherche;
