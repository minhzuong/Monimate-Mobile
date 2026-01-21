import { StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View, ViewStyle } from "react-native"
import AppText from "../AppText"
import { sizes } from "@src/shared/utils"
import { APP_FONTS } from "@src/shared/themes"
import { useAppTheme } from "@src/shared/hooks"
import { useState } from "react"
import Box from "../Box"
import { PasswordHideInputIcon, PasswordShowInputIcon } from "@src/assets"

interface AppInputProps extends TextInputProps{
    containerStyle?: ViewStyle
    label?: string
    errMessage?: string
}

const AppInput = ({
    containerStyle, 
    label, 
    errMessage,
    secureTextEntry,
    ...rest
}: AppInputProps) => {
    const [isFocus, setIsFocus] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(true)
    const { Colors } = useAppTheme()
    return (
        <View style={[styles.container, containerStyle]}>
            <Box gap={5}>
                {!!label && (
                    <AppText 
                        text={label}
                        fontFamily="content_medium"
                    />
                )}
                <View 
                    style={[
                        styles.inputContainer,  
                        {
                            borderColor: !!isFocus 
                            ? Colors.inputFocusBorder
                            : Colors.inputOutFocusBorder
                        }
                    ]}
                >
                    <TextInput
                        {...rest}
                        style={[
                            styles.input,
                            {color: Colors.defaultTextColor}
                        ]}
                        placeholderTextColor={Colors.defaultTextSubTitle}
                        onFocus={() => {
                            setIsFocus(true)
                        }}
                        onBlur={() => {
                            setIsFocus(false)
                        }}
                        secureTextEntry={!!secureTextEntry ? showPassword : false}
                    />
                    {!!secureTextEntry && (
                        <TouchableOpacity
                            style={{
                                marginLeft: sizes._5sdp
                            }}
                            onPress={() => {
                                setShowPassword(!showPassword)
                            }}
                        >
                            {showPassword  ?(
                                <PasswordHideInputIcon/>
                            ) : (
                                <PasswordShowInputIcon/> 
                            )}
                        </TouchableOpacity>
                    )}
                </View>

            </Box>
            {!!errMessage && (
                
                    <AppText
                        text={errMessage}
                        color={Colors.error}
                        fontSize="12"
                    />
               
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    inputContainer: {
        height: sizes._56sdp,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: sizes._100sdp,
        borderWidth: 1,
        paddingHorizontal: sizes._20sdp,
        overflow: "hidden",
    },
    input: {
        height: "100%",
        flex: 1,
        fontFamily: APP_FONTS.content_regular,
    },
    errMessage: {
        marginTop: sizes._5sdp
    }
})

export default AppInput