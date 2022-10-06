"use strict";

import { ShaderMaterial } from "./build/three.module.js";

export default class SimpleColorMaterial extends ShaderMaterial {
    constructor({
        texture = null,
        color = null
                }) {

        const vertexShader = `
            out vec2 vUv;
            
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `

        const fragmentShader = `
            uniform sampler2D textureS;
            uniform vec3 color5;
            
            in vec2 vUv;
            
            void main() {
                vec4 textureColor = texture(texture5, vUv);
                gl_FragColor = vec4(textureColor.xyz * colorS, 1.0);
            }
        `


        super({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            uniforms: {
                textureS: {
                    value: texture
                },
                colorS: {
                    value: color
                }
            }
        });
    }
}