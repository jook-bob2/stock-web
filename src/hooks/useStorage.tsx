type SrorageKeyType =
  | 'volume'
  | 'redirectUrl'
  | 'urlChanged'
  | 'isSigned'
  | 'fontSize'
  | 'hybridData'
  | 'payResultMsg'
  | 'previousBuildId'
  | 'volume'
  | 'storeId'
  | 'blockData'
  | string;
export interface SetItemType {
  key: SrorageKeyType;
  value: any;
  options?: StorageOptionsType;
}

export interface StorageOptionsType {
  addYear?: number;
  addMonth?: number;
  addDate?: number;
  addHour?: number;
  addMinute?: number;
  isSession?: boolean;
}

export interface StorageResponseType {
  value: any;
  expiration: number;
  creation: number;
}

export default function useStorage() {
  const setItem = ({ key, value, options }: SetItemType) => {
    if (typeof window !== 'undefined') {
      const d = new Date();
      const curTime = new Date().getTime();
      const creation = d.getTime();
      options?.addYear ? d.setFullYear(d.getFullYear() + Number(options.addYear)) : d.setFullYear(d.getFullYear());
      options?.addMonth ? d.setMonth(d.getMonth() + Number(options.addMonth)) : d.setMonth(d.getMonth());
      options?.addDate ? d.setDate(d.getDate() + Number(options.addDate)) : d.setDate(d.getDate());
      options?.addHour ? d.setHours(d.getHours() + Number(options.addHour)) : d.setHours(d.getHours());
      options?.addMinute ? d.setMinutes(d.getMinutes() + Number(options.addMinute)) : d.setMinutes(d.getMinutes());
      let expiration = new Date(d).getTime();

      if (expiration === curTime) {
        expiration = new Date(d).setDate(d.getDate() + 1);
      }

      if (options?.isSession) {
        try {
          window.sessionStorage.setItem(key, JSON.stringify({ value, creation, expiration }));
        } catch (error: any) {
          console.error('Error accessing sessionStorage : ', error);
        }
      } else {
        try {
          window.localStorage.setItem(key, JSON.stringify({ value, creation, expiration }));
        } catch (error: any) {
          console.error('Error accessing localStorage : ', error);
        }
      }
    }
  };

  const getItem = ({
    key,
    option,
  }: {
    key: SrorageKeyType;
    option?: StorageOptionsType;
  }): StorageResponseType | null => {
    if (typeof window !== 'undefined') {
      if (option?.isSession) {
        try {
          const item = window.sessionStorage.getItem(key);
          if (!item) return null;
          return JSON.parse(item);
        } catch (error: any) {
          console.error('Error accessing sessionStorage : ', error);
        }
      } else {
        try {
          const item = window.localStorage.getItem(key);
          if (!item) return null;
          return JSON.parse(item);
        } catch (error: any) {
          console.error('Error accessing localStorage : ', error);
        }
      }
    }

    return null;
  };

  const removeItem = ({ key }: { key: SrorageKeyType }) => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.removeItem(key);
      } catch (error: any) {
        console.error('Error accessing localStorage : ', error);
      }
    }
  };

  const removeSessionItem = ({ key }: { key: SrorageKeyType }) => {
    if (typeof window !== 'undefined') {
      try {
        window.sessionStorage.removeItem(key);
      } catch (error: any) {
        console.error('Error accessing sessionStorage : ', error);
      }
    }
  };

  const clearItems = () => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.clear();
      } catch (error) {
        console.error('Error accessing localStorage : ', error);
      }
    }
  };

  const clearExpiredDataFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
      try {
        // 현재 시간
        const currentTime = new Date().getTime();

        // 로컬 스토리지의 모든 키를 가져온다.
        const keys = Object.keys(window.localStorage);

        // 키를 순회하며 데이터를 확인하고 만료된 데이터를 삭제한다.
        keys.forEach((key: any) => {
          try {
            // 로컬 스토리지에서 데이터를 가져온다.
            const data = getItem({ key });
            const value = data?.value;

            if (value) {
              const expirationTime = data.expiration;

              if (expirationTime && expirationTime <= currentTime) {
                // 데이터가 만료된 경우 로컬 스토리지에서 삭제한다.
                removeItem({ key });
              }
            }
          } catch (error) {
            console.error(`Error clearing expired data for ${key}: `, error);
          }
        });
      } catch (error) {
        console.error('Error accessing localStorage : ', error);
      }
    }
  };

  return {
    setItem,
    getItem,
    removeItem,
    removeSessionItem,
    clearItems,
    clearExpiredDataFromLocalStorage,
  };
}
