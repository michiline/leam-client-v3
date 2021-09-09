import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../style/global'
import theme from '../style/theme'
import Header from '../components/Header'
import Drawer from '../components/Drawer'

import en from '../public/languages/en.json'
import hr from '../public/languages/hr.json'

const languages = {
	en,
	hr,
}

function MyApp({ Component, pageProps }) {
	const [showDrawer, setShowDrawer] = useState(false)
	const [locale, setLocale] = useState('en')
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle hideScroll={showDrawer} />
			<Header
				show={showDrawer}
				handleOpen={() => setShowDrawer(true)}
				handleClose={() => setShowDrawer(false)}
				locale={locale}
				setLocale={setLocale}
				text={languages[locale]}
			/>
			<Drawer show={showDrawer} text={languages[locale]} />
			<Component {...pageProps} text={languages[locale]} />
		</ThemeProvider>
	)
}

export default MyApp
