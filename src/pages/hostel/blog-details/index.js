import React from "react";
import BlogDetails from "../../../components/hostel-details/HostelDetails";
import BlogHero from "../../../components/hostel-details/HostelHero";
import Layouts from "../../../layout/Layouts";
const index = () => {
  return (
    <Layouts>
      <BlogHero />
      <BlogDetails />
    </Layouts>
  );
};

export default index;
