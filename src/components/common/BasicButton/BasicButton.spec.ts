import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Button from './BasicButton.vue'

const defaultProps = {
  label: 'Hello world'
}

describe('render button', () => {
  it('is contain label', () => {
    const wrapper = mount(Button, { props: defaultProps })
    const buttonElement = wrapper.find('button')
    const buttonText = buttonElement.text()
    expect(buttonText).toBe(defaultProps.label)
  })
})
