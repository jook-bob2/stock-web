'use client';

import React, { InputHTMLAttributes, useState } from 'react';
import * as style from './searchInput.css';
import SearchIcon from '/public/icons/search.svg';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

/**
 * @description 검색 input
 */
export default function SearchInput({ ...props }: Props) {
  const [searchText, setSearchText] = useState('');

  /**
   * @description 인풋 change 이벤트
   */
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('value ', e.target.value);
    setSearchText(e.target.value);
  };

  /**
   * @description 검색 아이콘 클릭 시 동작
   */
  const onClickSearch = () => {
    console.log('search');
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <input
          {...props}
          className={style.input}
          maxLength={20}
          value={searchText}
          onChange={onChangeInput}
          placeholder='종목명을 입력하세요'
        />
        <button
          className={style.iconButton}
          onClick={onClickSearch}
          aria-label='search icon button'>
          <SearchIcon className={style.searchIcon} />
        </button>
      </div>
    </div>
  );
}
