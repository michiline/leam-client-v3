import styled, { css } from 'styled-components'
import Link from 'next/link'
import { H3, Subtitle } from '../Text'

const BlogCategoryCard = (props) => {
	const { color, href, title, description, img } = props
	return (
		<Link href={href} passHref>
			<BlogCategoryCardContainer color={color} img={img}>
				<Overlay color={color} img={img} />
				<TextContainer>
					<SH3>{title}</SH3>
					<SSubtitle>{description}</SSubtitle>
				</TextContainer>
			</BlogCategoryCardContainer>
		</Link>
	)
}

const BlogCategoryCardContainer = styled.div(
	({ theme, img }) => css`
		position: relative;
		width: 100%;
		height: 310px;
		display: flex;
		flex-direction: column;

		border-radius: 20px 2px;
		background-image: url(${img});
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		display: flex;
		flex-direction: row;
		justify-content: center;
		overflow: hidden;
		&:hover {
			cursor: pointer;
		}
		z-index: 3;
		margin-left: ${theme.spacing(4)};
		&:first-of-type {
			margin-left: 0;
		}
		@media only screen and (max-width: ${theme.bp.mobile}) {
			margin-top: ${theme.spacing(2)};
			height: 120px;
			margin-left: 0px;
			&:first-of-type {
				margin-top: 0;
			}
		}
	`
)

const Overlay = styled.div(
	({ theme, color }) => css`
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 0.1);
		${color === 'orange' &&
		css`
			opacity: 0.8;
			${BlogCategoryCardContainer}:hover & {
				opacity: 1;
			}
			background: linear-gradient(
				0deg,
				rgba(232, 168, 124, 1),
				rgba(232, 168, 124, 1)
			);
		`}
		${color === 'green' &&
		css`
			opacity: 0.8;
			${BlogCategoryCardContainer}:hover & {
				opacity: 1;
			}
			background: linear-gradient(
				0deg,
				rgba(65, 179, 163, 1),
				rgba(65, 179, 163, 1)
			);
		`}
	${color === 'blue' &&
		css`
			opacity: 0.8;
			${BlogCategoryCardContainer}:hover & {
				opacity: 1;
			}
			background: linear-gradient(
				0deg,
				rgba(130, 198, 219, 1),
				rgba(130, 198, 219, 1)
			);
		`}
	border-radius: 20px 2px;
	`
)

const TextContainer = styled.div(
	({ theme }) => css`
		width: 100%;
		display: flex;
		flex-direction: column;
		z-index: 2;
		padding-left: 20px;
		align-items: flex-start;
		transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 0.1);
		transform: translateY(200px);
		${BlogCategoryCardContainer}:hover & {
			transform: translateY(60px);
		}
		@media only screen and (max-width: ${theme.bp.mobile}) {
			transform: translateY(50px);
			${BlogCategoryCardContainer}:hover & {
				transform: translateY(8px);
			}
		}
	`
)

const SH3 = styled(H3)(
	({ theme }) => css`
		color: white;
		width: 50%;
		transform: rotate(-4.44deg);
		@media only screen and (max-width: ${theme.bp.mobile}) {
			transform: rotate(-3deg);
			width: 100%;
		}
	`
)

const SSubtitle = styled(Subtitle)(
	({ theme }) => css`
		margin-top: 60px;
		color: white;
		width: 70%;
		transition: margin 0.2s cubic-bezier(0.4, 0, 0.2, 0.1);
		${BlogCategoryCardContainer}:hover & {
			margin-top: ${theme.spacing(4)};
		}
		@media only screen and (max-width: ${theme.bp.mobile}) {
			width: 90%;
			${BlogCategoryCardContainer}:hover & {
				margin-top: ${theme.spacing(3)};
			}
		}
		text-align: start;
	`
)

export default BlogCategoryCard
