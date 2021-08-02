import styled, { css } from 'styled-components'

export const Logo = styled.img(
	({ theme }) => css`
		width: 162px;
		height: 56px;
		cursor: pointer;
		@media only screen and (max-width: ${theme.bp.mobile}) {
			width: 109px;
			height: 38px;
		}
	`
)

export const Hamburger = styled.img(
	({ theme, show }) => css`
		width: 30px;
		height: 18px;
		cursor: pointer;
		display: ${show ? 'block' : 'none'};
		&:active {
			transform: translateY(1px);
		}
	`
)

export const X = styled.img(
	({ theme, show }) => css`
		width: 23px;
		height: 22px;
		cursor: pointer;
		display: ${show ? 'block' : 'none'};
		&:active {
			transform: translateY(1px);
		}
	`
)
