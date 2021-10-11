import { mount } from "@vue/test-utils";
import AddPost from "@/components/AddPost.vue";

test('NewPost test', async () => {

    const wrapper = mount(AddPost)

    const textInput = wrapper.find('input[type=text]')
    await textInput.setValue('HelloWorld')
    expect(wrapper.find('input[type=text]').element.value).toBe('HelloWorld')

    const textArea = wrapper.find('textarea')
    await textArea.setValue('salutlézami')
    expect(wrapper.find('textarea').element.value).toBe('salutlézami')
})