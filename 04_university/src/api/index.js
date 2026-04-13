

// Axios
//  - HTTP 기반 통신을 지원하는 자바스크립트 라이브러리

import { useAuthStore } from "@/stores/authStore";
import axios from "axios";

//  - 브라우저 호환성, JSON 자동 변환 기능 등의 장점을 가지고 있다.
const apiClient = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 2000,

});

// Axios 인터셉터
//  - 요청(request) 또는 응답(response)이 처리되기 전에 가로채서 특정 로직을 수행하도록 하는 기능

// 요청(Request) 인터셉터
//  - HTTP 여창이 서버로 전송되기 전에 실행된다.
apiClient.interceptors.request.use(

    // 모든 요청에 JWT 토큰을 헤더에 추가하도록 인터셉터를 구현한다.
    (config) => {
        if (config._skipInterceptor) {
            return config;
        }

        // 피니아 스토어에서 accessToken 가져온다.
        const authStore = useAuthStore();
        const accessToken = authStore.tokenInfo.accessToken;

        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }

        return config;

    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiClient;

