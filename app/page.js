import Image from "next/image";
import Banner from "./copmonents/Home/Banner";
import NewArrivals from "./copmonents/Home/NewArrivals";
import Navbar from "./copmonents/Home/Navbar";
import Footer from "./copmonents/Home/Footer";

export default function Home() {
  return (
<div>
  <Navbar></Navbar>
  <Banner />
  <NewArrivals />
  <Footer></Footer>
</div>
  );
}
