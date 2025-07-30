import { LiveBoard } from "../../types/liveboard";
import { LiveBoardApiResponse } from "../../types/liveboard.api";


export async function fetchLiveBoard(stationId: string): Promise<LiveBoard> {
    const result = await fetch(
        `https://api.irail.be/liveboard/?id=${stationId}&format=json&lang=en`
    );

    if(!result.ok) {
        throw new Error(`Failed to to fetch liveboard: ${result.status}`);
    }

    const data: LiveBoardApiResponse = await result.json();

    if(!Array.isArray(data.departures.departure)) {
        throw new Error("Invalid departure data format");
    }

    return ({
        station: data.station,
        timestamp: data.timestamp,
        departures: data.departures.departure.map((d) => ({
            time: d.time,
            delay: d.delay,
            platform: Number(d.platforminfo.name),
            left: Boolean(d.left),
            canceled: Boolean(d.canceled),
            destination: d.station,
            vehicleName: d.vehicleinfo.shortname,
            vehicleId: d.vehicle
        })),
    })
}