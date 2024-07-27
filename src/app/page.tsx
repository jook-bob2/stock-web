import HomeTemplate from '@/components/atomics/templates/home/HomeTemplate';
import { getServerInitData } from '@/utils/server-util';

export default async function Home() {
  const initData = await getServerInitData();
  return <HomeTemplate initData={initData} />;
}
