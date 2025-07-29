import type {Station, StationApiResponse} from "../../types/stations"

export async function fetchStations(): Promise<Station[]> {
    const result = await fetch(" https://api.irail.be/stations/?format=json&lang=en");

    if (!result.ok) {
        throw new Error(`Failed to fetch stations: ${result.status}`);
    }

    const data: StationApiResponse = await result.json();

    if (!Array.isArray(data.station)) {
        throw new Error("Invalid station data format");
    }

    return data.station;
}