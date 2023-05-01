document.body.onload = function() {
    setTimeout(function() {
        var preloader = document.getElementById('page-preloader');
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 1150);
}
const $header = $("#navbar")
const $element = $("#element")
let prevScroll
let lastShowPos

$(window).on("scroll", function() {
        const scrolled = $(window).scrollTop()

        if (scrolled > 0 && scrolled > prevScroll) {
            $header.addClass("header-out")


            lastShowPos = scrolled
        } else if (scrolled <= Math.max(lastShowPos - 10, 0)) {
            $header.removeClass("header-out")

        }
        prevScroll = scrolled
    })
    // let bg = document.querySelector('.mouse-parallax-bg');
    // window.addEventListener('mousemove', function(e) {
    //     let x = e.clientX / window.innerWidth;
    //     let y = e.clientY / window.innerHeight;
    //     bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    // });
    // window.onload = function() {
    //     const parallax = document.querySelector('.paralaxx');

//     if (parallax) {
//         const content = document.querySelector('.parallax__container');
//         const clouds = document.querySelector('.images-parallax__clouds');
//         const mountains = document.querySelector('.images-parallax__mountains');
//         const human = document.querySelector('.images-parallax__human');

//         const forClouds = 40;
//         const forMountains = 20;
//         const forHuman = 10;

//         const speed = 0.05;

//         let positionX = 0,
//             positionY = 0;
//         let coordXprocent = 0,
//             coordYprocent = 0;

//         function setMouseParallaxStyle() {
//             const distX = coordXprocent - positionX;
//             const distY = coordYprocent - positionY;

//             positionX = positionX + (distX * speed)
//             positionY = positionY + (distY * speed)

//             requestAnimationFrame(SettMoudeParallaxStyle);


// }
// }
// alert("1")
// VanillaTilt.init(document.querySelectorAll(".card"), {
//     max: 25,
//     speed: 400,
//     easing: "cubic-bezier(.02,.77,.43,.87)",
//     perspective: 730,
//     transition: true,
//     gyroscope: true
// });
var links = document.getElementsByClassName('link')
for (var i = 0; i <= links.length; i++)
    addClass(i)


function addClass(id) {
    setTimeout(function() {
        if (id > 0) links[id - 1].classList.remove('hover')
        links[id].classList.add('hover')
    }, id * 750)
}

// let scene,
//     camera,
//     renderer,
//     cloudParticles = [],
//     rainParticles = [],
//     flash,
//     rain,
//     rainGeo,
//     rainCount = 15000;

// function init() {
//     scene = new THREE.Scene();
//     camera = new THREE.PerspectiveCamera(
//         60,
//         window.innerWidth / window.innerHeight,
//         1,
//         1000
//     );
//     camera.position.z = 1;
//     camera.rotation.x = 1.16;
//     camera.rotation.y = -0.12;
//     camera.rotation.z = 0.27;

//     ambient = new THREE.AmbientLight(0x555555);
//     scene.add(ambient);

//     directionalLight = new THREE.DirectionalLight(0xffeedd);
//     directionalLight.position.set(0, 0, 1);
//     scene.add(directionalLight);

//     flash = new THREE.PointLight(0x062d89, 30, 500, 1.7);
//     flash.position.set(200, 300, 100);
//     scene.add(flash);

//     renderer = new THREE.WebGLRenderer();

//     scene.fog = new THREE.FogExp2(0x11111f, 0.002);
//     renderer.setClearColor(scene.fog.color);

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);

//     let positions = [];
//     let sizes = [];
//     rainGeo = new THREE.BufferGeometry();
//     for (let i = 0; i < rainCount; i++) {
//         rainDrop = new THREE.Vector3(
//             Math.random() * 400 - 200,
//             Math.random() * 500 - 250,
//             Math.random() * 400 - 200
//         );
//         positions.push(Math.random() * 400 - 200);
//         positions.push(Math.random() * 500 - 250);
//         positions.push(Math.random() * 400 - 200);
//         sizes.push(30);
//     }
//     rainGeo.setAttribute(
//         "position",
//         new THREE.BufferAttribute(new Float32Array(positions), 3)
//     );
//     rainGeo.setAttribute(
//         "size",
//         new THREE.BufferAttribute(new Float32Array(sizes), 1)
//     );
//     rainMaterial = new THREE.PointsMaterial({
//         color: 0xaaaaaa,
//         size: 0.1,
//         transparent: true
//     });
//     rain = new THREE.Points(rainGeo, rainMaterial);
//     scene.add(rain);

//     let loader = new THREE.TextureLoader();
//     loader.load(
//         "https://static.vecteezy.com/system/resources/previews/010/884/548/original/dense-fluffy-puffs-of-white-smoke-and-fog-on-transparent-background-abstract-smoke-clouds-movement-blurred-out-of-focus-smoking-blows-from-machine-dry-ice-fly-fluttering-in-air-effect-texture-png.png",
//         function(texture) {
//             cloudGeo = new THREE.PlaneBufferGeometry(500, 500);
//             cloudMaterial = new THREE.MeshLambertMaterial({
//                 map: texture,
//                 transparent: true
//             });

//             for (let p = 0; p < 25; p++) {
//                 let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
//                 cloud.position.set(
//                     Math.random() * 800 - 400,
//                     500,
//                     Math.random() * 500 - 450
//                 );
//                 cloud.rotation.x = 1.16;
//                 cloud.rotation.y = -0.12;
//                 cloud.rotation.z = Math.random() * 360;
//                 cloud.material.opacity = 0.6;
//                 cloudParticles.push(cloud);
//                 scene.add(cloud);
//             }
//             animate();
//             window.addEventListener("resize", onWindowResize);
//         }
//     );
// }

// function animate() {
//     cloudParticles.forEach((p) => {
//         p.rotation.z -= 0.002;
//     });
//     rainGeo.attributes.size.array.forEach((r, i) => {
//         r += 0.3;
//     });
//     const time = Date.now() * 0.005;

//     rainGeo.verticesNeedUpdate = true;

//     rain.position.z -= 0.222;
//     if (rain.position.z < -200) {
//         rain.position.z = 0;
//     }

//     if (Math.random() > 0.93 || flash.power > 100) {
//         if (flash.power < 100)
//             flash.position.set(Math.random() * 400, 300 + Math.random() * 200, 100);
//         flash.power = 50 + Math.random() * 500;
//     }
//     renderer.render(scene, camera);
//     requestAnimationFrame(animate);
// }

// init();

// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();

//     renderer.setSize(window.innerWidth, window.innerHeight);

const left = document.getElementById("left-side");

const handleMove = e => {
    left.style.width = `${e.clientX / window.innerWidth * 100}%`;
}

let divs = document.querySelectorAll(".shadow-card");
divs.forEach((div) => {

    let divShadow = div.querySelector(".div-shadow");

    div.addEventListener('mousemove', (event) => {
        // Show the shadow
        divShadow.classList.add("active");

        // Set shadow position to cursor position
        divShadow.style.left = (event.clientX - div.offsetLeft) + "px";
        divShadow.style.top = (event.clientY - div.offsetTop) + "px";
    });

    div.addEventListener('mouseout', (event) => {
        // Show the shadow
        divShadow.classList.remove("active");
    });
});

document.onmousemove = e => handleMove(e);

document.ontouchmove = e => handleMove(e.touches[0]);
const TallOuterContainer = document.querySelector('.TallOuterContainer')
const StickyInnerContainer = document.querySelector('.StickyInnerContainer')
const HorizontalTranslateContainer = document.querySelector('.HorizontalTranslateContainer')

const vw = window.innerWidth;
const vh = window.innerHeight;
const dinamicHeight = HorizontalTranslateContainer.scrollWidth - vw + vh

TallOuterContainer.style.height = `${dinamicHeight}px`

let translateX = window.addEventListener("scroll", () => {
    HorizontalTranslateContainer.style.transform = `translateX(${-StickyInnerContainer.offsetTop}px)`
});




// $(document).bind('mousewheel', function(e) {
//     var nt = $(document.body).scrollTop() - (e.deltaY * e.deltaFactor * 900);
//     e.preventDefault();
//     e.stopPropagation();
//     $(document.body).stop().animate({
//         scrollTop: nt
//     }, 100, 'easeInOutCubic');
// })
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector(".HyperText").onmouseover = event => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 30);
}


// animate({
//     elements: ".card",
//     duration: 2000,
//     delay: index => index * 100,
//     transform: ["scale(0)", "scale(1)"]
// })