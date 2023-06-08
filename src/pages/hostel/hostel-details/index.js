import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import HostelHero from "../../../components/hostel-details/HostelHero";
import HostelDetails from "../../../components/hostel-details/HostelDetails";
import Layouts from "../../../layout/Layouts";
const index = () => {
  return (
    <Layouts>
      <HostelHero />
      <HostelDetails />
    </Layouts>
  );
};

export default index;
