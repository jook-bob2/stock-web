import { useApiQuery } from '@/hooks/useApi';
import { getUserInfo } from '@/net/apis/user/userApi';
import { HomeServiceReqType, HomeServiceResType } from '@/types/services';

/**
 * @description 홈 서비스
 * @param props
 * @returns HomeServiceResType
 */
export default function HomeService(props: HomeServiceReqType): HomeServiceResType {
  const { userInitData } = props;
  const id = '4';

  const { data, isLoading } = useApiQuery(id ? ['user', id] : null, () => getUserInfo({ id }), {
    initialData: userInitData,
  });

  return {
    initData: props.initData,
    userData: data,
    isLoading,
  };
}
