import { useWorkoutData } from "../src/hooks/use-workout-data";
import { WorkoutDataContext } from "../src/contexts/workout-data";

export default function App({ Component, pageProps }) {
  const workoutData = useWorkoutData();
  return (
    <WorkoutDataContext.Provider value={workoutData}>
      <Component {...pageProps} />
    </WorkoutDataContext.Provider>
  );
}
