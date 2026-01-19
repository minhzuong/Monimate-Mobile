import React, { FC } from "react"
import { StyleSheet, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from "react-native"

import { sizes } from "@src/shared/utils"
import AppText from "../AppText"
import { useAppTheme } from "@src/shared/hooks"

interface AppButtonProps extends TouchableOpacityProps {
    title?: string
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    titleStyle?: TextStyle,
    containerStyle?: ViewStyle
    buttonStyle?: ViewStyle
}

const AppButton: FC<AppButtonProps> = ({
    title,
    leftIcon,
    rightIcon,
    containerStyle,
    buttonStyle,
    titleStyle,
    ...rest
}) => {

    const { Colors } = useAppTheme()
    const showTitle = title && title !== 'empty_string';
    return (
        <View style={[containerStyle]}>
            <TouchableOpacity
                {...rest}
                activeOpacity={0.6}
                style={[
                    styles.button,
                    {
                        backgroundColor: Colors.defaultButtonBackground,
                    },
                    buttonStyle
                ]}
            >
                {leftIcon}
                {showTitle && (<AppText
                    text={title}
                    color={Colors.defaultButtonTitle}
                    fontFamily="content_bold"
                    style={[
                        {
                            marginHorizontal: sizes._16sdp,
                        },
                        titleStyle
                    ]}
                />)}
                {rightIcon}
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        height: sizes._60sdp,
        borderRadius: sizes._150sdp,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default AppButton