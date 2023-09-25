import React from "react";
import Middel from "./Middel";
import Navbar from "@/components/global/Navbar";
import Articles_profile from "./Articles_profile";
import Layout from "@/components/global/Layout";

function Articlespage() {
  return (
    <div>
      <Layout navbar={<Navbar />} asid={<Articles_profile />}>
        <Middel />
      </Layout>
    </div>
  );
}

export default Articlespage;
