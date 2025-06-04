import CarsPageBanner from "../../components/CarsPageBanner";
import FavoriteBrands from "../../components/FavoriteBrands";
import Footer from "../../components/Footer";
import HomeBanner from "../../components/HomeBanner";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar></Navbar>
      <CarsPageBanner></CarsPageBanner>
      <FavoriteBrands></FavoriteBrands>
      <Footer></Footer>
    </div>
  );
}
