import { Image, ImageSourcePropType, View } from "react-native"


import { AppText, Box } from "@src/shared/components"
import { _screen_width, sizes } from "@src/shared/utils"

export interface DataType {
    title: string,
    description: string,
    image: ImageSourcePropType
}

interface PageItemProps {
    data: DataType
}

const PageItem = ({ data }: PageItemProps) => {
    return (
        <View style={{
            width: _screen_width,
            flex: 1,
        }}>
            <Box align="center">
                <Box style={{
                    paddingVertical: sizes._40sdp
                }}>
                    <Image
                        source={data.image}
                        style={{
                            width: 250,
                            height: 250
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
                    />
                    <AppText
                        text={data.description}
                        textAlign="center"
                        fontSize="14"
                        margin={{
                            mt: sizes._10sdp
                        }}
                    />

                </Box>

            </Box>
        </View>
    )
}

export default PageItem


