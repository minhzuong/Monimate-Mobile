import { StyleSheet, TouchableOpacity } from "react-native"

import { RadioCheckedIcon, RadioUnchekedIcon } from "@src/assets"
import { AppLanguage } from "@src/models"
import { AppText } from "@src/shared/components"
import { useAppTheme } from "@src/shared/hooks"
import { sizes } from "@src/shared/utils"

export interface LanguageItemState {
    name: string,
    lng: AppLanguage
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
            <AppText text={item.name} />
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