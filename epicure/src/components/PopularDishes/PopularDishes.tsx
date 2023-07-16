import resturants from "../ResturantCard/PopularResturans.json";
import PopularSwiper from "../Swipers/PopularSwiper";
import AllResturantsIcon from "../../assets/general_images/AllResturants.svg";
import "../PopularResturants/PopularResturants.scss";

const SignatureDishes = () => {
  return (
    <div className="popular-resturants-div">
      <div className="title-div">
        <p className="popular-title">Signature Dishes of:</p>
      </div>
      <div>
        <PopularSwiper resturants={resturants} />
      </div>
      <div className="all-resturants-div">
        <a href="">All Dishes</a>
        <button className="resturants-button">
          <img
            className="resturants-icon"
            src={AllResturantsIcon}
            alt="AllResturantsIcon"
          />
        </button>
      </div>
    </div>
  );
};

export default SignatureDishes;
