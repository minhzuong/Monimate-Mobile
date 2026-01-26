import { useNavigation } from "@react-navigation/native"
import { t } from "i18next"

import { AppButton, PageContainer } from "@src/shared/components"
import { useAppDispatch } from "@src/shared/hooks"
import { onLogout } from "@src/redux"
import { globalLoading } from "@src/shared/components/GlobalLoading"
const AccountOverviewScreen = () => {
    const navigation = useNavigation()
    const handleLogout = () => {
        globalLoading.show()
        setTimeout(() => {
            useAppDispatch(onLogout())
            globalLoading.hide()
        },500)
    } 
    return (
        <PageContainer>
            <AppButton
                title={t("button.logout")}
                onPress={handleLogout}
            />
        </PageContainer>
    )
}

export default AccountOverviewScreen