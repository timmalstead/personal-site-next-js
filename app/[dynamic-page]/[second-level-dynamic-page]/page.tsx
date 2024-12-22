import { generateDynamicMetadata, DynamicPageComponent } from "_components"

export const generateMetadata = async () => await generateDynamicMetadata()
const DynamicPage = () => <DynamicPageComponent />

export default DynamicPage
