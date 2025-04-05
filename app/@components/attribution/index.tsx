import { default as SmallProfilePic } from "next/image"
import ReadingTime from "./ReadingTime"

const Attribution = () => (
    <div className="attribution">
        <SmallProfilePic
            alt={"A small picture of me, Timothy Malstead"}
            src={"/tim_malstead_profile_pic_small.webp"}
            width={50}
            height={50}
            quality={100}
        />
        <div>
            <span>Timothy Malstead</span>
            <ReadingTime />
        </div>
    </div>
)

export default Attribution
