import { useEffect, useRef } from 'react';
import { createApp } from 'vue';

//@ts-ignore
import App from 'vue_project/App';
// const VueProject = lazy(() => import("vue_project/App" as any))

export const VueContainer = () => {
    const containerRef = useRef<any>(null);

    useEffect(() => {
        const vueApp = createApp(App);
        vueApp.mount(containerRef.current);

        return () => {
            vueApp.unmount();
        };
    }, []);

    return <div ref={containerRef}></div>;
}
