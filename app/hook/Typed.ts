import { useEffect } from 'react';
import Typed from 'typed.js';
export  interface TypedOptions {
    strings?: string[];
    typeSpeed?: number;
    backSpeed?: number;
    backDelay?: number;
    startDelay?: number;
    loop?: boolean;
    fadeOut?: boolean;
    preStringTyped?: (arrayPos: number, self: any) => void;
    onStringTyped?: (arrayPos: number, self: any) => void;
    onReset?: (self: any) => void;
}
const useTyped = (selector: string, options: TypedOptions) => {
    useEffect(() => {
        const typed = new Typed(selector, options);

        // 清理函数
        return () => {
            typed.destroy();
        };
    }, [selector, options]);
};
export default useTyped;
