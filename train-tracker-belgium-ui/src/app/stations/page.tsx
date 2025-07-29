"use client";

import { useEffect, useState } from "react";
import type { Station } from "../../../types/stations";
import { fetchStations } from "../../../lib/stations/fetchStations";
import StationSelect from "../../../components/StationSelect"

export default function StationsPage() {

    const [stations, setStations] = useState<Station[]>([])
    const [nameStationSelected, setNameStationSelected] = useState<string>("")

    useEffect(() => {
        fetchStations()
            .then(setStations)
            .catch((err: any) => console.error(err));

    }, []);

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Train LiveBoard</h1>
            <StationSelect
                stations={stations}
                value={nameStationSelected}
                onChange={setNameStationSelected}
            />
            {nameStationSelected && (
                <p className="mt-4">
                    <strong>Selected Station:</strong> {nameStationSelected}
                </p>
            )}
        </div>
    )
}