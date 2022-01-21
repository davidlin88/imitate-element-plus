import { withInstall } from '@dejavu-ui/utils/with-install'
import HelloWorld from './src/hello-world.vue'

export const DeHelloWorld = withInstall(HelloWorld)
export default DeHelloWorld

export * from './src/hello-world.vue'
