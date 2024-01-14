

const RestaurantCard = (props) => {
    const {resData} = props;
    const { name, cuisines, costForTwoMessage } =
    resData?.cards[0]?.card?.card?.info;

    return (
        <div className="flex">
            <div className="p-4 m-16">
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{costForTwoMessage}</h4>
            </div>
          
        </div>
    )
}

export default RestaurantCard;