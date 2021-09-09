import styled, { css } from 'styled-components'
import Link from 'next/link'

export const WebLink = ({ href, value }) => {
	return (
		<Link href={href} passHref>
			<SLink>{value}</SLink>
		</Link>
	)
}

export const LocaleLink = ({ locale, setLocale, value, show }) => {
	return (
		<SLocaleLink
			active={locale === value}
			onClick={() => setLocale(value)}
			show={show}
		>
			{value.toUpperCase()}
		</SLocaleLink>
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

export const SLocaleLink = styled.p(
	({ theme, active, show }) => css`
		text-decoration: none;
		font-family: 'Mulish';
		font-style: normal;
		font-weight: ${active ? 'bold' : 'normal'};
		font-size: 12px;
		line-height: 15px;
		text-transform: uppercase;
		color: #ffffff;
		text-shadow: 0px 0px 12px rgba(1, 52, 8, 0.8);
		margin-left: 30px;
		&:last-of-type {
			margin-left: 10px;
		}
		cursor: pointer;
		@media only screen and (max-width: ${theme.bp.mobile}) {
			${!show &&
			css`
				margin-left: 20px;
				&:last-of-type {
					margin-right: 20px;
				}
				display: block;
			`}
			${show &&
			css`
				display: none;
			`}
		}
	`
)

export const LocaleSeparator = styled.p(
	({ active }) => css`
		text-decoration: none;
		font-family: 'Mulish';
		font-style: normal;
		font-weight: ${active ? 'bold' : 'normal'};
		font-size: 12px;
		line-height: 15px;
		text-transform: uppercase;
		color: #ffffff;
		text-shadow: 0px 0px 12px rgba(1, 52, 8, 0.8);
		cursor: pointer;
		margin-left: 30px;
		&:last-of-type {
			margin-left: 10px;
		}
	`
)
