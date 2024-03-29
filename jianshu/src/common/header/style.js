import styled from 'styled-components';
import logoPic from '../../statics/logo.png';
import logoOne from '../../statics/logo1.png';

export const HeaderWrapper = styled.div `
  height: 57px;
  position: relative;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background-image: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div `
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const NavItem = styled.div `
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  cursor: pointer;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.login{
    font-size: 15px;
  }
  &.active{
    color: #ea6f5a;
  }
`;

export const NavImg = styled.a `
  margin-top:16px;
  display: block;
  width: 56.81px;
  height: 25px;
  background-image: url(${logoOne});
  background-size: contain;
  background-repeat: no-repeat;
  &.right {
    float: right;
  }
`;

export const SearchWrapper = styled.div `
  position: relative;
  float: left;
  .zoom{
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height:30px;
    border-radius: 15px;
    text-align: center;
    &.focused{
      background: #999;
      color: #fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})` width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused{
    width: 240px;
  }
  &.slide-enter{
    transition: all .3s ease-out;
  }
  &.slide-enter-active{
    width: 240px;
  }
  &.slide-exit{
    transition: all .3s ease-out;
  }
  &.slide-exit-active{
    width: 160px;
  }
`;

export const SeachInfo = styled.div `
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background: #fff;
  z-index: 1;
`;

export const SeachInfoTitle = styled.div `
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SeachInfoSwitch = styled.span `
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin{
    display: block;
    font-size: 12px;
    margin-right: 2px;
    float: left;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`;

export const SeachInfoList = styled.div `
  overflow: hidden;
`;

export const SeachInfoItem = styled.a `
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`;

export const Adition = styled.div `
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div `
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 10px 20px;
  line-heiht: 38px;
  border-radius: 19px;
  border:1px solid #ec6149;
  font-size: 14px;
  &.reg{
    color: #ec6149;
  }
  &.writting{
    color: #fff;
    background: #ec6149;
  }
`;