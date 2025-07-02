import AdPopup from "../../components/AdPopup";
import CarsPageBanner from "../../components/CarsPageBanner";
import FavoriteBrands from "../../components/FavoriteBrands";
import MarqueeHomePage from "../../components/MarqueeHomePage";
import SpecialEdition from "../../components/SpecialEdition";

export default function Home() {
  return (
    <div className="">
      <AdPopup></AdPopup>
      <CarsPageBanner></CarsPageBanner>
      <FavoriteBrands></FavoriteBrands>
      <SpecialEdition></SpecialEdition>
      <MarqueeHomePage></MarqueeHomePage>
    </div>
  );
}
