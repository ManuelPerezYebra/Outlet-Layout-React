import styled from 'styled-components';

const StyledTabs = styled.button`
	background-color: transparent;
	color: ${({ $isActive }) => ($isActive ? 'white' : 'white')};
	border: none;
	border-bottom: ${({ $isActive, $color }) =>
		$isActive ? `4px solid white` : 'none'};
	padding-bottom: 20px;
	font-size: 16px;
	letter-spacing: 2.7px;
	font-family: 'Barlow Condensed';
	cursor: pointer;
`;

export { StyledTabs };
