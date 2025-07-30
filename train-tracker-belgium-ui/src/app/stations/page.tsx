"use client";

import { useEffect, useState } from "react";
import { fetchStations } from "../../../lib/stations/fetchStations";
import type { Station } from "../../../types/station";
import StationSelect from "../../../components/StationSelect"
import { fetchLiveBoard } from "../../../lib/stations/fetchLiveBoard";
import { LiveBoard } from "../../../types/liveboard";
import  LiveBoardTable  from "../../../components/LiveBoardTable";

export default function StationsPage() {

    const [stations, setStations] = useState<Station[]>([]);
    const [idStationSelected, setIdStationSelected] = useState<string>("");
    const [liveBoard, setLiveBoard] = useState<LiveBoard | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchStations()
            .then(setStations)
            .catch((err: any) => console.error(err));
    }, []);

    useEffect(() => {
        if (!idStationSelected) return;

        setLoading(true);
        fetchLiveBoard(idStationSelected)
            .then((liveBoard) => setLiveBoard(liveBoard))
            .catch((err: any) => console.error("Failed to fetch liveboard", err))
            .finally(() => setLoading(false));
    }, [idStationSelected])

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Train LiveBoard</h1>
            <StationSelect
                stations={stations}
                value={idStationSelected}
                onChange={setIdStationSelected}
            />
            {loading && <p className="mt-4 text-gray-500">Loading liveboard ...</p>  }
            {!loading && liveBoard && (
                <LiveBoardTable liveBoard={liveBoard} />
            )}
        </div>
    )
}