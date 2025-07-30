import { Station } from "./station";

export interface LiveBoardApiResponse {
    version: string;
    timestamp: number;
    station: string;
    stationinfo: Station
    departures: Departures
}

interface Departures {
    number: number;
    departure: Departure[]
}

interface Departure {
    id: number;
    delay: number;
    station: string;
    stationinfo: Station;
    time: number;
    vehicle: string;
    vehicleinfo: VehicleInfo;
    platform: number;
    platforminfo: PlatformInfo;
    canceled: number;
    left: number;
    departureConnection: string;
    occupancy: Occupancy;
}

interface VehicleInfo {
    name: string;
    shortname: string;
    "@id": string;
}

interface PlatformInfo {
    name: string;
    normal: string;
}

interface Occupancy {
    "@id": string;
    name: string; 
}