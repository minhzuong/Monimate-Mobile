import { useAppTheme } from "@src/shared/hooks"
import { ActivityIndicator } from "react-native"

interface AppLoadingIndicatorProps {
    animating: boolean
}
const AppLoadingIndicator = ({ animating }: AppLoadingIndicatorProps) => {
    const { Colors } = useAppTheme()
    return (
        <ActivityIndicator
            animating={animating}
            size={'large'}
            color={Colors.activityIndicatorColor}
        />
    )
}

export default AppLoadingIndicator