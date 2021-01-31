// types
import { PageMetadataConfig, PageProps } from './types';
// components
import { ContentHeader } from '../components/content-header';
import { ContentSection } from '../components/content-section';

import imgDownload from './how-to/download-workouts.jpg';
import imgStartHere from './how-to/start-here.jpg';
import imgAddData from './how-to/add-data.jpg';
import imgAllSet from './how-to/all-set.jpg';
import imgStartOver from './how-to/start-over.jpg';

function Page({ pageMetadata }: PageProps) {
  return (
    <>
      <ContentHeader>{pageMetadata.title}</ContentHeader>
      <ContentSection className="wysiwyg child-my-0">
        <h2>Downloading your data</h2>
        <p>
          To download your data, log in to{' '}
          <a href="https://members.onepeloton.com/profile/workouts">
            members.onepeloton.com/profile/workouts
          </a>{' '}
          and click <kbd>Download workouts</kbd>
        </p>
        <img src={imgDownload} alt="Peloton member workouts page" />
        <h2>Using this site</h2>
        <p>
          Once you've downloaded your data, navigate to{' '}
          <a href="https://workout-analytics.netlify.app/">the landing page</a>{' '}
          and select <kbd>Analyze my workouts</kbd>
        </p>
        <img src={imgStartHere} alt="Workout Analytics landing page" />
        <h2>Adding downloaded file</h2>
        <p>
          Drag and drop your file onto the highlighted area or use the{' '}
          <kbd>Select file</kbd> button to browse for it on your computer.
        </p>
        <img src={imgAddData} alt="File upload screen" />
        <h2>All set</h2>
        <p>
          And, just like that, your data is analyzed locally and ready for your
          review. Lastly, select <kbd>Let's go!</kbd> to see your stats.
        </p>
        <p>
          For your convenience, the analyzed workout data is saved in your
          browser so you can come back and view it again later.
        </p>
        <img src={imgAllSet} alt="File upload screen" />
        <h2>Updating previously saved data</h2>
        <p>
          If you'd like to update or clear saved data from a previous session,
          go back to{' '}
          <a href="https://workout-analytics.netlify.app/">the landing page</a>{' '}
          and select <kbd>Start over</kbd>.
        </p>
        <img src={imgStartOver} alt="Start over screen" />
      </ContentSection>
    </>
  );
}

export const meta: PageMetadataConfig = {
  route: '/how-to',
  title: 'How-to Guide',
  sidebar: null,
  component: Page,
  protected: false,
};
