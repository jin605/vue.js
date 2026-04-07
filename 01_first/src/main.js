// 앱 전체에서 공통으로 사용하는 스타일을 import해서 적용한다.
// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// 애플리케이션 인스턴스 생성
//  - 최상위 컴포넌트로 App 컴포넌트를 지정하고 아이디가 app인 요소에 연결한다.
createApp(App).mount('#app')
