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
  console.log({ pageMetadata });

  return (
    <>
      <ContentHeader>{pageMetadata.title}</ContentHeader>
      <ContentSection className="wysiwyg child-my-0">
        <h2>Download</h2>
        <p>
          To download your data as a CSV, log in to{' '}
          <a href="https://members.onepeloton.com/profile/workouts">
            members.onepeloton.com/profile/workouts
          </a>{' '}
          and click <kbd>Download workouts</kbd>
        </p>
        <img src={imgDownload} alt="Peloton member workouts page" />
        <h2>Add your data</h2>
        <p>
          Once you've downloaded your data from the Peloton members page, go to{' '}
          <a href="https://workout-analytics.netlify.app/">
            workout-analytics.netlify.app
          </a>{' '}
          and click <kbd>Analyze my workouts</kbd>
        </p>
        <img src={imgStartHere} alt="Workout Analytics landing page" />
        <h2>Choose file</h2>
        <p>
          Drag and drop or click <kbd>Select file</kbd> to browse hard drive.
        </p>
        <img src={imgAddData} alt="File upload screen" />
        <h2>All set</h2>
        <p>
          That's it! Your data is analyzed locally on your machine and never
          leaves it. For your convenience, its saved locally so you can come
          back to it again later. Click <kbd>Let's go</kbd> to proceed and see
          your stats.
        </p>
        <img src={imgAllSet} alt="File upload screen" />
        <h2>Update saved data</h2>
        <p>
          If you'd like to update your data to see new stats or clear the data
          saved to your browser. Go back to{' '}
          <a href="https://workout-analytics.netlify.app/">
            workout-analytics.netlify.app
          </a>{' '}
          and click <kbd>Start over</kbd>
        </p>
        <img src={imgStartOver} alt="Start over screen" />
      </ContentSection>
    </>
  );
}

export const meta: PageMetadataConfig = {
  route: '/how-to',
  title: 'How To Export Data',
  sidebar: null,
  component: Page,
  protected: false,
};
