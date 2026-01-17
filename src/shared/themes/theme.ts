import { DarkImage, LightImage } from "@src/assets";
import { DarkColors, LightColor } from "./color";

export const getAppTheme = () => ({
    light: {
        Colors: LightColor,
        Images: LightImage
    }, 
    dark: {
        Colors: DarkColors,
        Images: DarkImage
    }
})