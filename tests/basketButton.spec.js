import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import component from "../src/components/ui/BasketButton.vue";

describe("BasketButton component", () => {
  
  it("render button tag", () => {
    const wrapper = mount(component);
    const btn = wrapper.findAll('button')
    expect(btn).toHaveLength(1)
  });

  it('render button default slot', () => {
    const wrapper = mount(component, {
      slots: {
        default: 'Test slot'
      }
    })

    expect(wrapper.html()).toContain('Test slot')
  })
});