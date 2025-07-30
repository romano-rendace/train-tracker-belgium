import { Station } from "./station";

export interface StationApiResponse {
    station: Station[];
    timeStamp: number;
    version: string;
}