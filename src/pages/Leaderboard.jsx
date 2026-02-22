import { useContext } from "react";
import { TrackContext } from "../context/TrackContext";

function Leaderboard()
{ const {favourites} = useContext(TrackContext)
  const sorted = [...favourites].sort((a,b)=>b.energy-a.energy)

  if(favourites.length === 0)
    return <p className="text-white p-6 text-xl">No top tracks yet!</p>

    return(
        <div className="p-6 space-y-2">
          {sorted.map((track,i)=>(
<div key={track.id} className="flex items-center justify-between px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-900 via-purple-900 to-black hover:shadow-lg transition-all">
<div className="flex items-center gap-4">
<span className="text-yellow-300 font-bold">{i+1}</span>
<img src={track.cover} alt={track.title} className="w-10 h-10 rounded-full border-yellow-300"/>
<div>

<p className="text-yellow-300 font-bold">{track.energy}% Energy</p>
<p className="text-gray-300 text-sm">{track.artist}</p>

</div>


</div>
<p className="text-yellow-300 font-bold">{track.energy}% Energy</p>

</div>
))}

        </div>
    )
}
export default Leaderboard