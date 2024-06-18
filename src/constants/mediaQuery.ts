/**
 * @todo @vanilla-extract/sprinkles 마이그레이션 후 제거 예정
 */

/**
 * @desc 미디어 쿼리 상수 - SM 모바일
 */
export const MEDIA_SM_MOBILE = '280x';

/**
 * @desc 미디어 쿼리 상수 - 모바일
 */
export const MEDIA_MOBILE = '481px';

/**
 * @desc 미디어 쿼리 상수 - 소형 테블릿
 */
export const MEDIA_SM_TABLET = '674px';

/**
 * @desc 미디어 쿼리 상수 - 태블릿
 */
export const MEDIA_TABLET = '768px';

/**
 * @desc 미디어 쿼리 상수 - 랩탑
 */
export const MEDIA_LAPTOP = '1025px';

/**
 * @desc 미디어 쿼리 상수 - 데스크탑
 */
export const MEDIA_DESKTOP = '1281px';

// 미디어쿼리 조합형 prefix
const PREFIX = 'screen and (min-width:';
const MAX_PREFIX = 'screen and (max-width:';

/**
 * @desc 미디어 쿼리 상수 - 조합형
 * @MOBILE screen and (min-width: 481px)
 * @SMALL_TABLET screen and (min-width: 674px)
 * @TABLET screen and (min-width: 768px)
 * @LAPTOP screen and (min-width: 1025px)
 * @DESKTOP screen and (min-width: 1281px)
 */
export const MEDIA_QUERY = {
  SMALL_MOBILE: `${PREFIX} ${MEDIA_SM_MOBILE})`,
  MOBILE: `${PREFIX} ${MEDIA_MOBILE})`,
  SMALL_TABLET: `${PREFIX} ${MEDIA_SM_TABLET})`,
  TABLET: `${PREFIX} ${MEDIA_TABLET})`,
  LAPTOP: `${PREFIX} ${MEDIA_LAPTOP})`,
  DESKTOP: `${PREFIX} ${MEDIA_DESKTOP})`,

  MAX_SMALL_MOBILE: `${MAX_PREFIX} ${MEDIA_SM_MOBILE})`,
  MAX_MOBILE: `${MAX_PREFIX} ${MEDIA_MOBILE})`,
  MAX_SMALL_TABLET: `${MAX_PREFIX} ${MEDIA_SM_TABLET})`,
  MAX_TABLET: `${MAX_PREFIX} ${MEDIA_TABLET})`,
  MAX_LAPTOP: `${MAX_PREFIX} ${MEDIA_LAPTOP})`,
  MAX_DESKTOP: `${MAX_PREFIX} ${MEDIA_DESKTOP})`,
};
