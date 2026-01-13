import { AppThemeEntity, AppThemeState } from "@src/models/redux";
import { getAppTheme } from "../themes";
import { useAppSelector } from "./useAppSelector";

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
    const primaryTheme = isDark ? theme.dark : theme.light
    const secondaryTheme = isDark ? theme.light : theme.light;
    const mergedColors: {[key in ColorKey]: string} = {
        ...secondaryTheme.Colors,
        ...primaryTheme.Colors,
    } as any
    return {
        ...primaryTheme,
        Colors: mergedColors,
        IsDark: isDark
    }
}