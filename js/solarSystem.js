"use strict";

import {
    AmbientLight, Color,
    Mesh,
    MeshBasicMaterial,
    MeshPhongMaterial,
    Object3D, PointLight,
    SphereGeometry,
    TextureLoader
} from "./build/three.module.js";
import SimpleColorMaterial from "./simpleColorMaterial.js";

export default class SolarSystem {

    constructor(scene) {
        let radius = 10;
        let widthSegments = 64;
        let heighSegments = 64;

        let sunGeometry = new SphereGeometry(radius, widthSegments, heighSegments);

        let sunTextureUrl = 'assets/texture_sun.jpg';
        let sunTexture = new TextureLoader().load(sunTextureUrl);

        let sunMaterial = new MeshBasicMaterial({
            map: sunTexture
        });

        let sunBasicMaterial = new SimpleColorMaterial({
            texture: sunTexture,
            color: new Color(0X00ff00)
        });

        this.sun = new Mesh(sunGeometry, sunMaterial);
        scene.add(this.sun);

        // Earth

        this.earthOrbitNode = new Object3D();
        this.sun.add(this.earthOrbitNode);

        let earthTextureUrl = 'assets/texture_earth.jpg';
        let earthTexture = new TextureLoader().load(earthTextureUrl);
        let earthSpecUrl = 'assets/earthspec1k.jpg';
        let earthSpec = new TextureLoader().load(earthSpecUrl);
        let earthNormalUrl = 'assets/2k_earth_normal_map.png';
        let earthNormal = new TextureLoader().load(earthNormalUrl);

        let earthMaterial = new MeshPhongMaterial({
            map: earthTexture,
            normalMap: earthNormal,
            specularMap: earthSpec,
            shininess: 1.0
        });

        radius = 2.5;
        let earthGeometry = new SphereGeometry(radius, widthSegments, heighSegments);

        this.earth = new Mesh(earthGeometry, earthMaterial);

        this.earth.position.x = 15;

        this.earthOrbitNode.add(this.earth);

        // Moon

        this.moonOrbitNode = new Object3D();
        this.earth.add(this.moonOrbitNode);

        let moonTextureUrl = 'assets/moonmap.jpg';
        let moonTexture = new TextureLoader().load(moonTextureUrl);

        let moonMaterial = new MeshPhongMaterial({
            map: moonTexture,
            shininess: 1.0
        });

        radius = 0.5;
        let moonGeometry = new SphereGeometry(radius, widthSegments, heighSegments);

        this.moon = new Mesh(moonGeometry, moonMaterial);

        this.moon.position.x = 3;

        this.moonOrbitNode.add(this.moon);


        // Neptune

        this.neptuneOrbitNode = new Object3D();
        this.sun.add(this.neptuneOrbitNode);

        let neptuneTextureUrl = 'assets/texture_neptune.jpeg';
        let neptuneTexture = new TextureLoader().load(neptuneTextureUrl);

        let neptuneMaterial = new MeshPhongMaterial({
            map: neptuneTexture,
            shininess: 1.0
        });

        radius = 5;
        let neptuneGeometry = new SphereGeometry(radius, widthSegments, heighSegments);

        this.neptune = new Mesh(neptuneGeometry, neptuneMaterial);

        this.neptune.position.x = 35;

        this.neptuneOrbitNode.add(this.neptune);

        // Mars

        this.marsOrbitNode = new Object3D();
        this.sun.add(this.marsOrbitNode);

        let marsTextureUrl = 'assets/marsmap.jpeg';
        let marsTexture = new TextureLoader().load(marsTextureUrl);

        let marsMaterial = new MeshPhongMaterial({
            map: marsTexture,
            shininess: 1.0
        });

        radius = 2;
        let marsGeometry = new SphereGeometry(radius, widthSegments, heighSegments);

        this.mars = new Mesh(marsGeometry, marsMaterial);

        this.mars.position.x = 60;

        this.marsOrbitNode.add(this.mars);


        // Mercury

        this.mercuryOrbitNode = new Object3D();
        this.sun.add(this.mercuryOrbitNode);

        let mercuryTextureUrl = 'assets/mercurymap.jpg';
        let mercuryTexture = new TextureLoader().load(mercuryTextureUrl);

        let mercuryMaterial = new MeshPhongMaterial({
            map: mercuryTexture,
            shininess: 1.0
        });

        radius = 0.5;
        let mercuryGeometry = new SphereGeometry(radius, widthSegments, heighSegments);

        this.mercury = new Mesh(mercuryGeometry, mercuryMaterial);

        this.mercury.position.x = 20;

        this.mercuryOrbitNode.add(this.mercury);



        this.sunLight = new PointLight(0xffffff, 3);
        this.sun.add(this.sunLight);

        this.ambientLight = new AmbientLight(0xfffffff, 0.05);
        scene.add(this.ambientLight);
    }

    animate() {
        this.sun.rotation.y += 0.005;

        this.earthOrbitNode.rotation.y += 0.01;
        this.earth.rotation.y += 0.02;

        this.moonOrbitNode.rotation.y += 0.0001;
        this.moon.rotation.y += 0.02;

        this.neptuneOrbitNode.rotation.y += 0.004;
        this.neptune.rotation.y += 0.01

        this.marsOrbitNode.rotation.y += 0.001;
        this.mars.rotation.y += 0.02

        this.mercuryOrbitNode.rotation.y += 0.002;
        this.mercury.rotation.y += 0.02
    }

}