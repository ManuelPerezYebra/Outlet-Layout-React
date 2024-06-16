import styled from 'styled-components';

const StyledHome = styled.div`
	background-image: url(home/background-home-desktop.jpg);
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	height: 100vh;
	position: absolute;
	top: 0;
	z-index: -1;
	display: flex;
	justify-content: space-between;
	text-align: justify;
`;
const Text = styled.p`
	font-size: 18px;
	font-weight: lighter;
	letter-spacing: 3px;
	font-family: 'Barlow';
	line-height: 32px;
`;
const Title = styled.p`
	font-size: 28px;
	font-weight: lighter;
	letter-spacing: 4.7px;
	font-family: 'Barlow Condensed';
	line-height: 32px;
`;
const InfoContainer = styled.div`
	margin-top: 387px;
	margin-left: 165px;
	width: 450px;
	height: 382px;
	color: white;
	h1 {
		font-family: 'Source Serif 4';
		font-weight: 300;
		font-size: 150px;
		margin: 0px;
	}
`;

const ExploreContainer = styled.div`
	margin-top: 495px;
	margin-right: 165px;
	display: flex;
	height: 382px;
	text-align: center;
	justify-content: center;
	align-items: center;
	color: black;
	position: relative;

	h1 {
		font-family: 'Source Serif 4';
		font-weight: 300;
		font-size: 32px;
	}
	&::before {
		content: '';
		width: 274px;
		height: 274px;
		background-color: white;
		position: absolute;
		border-radius: 50%;
		z-index: -1;
	}
`;
export { StyledHome, InfoContainer, ExploreContainer, Text, Title };
