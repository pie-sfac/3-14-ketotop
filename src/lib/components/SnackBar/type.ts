export type SnackBarProps = {
  /**
   * 유저에게 알려야 할 내용
   */
  message: string;
  /**
   * 메세지가 지속되는 시간
   */
  duration: number;
  /**
   * 하단과의 여백: true이면 12px, false이면 24px
   */
  isAppbar: boolean;
  /**
   * 스낵바의 너비, default: 1024px
   */
  width?: string;
};
