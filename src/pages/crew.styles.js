import styled from 'styled-components';

const StyledCrew = styled.div`
	background-image: url(crew/background-crew-desktop.jpg);
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
const Title = styled.div`
	display: flex;
	width: 100%;
	height: fit-content;
	font-family: 'Barlow Condensed';
	margin-top: 212px;
	align-items: center;
	margin-bottom: 154px;
	gap: 24px;
	h1 {
		color: white;
		font-size: 28px;
		font-weight: normal;
	}
	span {
		font-size: 28px;
		color: white;
		opacity: 0.25;
	}
`;
const InfoContainer = styled.div`
	color: white;
	margin-left: 166px;
	width: 35%;
	p {
		font-family: 'Barlow Condensed';
		margin: 0px;
		padding: 0px;
		font-size: 32px;
		opacity: 0.5;

		font-weight: 100;
	}
	h2 {
		font-family: 'Barlow Condensed';
		font-size: 56px;
		font-weight: 400;
		letter-spacing: 10px;
		margin-top: 15px;
	}
`;
const Text = styled.h3`
	font-size: 18px;
	font-weight: lighter;
	font-family: 'Barlow';
	line-height: 32px;
`;
const ImgContainer = styled.div`
	width: 50%;
	position: relative;
	img {
		position: absolute;
		right: 50%;
		transform: translateX(50%);
		bottom: 0;
	}
`;
export { StyledCrew, Title, InfoContainer, ImgContainer, Text };
