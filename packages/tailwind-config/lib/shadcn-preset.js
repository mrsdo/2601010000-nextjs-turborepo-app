import typographyPlugin from "@tailwindcss/typography";
// @ts-ignore
import animatePlugin from "tailwindcss-animate";
import { shadcnPlugin } from "./shadcn-plugin";
export const shadcnPreset = {
    content: [],
    darkMode: ["class"],
    plugins: [animatePlugin, typographyPlugin, shadcnPlugin],
};
