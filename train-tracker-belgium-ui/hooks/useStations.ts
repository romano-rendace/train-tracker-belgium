"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchStations } from "../lib/stations/fetchStations";
import { Station } from "../types/station";

export function useStations() {
    return useQuery<Station[], Error>({
        queryKey:["stations"],
        queryFn: fetchStations,
        staleTime: 1000 * 60 * 60,
    });
}