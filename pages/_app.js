import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../style/global'
import theme from '../style/theme'
import Header from '../components/Header'
import Drawer from '../components/Drawer'

function MyApp({ Component, pageProps }) {
	const [showDrawer, setShowDrawer] = useState(false)
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle hideScroll={showDrawer} />
			<Header
				show={showDrawer}
				handleOpen={() => setShowDrawer(true)}
				handleClose={() => setShowDrawer(false)}
			/>
			<Drawer show={showDrawer} />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
