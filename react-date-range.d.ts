declare module 'react-date-range' {
    import * as React from 'react';

    export interface DateRangeProps {
        ranges: any[];
        onChange: (ranges: any) => void;
        moveRangeOnFirstSelection?: boolean;
        rangeColors?: string[];
    }

    export class DateRange extends React.Component<DateRangeProps> { }
}
