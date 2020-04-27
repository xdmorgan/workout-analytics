import data from "../src/data/workouts";
import transformers, { transform } from "../src/transforms";

const TRANSFORMED = transform({ data, transformers });

export default function App({ Component, pageProps }) {
  console.log(TRANSFORMED);
  return <Component {...pageProps} data={TRANSFORMED} />;
}
