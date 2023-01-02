import React, { FC, useEffect } from 'react';
import {AutoComplete, Layout} from "antd"
import { fetchPosts } from '../store/reducers/ActionCreators';
import { useAppDispatch } from '../hooks/redux';

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
  <Sider 
    className="site-layout-background" 
    width={200} 
    style={{ padding: '24px 0', background: '#ffffff', marginRight: '10px' }} 
  >

    <AutoComplete
      style={{ width: 200 }}
      placeholder="try to type something"
      onChange={selectOnChange}
    />
  </Sider>
  );
};

export default SideBar;