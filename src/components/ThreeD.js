import React from 'react';
import {connect} from 'react-redux';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

class ThreeD extends React.Component {
    constructor() {
        super();
        this.state = {
            scene: '',
        };
              
    }
        
    componentDidMount () {
        let camera, controls, scene, renderer;
        
        init();
                //render(); // remove when using next line for animation loop (requestAnimationFrame)
                
        animate();

        function init() { 
            scene = new THREE.Scene();
            scene.background = new THREE.Color( 0xcccccc );
            scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );
            renderer = new THREE.WebGLRenderer( { antialias: true } );
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight );
            
            document.body.appendChild( renderer.domElement );
            camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
            camera.position.set( 400, 200, 0 );
            // controls
            //controls = new THREE.OrbitControls( camera, renderer.domElement );
            controls = new OrbitControls( camera, renderer.domElement );
            //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
            controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
            controls.dampingFactor = 0.05;
            controls.screenSpacePanning = false;
            controls.minDistance = 100;
            controls.maxDistance = 500;
            controls.maxPolarAngle = Math.PI / 2;
        }
        //this.mount.appendChild( renderer.domElement );
        // lights
            var light = new THREE.DirectionalLight( 0xffffff );
            light.position.set( 1, 1, 1 );
            scene.add( light );
            var light = new THREE.DirectionalLight( 0x002288 );
            light.position.set( - 1, - 1, - 1 );
            scene.add( light );
            var light = new THREE.AmbientLight( 0x222222 );
            scene.add( light );
            //
            window.addEventListener( 'resize', onWindowResize, false );

            this.setState({scene: scene});
        
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
        }

        function animate() {
            requestAnimationFrame( animate );
            controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
            render();
        }

        function render() {
            renderer.render( scene, camera );
        }
    }
    shouldComponentUpdate(nextProps) {
        console.log(nextProps);
       
        const {
            figure, size, number
        } = this.props;

        var scene = this.state.scene;

            if (number !== nextProps.number ) {
              
                if (nextProps.figure === "cube") {
                    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
                    console.log("cube render")
                } if (nextProps.figure === "pyramide") {
                    var geometry = new THREE.CylinderBufferGeometry(  0, 1, 1, 4, 1 );
                } if (nextProps.figure === "sphere") {
                    var geometry = new THREE.SphereBufferGeometry(  1, 32, 32 );
                }	
        
                geometry.scale ( nextProps.size, nextProps.size, nextProps.size );

                var material = new THREE.MeshPhongMaterial( { color: 0xffffff } );
        
                var mesh = new THREE.Mesh( geometry, material );
                mesh.position.x = Math.random() * 500;
                mesh.position.y = Math.random() * 300;
                mesh.position.z = Math.random() * 300;
                mesh.updateMatrix();
                mesh.matrixAutoUpdate = false;

                console.log(this.state.scene);
                console.log(mesh);
                
                scene.add(mesh);
                this.props.onUuid(mesh.uuid);
                this.props.onScene(scene);
                console.log(this.props);
                console.log(nextProps);
                console.log(this.state.scene);
                console.log(scene);
            }
        return true;
    }
    render() {
        return null;
        // <div ref={ref => (this.mount = ref)} />;
    }
}
export default connect (
    
    (state) => ({
        figure: state.figure,
        size: state.size,
        uuid: state.uuid,
        number: state.number        
    }),
    (dispatch) => ({
        onUuid: (uuid) => dispatch({type: "ADD_UUID", payload: uuid}),
        onScene: (scene) => dispatch({type: "SCENE", payload: scene})
    }),
)(ThreeD);
