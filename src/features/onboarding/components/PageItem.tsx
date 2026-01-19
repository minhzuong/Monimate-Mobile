import { Image, ImageSourcePropType, View } from "react-native"

import { AppText, Box } from "@src/shared/components"
import { _screen_width, sizes } from "@src/shared/utils"
import { useAppTheme } from "@src/shared/hooks"

export interface DataType {
    title: string,
    description: string,
    image: ImageSourcePropType
}

interface PageItemProps {
    data: DataType
}

const PageItem = ({ data }: PageItemProps) => {

    const { Colors } = useAppTheme()
    return (
        <View style={{
            width: _screen_width,
            flex: 1,
        }}>
            <Box align="center">
                <Box style={{
                    paddingTop: sizes._70sdp
                }}>
                    <Image
                        source={data.image}
                        style={{
                            width: 320,
                            height: 320
                        }}
                    />

                </Box>
                <Box
                    align="center"
                    style={{ width: _screen_width * 0.8 }}
                >
                    <AppText
                        text={data.title}
                        fontFamily="content_bold"
                        fontSize="24"
                        textAlign="center"
                        color={Colors.defaultTextTitle}
                    />
                    <AppText
                        text={data.description}
                        textAlign="center"
                        fontSize="16"
                        margin={{
                            mt: sizes._10sdp
                        }}
                        color={Colors.defaultTextSubTitle}
                    />
                </Box>

            </Box>
        </View>
    )
}

export default PageItem


