import HomeSvg from '/public/icons/home.svg';
import BarChartSvg from '/public/icons/bar-chart.svg';
import BookmarkSvg from '/public/icons/bookmark.svg';
import ListSvg from '/public/icons/list.svg';

/**
 * @description 사이드 메뉴 목록
 */
export const SIDE_MENU_LIST = [
  {
    name: '스톡 홈',
    icon: HomeSvg,
    link: '/',
  },
  {
    name: '종목목록',
    icon: BarChartSvg,
    link: '/item1',
  },
  {
    name: '북마크',
    icon: BookmarkSvg,
    link: '/item2',
  },
  {
    name: '최근검색',
    icon: ListSvg,
    link: '/item3',
  },
];

/**
 * @description 바텀 메뉴 목록
 */
export const BOTTOM_MENU_LIST = [
  {
    name: '스톡 홈',
    icon: HomeSvg,
    link: '/',
  },
  {
    name: '종목목록',
    icon: BarChartSvg,
    link: '/item1',
  },
  {
    name: '최근검색',
    icon: ListSvg,
    link: '/item3',
  },
];
