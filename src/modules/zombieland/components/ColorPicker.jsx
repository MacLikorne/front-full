import { useState } from 'react'
import { ChromePicker } from 'react-color';

export const ColorPicker = props => {
    const [color, setColor] = useState(props.color)
    const handleColor = (rgb) => {
        setColor(rgb)
        props.changeColor(`rgb(${rgb.r},${rgb.g},${rgb.b})`)
    }

    return (
        <div style={props.style}>
            <label>{props.label}</label>
            <ChromePicker
                color={color}
                onChangeComplete={(colorPick) => {
                    handleColor(colorPick.rgb)
                }}
                disableAlpha={true}
            />
        </div>

    )
}