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
	({ theme }) => css`
		width: 30px;
		height: 18px;
		cursor: pointer;
	`
)
