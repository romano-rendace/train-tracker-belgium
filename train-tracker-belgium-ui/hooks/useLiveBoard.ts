"use client";

import { useQuery } from "@tanstack/react-query";
import { LiveBoard } from "../types/liveboard";
import { fetchLiveBoard } from "../lib/stations/fetchLiveBoard";

export function useLiveBoard(stationId: string) {
    return useQuery<LiveBoard, Error>({
        queryKey: ["liveboard", stationId],
        queryFn: () => fetchLiveBoard(stationId),
        enabled: !!stationId,
        refetchInterval: 30_000
    })
}