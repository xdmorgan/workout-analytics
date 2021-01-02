import React from 'react';
import { ContentHeader } from '../components/content-header';
import { Button } from '../components/button';
import {
  StyleguideGrid,
  StyleguideLabel,
  StyleguideSection,
} from '../components/styleguide-elements';

export const meta = {
  route: '/styleguide/buttons',
  title: 'Buttons',
  sidebar: null,
  component: Page,
  protected: false,
};

export function Page() {
  return (
    <>
      <ContentHeader previousRoute={meta.pagination.previous}>
        {meta.title}
      </ContentHeader>
      <ButtonStyleguide />
    </>
  );
}

function ButtonStyleguide() {
  return (
    <StyleguideSection>
      <div className="d-block mb-4x p-4x">
        <h3 className="type-h3">Appearances</h3>
        <StyleguideGrid>
          <StyleguideGrid.Item>
            <Button>Button text</Button>
            <StyleguideLabel>default</StyleguideLabel>
          </StyleguideGrid.Item>
          <StyleguideGrid.Item>
            <Button disabled>Button text</Button>
            <StyleguideLabel>disabled</StyleguideLabel>
          </StyleguideGrid.Item>
          <StyleguideGrid.Item>
            <Button appearance="secondary">Button text</Button>
            <StyleguideLabel>secondary</StyleguideLabel>
          </StyleguideGrid.Item>
          <StyleguideGrid.Item>
            <Button appearance="ghost">Button text</Button>
            <StyleguideLabel>ghost</StyleguideLabel>
          </StyleguideGrid.Item>
        </StyleguideGrid>
      </div>

      <div className="d-block mb-4x bg-n0 c-n90 p-4x">
        <h3 className="type-h3">Appearances</h3>
        <StyleguideGrid>
          <StyleguideGrid.Item>
            <Button theme="dark">Button text</Button>
            <StyleguideLabel>default</StyleguideLabel>
          </StyleguideGrid.Item>
          <StyleguideGrid.Item>
            <Button theme="dark" disabled>
              Button text
            </Button>
            <StyleguideLabel>disabled</StyleguideLabel>
          </StyleguideGrid.Item>
          <StyleguideGrid.Item>
            <Button theme="dark" appearance="secondary">
              Button text
            </Button>
            <StyleguideLabel>secondary</StyleguideLabel>
          </StyleguideGrid.Item>
          <StyleguideGrid.Item>
            <Button theme="dark" appearance="ghost">
              Button text
            </Button>
            <StyleguideLabel>ghost</StyleguideLabel>
          </StyleguideGrid.Item>
        </StyleguideGrid>
      </div>

      <div className="d-block mb-4x">
        <h3 className="type-h3">Sizes</h3>
        <StyleguideGrid>
          <StyleguideGrid.Item>
            <Button size="small">Button text</Button>
            <StyleguideLabel>small</StyleguideLabel>
          </StyleguideGrid.Item>
          <StyleguideGrid.Item>
            <Button>Button text</Button>
            <StyleguideLabel>default</StyleguideLabel>
          </StyleguideGrid.Item>
          <StyleguideGrid.Item>
            <Button size="large">Button text</Button>
            <StyleguideLabel>large</StyleguideLabel>
          </StyleguideGrid.Item>
        </StyleguideGrid>
      </div>

      <StyleguideSection.Title>Button.Group</StyleguideSection.Title>

      <div className="d-block mb-4x">
        <h3 className="type-h3">Sizes</h3>
        <div className="child-my-0 my-4x">
          <Button.Group>
            <Button size="small">One</Button>
            <Button size="small">Two</Button>
            <Button size="small">Three</Button>
          </Button.Group>
        </div>
        <div className="child-my-0 my-4x">
          <Button.Group>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </Button.Group>
        </div>
        <div className="child-my-0 my-4x">
          <Button.Group>
            <Button size="large">One</Button>
            <Button size="large">Two</Button>
            <Button size="large">Three</Button>
          </Button.Group>
        </div>
        <div className="child-my-0 my-4x">
          <Button.Group>
            <Button size="small">One</Button>
            <Button className="is-hover" size="small">
              Two
            </Button>
            <Button className="is-active" size="small">
              Three
            </Button>
            <Button disabled size="small">
              Four
            </Button>
          </Button.Group>
        </div>
        <div className="child-my-0 my-4x">
          <Button.Group>
            <Button appearance="secondary" size="small">
              One
            </Button>
            <Button appearance="secondary" className="is-hover" size="small">
              Two
            </Button>
            <Button appearance="secondary" className="is-active" size="small">
              Three
            </Button>
            <Button appearance="secondary" disabled size="small">
              Four
            </Button>
          </Button.Group>
        </div>
        <div className="p-4x bg-n0">
          <div className="child-my-0 mb-4x">
            <Button.Group>
              <Button theme="dark" size="small">
                One
              </Button>
              <Button theme="dark" className="is-hover" size="small">
                Two
              </Button>
              <Button theme="dark" className="is-active" size="small">
                Three
              </Button>
              <Button theme="dark" disabled size="small">
                Four
              </Button>
            </Button.Group>
          </div>
          <div className="child-my-0">
            <Button.Group>
              <Button appearance="secondary" theme="dark" size="small">
                One
              </Button>
              <Button
                appearance="secondary"
                theme="dark"
                className="is-hover"
                size="small"
              >
                Two
              </Button>
              <Button
                appearance="secondary"
                theme="dark"
                className="is-active"
                size="small"
              >
                Three
              </Button>
              <Button appearance="secondary" theme="dark" disabled size="small">
                Four
              </Button>
            </Button.Group>
          </div>
        </div>
      </div>
    </StyleguideSection>
  );
}
