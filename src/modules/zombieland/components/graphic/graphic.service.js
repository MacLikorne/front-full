import { BoxBufferGeometry, EdgesGeometry, LineSegments, LineBasicMaterial, MeshBasicMaterial, Mesh, PerspectiveCamera, Scene } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


export const createCube = (scene, x, y, z, infected) => {
    const geometry = new BoxBufferGeometry(0.75, 0.75, 0.75)
    const edges = new EdgesGeometry(geometry)
    const line = new LineSegments(edges, new LineBasicMaterial({ color: 0x000000 }));
    const material = new MeshBasicMaterial({ color: infected ? 0xff0000 : 0x00c1d5, opacity: 0.7 })
    const cube = new Mesh(geometry, material)
    cube.position.x += x * 2
    cube.position.y += y * 2
    cube.position.z -= z * 2
    line.position.x += x * 2
    line.position.y += y * 2
    line.position.z -= z * 2
    scene.add(line)
    scene.add(cube)
}

export const createMatrix = (pop, scene) => {
    pop.forEach((yArr, x) => {
        yArr.forEach((zArr, y) => {
            zArr.forEach((infected, z) => {
                console.log(Math.floor(zArr.length / 2))
                createCube(scene, x - Math.floor(zArr.length / 2), y - Math.floor(zArr.length / 2), z - Math.floor(zArr.length / 2), infected)
            })
        })
    })
}

export const generateScene = (renderer, container, pop) => {
    const scene = new Scene();
    const camera = new PerspectiveCamera(100, container.current.clientWidth / container.current.clientHeight, 0.1, 1000)
    const controls = new OrbitControls(camera, renderer.domElement)
    renderer.setSize(container.current.clientWidth, container.current.clientHeight)
    renderer.setClearColor(0xffffff, 0)
    container.current.appendChild(renderer.domElement)
    createMatrix(pop, scene)
    camera.position.z = pop.length * 2
    const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);

    }
    animate()
    return scene
}