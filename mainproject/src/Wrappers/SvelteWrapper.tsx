import { useEffect, useRef } from 'react';

//@ts-ignore
import App from 'svelte_project/App'
// const SvelteProject = lazy(() => import("svelte_project/App" as any))

export const SvelteWrapper = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const app = new App({
            target: containerRef.current,
            props: {
                name: 'Svelte in React'
            }
        });

        return () => {
            app.$destroy();
        };
    }, []);

    return <div ref={containerRef}></div>;
}
