/// <reference types="vite/client" />

declare module '@@vite/env' {
  interface ImportMetaEnv {
    VITE_SERVER_URL: string;
    // 필요한 경우 다른 환경 변수들을 여기에 추가하실 수 있습니다.
  }
}
