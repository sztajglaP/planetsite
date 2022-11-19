import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';

window.onload = () => {
    const allCanvas = document.querySelectorAll('canvas');
    const cardPlanet = document.querySelector('.planet-box');

    const planetsImage = ['merkury', 'wenus', 'ziemia', 'mars', 'jowisz', 'saturn', 'uran', 'neptun'];

    let scene = [];
    let camera = [];
    let renderer = [];
    let allPlanet = [];

    planetsImage.forEach((el, index) => {
        scene.push(new THREE.Scene());
        camera.push(new THREE.PerspectiveCamera(75, cardPlanet.offsetWidth / cardPlanet.offsetHeight, 0.1, 1000));
        renderer.push(new THREE.WebGLRenderer({
            antialias: true,
            canvas: allCanvas[index]
        }));
    });

    renderer.forEach(renderer => {
        renderer.setSize(cardPlanet.offsetWidth, cardPlanet.offsetHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
    });

    scene.forEach((scene, index) => {
        const planet = new THREE.Mesh(new THREE.SphereGeometry(6, 50, 50), new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load(`./img/planets-uv-map/${planetsImage[index]}.jpg`)
        }));

        scene.background = new THREE.Color(0xffffff);
        
        scene.add(planet);

        allPlanet.push(planet);

        camera[index].position.z = 10;
    });

    function animate() {
        requestAnimationFrame(animate);
        renderer.forEach((renderer, index) => {
            renderer.render(scene[index], camera[index]);
        });

        allPlanet.forEach(planet => {
            planet.rotation.y += 0.001;
        });
    }

    animate();
}