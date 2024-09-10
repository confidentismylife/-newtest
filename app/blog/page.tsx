"use client";
import React, { useState } from "react";
import { Tab, Tabs } from "@nextui-org/react";
import { Responsive } from "react-grid-layout";
import { layouts, selectedCard } from "../config/layout";
import { MiniModel } from "../components/mini";
import useWindowWidth from "../hook/useWindowWidth";
import { cn } from "../lib/utils";

const Blog = () => {
    const width = useWindowWidth();
    const [tabSelected, setTabSelected] = useState("all");

    if (!width) {
        return null;
    }

    const backgroundStyle = {
        backgroundColor: '#fef3c7', // Tailwind's bg-orange-100 equivalent
        minHeight: '100vh',
        minWidth: '100vw',
    };

    return (
        <div style={backgroundStyle} className="dark:bg-gray-800 flex justify-center flex-col items-center">
            <div className="flex flex-col items-center pt-20">
                <header className="mb-2 md:mb-6 rounded-full">
                    <Tabs
                        aria-label="Tabs"
                        className="rounded-full"
                        classNames={{
                            cursor: "shadow-none",
                            tabList: "bg-[#ece7e7] dark:bg-darkBg border-2 border-transparent dark:border-knight rounded-full",
                        }}
                        motionProps={{
                            initial: { scale: 0.8 },
                            animate: { scale: 1 },
                            exit: { scale: 0.8 },
                            transition: { type: "spring", stiffness: 300, damping: 15 },
                        }}
                        radius={"full"}
                        onSelectionChange={(selected) => {
                            setTabSelected(selected as string);
                            console.log(`Selected tab: ${selected}`);
                        }}
                    >
                        <Tab title="All" key="all"/>
                        <Tab title="Study" key="study"/>
                        <Tab title="Live" key="live"/>
                        <Tab title="Blog" key="blog"/>
                    </Tabs>
                </header>
            </div>

            <Responsive
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                className="layout w-full h-full "
                cols={{ lg: 4, md: 4, sm: 2, xs: 2, xxs: 2 }}
                isDraggable={width > 480}
                isResizable={false}
                layouts={layouts[tabSelected]}
                margin={[15, 15]}
                width={width}
            >
                <div
                    key="avatar"
                    className={cn(
                        "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center z-[1] overflow-hidden",
                        "w-full h-full",
                        selectedCard[tabSelected]["avatar"] ? "opacity-100" : "opacity-50",
                    )}
                >
                    <div className="w-32 h-32 bg-amber-500">123</div>
                </div>
                <div
                    key="miniModel"
                    className={cn(
                        "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center z-[1] overflow-hidden",
                        "w-full h-full",
                        selectedCard[tabSelected]["miniModel"] ? "opacity-100" : "opacity-50",
                    )}
                >
                    <MiniModel />
                </div>
                <div
                    key="blog"
                    className={cn(
                        "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center z-[1] overflow-hidden",
                        "w-full h-full",
                        selectedCard[tabSelected]["blog"] ? "opacity-100" : "opacity-50",
                    )}
                >
                    <div className="w-32 h-32 bg-amber-500">123</div>
                </div>
                <div
                    key="show"
                    className={cn(
                        "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center z-[1] overflow-hidden",
                        "w-full h-full",
                        selectedCard[tabSelected]["show"] ? "opacity-100" : "opacity-50",
                    )}
                >
                    <div className="w-32 h-32 bg-amber-500">123</div>
                </div>
            </Responsive>
        </div>
    );
};

export default Blog;
