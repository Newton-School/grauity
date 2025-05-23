import React from 'react';

import Tooltip from '../Tooltip';

export function withTooltip<T>(
    item: T,
    render: (item: T) => React.ReactNode,
    getContent: (item: T) => string = (i) =>
        (i as unknown as { name?: string })?.name || ''
) {
    return (
        <Tooltip content={getContent(item)}>
            <div className="truncate text-xs font-medium cursor-pointer">
                {render(item)}
            </div>
        </Tooltip>
    );
}
