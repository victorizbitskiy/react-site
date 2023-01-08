import React, { FC, useEffect } from 'react';
import {AutoComplete, Layout} from "antd"
import { fetchPosts } from '../store/reducers/ActionCreators';
import { useAppDispatch } from '../hooks/redux';
import './components.css'

const {Sider} = Layout

const SideBar: FC = () => {
  const dispatch = useAppDispatch()

  const selectOnChange = (inputValue, option) => {
    if (inputValue){
      dispatch(fetchPosts({
        titleLike: inputValue
    }))
    }
  }

  return (
    <>
    <Sider className='side-bar' width={180} >
      <div className='sider-search'>Найти пост:</div>
      <AutoComplete
        style={{ width: 180 }}
        placeholder="try to type something"
        onChange={selectOnChange}
      />
    </Sider>
    </>
  );
};

export default SideBar;