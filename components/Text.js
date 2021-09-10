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

export const H2 = styled.h2(
	({ theme, color, marginTop }) => css`
		font-family: Lobster;
		font-style: normal;
		font-weight: normal;
		font-size: 38px;
		line-height: 47px;
		width: max-content;
		color: ${color ? theme.color[color] : theme.color.dark};
		margin-top: ${marginTop ? theme.spacing(marginTop) : 0};
		@media only screen and (max-width: ${theme.bp.mobile}) {
			font-size: 24px;
			line-height: 35px;
			margin-top: ${marginTop ? theme.spacing(marginTop / 2) : 0};
		}
	`
)

export const H3 = styled.h3(
	({ theme, color, marginTop }) => css`
		font-family: Lobster;
		font-style: normal;
		font-weight: normal;
		font-size: 28px;
		line-height: 35px;
		width: max-content;
		color: ${color ? theme.color[color] : theme.color.dark};
		margin-top: ${marginTop ? theme.spacing(marginTop) : 0};
		@media only screen and (max-width: ${theme.bp.mobile}) {
			font-size: 20px;
			line-height: 35px;
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

export const Subtitle = styled.p(
	({ theme, textAlign }) => css`
		font-family: Mulish;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 20px;
		color: #434850;
		text-align: center;
		text-align: ${textAlign};
		@media only screen and (max-width: ${theme.bp.mobile}) {
			font-size: 14px;
			line-height: 18px;
		}
	`
)
