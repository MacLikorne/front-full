import { render } from '@testing-library/react'
import React, { useRef, useEffect, useState } from 'react'
import { WebGLRenderer } from 'three'
import { createMatrix, generateScene } from './graphic.service'



const style = {
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    graphic: {
        margin: '1%',
        width: window.innerWidth * 60 / 100,
        height: window.innerHeight * 75 / 100
    }
}
export const Graphic = (props) => {
    const graphic = useRef(null)
    const [scene, setScene] = useState(null)
    const renderer = new WebGLRenderer({ alpha: true, antialias: true })


    useEffect(() => {
        setScene(generateScene(renderer, graphic, props.pop, props.infectedColor, props.healthyColor))
    }, [])

    useEffect(() => {
        if (scene) {
            console.log(renderer)
            scene.remove(...scene.children)
            createMatrix(props.pop, scene, props.infectedColor, props.healthyColor)
        }
    }, [props.pop])


    return (
        <div style={style.container}>
            <div ref={graphic} style={style.graphic} />
        </div>
    )
}