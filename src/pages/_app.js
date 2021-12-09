import { Provider } from "react-redux";
import GlobalStyle from '../globalCss';
import store from '../redux/store';
import Header from '../components/Header/';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
