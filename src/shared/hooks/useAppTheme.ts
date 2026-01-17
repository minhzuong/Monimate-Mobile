import { AppThemeEntity } from "@src/models/redux";
import { getAppTheme, Spacing } from "../themes";
import { useAppSelector } from "./useAppSelector";
import { ImageSourcePropType } from "react-native";

export const useAppTheme = () => {
    const appTheme = useAppSelector(x => x.appThemeReducer.appTheme) //Thay thế bằng redux nếu làm chức năng này
    const isDark = appTheme === AppThemeEntity.dark;
    return mergeAppTheme(isDark, getAppTheme())
}

const mergeAppTheme = (
    isDark: boolean,
    theme: ReturnType<typeof getAppTheme>
) => {
    type ColorKey = 
    | keyof typeof theme.light.Colors
    | keyof typeof theme.dark.Colors

    type ImageKey = 
    | keyof typeof theme.light.Images
    | keyof typeof theme.dark.Images

    const primaryTheme = isDark ? theme.dark : theme.light
    const secondaryTheme = isDark ? theme.light : theme.light;

    const mergedColors: {[key in ColorKey]: string} = {
        ...secondaryTheme.Colors,
        ...primaryTheme.Colors,
    } as any

     const mergedImages: {[key in ImageKey]: ImageSourcePropType} = {
        ...secondaryTheme.Images,
        ...primaryTheme.Images,
    } as any

    
    return {
        ...primaryTheme,
        Colors: mergedColors,
        Images: mergedImages,
        IsDark: isDark,
        Spacing: Spacing,
    }
}