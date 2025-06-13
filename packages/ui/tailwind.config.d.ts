declare const config: {
    content: string[];
    presets: {
        content: never[];
        darkMode: ["class"];
        plugins: ({
            handler: import("tailwindcss/types/config").PluginCreator;
            config?: Partial<import("tailwindcss/types/config").Config> | undefined;
        } | typeof import("@tailwindcss/typography") | {
            handler: () => void;
        })[];
    }[];
};
export default config;
//# sourceMappingURL=tailwind.config.d.ts.map