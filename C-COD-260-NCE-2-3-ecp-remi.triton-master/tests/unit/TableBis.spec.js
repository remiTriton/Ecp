import { shallowMount, mount } from "@vue/test-utils";
import TableBis from "@/components/admin/TableBis.vue";
import AdminLinks from "@/components/admin/AdminLinks.vue";


test('setValue demo', async () => {
const wrapper = mount(TableBis)

const textInput = wrapper.find('input[type="text"]')
await textInput.setValue('some value')

expect(wrapper.find('input[type="text"]').element.value).toBe('some value')

const select = wrapper.find('select')
await select.setValue('Title')
expect(wrapper.find('select').element.value).toBe('Title')

await select.setValue('Author')
expect(wrapper.find('select').element.value).toBe('Author')

await select.setValue('Date')
expect(wrapper.find('select').element.value).toBe('Date')
})
test('check navlinks/admin', () => {
    const wrapper = mount(TableBis)
    const nav = wrapper.findComponent(AdminLinks)
    expect(nav.exists()).toBe(true)

})