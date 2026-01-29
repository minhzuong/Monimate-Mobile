import React from "react"
import { StyleSheet } from "react-native"

import { AppText, Box } from "@src/shared/components"
import { sizes } from "@src/shared/utils"

interface SectionProps {
    title: string,
    children: React.ReactNode
}
const Section = ({title, children}: SectionProps) => {
    return (
        <Box style={[styles.section]}>
            <AppText 
                text={title}
                fontFamily="content_semibold"
                style={styles.sectionTitle}
            />
            <Box>
                {children}
            </Box>
        </Box>
    )
}

const styles = StyleSheet.create({
    section: {
        // marginTop: sizes._15sdp
    },
    sectionTitle: {
        letterSpacing: 0.5
    } 
})

export default Section