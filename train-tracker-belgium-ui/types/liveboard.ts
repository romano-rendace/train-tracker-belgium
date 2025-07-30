export interface LiveBoard {
    station: string;
    timestamp: number;
    departures: Departure[];
}

export interface Departure {
    time: number;
    delay: number;
    platform: number;
    departed: boolean;
    canceled: boolean;
    destination: string;
    vehicleName: string;
    vehicleId: string; 
}