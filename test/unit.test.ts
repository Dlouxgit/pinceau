import { readFile } from 'node:fs/promises'
import type { SFCDescriptor } from 'vue/compiler-sfc'
import { describe, expect, it } from 'vitest'
import { parseVueComponent } from 'pinceau/utils'
import * as Components from './fixtures/shared/components'

async function readComponent(name: keyof typeof Components) {
  const component = await readFile(Components[name].__file, 'utf8')

  let ast: false | SFCDescriptor = false
  try {
    ast = parseVueComponent(component).descriptor
  }
  catch (e) {}

  return {
    component,
    ast,
  }
}

describe('transforms', () => {
  it('can parse vue sfc', async () => {
    const { component, ast } = await readComponent('ComputedStyling')
    expect(component).toBeTruthy()
    expect(ast).toBeTruthy()
  })
})
