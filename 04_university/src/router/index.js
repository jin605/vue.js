import { createRouter, createWebHistory } from 'vue-router'

// router 객체를 생성하기 위해서는 vue-router에서 제공하는 createRouter 함수를 사용한다.
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 요청 경로에 따라 렌더링할 컴포넌트를 배열로 지정한다.
  routes: [
    
  ],
})

export default router
