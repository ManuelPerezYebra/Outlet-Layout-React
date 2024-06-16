import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.div`
	font-family: 'Barlow Condensed';
	color: white;
	display: flex;
	justify-content: space-between;
	margin-top: 40px;
	margin-left: 55px;
	align-items: center;
`;
const StyledNav = styled.nav`
	display: flex;
	gap: 50px;
	justify-content: center;
	width: 45vw;
	height: 96px;
	backdrop-filter: blur(5px);
	box-shadow: 0px 13px 10px -1px rgba(0, 0, 0, 0.33);
	color: white;
	font-size: 16px;
	align-items: center;
	position: relative;

	&::before {
		content: '';
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.05);
		background-color: rgba(0, 0, 0, 0.6);
		position: absolute;
		opacity: 0.4;
		filter: blur(2px);
		width: 45vwpx;
		height: 96px;
		z-index: -1;
	}
`;
const StyledLink = styled(Link)`
	align-items: center;
	gap: 14px;
	display: inline-flex;
	cursor: pointer;
	color: white;
	padding: 40px 0px 40px 0px;

	border-bottom: 4px solid white;
`;
const StyledHr = styled.hr`
	position: absolute;
	opacity: 0.2;
	top: 45%;
	transform: translateY(-50%);
	left: -70%;
	width: 35vw;
`;
export { StyledHeader, StyledNav, StyledLink, StyledHr };
