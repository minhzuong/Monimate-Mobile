import { Image, StyleSheet, TouchableOpacity } from "react-native"
import { t } from "i18next" 

import { FLAGS, RadioCheckedIcon, RadioUnchekedIcon } from "@src/assets"
import { AppLanguage } from "@src/models"
import { AppText, Box } from "@src/shared/components"
import { useAppTheme } from "@src/shared/hooks"
import { sizes } from "@src/shared/utils"

export interface LanguageItemState {
    code: AppLanguage,
    labelKey: string,
    locale: string,
    flag: string
}

interface LanguageItemProps {
    item: LanguageItemState,
    checked: boolean,
    onPress: () => any
} 


const LanguageItem = ({ item, checked, onPress }: LanguageItemProps) => {

    const { Colors } = useAppTheme()
  
    
    return (
        <TouchableOpacity 
            style={[styles.container, {
                borderBottomColor: Colors.grayBackground
            }]}
            onPress={onPress}
        >
            <Box horizontal align="center" gap={sizes._12sdp} >
                <Image
                    source={FLAGS[item.code]}
                    style={{
                        width: sizes._22sdp,
                        height: sizes._22sdp
                    }}
                />
                <AppText text={t(item.labelKey)} />

            </Box>
            {checked ? (
                <RadioCheckedIcon color={Colors.primary} />
            ) : (
                <RadioUnchekedIcon color={Colors.grayBackground} />
            )}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: sizes._16sdp,
        borderBottomWidth: 0.5,
    }
})

export default LanguageItem