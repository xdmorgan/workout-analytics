import all, { Transformers, Transformed } from './types';
import { RawData } from '../data/types';

export default all;

/**
 * Given raw workout data as a json object and a collection of transformers (as name: function pairs),
 * return an object of shape { transformer-name: transformed-data-object } for use in charts on site.
 * The `transformers` input should be the default export from this file. This function calls each of
 * that object's individual transformer functions and returns the aggregate responses.
 *
 * Example usage:
 * ```js
 * const allChartData = transform({ 
 *    data: jsonWorkoutData, 
 *    transformers: dataTransformations 
 * })
 * ```

 */
export function transform({
  data,
  transformers,
}: {
  data: RawData;
  transformers: Transformers;
}): Transformed {
  // @ts-ignore
  return Object.entries(transformers).reduce(
    (acc, [name, func]) => ({
      ...acc,
      [name]: func({ data }),
    }),
    {}
  );
}
