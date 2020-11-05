import { useRef, useEffect, useState, useMemo } from 'react'
import { WebGLRenderer } from 'three'
import { createMatrix, generateScene } from '../../services/graphic.service'



const style = {
    graphic: {
        width: window.innerWidth * 60 / 100,
        height: window.innerHeight * 60 / 100
    }
}
export const Graphic = (props) => {
    const graphic = useRef(null)
    const [scene, setScene] = useState(null)
    const renderer = useMemo(() => new WebGLRenderer({ alpha: true, antialias: true, precision: "lowp" }), [])


    useEffect(() => {
        setScene(generateScene(renderer, graphic, props.pop, props.infectedColor, props.healthyColor))
    }, [])

    useEffect(() => {
        if (scene) {
            scene.remove(...scene.children)
            createMatrix(props.pop, scene, props.infectedColor, props.healthyColor)
        }
    }, [props.pop])


    return (
        <div ref={graphic} style={style.graphic} id={props.id} />
    )
}