export interface Station {
    id: string;
    "@id": string;
    locationX: number;
    locationY: number;
    standardname: string;
    name: string
}

export interface StationApiResponse {
    station: Station[];
    timeStamp: number;
    version: string;
}