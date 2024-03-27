import { reactive, onMounted, onBeforeUnmount } from "vue"
export default function() {
    let pointer = reactive({
        x: 0,
        y: 0
    })
    function getPointer(event) {
        console.log(event.pageX, event.pageY)
        pointer.x = event.pageX
        pointer.y = event.pageY
    }
    onMounted(() => {
        window.addEventListener('click', getPointer)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('click', getPointer)
    })
    return pointer
}