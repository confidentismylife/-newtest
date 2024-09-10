"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Analytics />
            <NextUIProvider>
                <NextThemesProvider attribute="class" defaultTheme="dark">
                    {children}
                </NextThemesProvider>
            </NextUIProvider>
        </>
    );
}
