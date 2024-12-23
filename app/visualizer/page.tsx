'use client';
import * as THREE from 'three'; // Ensure to import THREE if not already imported
import React, { useState, Suspense, useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
// import { Sphere } from '@react-three/drei';
import { OrbitControls, useProgress } from '@react-three/drei';
import { Box, Typography, CircularProgress } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Header from '../components/Header';
import "./page.css";



const Loader = () => {
    const { progress } = useProgress();
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            flexDirection="column"
        >
            <CircularProgress color="primary" />
            <Typography variant="h6" color="textSecondary" mt={2}>
                {progress.toFixed(0)}% Loaded
            </Typography>
        </Box>
    );
};


const Scene = ({ modelPath, selectedTexture }: { modelPath: string; selectedTexture: string | null }) => {
    const gltf = useLoader(GLTFLoader, modelPath);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    // const [value] = React.useState<number | null>(5);
    const [minAzimuthAngle, setMinAzimuthAngle] = useState<number>(-Math.PI / 4);
    const [maxAzimuthAngle, setMaxAzimuthAngle] = useState<number>(Math.PI / 4);
    const [minPolarAngle, setMinPolarAngle] = useState<number>(Math.PI / 4);
    const [maxPolarAngle, setMaxPolarAngle] = useState<number>(Math.PI / 1.5);
    const [intensity, setIntensity] = useState<number>(2.5);
    const defaultTexture = useLoader(TextureLoader, '/textures/default.jpg');
    const newTexture = selectedTexture ? useLoader(TextureLoader, selectedTexture) : defaultTexture;


    // Set texture repeating (3 times)
    newTexture.wrapS = THREE.RepeatWrapping; // Allow wrapping on the S axis (horizontal)
    newTexture.wrapT = THREE.RepeatWrapping; // Allow wrapping on the T axis (vertical)
    newTexture.repeat.set(1.8, 1.8); // Set repeat to 3x3

    // Set texture offset
    newTexture.offset.set(0.1, 0.1); // Set an example offset for both U (horizontal) and V (vertical)

    // Define type for settings
    type CameraSettings = {
        cameraPosition: [number, number, number]; // Explicitly defined as a tuple
        primitivePosition: [number, number, number];
        orbitTarget: [number, number, number];
        backgroundColor: string;
    };

    // Determine settings based on modelPath
    const settings1: CameraSettings = modelPath === '/models/chimney5.glb'
        ? {
            cameraPosition: [0, 0, 5],
            primitivePosition: [0, -1.5, 0],
            orbitTarget: [0, 0, 0],
            backgroundColor: '#283C28',
        }
        : {
            cameraPosition: [0, -1, -1],
            primitivePosition: [0, -1.5, 0],
            orbitTarget: [3, -0.5, -2],
            backgroundColor: '#FFFFFF',
        };
    const settings2: CameraSettings = modelPath === '/models/chimney5.glb'
        ? {
            cameraPosition: [0, 0, 3.5],
            primitivePosition: [0, -0.8, 0],
            orbitTarget: [0, 0, 0],
            backgroundColor: '#283C28',
        }
        : {
            cameraPosition: [0, 0.4, 0.8],
            primitivePosition: [0, -1.5, 0],
            orbitTarget: [0, 0, 0],
            backgroundColor: '#FFFFFF',
        };

    useEffect(() => {
        if (gltf && newTexture) {
            gltf.scene.traverse((child: any) => {
                if (child.isMesh && child.name === 'main_change') {

                    // Set texture repeating
                    // newTexture.wrapS = THREE.RepeatWrapping; // Allow wrapping on the S axis
                    // newTexture.wrapT = THREE.RepeatWrapping; // Allow wrapping on the T axis
                    // newTexture.repeat.set(1.4, 1.4); // Set repeat to 3x3


                    child.material.map = newTexture;
                    child.material.needsUpdate = true;
                }
            });

            // Apply model-specific transformations if needed
            if (modelPath === '/models/chimney5.glb') {
                gltf.scene.rotation.y = Math.PI / 2; // Rotate 90 degrees

                setMinAzimuthAngle(-Math.PI / 4);
                setMaxAzimuthAngle(Math.PI / 4);
                setMinPolarAngle(Math.PI / 4)
                setMaxPolarAngle(Math.PI / 1.5)
                setIntensity(2.5)

            }
            else if (modelPath === '/models/house3.glb') {

                setMinAzimuthAngle(-Math.PI);
                setMaxAzimuthAngle(0);
                setMinPolarAngle(Math.PI / 3)
                setMaxPolarAngle(Math.PI / 2)
                setIntensity(1)
            }
        }
    }, [gltf, newTexture, modelPath]);



    return (
        <Suspense fallback={<Loader />} >

            {isMobile ? <><Canvas
                style={{ height: '100%', width: '100%' }} // Make Canvas full screen
                key={modelPath} // Add this line to force re-mounting
                camera={{ position: settings1.cameraPosition }}
                shadows
                onCreated={({ gl }) => {
                    gl.setClearColor(settings1.backgroundColor); // Set background color dynamically
                }}
                className="relativeScene"
            >
                <ambientLight intensity={0.5} color="green" />
                <directionalLight position={[1, 1, 1]} intensity={intensity} castShadow />
                <directionalLight position={[-1, -1, -1]} intensity={intensity} />
                <primitive
                    object={gltf.scene}
                    position={settings1.primitivePosition}
                    castShadow
                />
                {/* <Sphere position={[0, 0, 0]} args={[0.1, 32, 32]} castShadow>
                    <meshStandardMaterial attach="material" color="blue" />
                </Sphere>
                <Sphere position={[1, 0, 0]} args={[0.1, 32, 32]} castShadow>
                    <meshStandardMaterial attach="material" color="red" />
                </Sphere>
                <Sphere position={[0, 0, 1]} args={[0.1, 32, 32]} castShadow>
                    <meshStandardMaterial attach="material" color="green" />
                </Sphere>
                <Sphere position={[0, 1, 0]} args={[0.1, 32, 32]} castShadow>
                    <meshStandardMaterial attach="material" color="green" />
                </Sphere> */}
                {/* <OrbitControls target={settings.orbitTarget} /> */}
                <OrbitControls
                    target={settings1.orbitTarget}
                    enableZoom={true}
                    enablePan={false} // Disable panning if unnecessary
                    minDistance={1} // Minimum zoom level
                    maxDistance={5} // Maximum zoom level
                    minPolarAngle={minPolarAngle} // Minimum vertical angle (limit upward rotation)
                    maxPolarAngle={maxPolarAngle} // Maximum vertical angle (limit downward rotation)
                    minAzimuthAngle={minAzimuthAngle} // Limit left rotation (-25 degrees)
                    maxAzimuthAngle={maxAzimuthAngle} // Limit right rotation (245 degrees)
                    enableDamping // Smooth the rotation for better UX
                    dampingFactor={0.1}
                />
            </Canvas></> : <> <Canvas
                style={{ height: '100%', width: '100%' }} // Make Canvas full screen
                key={modelPath} // Add this line to force re-mounting
                camera={{ position: settings2.cameraPosition }}
                shadows
                onCreated={({ gl }) => {
                    gl.setClearColor(settings2.backgroundColor); // Set background color dynamically
                }}
                className="relativeScene"
            >

                <directionalLight position={[1, 1, 1]} intensity={intensity} castShadow />
                <directionalLight position={[-1, -1, -1]} intensity={intensity} />
                <primitive
                    object={gltf.scene}
                    position={settings2.primitivePosition}
                    castShadow
                />
                {/* <OrbitControls target={settings.orbitTarget} /> */}
                <OrbitControls
                    target={settings2.orbitTarget}
                    enableZoom={true}
                    enablePan={false} // Disable panning if unnecessary
                    minDistance={0} // Minimum zoom level
                    maxDistance={4} // Maximum zoom level
                    minPolarAngle={Math.PI / 4} // Minimum vertical angle (limit upward rotation)
                    maxPolarAngle={Math.PI / 1.5} // Maximum vertical angle (limit downward rotation)
                    minAzimuthAngle={-Math.PI / 4} // Limit left rotation (-45 degrees)
                    maxAzimuthAngle={Math.PI / 4} // Limit right rotation (+45 degrees)
                    enableDamping // Smooth the rotation for better UX
                    dampingFactor={0.1}
                />
            </Canvas></>}

        </Suspense>
    );
};


const App: React.FC = () => {

    const models = ['/models/chimney5.glb', '/models/house3.glb'];
    const [currentModelIndex, setCurrentModelIndex] = useState(0);
    const [selectedTexture, setSelectedTexture] = useState<string | null>(null);

    const handleTextureChange = (texturePath: string) => {
        setSelectedTexture(texturePath);
    };

    const handlePrevClick = () => {
        setCurrentModelIndex((prevIndex) => (prevIndex - 1 + models.length) % models.length);
    };

    const handleNextClick = () => {
        setCurrentModelIndex((prevIndex) => (prevIndex + 1) % models.length);
    };
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <Box className="relative h-screen w-screen">
            {/* Full-screen Scene */}
            {isMobile ?
                <>
                    <Box className="absolute top-0 left-0 w-full z-10 px-4 space-y-2">
                        <Box className="mt-5">
                            <Header />
                        </Box>
                        <Box className="flex w-full justify-between">
                            <Box className="w-1/2">
                                <Box className="flex space-x-4">
                                    <Image
                                        src="/images/Visualizer/Navar/zoom-control.svg"
                                        alt="Zoom Icon"
                                        width={55}
                                        height={55}
                                    />
                                    <Image
                                        src="/images/Visualizer/Navar/rotate-control.svg"
                                        alt="Rotate Icon"
                                        width={80}
                                        height={55}
                                    />
                                </Box>
                            </Box>
                            <Box className="flex flex-col items-end w-1/2">
                                <Box className="space-y-2 px-6">
                                    <Typography
                                        className="font-normal text-start"
                                        variant="h3"
                                        color="#FFFFFF"
                                        sx={{
                                            fontWeight: 300,
                                            lineHeight: 0.9,
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: {
                                                xs: "16px",
                                                sm: "18px",
                                                md: "20px",
                                                lg: "24px",
                                            },
                                        }}
                                    >
                                        Category:<span style={{ color: '#DCC5BD' }}>Fireplace</span>
                                    </Typography>
                                    <Typography
                                        className="font-normal text-start"
                                        variant="h3"
                                        color="#FFFFFF"
                                        sx={{
                                            fontWeight: 300,
                                            lineHeight: 0.9,
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: {
                                                xs: "16px",
                                                sm: "18px",
                                                md: "20px",
                                                lg: "24px",
                                            },
                                        }}
                                    >
                                        Tag:<span style={{ color: '#DCC5BD' }}>Exclusive</span>
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="w-full flex px-6 py-6">
                            <Image
                                src="/images/Visualizer/static.jpg"
                                alt="Image1"
                                width={80}
                                height={80}
                                className="rounded-lg aspect-[1/1] w-[80px] h-[80px]"
                            />
                            <Box className="ml-4 flex flex-col justify-center items-center">
                                <Box className="flex w-full justify-start">
                                    <Typography
                                        className="font-normal text-start"
                                        variant="h3"
                                        color="#FFFFFF"
                                        sx={{
                                            fontWeight: 400,
                                            fontFamily: 'Chronicle Display',
                                            fontSize: {
                                                xs: "12px",
                                                sm: "16px",
                                                md: "20px",
                                                lg: "24px",
                                            },
                                        }}
                                    >
                                        CHARLOTTE
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        className="font-normal text-start w-[80%]"
                                        variant="h3"
                                        color="#FFFFFF"
                                        sx={{
                                            fontWeight: 300,
                                            lineHeight: '1',
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: {
                                                xs: "10px",
                                                sm: "18px",
                                                md: "20px",
                                                lg: "24px",
                                            },
                                        }}
                                    >
                                        Available in our freeform style, the Charlotte sandstone is made up of beautiful soft hues such as cream, yellow and pink.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="absolute top-0 left-0 w-[100vw] z-0 h-[100vh]" >
                        <Scene modelPath={models[currentModelIndex]} selectedTexture={selectedTexture} />
                    </Box>
                    <Box className="absolute top-700 left-0 z-10 px-4 w-[100vw] text-center space-y-5 bottom-8" >
                        <Typography
                            className="font-normal text-center"
                            variant="h3"
                            color="#FFFFFF"
                            sx={{
                                fontWeight: 400,
                                lineHeight: 0.9,
                                fontFamily: 'Chronicle Display',
                                fontSize: {
                                    xs: "36px",
                                    sm: "45px",
                                    md: "60px",
                                    lg: "60px",
                                },
                            }}
                        >
                            FIREPLACE
                        </Typography>
                        <Typography
                            className="font-normal text-center"
                            variant="h3"
                            color="#FFFFFF"
                            sx={{
                                fontWeight: 300,
                                lineHeight: 0.9,
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: "16px",
                                    sm: "18px",
                                    md: "22px",
                                    lg: "24px",
                                },
                            }}
                        >
                            Marble Charlotte and other to choose from
                        </Typography>
                        <Box className="flex justify-center mt-2 gap-x-2">
                            {['stone1.png', 'stone2.png', 'stone3.png', 'stone4.png'].map((img, idx) => (
                                <Image
                                    key={idx}
                                    src={`/images/About/Stones/${img}`}
                                    alt={`Stone ${idx + 1}`}
                                    width={78}
                                    height={78}
                                    className="cursor-pointer"
                                    onClick={() => handleTextureChange(`/textures/texture${idx + 1}.jpg`)}
                                />
                            ))}
                        </Box>
                    </Box>
                    <Box className="flex cursor-pointer" onClick={handlePrevClick} id="leftScene">
                        <ArrowBackIosNewIcon sx={{ color: 'white' }} />

                    </Box>
                    <Box className="flex cursor-pointer" onClick={handleNextClick} id="rightScene">

                        <ArrowForwardIosIcon sx={{ color: 'white' }} />
                    </Box>
                </> :
                <>
                    <Box className="absolute top-0 left-0 h-full w-full z-0 ">
                        <Scene modelPath={models[currentModelIndex]} selectedTexture={selectedTexture} />
                    </Box>

                    {/* Overlay components */}
                    <Box className="absolute top-0 left-0 w-full z-10 px-20 py-10">
                        {/* Navbar */}
                        <Box className="flex w-full justify-between ">
                            <Box>
                                <Link href="/">
                                    <Image
                                        src="/images/Visualizer/Navar/main-logo.svg"
                                        alt="Logo"
                                        width={200}
                                        height={60}
                                    />
                                </Link>
                            </Box>
                            <Box className="flex space-x-4">
                                <Image
                                    src="/images/Visualizer/Navar/zoom-control.svg"
                                    alt="Zoom Icon"
                                    width={55}
                                    height={55}
                                />
                                <Image
                                    src="/images/Visualizer/Navar/rotate-control.svg"
                                    alt="Rotate Icon"
                                    width={80}
                                    height={55}
                                />
                            </Box>
                        </Box>
                    </Box>

                    {/* Bottom Components */}
                    <Box className="absolute bottom-0 left-0 w-full z-10 px-20 py-10" sx={{ background: 'linear-gradient(to bottom, rgba(39, 59, 39, 0), rgba(39, 59, 39, 1))' }}


                    >
                        <Box className="flex justify-between items-end mt-12">
                            {/* Left Section */}
                            <Box className="w-[26vw] flex">
                                <Image
                                    src="/images/Visualizer/static.jpg"
                                    alt="Image1"
                                    width={127}
                                    height={127}
                                    className="rounded-lg w-[100px] h-[100px]"
                                />
                                <Box className="ml-4 flex flex-col justify-center">
                                    <Typography
                                        className="font-normal text-start"
                                        variant="h3"
                                        color="#FFFFFF"
                                        sx={{
                                            fontWeight: 400,
                                            fontFamily: 'Chronicle Display',
                                            fontSize: {
                                                xs: "15px",
                                                sm: "20px",
                                                md: "25px",
                                                lg: "30px",
                                            },
                                        }}
                                    >
                                        CHARLOTTE
                                    </Typography>
                                    <Typography
                                        className="font-normal text-start w-[80%]"
                                        variant="h3"
                                        color="#FFFFFF"
                                        sx={{
                                            fontWeight: 300,
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: {
                                                xs: "8px",
                                                sm: "10px",
                                                md: "12px",
                                                lg: "15px",
                                            },
                                        }}
                                    >
                                        Available in our freeform style, the Charlotte sandstone is made up of beautiful soft hues such as cream, yellow and pink.
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Center Section */}
                            <Box className="w-[35vw] text-center space-y-4">
                                <Typography
                                    className="font-normal text-center"
                                    variant="h3"
                                    color="#FFFFFF"
                                    sx={{
                                        fontWeight: 400,
                                        lineHeight: 0.9,
                                        fontFamily: 'Chronicle Display',
                                        fontSize: {
                                            xs: "15px",
                                            sm: "20px",
                                            md: "25px",
                                            lg: "30px",
                                        },
                                    }}
                                >
                                    FIREPLACE
                                </Typography>
                                <Typography
                                    className="font-normal text-center"
                                    variant="h3"
                                    color="#FFFFFF"
                                    sx={{
                                        fontWeight: 300,
                                        lineHeight: 0.9,
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: {
                                            xs: "10px",
                                            sm: "10px",
                                            md: "12px",
                                            lg: "15px",
                                        },
                                    }}
                                >
                                    Marble Charlotte and other to choose from
                                </Typography>
                                <Box className="flex justify-center mt-2 gap-x-7">
                                    {['stone1.png', 'stone2.png', 'stone3.png', 'stone4.png'].map((img, idx) => (
                                        <Image
                                            key={idx}
                                            src={`/images/About/Stones/${img}`}
                                            alt={`Stone ${idx + 1}`}
                                            width={80}
                                            height={80}
                                            className="cursor-pointer"
                                            onClick={() => handleTextureChange(`/textures/texture${idx + 1}.jpg`)}
                                        />
                                    ))}
                                </Box>
                            </Box>

                            <Box className="w-[15%]">

                            </Box>

                            {/* Right Section */}
                            <Box className="flex flex-col space-y-8">
                                <Box className="space-y-2">
                                    <Typography
                                        className="font-normal text-start"
                                        variant="h3"
                                        color="#FFFFFF"
                                        sx={{
                                            fontWeight: 300,
                                            lineHeight: 0.9,
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: {
                                                xs: "10px",
                                                sm: "10px",
                                                md: "12px",
                                                lg: "15px",
                                            },
                                        }}
                                    >
                                        Category:<span style={{ color: '#DCC5BD' }}>Fireplace</span>
                                    </Typography>
                                    <Typography
                                        className="font-normal text-start"
                                        variant="h3"
                                        color="#FFFFFF"
                                        sx={{
                                            fontWeight: 300,
                                            lineHeight: 0.9,
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: {
                                                xs: "10px",
                                                sm: "10px",
                                                md: "12px",
                                                lg: "15px",
                                            },
                                        }}
                                    >
                                        Tag:<span style={{ color: '#DCC5BD' }}>Exclusive</span>
                                    </Typography>
                                </Box>
                                <Box className="flex w-full gap-x-5">
                                    <Box className="flex cursor-pointer" onClick={handlePrevClick}>
                                        <ArrowBackIosNewIcon sx={{ color: 'white' }} />
                                        <Typography variant="body1" color="white">
                                            P R E V
                                        </Typography>
                                    </Box>
                                    <Box className="flex cursor-pointer" onClick={handleNextClick}>
                                        <Typography variant="body1" color="white">
                                            N E X T
                                        </Typography>
                                        <ArrowForwardIosIcon sx={{ color: 'white' }} />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </>}

        </Box>
    );
};

export default App;
