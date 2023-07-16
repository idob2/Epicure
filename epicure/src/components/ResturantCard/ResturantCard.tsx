import "./ResturantCard.scss"
const ResturantCard = (props: {imgUrl: string, name: string}) => {
    // console.log(props.imgUrl);
    return(
        <div className="popular-card-div">
            <div className="popular-image-div">
            <img className="resturant-image" src={props.imgUrl} alt={props.name} />
            </div>
            <div className="popular-name-div">
                <p className="resturant-name">{props.name}</p>
            </div>
            
        </div>
    );
};

export default ResturantCard;