import { StyleSheet, TouchableOpacity, View } from "react-native"
import { t } from "i18next"

import { AppHeader, AppText, Box, PageContainer } from "@src/shared/components"
import { useAppDispatch, useAppTheme } from "@src/shared/hooks"
import { onLogout } from "@src/redux"
import { globalLoading } from "@src/shared/components/GlobalLoading"
import { sizes } from "@src/shared/utils"
import { LogoutIcon } from "@src/assets"
import { MenuItem, Section } from "./components"
import { SPACING_PAGE } from "@src/shared/themes"
const AccountOverviewScreen = () => {

    const { Colors } = useAppTheme()

    const handleLogout = () => {
        globalLoading.show()
        setTimeout(() => {
            useAppDispatch(onLogout())
            globalLoading.hide()
        }, 500)
    }

    return (
        <PageContainer
            style={[styles.container]}
        >
            <AppHeader 
                title={t('header.account')}
                showBack={false}
            />
            <Box style={{
                padding: SPACING_PAGE,
            }}>
                <Box gap={sizes._15sdp}>
                    <Section title={t('title.user_settings')}>
                        <MenuItem title={t('item.language')} />
                        <MenuItem title={t('item.profile_settings')} />
                        <MenuItem title={t('item.password_securiry')} />
                    </Section>
                    <Section title={t('title.notifications')}>
                        <MenuItem title={t('item.notification')} />
                    </Section>
                    <Section title={t('title.legal')}>
                        <MenuItem title={t('item.privacy_policy')} />
                        <MenuItem title={t('item.terms')} />
                        <MenuItem title={t('item.remove_cache')} />
                    </Section>

                </Box>
                <TouchableOpacity
                    style={{
                        paddingVertical: sizes._16sdp
                    }}
                >
                    <AppText
                        text={t('button.delete_account')}
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
                        <LogoutIcon color={Colors.defaultTextColor} />
                        <AppText text={t('button.logout')} />
                    </Box>
                    <AppText text="1.0.0" />
                </TouchableOpacity>
            </Box>
        </PageContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default AccountOverviewScreen