import { useEffect, useRef, useState } from 'react';
import { createApp, reactive } from 'vue';

//@ts-ignore
import App from 'vue_project/App';
// const VueProject = lazy(() => import("vue_project/App" as any))

export const VueContainer = () => {
    const containerRef = useRef<any>();
    const [count,] = useState(0)
    const handleClick = () => { }
    const reactiveProps = reactive({onClick: handleClick, count})

    useEffect(() => {
        const vueApp = createApp(App, reactiveProps);
        vueApp.mount(containerRef.current);

        return () => {
            vueApp.unmount();
        };
    }, []);

    return <div ref={containerRef}></div>;
}
