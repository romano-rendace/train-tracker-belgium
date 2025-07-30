"use client";

import { useState } from "react";
import StationSelect from "../../../components/StationSelect"
import  LiveBoardTable  from "../../../components/LiveBoardTable";
import { useStations } from "../../../hooks/useStations";
import { useLiveBoard } from "../../../hooks/useLiveBoard";

export default function StationsPage() {
    const { data: stations, isLoading: loadingStations } = useStations();
    const [idStationSelected, setIdStationSelected] = useState<string>("");

    const { 
        data: liveBoard,
        isLoading: loadingLiveBoard,
        error: liveBoardError
    } = useLiveBoard(idStationSelected)

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Train LiveBoard</h1>
            <StationSelect
                stations={stations ?? []}
                value={idStationSelected}
                onChange={setIdStationSelected}
            />

            { loadingLiveBoard && <p className="mt-4 text-gray-500">Loading liveboard...</p> }
            { liveBoardError && <p className="text-red-500">Failed to load liveboard</p> }
            { liveBoard && <LiveBoardTable liveBoard={liveBoard} /> }
        </div>
    )
}