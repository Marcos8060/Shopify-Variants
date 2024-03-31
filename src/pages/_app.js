import "@/styles/globals.css";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Provider store={store}>
        <Toaster position="top-center" />
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </>
  );
}
