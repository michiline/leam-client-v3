import styled, { css } from 'styled-components'

export const H1 = styled.h1(
	({ theme, color }) => css`
		font-family: Lobster;
		font-style: normal;
		font-weight: normal;
		font-size: 85px;
		line-height: 106px;
		color: ${color ? theme.color[color] : theme.color.white};
		width: max-content;
		@media only screen and (max-width: ${theme.bp.mobile}) {
			font-size: 30px;
			line-height: 37.5px;
		}
	`
)

export const Subheading = styled.p(
	({ theme, color, marginTop }) => css`
		font-family: 'Mulish';
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 23px;
		color: ${color ? theme.color[color] : theme.color.white};
		margin-top: ${marginTop ? theme.spacing(marginTop) : 0};
		@media only screen and (max-width: ${theme.bp.mobile}) {
			font-size: 16px;
			line-height: 22px;
		}
	`
)
