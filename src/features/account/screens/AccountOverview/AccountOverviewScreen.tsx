import { StyleSheet, TouchableOpacity } from "react-native"
import { t } from "i18next"

import { AppText, Box, PageContainer } from "@src/shared/components"
import { useAppDispatch, useAppTheme } from "@src/shared/hooks"
import { onLogout } from "@src/redux"
import { globalLoading } from "@src/shared/components/GlobalLoading"
import { sizes } from "@src/shared/utils"
import { LogoutIcon } from "@src/assets"
import { MenuItem, Section } from "./components"
const AccountOverviewScreen = () => {
    
    const { Colors } = useAppTheme()

    const handleLogout = () => {
        globalLoading.show()
        setTimeout(() => {
            useAppDispatch(onLogout())
            globalLoading.hide()
        },500)
    } 

    return (
        <PageContainer 
            padding
            style={[styles.container]}
        >
            <Section title="USER SETTINGS">
                <MenuItem title="Language"/> 
                <MenuItem title="Profile Settings"/> 
                <MenuItem title="Password & Security"/> 
            </Section>
            <Section title="NOTIFICATIONS">
                <MenuItem title="Notifications"/> 
            </Section>
            <Section title="LEGAL">
                <MenuItem title="Privacy policy"/> 
                <MenuItem title="Terms"/> 
                <MenuItem title="Remove cache"/> 
            </Section>
            <TouchableOpacity
              style={{
                paddingVertical: sizes._16sdp
              }}
            >
                <AppText 
                    text="Delete my account"
                    style={{
                        color: Colors.error
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    paddingVertical: sizes._16sdp,
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}
                onPress={handleLogout}
            >
                <Box 
                    horizontal
                    gap={sizes._10sdp}
                >
                    <LogoutIcon color={Colors.defaultTextColor}/>
                    <AppText text="Logout"/>
                </Box>
                <AppText text="1.0.0"/>
            </TouchableOpacity>
        </PageContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default AccountOverviewScreen