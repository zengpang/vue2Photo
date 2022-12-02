<template>
  <div class="hisotyChart">

  </div>
</template>
<style scoped lang="scss">
.hisotyChart {
  width: 90%;
    height:100%;
  // height: 100vh;
  // width: 100vw;
  margin-bottom: 3%;
  background-color: cornflowerblue;
  canvas{
    width: 100%;
    height:100%;
  }
}
</style>
<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Pie from './3DChart/3DPie';
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { TGALoader } from "three/examples/jsm/loaders/TGALoader";
import { mergeUniforms } from 'three/src/renderers/shaders/UniformsUtils.js'
import { UniformsLib } from 'three/src/renderers/shaders/UniformsLib.js'

const $ = s => document.querySelector(s);
let pyramid = null;
//展示模型
let showModel = null;
//摄像头
let camera = null;
//场景
let scene = null;

//灯光
let light = null;
//渲染器
let render = null;
//用户交互插件
let controls = null;
let group = new THREE.Group();
//shader
let fragShaderStr = null;
let vertexShaderStr = null;

let fragHairShaderStr = null;
let vertexHairShaderStr = null;
export default {
  name: 'HisotyChart',
  data() {
    return {

    };
  },
  methods: {
    //本地文件读取
    load(name) {
      let xhr = new XMLHttpRequest(),
        okStatus = document.location.protocol === "file:" ? 0 : 200;
      xhr.open('GET', name, false);
      xhr.overrideMimeType("text/html;charset=utf-8");//默认为utf-8
      xhr.send(null);
      return xhr.status === okStatus ? xhr.responseText : null;
    },

    //场景初始化
    initScene() {
      console.log("绘制场景");
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xa0a0a0);
      console.log("绘制场景结束");
    },
    //初始化摄像头
    initCamera() {
      console.log("绘制场景");
      camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
      // -7.951022465039643, y: 50.66599857875026, z: 84.02389415272548
      camera.position.set(0, 0, 0);
      console.log(camera);

      camera.lookAt(new THREE.Vector3(0, 0, 0));
    },
    //初始化灯光
    initLight() {
      scene.add(new THREE.AmbientLight(0x444444));
      light = new THREE.SpotLight(0xffffff);
      // light.position.set(0, 1.25, 1.25);
      // light.position.set(0, -110, 20);
      light.matrixWorldAutoUpdate = true;
      light.position.set(165.8, 35.6, 80.6);

      //告诉点光需要开启阴影投射
      light.castShadow = true;
      light.shadow.bias = -0.000005;
      light.shadow.mapSize.width = 2048; //阴影贴图宽度设置为1024像素
      light.shadow.mapSize.height = 2048; //阴影贴图高度设置为1024像素
      var ligntCameraHelper = new THREE.SpotLightHelper(light, 20);
      ligntCameraHelper.visible = true;
      // let Ambient = new THREE.AmbientLight(0x404040, 2);
      scene.add(ligntCameraHelper);
      scene.add(light);
      var shadowCameraHelper = new THREE.CameraHelper(light.shadow.camera);
      shadowCameraHelper.visible = false;
      // let Ambient = new THREE.AmbientLight(0x404040, 2);
      scene.add(shadowCameraHelper);
    },
    initPlane() {
      console.log("渲染平面");
      var planeGeo = new THREE.PlaneGeometry(100, 100, 10, 10);//创建平面
      var planeMat = new THREE.MeshLambertMaterial({  //创建材料
        color: 0xFFFFFF,
        wireframe: false
      });
      var planeMesh = new THREE.Mesh(planeGeo, planeMat);//创建网格模型
      planeMesh.position.set(0, -30, 0);//设置平面的坐标
      planeMesh.rotation.x = -0.5 * Math.PI;//将平面绕X轴逆时针旋转90度
      planeMesh.receiveShadow = true;//允许接收阴影
      scene.add(planeMesh);//将平面添加到场景中
    },
    initPie() {
      pyramid = new Pie({
        items: [{
          value: Math.random() * 10,
          color: '#DE5347'
        }, {
          value: Math.random() * 10,
          color: '#3DCE3D'
        }, {
          value: Math.random() * 10,
          color: '#0080FF'
        },
      {
        value: Math.random() * 10,
          color: '#A473EA'
      }],
        text: (item) => {
          return 'value-' + item.value
        }
      });
      group.add(pyramid);
      scene.add(group);
    },

    //渲染器初始化
    initRender() {
      console.log("渲染渲染器");
      render = new THREE.WebGLRenderer({ antialias: true });
     // render.setSize(window.innerWidth, window.innerHeight);
      //修改渲染器输出格式
      render.outputEncoding = THREE.sRGBEncoding;
      render.shadowMap.enabled = true;
      render.shadowMap.type = THREE.PCFSoftShadowMap;
      //渲染器添加toneMapping效果
      // render.toneMapping = THREE.ACESFilmicToneMapping;
      //告诉渲染器需要阴影效果 
      render.setClearColor('#1F2025', 1.0);
      render.domElement.style.width="100%";
      render.domElement.style.height="100%";
      $('.hisotyChart').appendChild(render.domElement);

    },
    //用户插件初始化
    initControls() {
      controls = new OrbitControls(camera, render.domElement);
      // 使动画循环使用时阻尼或自转 意思是否有惯性
      controls.enableDamping = true;
      //动态阻尼系数 就是鼠标拖拽旋转灵敏度
      //controls.dampingFactor = 0.25;
      //是否可以缩放
      controls.enableZoom = true;
      //是否自动旋转
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
      //设置相机距离原点的最远距离
      controls.minDistance = 1;
      //设置相机距离原点的最远距离
      controls.maxDistance = 500;
      //是否开启右键拖拽
      controls.enablePan = true;
    },


    render() {
      render.render(scene, camera);
     

    },

    //窗口变动触发的函数
    onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      this.render();
      //render.setSize(window.innerWidth, window.innerHeight);
    },
    animate() {
      //更新
      requestAnimationFrame(this.animate);

      this.render();
    },

    //绘制
    draw() {
      console.log("开始绘制");
      this.initScene();
      this.initCamera();
      this.initRender();
      this.initLight();
      this.initControls();
      this.initPie();
      this.initPlane();
      this.animate();
      window.onresize = this.onWindowResize;
    }

  },
  mounted() {
    this.draw();
  }
}
</script>

<!-- <template>
  <div class="hisotyChart">
      
  </div>
</template>
<script>
  export default{
     name:"HisotyChart"
  }
</script>
<style scoped lang="scss">
   .hisotyChart{
     height: 90%;
     width: 100%;
     margin-bottom: 3%;
     background-color: cornflowerblue;

   }
</style> -->