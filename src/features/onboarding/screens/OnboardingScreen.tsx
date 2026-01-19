import { useMemo, useRef, useState } from "react"
import { Dimensions, FlatList, TouchableOpacity, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useTranslation } from "react-i18next"
import Animated, {
    useAnimatedScrollHandler,
    useSharedValue,
} from 'react-native-reanimated';

import { AppButton, AppText, Box } from "@src/shared/components"
import { useAppDispatch, useAppTheme } from "@src/shared/hooks"
import { _screen_width, sizes, SPACING_PAGE } from "@src/shared/utils"

import { navigate } from "@src/navigation/NavigationServices";
import { APP_SCREEN } from "@src/navigation/ScreenTypes";
import { onDisableOnboarding } from "@src/redux";

import PageItem, { DataType } from "../components/PageItem"
import { PageDot } from "../components"

const { width } = Dimensions.get("screen")
const OnboardingScreen = () => {
    const {
        top: paddingTop,
        bottom: paddingBottom
    } = useSafeAreaInsets()
    const listRef = useRef<FlatList>(null)
    const [currentPage, setCurrentPage] = useState<number>(0)
    const { Colors,Images } = useAppTheme()
    const { t } = useTranslation()
    const scrollX = useSharedValue(0);

    const data = useMemo(() => [
        {
            title: "Be easier to manage\nyour own money",
            description: "Just using your phone, you can manage all your cashflow more easy and detail",
            image: Images.onboarding1
        },
        {
            title: "Be more flexible\nand secure",
            description: "Use this platform in all your device, don't worry about anything, we protect you",
            image: Images.onboarding2
        },
        {
            title: "Be more mindful spending.\nSo, let's get started!",
            description: "Be mindful spending, and you will be closer to financial freedom",
            image: Images.onboarding3
        },
    ], [])

    const _renderPageItem = ({ item, index }: { item: DataType, index: number }) => {
        return <PageItem data={item} />
    }

    const onBackPress = () => {
        if (currentPage == 0 ) {
            return 
        } else {
             listRef.current?.scrollToIndex({
                index: currentPage - 1,
                animated: true,
            })
        }
    }

    const onNextPress = () => {

        if (currentPage < data.length - 1) {
            listRef.current?.scrollToIndex({
                index: currentPage + 1,
                animated: true,
            })
        } else {
            useAppDispatch(onDisableOnboarding());
            navigate(APP_SCREEN.LOGIN);
        }
    }

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: ({ contentOffset: { x } }) => {
            scrollX.value = x;
        },
    });


    return (
        <View style={[{
            paddingTop,
            paddingBottom,
            flex: 1,
        }]}>
            {/* <Box
                align="flex-end"
                style={{
                    padding: SPACING_PAGE,
                    minHeight: sizes._55sdp,
                }}
            >
                {currentPage < data.length -  1 && (
                 <TouchableOpacity
                    onPress={onSkipPress}
                 >
                    <AppText
                        text="Skip"
                        fontFamily="content_semibold"
                    />
                </TouchableOpacity> 
                )}

            </Box> */}
            <View>
                <Animated.FlatList
                    ref={listRef}
                    data={data}
                    horizontal
                    pagingEnabled
                    renderItem={_renderPageItem}
                    onScroll={scrollHandler}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={e => {
                        const currentIndex = Math.round(
                            e.nativeEvent.contentOffset.x / width
                        )
                        setCurrentPage(currentIndex)
                    }}
                    keyExtractor={(_, index) => `${index}`}
                />
            </View>
            <Box
                direction="horizontal"
                justify="center"
                style={{
                    marginTop: sizes._40sdp
                }}
            >
                {data.map((e, index) => (
                    <PageDot key={index} scrollX={scrollX} index={index} />
                ))}

            </Box>

            <Box 
                cover
                style={{
                    paddingHorizontal: SPACING_PAGE,
                    paddingVertical: sizes._45sdp,
                    justifyContent: "flex-end",
                }}
                
            >
                <Box 
                    horizontal
                >
                    <Box
                        cover
                        align="center"
                        justify="center"
                    >
                        <AppText
                            text="Back"
                            fontFamily="content_semibold"
                            color={currentPage !== 0 ? Colors.defaultTextTitle : Colors.defaultTextSubTitle}
                            onPress={onBackPress}
                        />
                    </Box>
                        
                
                    <AppButton
                        title={currentPage == data.length - 1 ? t("button_get_started") : t("button_next")}
                        titleStyle={{
                            textTransform: "uppercase"
                        }}
                        containerStyle={{
                            flex: 1
                        }}
                        
                        onPress={onNextPress}
                    />
                </Box>

            </Box>
        </View>
    )
}


export default OnboardingScreen

