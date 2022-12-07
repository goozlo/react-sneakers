import React, { FC } from "react"
import { CheckboxProps } from "./Checkbox.props"
import CheckboxIcon from "./Checkbox.svg"
import CheckboxActiveIcon from "./Checkbox-active.svg"

export const Checkbox: FC<CheckboxProps> = ({ checked, ...props }) => {

    if (checked) {
        return <CheckboxActiveIcon {...props}/>
    }

    return <CheckboxIcon {...props}/>
}

