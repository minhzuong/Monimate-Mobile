import { Text, TouchableOpacity } from "react-native"
import { useAppTheme } from "@hooks"
import { navigate } from "@src/navigation/NavigationServices"
import { APP_NAVIGATOR, APP_SCREEN } from "@src/navigation/ScreenTypes"
import { AppText, PageContainer } from "@src/shared/components"
import { LeftArrowIcon } from "@src/assets"

const HomeScreen = () => {
    return (
        
        <PageContainer padding>
            <AppText translationKey="sign_in_title"></AppText>
        </PageContainer>
    
    )
}

export default HomeScreen