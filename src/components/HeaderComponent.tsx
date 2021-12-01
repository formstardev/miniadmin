import React from 'react';

export const HeaderComponent: React.FC<{ title?: string | React.ReactNode, childrenEnd?: React.ReactNode }> = ({ title, childrenEnd, children }) => {
    return (
        <div className="w-full flex flex-1 justify-between items-center mb-3">
            { title && <h2 className="text-lg text-gray-700">{title}</h2>}

            <div className="flex-1">{children}</div>
            {childrenEnd}
        </div>
    )
};
