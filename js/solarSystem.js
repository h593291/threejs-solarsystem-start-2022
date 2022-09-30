"use strict";

import {
    AmbientLight,
    Mesh,
    MeshBasicMaterial,
    MeshPhongMaterial,
    Object3D, PointLight,
    SphereGeometry,
    TextureLoader
} from "./build/three.module.js";

export default class SolarSystem {

    constructor(scene) {
        let radius = 5;
        let widthSegments = 64;
        let heighSegments = 64;

        let sunGeometry = new SphereGeometry(radius, widthSegments, heighSegments);

        let sunTextureUrl = 'assets/texture_sun.jpg';
        let sunTexture = new TextureLoader().load(sunTextureUrl);

        let sunMaterial = new MeshBasicMaterial({
            map: sunTexture
        });

        this.sun = new Mesh(sunGeometry, sunMaterial);
        scene.add(this.sun);

        this.earthOrbitNode = new Object3D();
        this.sun.add(this.earthOrbitNode);

        let earthTextureUrl = 'assets/texture_earth.jpg';
        let earthTexture = new TextureLoader().load(earthTextureUrl);

        let earthMaterial = new MeshPhongMaterial({
            map: earthTexture,
            shininess: 1.0
        });

        radius = 2.5;
        let earthGeometry = new SphereGeometry(radius, widthSegments, heighSegments);

        this.earth = new Mesh(earthGeometry, earthMaterial);

        this.earth.position.x = 15;

        this.earthOrbitNode.add(this.earth);

        this.sunLight = new PointLight(0xffffff, 3);
        this.sun.add(this.sunLight);

        this.ambientLight = new AmbientLight(0xfffffff, 0.05);
        scene.add(this.ambientLight);
    }

    animate() {
        this.sun.rotation.y += 0.005;
        this.earthOrbitNode.rotation.y += 0.01;
        this.earth.rotation.y += 0.02;
    }

}