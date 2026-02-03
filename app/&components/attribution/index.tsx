import { default as SmallProfilePic } from "next/image"

export interface AttributionProps {
    readingTime?: number
}

const Attribution = ({ readingTime }: AttributionProps) => {
    const hasReadingTime = readingTime && readingTime > 0
    return (
        <div className="attribution">
            <SmallProfilePic
                alt={"A small picture of me, Timothy Malstead"}
                src={"/tim_malstead_profile_pic_small.webp"}
                width={50}
                height={50}
                quality={100}
                priority={true}
            />
            <div>
                <span>Timothy Malstead</span>
                {hasReadingTime && <span>{readingTime} minute read</span>}
            </div>
        </div>
    )
}

export default Attribution
