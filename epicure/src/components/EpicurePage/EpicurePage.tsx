import CompleteNavBar from "../CompleteNavBar/CompleteNavBar";
import HomeImage from "../HomeImage/HomeImage";
import SignatureDishes from "../PopularDishes/PopularDishes";
import PopularResturants from "../PopularResturants/PopularResturants";
import SignatureOfDishes from "../SignatureOfDishes/SignatureOfDishes";

const EpicurePage = () => {
  return (
    <div>
      <CompleteNavBar></CompleteNavBar>
      <HomeImage></HomeImage>
      <PopularResturants></PopularResturants>
      <SignatureDishes></SignatureDishes>
      <SignatureOfDishes></SignatureOfDishes>
    </div>
  );
};

export default EpicurePage;
