import styled from 'styled-components';

const StyledDestination = styled.div`
	background-image: url(destination/background-destination-desktop.jpg);
	background-size: cover;
	background-repeat: no-repeat;

	width: 100%;
	height: 100vh;
	position: absolute;
	top: 0;
	z-index: -1;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding-left: 15vw;
	padding-right: 15vw;
	gap: 5vw;
`;
const PlanetContainer = styled.div`
	color: white;
	width: 60%;
	display: flex;
	flex-direction: column;
	gap: 97px;

	span {
		font-size: 28px;
		font-family: 'Barlow Condensed';
		opacity: 0.5;
	}
	h1 {
		font-family: 'Barlow Condensed';
		font-size: 28px;
		font-weight: 200;
	}

	img {
		width: 445px;
		text-align: center;
	}
`;
const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
`;
const InfoContainer = styled.div`
	width: 40%;
	color: white;
	margin: auto;
	position: relative;
	h1 {
		font-size: 100px;
		font-family: 'Bellafair';
		font-weight: lighter;
		margin-bottom: 0;
		margin-top: 37px;
	}
	p {
		font-family: 'Barlow';
		font-size: 18px;
		line-height: 32px;
		font-weight: 200;
	}
`;
const StyledHr = styled.hr`
	color: #979797;
	width: 100%;
	opacity: 0.4;
	position: absolute;
`;
const DataContainer = styled.div`
	display: flex;
	gap: 79px;
`;

export {
	StyledDestination,
	PlanetContainer,
	TitleContainer,
	InfoContainer,
	StyledHr,
	DataContainer
};
