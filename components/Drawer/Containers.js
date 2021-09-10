import styled, { css } from 'styled-components'

export const DrawerContainer = styled.div(
	({ theme, show }) => css`
		position: fixed;
		top: 0;
		right: 0;
		opacity: 0;
		visibility: hidden;
		width: 100%;
		height: 100%;
		background-color: ${theme.color.dark};
		transition-property: visibility, opacity;
		transition-duration: 500ms;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		${show &&
		css`
			opacity: 1;
			visibility: visible;
		`}
		z-index: 10;
		color: ${theme.color.white};
		overflow: auto;
	`
)

export const CenterContainer = styled.div(
	({ theme, show }) => css`
		margin-top: 80px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		position: relative;
		@media only screen and (max-width: ${theme.bp.mobile}) {
			max-width: 250px;
		}
		min-height: 400px;
	`
)

export const LinksContainer = styled.div(
	({ theme, show }) => css`
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		@media only screen and (max-width: ${theme.bp.mobile}) {
			max-width: 250px;
		}
	`
)
