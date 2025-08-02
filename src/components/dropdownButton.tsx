import { DropdownButtonProps } from '@/types/types';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const DropdownButton = ({ title, link, places }: DropdownButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative "
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={link}
        className="md:text-black/80 sm:text-gray-700w-full text-base px-4 py-[22px] hover:text-primary flex items-center"
      >
        {title}
        {places && <ChevronDown size={14} className="ml-1" />}
      </Link>

      {places && (
        <div
          className={`absolute top-full left-0 w-max z-[1000] bg-gray-300 backdrop-blur-xl space-y-2 transition-all duration-500 ease-in-out
            transform ${isOpen ? 'opacity-100 translate-y-0 ' : 'opacity-0 -translate-y-4 pointer-events-none'}
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

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsSubOpen(true)}
      onMouseLeave={() => setIsSubOpen(false)}
    >
      <Link
        href={item.link}
        className="hover:text-gray-700w-full p-4 transition-all ease-in-out hover:bg-primary/80 text-gray-700font-normal text-base flex items-center justify-between"
      >
        {item.title}
        {item.places && <ChevronRight size={14} className="ml-1" />}
      </Link>

      {item.places && (
        <div
          className={`absolute top-0 left-full w-max z-[1000] bg-gray-300/85 backdrop-blur-lg border-l border-black/10 flex flex-col transition-all duration-500 ease-in-out
            transform ${isSubOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}
          `}
        >
          {item.places.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.link}
              className="hover:text-gray-700w-full p-4 transition-all ease-in-out hover:bg-primary/80 text-gray-700font-normal text-base flex items-center justify-between"
            >
              {subItem.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
