"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export default function QueryProvider({children}: {children: ReactNode }) {
    const [queryClient] = useState(() => {
        return new QueryClient({
            defaultOptions: {
                queries: {
                    retry: 2,
                    staleTime: 1000 * 60 * 1,
                    gcTime: 1000 * 60 * 5,
                    refetchOnWindowFocus: false,
                    refetchOnReconnect: true,
                    refetchOnMount: false,
                }   
            }
        });
    });

    return (
        <QueryClientProvider client={queryClient}>
            {children
        }</QueryClientProvider>
    )
}