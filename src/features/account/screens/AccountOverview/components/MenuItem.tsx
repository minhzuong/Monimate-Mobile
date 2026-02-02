import { ReactNode } from "react"
import { StyleSheet, TouchableOpacity } from "react-native"

import { ArrowRightIcon } from "@src/assets"
import { AppText, Box } from "@src/shared/components"
import { useAppTheme } from "@src/shared/hooks"
import { sizes } from "@src/shared/utils"

interface MenuItemProps {
    title: string,
    rightContent?: ReactNode,
    onPress?: () => void,
}

const MenuItem = ({title, rightContent, onPress}: MenuItemProps) => {
    const { Colors } = useAppTheme()
    return (
        <TouchableOpacity 
            style={[styles.container, {
                borderBottomColor: Colors.grayBackground
            }]}
            onPress={onPress}
        >
            <AppText text={title}/>
            <Box horizontal gap={sizes._8sdp} align="center">
                {!!rightContent && rightContent}
                <ArrowRightIcon size={sizes._16sdp} color={Colors.defaultTextColor}/>
            </Box>
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