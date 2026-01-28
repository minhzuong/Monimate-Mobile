import { StyleSheet, TouchableOpacity } from "react-native"

import { ArrowRightIcon } from "@src/assets"
import { AppText } from "@src/shared/components"
import { useAppTheme } from "@src/shared/hooks"
import { sizes } from "@src/shared/utils"

interface MenuItemProps {
    title: string
}

const MenuItem = ({title}: MenuItemProps) => {
    const { Colors } = useAppTheme()
    return (
        <TouchableOpacity 
            style={[styles.container, {
                borderBottomColor: Colors.grayBackground
            }]}
        >
            <AppText text={title}/>
            <ArrowRightIcon size={sizes._15sdp} color={Colors.defaultTextColor}/>
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

export default MenuItem