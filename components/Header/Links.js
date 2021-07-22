import styled, { css } from 'styled-components'
import Link from 'next/link'

export const WebLink = ({ href, value }) => {
	return (
		<Link href={href} passHref>
			<SLink>{value}</SLink>
		</Link>
	)
}

const SLink = styled.a(
	({ theme }) => css`
		text-decoration: none;
		font-family: 'Mulish';
		font-style: normal;
		font-weight: bold;
		font-size: 12px;
		line-height: 15px;
		text-transform: uppercase;
		color: #ffffff;
		text-shadow: 0px 0px 12px rgba(1, 52, 8, 0.8);
		margin-left: 30px;
		&:first-of-type {
			margin-left: 0;
		}
	`
)
