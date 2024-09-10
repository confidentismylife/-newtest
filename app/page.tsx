'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useTyped from '../app/hook/Typed'; // 导入自定义 Hook
import './index.css';
import type { TypedOptions } from '../app/hook/Typed'; // 导入自定义 Hook
import Spline from '@splinetool/react-spline';

const Page: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);

    const commonOptions: TypedOptions = {
        fadeOut: false,
        loop: true,
    };

    const options1: TypedOptions = {
        ...commonOptions,
        strings: [
            '我喜欢<span style="color:yellow">睡觉</span>',
            '我喜欢吃饭',
            '<span style="color:red">我喜欢自由</span>'
        ],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        startDelay: 1500,
        preStringTyped: (arrayPos: number, self: any) => {
            if (self.strings[arrayPos]) {
                const element = document.querySelector('#typed');
                if (element) {
                    element.innerHTML = self.strings[arrayPos];
                }
            }
        },
        onStringTyped: (arrayPos: number, self: any) => {
            const element = document.querySelector('#typed');
            if (element) {
                element.classList.add('fade-out');
            }
        },
        onReset: (self: any) => {
            const element = document.querySelector('#typed');
            if (element) {
                element.classList.remove('fade-out');
            }
        }
    };

    const options2: TypedOptions = {
        ...commonOptions,
        strings: [
            '嗨嗨<span style="color:yellow">很高兴见到你哦</span>',
        ],
        typeSpeed: 200,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 1000,
        preStringTyped: (arrayPos: number, self: any) => {
            if (self.strings[arrayPos]) {
                const element = document.querySelector('#typed2');
                if (element) {
                    element.innerHTML = self.strings[arrayPos];
                }
            }
        },
        onStringTyped: (arrayPos: number, self: any) => {
            const element = document.querySelector('#typed2');
            if (element) {
                element.classList.add('fade-out');
            }
        },
        onReset: (self: any) => {
            const element = document.querySelector('#typed2');
            if (element) {
                element.classList.remove('fade-out');
            }
        }
    };

    // 使用自定义 Hook
    useTyped('#typed', options1);
    useTyped('#typed2', options2);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const showModel = scrollY > window.innerHeight * 0.1;

    return (
        <div className="relative">
            {/* 包裹所有内容的容器 */}
            <div className="relative overflow-hidden" style={{ height: '120vh' }}>
                {/* 文字页面 */}
                <motion.div
                    className="fixed -top-5 left-0 w-full flex flex-col items-center pt-16"
                    style={{ height: '100vh' }}
                    initial={{ y: 0 }}
                    animate={{ y: showModel ? '-100vh' : 0 }}
                    transition={{ duration: 1, ease: [0.68, -0.55, 0.27, 1.55] }}
                >
                    <div className="container flex flex-row items-start">
                        <div className="flex-1 text-4xl pl-72">
                            <div className='text-6xl slide-up-from-bottom'>你好 ! 我是</div>
                            <div><span className="text-gradient text-9xl font-extrabold slide-up-from-bottom">彭继文</span></div>
                            <div className='ml-3'>我是一名<span className="text-yellow-500 slide-up-from-bottom">前端爱好者</span></div>
                            <div><span id="typed" className="whitespace-pre-wrap leading-[30px] slide-up-from-bottom"></span></div>
                            <div className='ml-7'>爱来自<span className="text-red-500 slide-up-from-bottom font-extrabold">中国</span></div>
                            <span id="typed2" className="whitespace-pre-wrap leading-[30px] slide-up-from-bottom"></span>
                        </div>
                        <div className="flex-none absolute right-10 top-0 h-full  ">
                                
                        </div> 
                    </div>
                </motion.div>

                {/* 模型场景 */}
                <motion.div
                    className="absolute top-0 left-0 w-full"
                    style={{ height: '100vh' }}
                    initial={{ y: '100vh' }}
                    animate={{ y: showModel ? '20vh' : '100vh' }}
                    transition={{ duration: 1, ease: [0.68, -0.55, 0.27, 1.55] }}
                >
                    <Spline
                        scene="https://prod.spline.design/ZTahTQ9NkWlPmfES/scene.splinecode"
                        style={{ width: '100%', height: '100%' }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Page;