import { useRouter } from 'next/router'
import { useTheme } from 'styled-components'
import { DrawerContainer, CenterContainer, LinksContainer } from './Containers'
import { MobileLink, ExternalLink } from './Links'

const Drawer = ({ show, text }) => {
	const { home, weekend, local, distant, gallery, about } = text.drawer
	const theme = useTheme()
	const router = useRouter()
	return (
		<DrawerContainer show={show}>
			<CenterContainer>
				<MobileLink
					active={router.pathname === '/'}
					href='/'
					value={home}
				/>
				<MobileLink
					active={router.pathname === '/category/weekend'}
					href='/weekend'
					value={weekend}
				/>
				<MobileLink
					active={router.pathname === '/category/local'}
					href='/local'
					value={local}
				/>
				<MobileLink
					active={router.pathname === '/category/distant'}
					href='/distant'
					value={distant}
				/>
				<MobileLink
					active={router.pathname === '/gallery'}
					href='/gallery'
					value={gallery}
				/>
				<MobileLink
					active={router.pathname === '/about'}
					href='/about'
					value={about}
				/>
				<ExternalLink
					href='https://www.littleeaglephoto.com'
					color={theme.color.orange}
					target='_blank'
					value='Little Eagle Photography'
				/>
			</CenterContainer>
		</DrawerContainer>
	)
}

export default Drawer
