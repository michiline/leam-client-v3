import { useRouter } from 'next/router'
import { useTheme } from 'styled-components'
import { DrawerContainer, CenterContainer, LinksContainer } from './Containers'
import { MobileLink, ExternalLink } from './Links'

const Drawer = ({ show }) => {
	const theme = useTheme()
	const router = useRouter()
	return (
		<DrawerContainer show={show}>
			<CenterContainer>
				<MobileLink
					active={router.pathname === '/'}
					href='/'
					value='Početna'
				/>
				<MobileLink
					active={router.pathname === '/category/weekend'}
					href='/weekend'
					value='Vikend izleti'
				/>
				<MobileLink
					active={router.pathname === '/category/local'}
					href='/local'
					value='Lokalna putovanja'
				/>
				<MobileLink
					active={router.pathname === '/category/distant'}
					href='/distant'
					value='Daleke avanture'
				/>
				<MobileLink
					active={router.pathname === '/gallery'}
					href='/gallery'
					value='Fotogalerija'
				/>
				<MobileLink
					active={router.pathname === '/about'}
					href='/about'
					value='O nama'
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
