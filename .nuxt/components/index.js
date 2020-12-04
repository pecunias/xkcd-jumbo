export { default as Logo } from '../../components/Logo.vue'
export { default as ContainerComics } from '../../components/comics/ContainerComics.vue'
export { default as LoginUser } from '../../components/login/LoginUser.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyContainerComics = import('../../components/comics/ContainerComics.vue' /* webpackChunkName: "components/comics/ContainerComics" */).then(c => c.default || c)
export const LazyLoginUser = import('../../components/login/LoginUser.vue' /* webpackChunkName: "components/login/LoginUser" */).then(c => c.default || c)
