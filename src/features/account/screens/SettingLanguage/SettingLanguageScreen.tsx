import { t } from "i18next"

import { AppLanguage } from "@src/models"
import { AppHeader, Box, PageContainer } from "@src/shared/components"
import { Spacing } from "@src/shared/themes"
import { useAppDispatch, useAppSelector } from "@src/shared/hooks"
import { onChangeLanguage } from "@src/redux"
import { LanguageItem } from "./components"
import { LanguageItemState } from "./components/LanguageItem"

const SettingLanguageScreen = () => {

    const languages: LanguageItemState[] = [
        {name: t('language.vietnamese'), lng: AppLanguage.vi},
        {name: t('language.english'), lng: AppLanguage.en}
    ]

    const currentLanguage = useAppSelector(state => state.languageReducer.appLanguage)

    return (
        <PageContainer>
            <AppHeader title={t('header.language')}/>
            <Box style={{
                padding: Spacing.spacingSpace,
            }}>
                {languages.map((item, index) => (
                    <LanguageItem
                        key={item.lng}
                        item={item}
                        checked={item.lng === currentLanguage}
                        onPress={() => useAppDispatch(onChangeLanguage(item.lng))}
                    />
                ))}

            </Box>
        </PageContainer>
    )
}

export default SettingLanguageScreen