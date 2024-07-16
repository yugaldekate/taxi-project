import React from "react";

const FilterButton = ({ children, filter, active }) => (
    <li 
        className={`flex flex-wrap  px-6 py-1 cursor-pointer border 
        ${active ? 'border-green-500 bg-green-100 text-green-500' 
        : 'border-gray-300 text-gray-600 hover:border-green-500'}`} 
        data-filter={filter}
    >
        {children}
    </li>
);  
export default FilterButton
