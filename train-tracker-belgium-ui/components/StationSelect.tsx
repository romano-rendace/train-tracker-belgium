"use client";

import { Station } from "../types/station";

type StationSelectProps = {
    stations: Station[];
    value: string;
    onChange: (stationName: string) => void;
}

export default function StationSelect({
    stations,
    value,
    onChange,
}: StationSelectProps) {
    return (
        <div>
            <select 
                id="station"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="border p2 rounded w-full"
            >
                <option value="">-- Choose a station --</option>
                {stations.map((station) => (
                    <option key={station["id"]} value={station.id}>
                        {station.name}
                    </option>
                ))}
            </select>
        </div>

    )
}
