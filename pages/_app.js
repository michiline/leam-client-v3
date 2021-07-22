import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../style/global'
import theme from '../style/theme'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
