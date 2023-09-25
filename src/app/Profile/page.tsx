import Navbar from "@/components/global/Navbar";
import React from "react";
import Person_sec from "./Person_sec";
import New_profile from "@/components/global/New_profile";
import Layout from "@/components/global/Layout";

function Profile_page() {
  return (
    <Layout navbar={<Navbar />} asid={<New_profile />}>
      <Person_sec />
    </Layout>
  );
}

export default Profile_page;
