import { t } from "i18next"

import { AppLanguage } from "@src/models"
import { AppHeader, Box, PageContainer } from "@src/shared/components"
import { Spacing } from "@src/shared/themes"
import { useAppDispatch, useAppSelector } from "@src/shared/hooks"
import { onChangeLanguage } from "@src/redux"
import { LanguageItem } from "./components"
import { LANGUAGES } from "@src/translations/languages"

const SettingLanguageScreen = () => {

    const appLanguage = useAppSelector(state => state.languageReducer.appLanguage)

    return (
        <PageContainer>
            <AppHeader title={t('header.language')}/>
            <Box style={{
                padding: Spacing.spacingSpace,
            }}>
                {LANGUAGES.map((item, index) => (
                    <LanguageItem
                        key={item.code}
                        item={item}
                        checked={item.code === appLanguage}
                        onPress={() => useAppDispatch(onChangeLanguage(item.code))}
                    />
                ))}

            </Box>
        </PageContainer>
    )
}

export default SettingLanguageScreen