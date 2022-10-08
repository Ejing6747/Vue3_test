import { reactive, onMounted, onBeforeUnmount } from "vue";
function usePoint() {
  //实现鼠标打点的数据
  let point = reactive({
    x: 0,
    y: 0,
  });
  function savePoint(event) {
    point.x = event.pageX;
    point.y = event.pageY;
    console.log(event.pageX, event.pageY);
  }
  //实现鼠标打点的数据
  onMounted(() => {
    window.addEventListener("click", savePoint);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", savePoint);
  });
  return point;
}
export default usePoint;
