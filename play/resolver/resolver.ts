import { kebabCase } from './utils'
import type { ComponentInfo, ComponentResolver, SideEffectsInfo } from './types'

export interface DejavuUiResolverOptions {
  /**
   * import style css or sass with components
   *
   * @default 'css'
   */
  importStyle?: boolean | 'css' | 'sass'
}

type DejavuUiResolverOptionsResolved = DejavuUiResolverOptions

function getSideEffects(
  dirName: string,
  options: DejavuUiResolverOptionsResolved
): SideEffectsInfo | undefined {
  const { importStyle } = options
  const esComponentsFolder = 'dejavu-ui/es/components'

  if (importStyle === 'sass') {
    return `${esComponentsFolder}/${dirName}/style/index`
  } else if (importStyle === true || importStyle === 'css') {
    return `${esComponentsFolder}/${dirName}/style/css`
  }
}

function resolveComponent(
  name: string,
  options: DejavuUiResolverOptionsResolved
): ComponentInfo | undefined {
  if (!name.match(/^De[A-Z]/)) return

  const partialName = kebabCase(name.slice(2)) // DeTableColumn -> table-column

  return {
    importName: name,
    path: `dejavu-ui/es`,
    sideEffects: getSideEffects(partialName, options),
  }
}

export function DejavuUiResolver(
  options: DejavuUiResolverOptions = {}
): ComponentResolver[] {
  let optionsResolved: DejavuUiResolverOptionsResolved | undefined

  async function resolveOptions() {
    if (optionsResolved) return optionsResolved
    optionsResolved = {
      importStyle: 'css',
      ...options,
    }
    return optionsResolved
  }

  return [
    {
      type: 'component',
      resolve: async (name: string) => {
        return resolveComponent(name, await resolveOptions())
      },
    },
  ]
}
