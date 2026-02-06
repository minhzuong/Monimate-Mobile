import { TouchableOpacity } from "react-native"

import { ArrowLeftIcon } from "@src/assets"
import { goBack } from "@src/navigation/NavigationServices"
import { ACTIVE_OPACITY_TOUCH, sizes } from "@src/shared/utils"

const BackButton = () => {
    return (
       <TouchableOpacity
        hitSlop={{
            top: sizes._16sdp,
            right: sizes._16sdp,
            left: sizes._16sdp,
            bottom: sizes._16sdp,
       }}
        onPress={goBack}
        activeOpacity={ACTIVE_OPACITY_TOUCH}
       >
            <ArrowLeftIcon/>
       </TouchableOpacity>
    )
}

export default BackButton