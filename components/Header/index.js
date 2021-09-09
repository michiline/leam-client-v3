import { useTheme } from 'styled-components'
import useWindow from '../../common/hooks/useWindow'
import useScrolledDirection from '../../common/hooks/useScrolledDirection'
import { HeaderContainer, CenterContainer, LinksContainer } from './Containers'
import { Hamburger, X, Logo } from './Icons'
import { WebLink, LocaleLink, LocaleSeparator } from './Links'
import { extractPx } from '../../common/utils'
import Link from 'next/link'

const Header = ({ show, handleOpen, handleClose, locale, setLocale, text }) => {
	const { weekend, local, distant, gallery, about } = text.header
	const { scrollY, scrolled } = useScrolledDirection({ boundary: 0 })
	const { width } = useWindow()
	const theme = useTheme()
	let nav
	if (width > extractPx(theme.bp.mobile)) {
		nav = (
			<LinksContainer>
				<WebLink href='/category/weekend' value={weekend} />
				<WebLink href='/category/local' value={local} />
				<WebLink href='/category/distant' value={distant} />
				<WebLink href='/gallery' value={gallery} />
				<WebLink href='/about' value={about} />
				<LocaleSeparator>|</LocaleSeparator>
				<LocaleLink
					locale={locale}
					setLocale={setLocale}
					value='hr'
				></LocaleLink>
				<LocaleLink locale={locale} setLocale={setLocale} value='en' />
			</LinksContainer>
		)
	} else {
		nav = (
			<LinksContainer>
				<LocaleLink
					locale={locale}
					setLocale={setLocale}
					value='hr'
					show={!show}
				></LocaleLink>
				<LocaleLink
					locale={locale}
					setLocale={setLocale}
					value='en'
					show={!show}
				/>
				<Hamburger
					src='/images/hamburger.png'
					onClick={handleOpen}
					show={!show}
				/>
				<X src='/images/close.png' onClick={handleClose} show={show} />
			</LinksContainer>
		)
	}
	return (
		<HeaderContainer scrolled={scrolled} transparent={scrollY == 0}>
			<CenterContainer show={show}>
				<Link href='/'>
					<Logo src='/images/logo-text.png' />
				</Link>
				{nav}
			</CenterContainer>
		</HeaderContainer>
	)
}

export default Header
