"use strict";

import {PerspectiveCamera, Scene, WebGLRenderer} from "./build/three.module.js";
import SolarSystem from "./solarSystem.js";
import {VRButton} from "./build/webxr/VRButton.js";

export default class App {

    constructor() {
        this.width = window.innerWidth;
        this.heigth = window.innerHeight;
        this.aspect = this.width/this.heigth;

        this.fov = 75;
        this.near = 0.1;
        this.far = 1000;

        this.camera = new PerspectiveCamera(this.fov, this.aspect, this.near, this.far);
        this.camera.position.z = 50;

        this.scene = new Scene();

        let canvas = document.createElement('canvas');
        let context = canvas.getContext('webgl2');

        this.renderer = new WebGLRenderer({
            canvas: canvas,
            context: context
        });

        this.renderer.setClearColor(0x000000);
        this.renderer.setSize(this.width, this.heigth);

        document.body.appendChild(this.renderer.domElement);

        this.SolarSystem = new SolarSystem(this.scene);


        document.body.append(VRButton.createButton(this.renderer));
        this.renderer.xr.enabled = true;
        this.renderer.setAnimationLoop(this.render.bind(this));
        //this.render();

    }

    render() {
        this.SolarSystem.animate();
        this.renderer.render(this.scene, this.camera);
        //window.requestAnimationFrame(this.render.bind(this));

    }

}

new App();
