import styled, { css } from 'styled-components'

export const ExploreBlogCategoryContainer = styled.div(
	({ theme }) => css`
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		max-width: 780px;
		@media only screen and (max-width: ${theme.bp.mobile}) {
			width: 100%;
			max-width: 525px;
			align-items: center;
			padding-left: ${theme.spacing(3)};
			padding-right: ${theme.spacing(3)};
		}
	`
)

export const ExploreBlogCategoryCardContainer = styled.div(
	({ theme }) => css`
		display: flex;
		flex-direction: row;
		margin-top: ${theme.spacing(5)};
		@media only screen and (max-width: ${theme.bp.mobile}) {
			align-items: flex-start;
			flex-direction: column;
			margin-top: ${theme.spacing(3)};
		}
	`
)
