import data from "../test-data/workouts";
import transformers, { transform } from "../transforms";

const TRANSFORMED = transform({ data, transformers });

export default function App({ Component, pageProps }) {
  console.log(TRANSFORMED);
  return <Component {...pageProps} />;
}
