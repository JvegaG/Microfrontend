import { useEffect } from 'react';
import { createApp, defineCustomElement } from 'vue';
//@ts-ignore
import App from 'vue_project/App'
// const VueProject = lazy(() => import("vue_project/App" as any))

export const VueWrapper = () => {
    useEffect(() => {
        // Crea una aplicación Vue
        const app = createApp(App);

        // Define el componente Vue como un Custom Element
        const AppElement = defineCustomElement(App);
        // Verifica si el Custom Element ya está definido antes de definirlo
        if (!customElements.get('vue-app')) {
            customElements.define('vue-app', AppElement);
        }

        // Monta el Custom Element en el contenedor deseado
        const element = document.createElement('vue-app');
        document.getElementById('vue-container')?.appendChild(element);
    }, []);

    return <div id="vue-container"></div>;
}
