export const FONT_SIZES = {
    sm: "0.9rem",
    md: "1.1rem",
    lg: "1.3rem",
    xl: "2rem",
} as const;

export const FONT_WEIGHTS = {
    light: "300",
    normal: "400",
    medium: "500",
    bold: "700",
} as const;

// This helper line creates a type: "sm" | "md" | "lg" | "xl"
export type FontSizeLevel = keyof typeof FONT_SIZES;
export type FontWeightLevel = keyof typeof FONT_WEIGHTS;