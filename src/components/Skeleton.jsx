import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={300}
        height={60}
        viewBox="0 0 300 60"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="48" y="8" rx="3" ry="3" width="144" height="8" />
        <rect x="48" y="26" rx="3" ry="3" width="84" height="6" />
        <circle cx="20" cy="20" r="15" />
    </ContentLoader>
)

export default Skeleton