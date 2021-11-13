import './style.css'
import * as THREE from 'three'
import { Group } from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const spaceship = new THREE.Group()
scene.add(spaceship)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
)

cube1.position.set(-1, 0, 1)
cube2.position.set(0, -0.5, -0.5)
cube3.position.set(2, -2, -2)
// Add cubes to spaceship
spaceship.add(cube1, cube2, cube3)
spaceship.position.set(0, 1, 0)
spaceship.rotation.set(0, 1, 0)

// Axes helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600,
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(0, 0, 3)

scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
