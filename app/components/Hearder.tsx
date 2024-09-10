'use client'; // 确保这是一个客户端组件

import React, { useState } from 'react';
import { usePathname } from 'next/navigation'; // 使用 usePathname 替代 useRouter
import Link from 'next/link';
import { Image } from "@nextui-org/image";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { Setting } from '../components/Setting';

const Header = () => {
    const pathname = usePathname(); // 获取当前路径
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 判断链接是否是当前激活的链接
    const getLinkClassName = (linkPath: string) => {
        return `text-xl ${pathname === linkPath ? 'font-bold text-gray-900' : 'font-medium text-gray-700'} hover:text-gray-900`;
    };

    // 切换菜单显示
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header
            className="fixed top-0 left-0 z-10 flex items-center justify-between w-full py-3 px-6 shadow-md"
            style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)', // 背景颜色及透明度
                backdropFilter: 'blur(10px)', // 毛玻璃效果
                WebkitBackdropFilter: 'blur(10px)', // 支持 Webkit 浏览器
            }}
        >
            <div className="flex items-center ml-4 lg:ml-4">
                <Image
                    className="w-10 h-10"
                    alt="NextUI hero Image"
                    src="/2.gif" // 使用绝对路径
                />
                <div className="ml-2 font-extrabold text-xl text-gray-900 sm:text-2xl">彭继文</div>
            </div>
            <nav className="hidden lg:flex flex-grow justify-center items-center gap-8">
                <Link href="/" passHref>
                    <div className={getLinkClassName('/')}>首页</div>
                </Link>
                <Link href="/blog" passHref>
                    <div className={getLinkClassName('/blog')}>博客</div>
                </Link>
                <Link href="/talk" passHref>
                    <div className={getLinkClassName('/talk')}>交流</div>
                </Link>
                <Link href="/content" passHref>
                    <div className={getLinkClassName('/content')}>空间</div>
                </Link>
                <div className='ml-8 flex gap-2 items-center'>
                    <ThemeSwitcher /> {/* 确保 ThemeSwitcher 组件的路径正确 */}
                    <Setting /> {/* 确保 Setting 组件的路径正确 */}
                </div>
            </nav>
            {/* 移动端菜单按钮 */}
            <button
                className="lg:hidden p-2"
                aria-label="Toggle navigation"
                onClick={toggleMenu}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            {/* 移动端菜单 */}
            <div id="mobile-menu" className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 right-6 bg-white shadow-lg rounded-md w-48 py-2`}>
                <Link href="/" passHref>
                    <div className={getLinkClassName('/')}>首页</div>
                </Link>
                <Link href="/blog" passHref>
                    <div className={getLinkClassName('/blog')}>博客</div>
                </Link>
                <Link href="/talk" passHref>
                    <div className={getLinkClassName('/talk')}>交流</div>
                </Link>
                <Link href="/content" passHref>
                    <div className={getLinkClassName('/content')}>空间</div>
                </Link>
                <div className='mt-2 flex gap-2 items-center justify-center'>
                    <ThemeSwitcher /> {/* 确保 ThemeSwitcher 组件的路径正确 */}
                    <Setting /> {/* 确保 Setting 组件的路径正确 */}
                </div>
            </div>
        </header>
    );
};

export default Header;
