import { useContext } from "react";
import { TrackContext } from "../context/TrackContext";
import TrackRow from "../components/TrackRow"
function Home()
{
  const {tracks} =useContext(TrackContext)

  return(
    <div className="p-6">
      {tracks.map(track=> <TrackRow key={tracks.id} track={track}/>)}
    </div>
  )
}
export default Home