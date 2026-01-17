import { useMemo, useRef, useState } from "react"
import { Dimensions, FlatList, Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useTranslation } from "react-i18next"
import Animated, {
    Extrapolation,
    interpolate,
    interpolateColor,
    useAnimatedProps,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
} from 'react-native-reanimated';

import { AppButton, AppText, Box } from "@src/shared/components"
import { useAppDispatch, useAppTheme } from "@src/shared/hooks"
import { _screen_width, Cache, sizes, SPACING_PAGE } from "@src/shared/utils"

import { navigate } from "@src/navigation/NavigationServices";
import { APP_SCREEN } from "@src/navigation/ScreenTypes";
import { onDisableOnboarding } from "@src/redux";

import PageItem, { DataType } from "../components/PageItem"
import { PageDot } from "../components"

const { width } = Dimensions.get("screen")
const OnBoardingScreen = () => {
    const {
        top: paddingTop,
        bottom: paddingBottom
    } = useSafeAreaInsets()
    const listRef = useRef<FlatList>(null)
    const [currentPage, setCurrentPage] = useState<number>(0)
    const { Images } = useAppTheme()
    const { t } = useTranslation()
    const scrollX = useSharedValue(0);

    const data = useMemo(() => [
        {
            title: "Quản lý chi tiêu dễ dàng",
            description: "Theo dõi mọi khoản chi hằng ngày chỉ trong vài thao tác.",
            image: Images.onboarding1
        },
        {
            title: "Hiểu rõ tài chính của bạn",
            description: "Xem báo cáo trực quan để đưa ra quyết định tốt hơn.",
            image: Images.onboarding2
        },
        {
            title: "Tiết kiệm thông minh",
            description: "Đặt mục tiêu và tích lũy tiền cho những kế hoạch quan trọng.",
            image: Images.onboarding3
        },
    ], [])

    const _renderPageItem = ({ item, index }: { item: DataType, index: number }) => {
        return <PageItem data={item} />
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

    const onSkipPress = async () => {
        try {
            useAppDispatch(onDisableOnboarding())
            navigate(APP_SCREEN.LOGIN)
        } catch (error) {
           console.error("Lỗi lưu async storage");
        }
    }

    return (
        <View style={[{ paddingTop, paddingBottom, flex: 1 }]}>
            <Box
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

            </Box>
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
            <Box direction="horizontal" justify="center">
                {data.map((e, index) => (
                    <PageDot key={index} scrollX={scrollX} index={index} />
                ))}

            </Box>


            <AppButton
                title={currentPage == data.length - 1 ? t("button_get_started") : t("button_next")}
                titleStyle={{
                    textTransform: "uppercase"
                }}
                containerStyle={{
                    paddingVertical: sizes._100sdp,
                    paddingHorizontal: SPACING_PAGE
                }}
                onPress={onNextPress}
            />
        </View>
    )
}


export default OnBoardingScreen

