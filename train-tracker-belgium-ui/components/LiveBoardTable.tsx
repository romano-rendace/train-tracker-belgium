"use client";

import { Departure, LiveBoard } from "../types/liveboard";

type LiveBoardTableProps = {
    liveBoard: LiveBoard;
}

function formatTime(unixTime: number) : string {
    const date = new Date(unixTime * 1000);
    return date.toLocaleTimeString("eng-GB", { hour: "2-digit", minute: "2-digit"})
}

function formatDelay(delayedSeconds: number) : string {
    if(!delayedSeconds || delayedSeconds === 0) return "";
    const minutes = Math.round(delayedSeconds / 60);
    return minutes > 0 ? `+${minutes} min` : "";
}

function formatStatus(departure: Departure) : string {
    if (departure.canceled) return "Canceled";
    if (departure.departed) return "Departed";
    return "Scheduled";
}

export default function LiveBoardTable({liveBoard}: LiveBoardTableProps) {
    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">
                Departures from {liveBoard.station}
            </h2>

            <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 text-left">Time</th>
                        <th className="px-4 py-2 text-left">Delay</th>
                        <th className="px-4 py-2 text-left">Platform</th>
                        <th className="px-4 py-2 text-left">Destination</th>
                        <th className="px-4 py-2 text-left">Train</th>
                        <th className="px-4 py-2 text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {liveBoard.departures.map((dep, idx) => (
                        <tr key={idx} className="border-t">
                            <td className="px-4 py-2">{formatTime(dep.time)}</td>
                            <td className="px-4 py-2">{formatDelay(dep.delay)}</td>
                            <td className="px-4 py-2">{dep.platform}</td>
                            <td className="px-4 py-2">{dep.destination}</td>
                            <td className="px-4 py-2">{dep.vehicleName}</td>
                            <td className="px-4 py-2">{formatStatus(dep)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}