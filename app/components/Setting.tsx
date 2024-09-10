// app/components/ThemeSwitcher.tsx
"use client";

import { Button } from "@nextui-org/react";
import { UserCog } from 'lucide-react';
import { useEffect, useState } from "react";

export function Setting() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div>
            <Button isIconOnly color="primary" variant="faded" onClick={() => {
                console.log("clicked");
            }}>
            <UserCog />
            </Button>
        </div>
    );
}
