import { CDN_URL } from "../utils/constants";
const RestoCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,

      } = resData;
    
    return (
        <div className="m-4 p-4 w-[250px] bg-blue-100 hover:bg-blue-200 rounded-lg">
           <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg truncate">{name}</h3>
      <h4 className="truncate">{cuisines.join(", ")}</h4>
      <h4>{avgRating}🔥</h4>
      <h4>{costForTwo}</h4>

        </div>
    )
}

export const IsVeg = (RestoCard) => {
    return (props) =>{
        return (
            <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Veg</label>
            <RestoCard {...props}/>
            </div>
        )
        }
}
export default RestoCard;