import React from "react";

export type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';
export type TypographyWeight = '400' | '500' | '600';

export interface SharedTypographyProps {
    tag?: TypographyTag;
    weight?: TypographyWeight;
    children: React.ReactNode;
    className?: string;
}

