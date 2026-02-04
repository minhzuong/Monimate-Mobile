import React, { useImperativeHandle, useMemo, useRef, useState } from "react"
import { Image, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native"
import { useTranslation } from "react-i18next"
import Modal from "react-native-modal"
import { t } from "i18next"

import { AppText, Box } from "@src/shared/components"
import { useAppDispatch, useAppSelector, useAppTheme } from "@src/shared/hooks"
import { LANGUAGES } from "@src/translations/languages"
import { ArrowDownIcon, FLAGS } from "@src/assets"
import { _screen_width, sizes } from "@src/shared/utils"
import { Spacing } from "@src/shared/themes"
import { AppLanguage } from "@src/models"
import { LanguageItem } from "@src/features/account/screens/SettingLanguage/components"
import { onChangeLanguage } from "@src/redux"

const LocaleSelector = () => {
    const appLanguage = useAppSelector(x => x.languageReducer.appLanguage)
    const { t } = useTranslation()
    const language = useMemo(() => {
        return LANGUAGES.find(item => item.code === appLanguage)
    }, [appLanguage])
    const modalRef = useRef<any>(null)
    return (
        <>
            <TouchableOpacity
                style={styles.btnSelector}
                onPress={() => modalRef.current?.show()}
            >
                <Image
                    source={FLAGS[appLanguage]}
                    style={{
                        width: sizes._22sdp,
                        height: sizes._22sdp,
                    }}
                />
                <AppText text={t(language?.labelKey ?? '')} />
                <ArrowDownIcon
                    width={sizes._14sdp}
                    height={sizes._14sdp}
                />
            </TouchableOpacity>
            <LanguagesModal 
                ref={modalRef} 
                appLanguage={appLanguage}
            />
        </>
    )
}

const LanguagesModal = React.forwardRef(({appLanguage}: {appLanguage: AppLanguage}, ref) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const { Colors } = useAppTheme()

    useImperativeHandle(ref, () => ({
        show: onShow,
        hide: onHide
    }))

    const onShow = () => {
        setIsVisible(true)
    }
    const onHide = () => {
        setIsVisible(false)
    }

    const onChangeAppLanguage  = (code: AppLanguage)  => {
        useAppDispatch(onChangeLanguage(code))
        onHide()
    }
    return (
        <Modal
            isVisible={isVisible}
            statusBarTranslucent={true}
            style={{ padding: 0, margin: 0 }}
            onBackdropPress={onHide}
            onModalShow={() => StatusBar.setHidden(true, 'fade')}
            onModalHide={() => StatusBar.setHidden(false, 'fade')}
        >
            <View style={[styles.containerModal, {
                paddingBottom: Spacing.spacingPage
            }]}>
                <View style={[styles.modal]}>
                    <Box align="center" style={[styles.headerModal,{
                        borderBottomColor: Colors.grayBackground
                    }]}>
                        <AppText 
                            text={t('title.select_language')}
                            fontFamily="content_medium"
                        />
                    </Box>
                    <Box style={styles.contentModal}>
                        {LANGUAGES.map(item => (
                            <LanguageItem 
                                key={item.code}
                                item={item}
                                checked={item.code === appLanguage}
                                onPress={() => onChangeAppLanguage(item.code)}
                            />
                        ))}

                    </Box>
                </View>
            </View>
        </Modal>
    )
})

const styles = StyleSheet.create({
    btnSelector: {
        flexDirection: "row",
        alignItems: "center",
        gap: sizes._8sdp
    },
    containerModal: {
        marginTop: "auto",
        alignItems: "center"
    },
    modal: {
        minHeight: 400,
        width: _screen_width - Spacing.spacingPage * 2,
        backgroundColor: "#FFF",
        borderRadius: sizes._18sdp,
    },
    headerModal: {
        padding: sizes._14sdp,
        borderBottomWidth: 0.5
    },
    contentModal: {
        paddingHorizontal: Spacing.spacingPage
    },
})

export default LocaleSelector
