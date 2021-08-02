import styled, { css, useTheme } from 'styled-components'
import Link from 'next/link'

export const MobileLink = ({ href, value, ...rest }) => {
	return (
		<Link href={href} passHref>
			<SLink {...rest}>{value}</SLink>
		</Link>
	)
}

export const ExternalLink = ({ href, value, ...rest }) => {
	const theme = useTheme()
	return (
		<Link href={href} passHref>
			<SLink marginTop={theme.spacing(6)} {...rest}>
				{value}
			</SLink>
		</Link>
	)
}

const SLink = styled.a(
	({ theme, color, active, marginTop }) => css`
		font-family: Mulish;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 35px;
		text-transform: uppercase;
		text-decoration: none;
		color: ${color ? color : theme.color.white};
		${active &&
		css`
			border-bottom: 2px solid ${theme.color.white};
		`}
		margin-top: ${marginTop ? marginTop : theme.spacing(2.5)};
		&:first-of-type {
			margin-top: 0;
		}
		@media only screen and (max-width: 960px) {
			font-size: 22px;
			line-height: 28px;
		}
	`
)
