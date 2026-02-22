import { useContext } from "react";
import { TrackContext } from "../context/TrackContext";
import TrackRow from "../components/TrackRow"

function Favourites()
{
  const {favourites} = useContext(TrackContext)

  if(favourites.length === 0)
  {
    return <p className="text-white p-6 text-xl">No tracks liked yet! 🌌 </p>
  }

  return(
    <div className="p-6">
      {favourites.map(track=><TrackRow key={track.id} track={track}/>)}
    </div>
  )
}
export default Favourites