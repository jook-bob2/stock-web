import HomeTemplate from '@/components/atomics/templates/home/HomeTemplate';
import MainService from '@/services/main/MainService';
import { getServerInitData } from '@/utils/server-util';

export default async function Home() {
  const initData = await getServerInitData();
  const serviceProps = MainService({ initData });

  return <HomeTemplate {...serviceProps} />;
}
