import { DropdownButtonProps } from '@/types/types';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const MobileDropdownButton = ({ title, link, places }: DropdownButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);
  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent bubbling to parent
    setIsOpen(!isOpen);
  };
    return (
        <div
            className="relative min-w-full"
            onClick={handleToggle}
        >
            <Link
                href={link}
                className=" text-black/70  min-w-full px-4 py-2 flex justify-between hover:text-primary  items-center"
            >
                {title}
                {places && <ChevronDown size={14} className="ml-1" />}
            </Link>

            {places && (
                <div
                    className={`  z-50 h-min min-w-full bg-gray-200 backdrop-blur-xl space-y-2 transition-all duration-500 ease-in-out
            ${isOpen ? 'opacity-100 block translate-y-0 ' : 'opacity-0 hidden pointer-events-none'}
            `}
                >
                    {places.map((place, index) => (
                        <DropdownItem key={index} item={place} />
                    ))}
                </div>
            )}
        </div>
    );
};

const DropdownItem = ({ item }: { item: DropdownButtonProps }) => {
    const [isSubOpen, setIsSubOpen] = useState(false);
  const handleSubToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // Stop bubbling to top menu
    if (item.places) setIsSubOpen(!isSubOpen);
  };
    return (
        <div className="relative min-w-full">
            <div
                className="hover:text-primary min-w-full text-black/80 p-4 transition-all ease-in-out hover:bg-primary/80 font-normal text-sm flex items-center justify-between cursor-pointer"
                onClick={handleSubToggle}
            >
                <span>{item.title}</span>
                {item.places && <ChevronDown size={14} className="ml-1" />}
            </div>

            {!item.places && (
                <Link href={item.link} className="absolute inset-0 z-10" />
            )}

            {item.places && (
                <div
                    className={`min-w-full z-50 backdrop-blur-lg border-l bg-gray-300  text-black/70 pl-3 flex flex-col transition-all duration-500 ease-in-out
            ${isSubOpen ? 'opacity-100 block' : 'opacity-0 hidden pointer-events-none'}
        `}
                >
                    {item.places.map((subItem, index) => (
                        <Link
                            key={index}
                            href={subItem.link}
                            className="hover:text-white w-full p-4 transition-all ease-in-out hover:bg-primary/80 font-normal text-sm flex items-center justify-between"
                        >
                            {subItem.title}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};


export default MobileDropdownButton;
