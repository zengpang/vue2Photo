<template>
  <div class="hisotyChart">

  </div>
</template>
<style scoped lang="scss">
.hisotyChart {
  width: 90%;
  height: 100%;
  // height: 100vh;
  // width: 100vw;
  margin-bottom: 3%;
  background-color: cornflowerblue;

  canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Pie from './3DChart/3DPie';
import globalVariable from '../global/globalVariable';
import agency from './agency';


import style from '../assets/style/index.scss'

export default {
  name: 'HisotyChart',

  data() {
    return {
      isInited: true,
      imgSizes: { png: 1, jpeg: 1, tga: 0, other: 0 },
      pyramid: null,

      //摄像头
      camera: null,
      //场景
      scene: null,

      //灯光
      light: null,
      //渲染器
      render: null,
      //用户交互插件
      controls: null,
      group: new THREE.Group()
    };
  },
  methods: {
    $(s)
    {
       return document.querySelector(s);
    },
    //场景初始化
    initScene() {
      console.log("绘制场景");
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color("#FFFFFF");
      console.log("绘制场景结束");
    },
    //初始化摄像头
    initCamera() {
      console.log("绘制场景");
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

      this.camera.position.set(0.4950118345583974, 28.343001386701857, 34.315147145141545);
      console.log(this.camera);

      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    },
    //初始化灯光
    initLight() {
      this.scene.add(new THREE.AmbientLight(0x444444));
      this.light = new THREE.SpotLight(0xffffff);
      // this.light.position.set(0, 1.25, 1.25);
      // light.position.set(0, -110, 20);
      this.light.matrixWorldAutoUpdate = true;
      this.light.position.set(165.8, 35.6, 80.6);
      console.log(this.light);
      //告诉点光需要开启阴影投射
      // this.light.castShadow = true;
      // this.light.shadow.bias = -0.000005;
      // this.light.shadow.mapSize.width = 2048; //阴影贴图宽度设置为1024像素
      // this.light.shadow.mapSize.height = 2048; //阴影贴图高度设置为1024像素
      var ligntCameraHelper = new THREE.SpotLightHelper(this.light, 20);
      ligntCameraHelper.visible = false;
      // let Ambient = new THREE.AmbientLight(0x404040, 2);
      this.scene.add(ligntCameraHelper);
      this.scene.add(this.light);
      var shadowCameraHelper = new THREE.CameraHelper(this.light.shadow.camera);
      shadowCameraHelper.visible = false;
      // let Ambient = new THREE.AmbientLight(0x404040, 2);
      this.scene.add(shadowCameraHelper);
    },
    //3D饼图初始化
    initPie(imgSizes) {
      // console.log(this.imgTypeSize);
      let pieItems=[{
          value: parseFloat(imgSizes["png"]).toFixed(1) * 10,
          color: style.pngHintColor
        }, {
          value: parseFloat(imgSizes["jpeg"]).toFixed(1) * 10,
          color: style.jpgHintColor
        }, {
          value: parseFloat(imgSizes["tga"]).toFixed(1) * 10,
          color: style.tgaHintColor
        },
        {
          value: parseFloat(imgSizes["other"]).toFixed(1) * 10,
          color: style.otherHintColor
        }];
        pieItems=pieItems.reduce((total, current)=>{current.value>0&&total.push(current);return total},[]);
      // for(let index=0;index<pieItems.length;index++)
      // {
      //   pieItems.delete(index);
      // }
      console.log();
      this.pyramid = new Pie({
        items: pieItems,
        text: (item) => {
          return 'value-' + item.value
        }
      });
      this.pyramid.rotation.x = -Math.PI / 3;
      this.group.add(this.pyramid);
      this.scene.add(this.group);

    },
    updatePie(imgSizes) {
      this.group.remove(this.pyramid);
      this.scene.remove(this.group);
      this.initPie(imgSizes);
    },
    //渲染器初始化
    initRender() {
      console.log("渲染渲染器");
      this.render = new THREE.WebGLRenderer({ antialias: true });
      // render.setSize(window.innerWidth, window.innerHeight);
      //修改渲染器输出格式
      this.render.outputEncoding = THREE.sRGBEncoding;
      this.render.shadowMap.enabled = true;
      this.render.shadowMap.type = THREE.PCFSoftShadowMap;
      //渲染器添加toneMapping效果
      // render.toneMapping = THREE.ACESFilmicToneMapping;
      //告诉渲染器需要阴影效果 
      this.render.setClearColor('#1F2025', 1.0);
      this.render.domElement.style.width = "100%";
      this.render.domElement.style.height = "100%";
      this.$('.hisotyChart').appendChild(this.render.domElement);

    },
    //用户插件初始化
    initControls() {
      this.controls = new OrbitControls(this.camera, this.render.domElement);
      // 使动画循环使用时阻尼或自转 意思是否有惯性
      this.controls.enableDamping = true;
      //动态阻尼系数 就是鼠标拖拽旋转灵敏度
      //controls.dampingFactor = 0.25;
      //是否可以缩放
      this.controls.enableZoom = true;
      //是否自动旋转
      this.controls.autoRotate = true;
      this.controls.autoRotateSpeed = 0.5;
      //设置相机距离原点的最远距离
      this. controls.minDistance = 1;
      //设置相机距离原点的最远距离
      this.controls.maxDistance = 500;
      //是否开启右键拖拽
      this.controls.enablePan = true;
    },


    renderChart() {
      this.render.render(this.scene, this.camera);
    },

    //窗口变动触发的函数
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderChart();
      //render.setSize(window.innerWidth, window.innerHeight);
    },
    animate() {
      //更新
      requestAnimationFrame(this.animate);

      this.renderChart();
    },

    //绘制
    draw() {
      console.log("开始绘制");
      this.initScene();
      this.initCamera();
      this.initRender();
      this.initLight();
      this.initControls();
      if (!globalVariable.is3DRendered) {
        this.initPie(this.imgSizes)
        globalVariable.is3DRendered = true;
      }
      else {
        this.updatePie(this.imgSizes);
      }



      this.animate();
      window.onresize = this.onWindowResize;
    }

  },
  created() {
    agency.$on("updateChart",(size)=>{
      this.updatePie(size);
    })
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