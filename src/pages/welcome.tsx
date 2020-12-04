import { useContext } from 'react';
import { DownloadGuideAndInfoSection } from '../components/download-guide-and-info-section';
import { WorkoutDataContext } from '../contexts/workout-data-provider';
import { WelcomeUploaderSection } from '../components/welcome-uploader-section';
import { PageMetadataConfig } from './types';
import { RawData } from '../data/types';

export const meta: PageMetadataConfig = {
  route: '/',
  title: 'Welcome',
  sidebar: 'Get Started',
  component: Page,
  protected: false,
};

export default function Page() {
  const { state, dispatch } = useContext(WorkoutDataContext);
  return (
    <>
      <WelcomeUploaderSection
        canAccessProtectedPages={state.canAccessProtectedPages}
        protectedEntryRoute="/totals"
        onRequestResetData={() => dispatch({ type: 'USER_REQUESTED_RESET' })}
        onRequestDemoData={() => dispatch({ type: 'USER_REQUESTED_DEMO' })}
        onRequestSetData={(raw: RawData) =>
          dispatch({ type: 'USER_UPLOADED_CSV', payload: raw })
        }
      />
      <DownloadGuideAndInfoSection />
    </>
  );
}
