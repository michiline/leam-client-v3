import { useTheme } from 'styled-components'
import useWindow from '../../common/hooks/useWindow'
import useScrolledDirection from '../../common/hooks/useScrolledDirection'
import { HeaderContainer, CenterContainer, LinksContainer } from './Containers'
import { Hamburger, Logo } from './Icons'
import { WebLink } from './Links'
import { extractPx } from '../../common/utils'
import Link from 'next/link'

const Header = () => {
	const { scrollY, scrolled } = useScrolledDirection({ boundary: 0 })
	const { width } = useWindow()
	const theme = useTheme()
	let nav
	if (width > extractPx(theme.bp.mobile)) {
		nav = (
			<LinksContainer>
				<WebLink href='/category/weekend' value='Vikend izleti' />
				<WebLink href='/category/local' value='Lokalna putovanja' />
				<WebLink href='/category/distant' value='Daleka putovanja' />
				<WebLink href='/gallery' value='Fotogalerija' />
				<WebLink href='/about' value='O nama' />
			</LinksContainer>
		)
	} else {
		nav = (
			<LinksContainer>
				<Hamburger src='/images/hamburger.png' />
			</LinksContainer>
		)
	}
	return (
		<HeaderContainer scrolled={scrolled} transparent={scrollY == 0}>
			<CenterContainer>
				<Link href='/'>
					<Logo src='/images/logo-text.png' />
				</Link>
				{nav}
			</CenterContainer>
		</HeaderContainer>
	)
}

export default Header
