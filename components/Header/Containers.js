import styled, { css, useTheme } from 'styled-components'

export const HeaderContainer = styled.h1(
	({ theme, color, height, scrolled, transparent }) => css`
		position: fixed;
		z-index: 100;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 120px;
		background-color: ${theme.color.dark};
		transform: translateY(0);
		${scrolled &&
		css`
			transform: translateY(-120px);
		`}
		${transparent &&
		css`
			background-color: transparent;
		`}
	transition-property: transform, background-color;
		transition-duration: 250ms;
		transition-delay: 0s, 0.25s;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		@media only screen and (max-width: ${theme.bp.mobile}) {
			height: 80px;
		}
	`
)

export const CenterContainer = styled.div(
	({ theme }) => css`
		width: 100%;
		max-width: 960px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		@media only screen and (max-width: ${theme.bp.mobile}) {
			padding-left: ${theme.spacing(3)};
			padding-right: ${theme.spacing(3)};
			max-width: none;
		}
	`
)

export const LinksContainer = styled.div(
	({ theme }) => css`
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		justify-content: space-between;
		width: max-width;
	`
)

export const IconsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`
