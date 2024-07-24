import { MainServiceReqType, MainServiceResType } from '@/types/services';

/**
 * @description 메인 서비스
 * @param props
 * @returns MainServiceResType
 */
export default function MainService(props: MainServiceReqType): MainServiceResType {
  return {
    initData: props.initData,
  };
}
