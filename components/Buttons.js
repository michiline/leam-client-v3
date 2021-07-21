import styled, { css } from 'styled-components'

export const SubheadingButton = styled.button(
	({ theme, color, marginTop, align }) => css`
		border: 3px solid #fffcf9;
		border-radius: 20px 2px;
		background: transparent;
		font-family: Lobster;
		font-style: normal;
		font-weight: normal;
		font-size: 24px;
		line-height: 30px;
		color: #fffcf9;
		transform: matrix(1, 0.01, -0.01, 1, 0, 0);
		cursor: pointer;
		padding: ${theme.spacing(1)} ${theme.spacing(4)};
		margin-top: ${marginTop ? theme.spacing(marginTop) : 0};
		${align &&
		css`
			align-self: ${theme.alignSelf[align]};
		`};
		@media only screen and (max-width: 960px) {
			font-size: 18px;
			line-height: 22.5px;
			align-self: flex-start;
			padding: ${theme.spacing(0.5)} ${theme.spacing(2)};
		}
	`
)
