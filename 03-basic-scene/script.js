const scene = new THREE.Scene()

// Instantiate a new basic cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// Sizes
const sizes = {
    width: 800,
    height: 600,
}

// Add the camera to the scene
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.x = -2
camera.position.y = -1
scene.add(camera)

// Add a renderer to the DOM
const canvas = document.querySelector('.webgl')

const renderer = new THREE.WebGLRenderer({
    canvas,
})
renderer.setSize(sizes.width, sizes.height)

// Finally...render the scene
renderer.render(scene, camera)
