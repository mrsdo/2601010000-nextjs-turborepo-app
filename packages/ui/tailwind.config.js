import sharedConfig from "../tailwind-config";
import { shadcnPreset } from "../tailwind-config/lib/shadcn-preset";
const config = Object.assign(Object.assign({}, sharedConfig), { content: ["./*.{ts,tsx}"], presets: [shadcnPreset] });
export default config;
