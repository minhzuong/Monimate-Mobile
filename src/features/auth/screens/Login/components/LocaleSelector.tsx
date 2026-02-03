import React, { useImperativeHandle, useMemo, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { Image, Modal, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import { AppText } from "@src/shared/components"
import { useAppSelector } from "@src/shared/hooks"
import { LANGUAGES } from "@src/translations/languages"
import { FLAGS } from "@src/assets"
import { _screen_width, sizes } from "@src/shared/utils"
import { Spacing } from "@src/shared/themes"

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
            </TouchableOpacity>
            <LanguagesModal ref={modalRef} />
        </>
    )
}

const LanguagesModal = React.forwardRef((props, ref) => {
    const [visible, setVisible] = useState<boolean>(false);
    useImperativeHandle(ref, () => ({
        show: show,
        hide: hide
    }))

    const show = () => {
        setVisible(true)
    }
    const hide = () => {
        setVisible(false)
    }
    return (
        <Modal
            visible={visible}
            transparent
            style={{ padding: 0, margin: 0 }}
        >
            <View style={styles.main}>
                <View style={{
                    backgroundColor: "#FFF",
                    minHeight: 400,
                    width: _screen_width - Spacing.spacingPage * 2,
                    borderRadius: sizes._12sdp  
                }}>
                    <Text>lll</Text>
                </View>
            </View>
        </Modal>
    )
})

const styles = StyleSheet.create({
    btnSelector: {
        flexDirection: "row",
        alignItems: "center",
        gap: sizes._12sdp
    },
    main: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'flex-end',
        padding: 20,
        alignItems: 'center',
        ...Platform.select({
            android: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            },
        }),
    },
})

export default LocaleSelector
