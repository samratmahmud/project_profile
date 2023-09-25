import Navbar from "@/components/global/Navbar";
import Header from "./home/Header";
import Aside from "./home/Aside";
import Layout from "@/components/global/Layout";

export default function Homepage() {
  return (
    <Layout navbar={<Navbar />} asid={<Aside />}>
      <Header />
    </Layout>
  );
}
