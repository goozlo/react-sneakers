import React, { FC } from "react"
import { LikedProps } from "./Liked.props"
import LikedIcon from "./Liked.svg"
import LikedActiveIcon from "./Liked-active.svg"

export const Liked: FC<LikedProps> = ({ liked, ...props }) => {

    if (liked) {
        return <LikedActiveIcon {...props}/>
    }

    return <LikedIcon {...props}/>
}

