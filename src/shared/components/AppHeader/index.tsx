import { StyleSheet, TouchableOpacity } from "react-native"
import AppText from "../AppText"
import Box from "../Box"
import { sizes } from "@src/shared/utils"
import { useAppTheme } from "@src/shared/hooks"
import { LeftArrowIcon } from "@src/assets"
import { goBack } from "@src/navigation/NavigationServices"
import { ReactNode } from "react"

interface AppHeaderProps {
    title: string,
    showBack?: boolean
    rightContent?: ReactNode
}

const AppHeader = ({ title, showBack = true, rightContent }: AppHeaderProps) => {

    const { Colors } = useAppTheme()

    return (
        <Box
            horizontal
            justify="space-between"
            align="center"
            style={[
                styles.container,
                {
                    borderBottomColor: Colors.headerBorderBackground,
                }
            ]}
        >
            <Box>
                {
                    showBack && (
                        <TouchableOpacity
                            hitSlop={{
                                top: sizes._24sdp,
                                bottom: sizes._24sdp,
                                left: sizes._24sdp,
                                right: sizes._24sdp,
                            }}
                            onPress={() => goBack()}
                        >
                            <LeftArrowIcon color={Colors.defaultIconColor} />
                        </TouchableOpacity>

                    )
                }
            </Box>

            <AppText
                text={title}
                fontSize="20"
                fontFamily="content_medium"
                textAlign="center"
            />
            <Box>
                {!!rightContent && rightContent}
            </Box>
        </Box>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: sizes._16sdp,
        paddingVertical: sizes._12sdp,
        borderBottomWidth: 0.5,
    }
})

export default AppHeader