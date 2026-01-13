import { useTranslation } from "react-i18next"
import { AppText, PageContainer } from "@src/shared/components"

const HomeScreen = () => {
    const { t } = useTranslation()
    return (
        
        <PageContainer padding>
            <AppText 
                text={t("sign_in_title")}
            />
        </PageContainer>
    
    )
}

export default HomeScreen