import React from "react";
import Name_section from "./Name_section";
import Navbar from "@/components/global/Navbar";
import New_profile from "@/components/global/New_profile";
import Layout from "@/components/global/Layout";

function Public_profile() {
  return (
    <div>
      <Layout navbar={<Navbar />} asid={<New_profile />}>
        <Name_section />
      </Layout>
    </div>
  );
}

export default Public_profile;
