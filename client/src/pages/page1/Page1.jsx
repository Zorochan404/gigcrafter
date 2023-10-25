import React, { useEffect, useRef } from 'react';
import "./page1.scss";
import Navbar from '../../components/navbar/Navbar';
import video from "../../assets/video.mp4";
import LocomotiveScroll from 'locomotive-scroll';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Draggable from "gsap/Draggable";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import Stack from '../../components/stack/Stack';
import StackCard from '../../components/card/StackCard';




const Page1 = () => {



    return (
        <div className='page1' data-scroll-container >
            <div data-scroll-container>
                <div data-scroll-section>
                    <Navbar />
                        <h1 scroll="true">Digital Alchemy Coded Elegance</h1>
                    <Stack/>
                    <StackCard />
                </div>
            </div>
        </div>
    );
}

export default Page1;
