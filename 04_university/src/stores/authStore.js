import apiClient from "@/api";
import { defineStore } from "pinia";
import { reactive } from "vue";


export const useAuthStore = defineStore('auth', () =>{
    // 사용자 정보
    const tokenInfo = reactive({
        accessToken: '',
        type: '',
        username: '',
        authorities: [],
        issuedAt: 0,
        expiredAt: 0
    });

    // 로그인 처리
    const login = async (formData) => {
        const response = await apiClient.post(
            '/api/v1/auth/login',
            formData,
            {
                // 브라우저가 서버로 요청을 보낼 때 쿠키, 인증 헤더 등을 함께 포함하도록 허용하는 설정
                withCredentials: true
            }
        );

        console.log(response);

        if (response.status === 200) {
            // TokenInfo 속성을 response.data.items[0]의 속성으로 변경한다.
            Object.assign(tokenInfo, response.data.item[0]);
        }

        return response.data;
    };

    return {tokenInfo, login};
});

