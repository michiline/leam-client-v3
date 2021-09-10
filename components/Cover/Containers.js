import styled, { css } from 'styled-components'

export const CenterContainer = styled.div(
	({ theme, color }) => css`
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		width: 100%;
		max-width: 780px;
		@media only screen and (max-width: ${theme.bp.mobile}) {
			padding-left: ${theme.spacing(3)};
			padding-right: ${theme.spacing(3)};
			max-width: 525px;
		}
	`
)

export const CoverContainer = styled.div`
	width: 100%;
	height: 100vh;
	background: linear-gradient(
			0deg,
			rgba(28, 57, 74, 0.3),
			rgba(28, 57, 74, 0.3)
		),
		url(${(props) => props.src});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`
