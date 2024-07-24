import { useState, useCallback, KeyboardEvent } from 'react';

type EventType =
  | React.FormEvent<HTMLFormElement>
  | React.MouseEvent
  | KeyboardEvent<HTMLDivElement | HTMLFormElement | HTMLInputElement>;

/**
 * 콜백 함수의 타입 정의
 */
export type CallbackFunction = (event: EventType, ...args: any[]) => void;

/**
 * 디바운스 기능을 하는 커스텀 훅
 * @param callback - 클릭 시 실행할 콜백 함수
 * @param delay - 클릭 이벤트 간격을 조절하는 딜레이 (기본값 : 0ms)
 * @returns {Object} - 클릭 핸들러와 클릭 가능 여부를 포함한 객체
 */
function useDebouncedClick(callback: CallbackFunction, delay = 0) {
  /**
   * 클릭 가능 여부를 관리하는 상태
   */
  const [isClickable, setIsClickable] = useState(true);

  /**
   * 디바운스된 클릭 핸들러
   * @param args - 클릭 시 콜백 함수에 전달할 Rest 파라미터
   */
  const handleClick = useCallback(
    async (event: EventType, ...args: any[]) => {
      // 클릭 가능한 상태인 경우에만 콜백 실행
      if (isClickable) {
        // 클릭 불가능 상태로 변경
        setIsClickable(false);
        // 콜백 함수 호출
        await callback(event, ...args);
        // 주어진 딜레이 이후에 클릭 가능한 상태로 변경
        if (delay > 0) {
          setTimeout(() => {
            setIsClickable(true);
          }, delay);
        } else {
          setIsClickable(true);
        }
      }
    },
    [callback, isClickable, delay],
  );

  // 클릭 핸들러와 클릭 가능 여부를 반환
  return { handleClick, isClickable };
}

export default useDebouncedClick;
