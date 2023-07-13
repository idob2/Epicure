import SearchIcon from "../../assets/nav_bar_images/Group.svg";
import ExitFromMenu from "../../assets/general_images/General.svg";

import "./Search.scss"
const Search = (props: any) => {
  return (
    <div className="search-page">
        <button className="exit-button" onClick={props.handleSearchClick}>
            <img className="exit-img" src={ExitFromMenu} alt="Exit" />
        </button>
        <div className="search-div">
      <div className="search-bar">
        <img className="search-img" src={SearchIcon} alt="Hamburg" />
        <input
          className="search-input"
          type="text"
          placeholder="Search for restaurant cuisine, chef"
        />
      </div>
    </div>
    </div>
   
  );
};

export default Search;
