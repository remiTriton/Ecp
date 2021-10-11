import { mount } from "@vue/test-utils";
import Table from "@/components/admin/Table.vue";
import AdminLinks from "@/components/admin/AdminLinks.vue";


test('setValue demo', async () => {
    const wrapper = mount(Table)

    const textInput = wrapper.find('input[type="text"]')
    await textInput.setValue('some value')

    expect(wrapper.find('input[type="text"]').element.value).toBe('some value')

    const select = wrapper.find('select')

    await select.setValue('Author')
    expect(wrapper.find('select').element.value).toBe('Author')

    await select.setValue('Title')
    expect(wrapper.find('select').element.value).toBe('Title')

    await select.setValue('Date')
    expect(wrapper.find('select').element.value).toBe('Date')

    // requires <select multiple>
})

test('check navlinks/admin',  () => {
    beforeEach(() => {
        jest.spyOn(console, 'warn').mockImplementation(() => {});
      });
    const wrapper = mount(Table)
    const nav =  wrapper.findComponent(AdminLinks)
     expect(nav.exists()).toBe(true)

})