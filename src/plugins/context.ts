import type { UseAntColorModeReturn, UseAntI18nReturn, UseCommsClient } from '@antcde/vue-utils'
import type { Plugin } from 'vue'
import { useAntColorMode, useAntI18n, useCommsClient, useSingleton } from '@antcde/vue-utils'
import * as OBC from '@thatopen/components'

export interface Context {
  comms: UseCommsClient
  i18n: UseAntI18nReturn
  colorMode: UseAntColorModeReturn
  components: OBC.Components
}

export const [provideContext, injectContext]: [Plugin, () => Context] = useSingleton<Context>(
  'appContext',
  () => {
    const comms = useCommsClient()
    const i18n = useAntI18n(comms)
    const colorMode = useAntColorMode(comms)
    const components = new OBC.Components()

    return { comms, colorMode, i18n, components } as const
  },
  (context: Context) => {
      context.components.dispose()
      context.comms.unsubscribe();
  },
)
