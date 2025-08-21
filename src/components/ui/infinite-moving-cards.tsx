"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items?: {
        comment: string;
        name: string;
        image: string[];
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards",
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse",
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className,
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]",
                )}
            >
                {items?.map((item, index) => (
                    <div className="max-w-lg " key={index}>
                        <div className="shadow-sm p-1 relative border-[0.04px] border-gray-200 w-full rounded flex overflow-hidden">
                            <img className=" w-72 aspect-square overflow-hidden object-cover" src={item.image[0]} />
                            {/* <img className=" w-24 opacity-[0.5] rotate-45 right-2 aspect-square absolute overflow-hidden object-cover" src="/testimonial1.jpg" />
                        <img className=" w-24 opacity-[0.5] -rotate-45 right-2 bottom-2 aspect-square absolute overflow-hidden object-cover" src="/testimonial1.jpg" /> */}

                            <div className="bg-white p-12">
                                <img src={'/quotes.png'} className="w-8 opacity-[0.3] mb-4" />
                                <p className="font-light text-sm italic font-gray-800">
                                    {item.comment}
                                </p>
                                <p className="mt-4 font-light text-sm text-gray-500">{item.name}</p>
                                {/* <p className="mt-1 font-semibold text-sm text-gray-900">US transport</p> */}
                            </div>
                        </div>
                    </div>
                ))}



            </ul>
        </div>
    );
};
