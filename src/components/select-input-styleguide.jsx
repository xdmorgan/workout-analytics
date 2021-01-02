import React from 'react';
import { SelectInput } from './select-input';
import {
  StyleguideGrid,
  StyleguideLabel,
  StyleguideSection,
} from './styleguide-elements';

const OPTIONS = ['One', 'Two', 'Three', 'Four', 'One hundred'];

export function SelectInputStyleguide() {
  const [option, setOption] = React.useState(OPTIONS[0]);
  return (
    <StyleguideSection>
      <StyleguideSection.Title>SelectInput</StyleguideSection.Title>

      <div className="d-block mb-4x">
        <h3 className="type-h3">Default</h3>
        <StyleguideGrid>
          <StyleguideGrid.Item>
            <SelectInput
              value={option}
              onChange={e => setOption(e.target.value)}
            >
              {OPTIONS.map(opt => (
                <option key={opt}>{opt}</option>
              ))}
            </SelectInput>
            <StyleguideLabel>default</StyleguideLabel>
          </StyleguideGrid.Item>
          <StyleguideGrid.Item>
            <SelectInput
              value={option}
              onChange={e => setOption(e.target.value)}
              disabled
            >
              {OPTIONS.map(opt => (
                <option key={opt}>{opt}</option>
              ))}
            </SelectInput>
            <StyleguideLabel>disabled</StyleguideLabel>
          </StyleguideGrid.Item>
        </StyleguideGrid>
      </div>
      <div className="d-block mb-4x">
        <h3 className="type-h3">RTL</h3>
        <StyleguideGrid dir="rtl">
          <StyleguideGrid.Item>
            <SelectInput
              value={option}
              onChange={e => setOption(e.target.value)}
            >
              {OPTIONS.map(opt => (
                <option key={opt}>{opt}</option>
              ))}
            </SelectInput>
            <StyleguideLabel>default</StyleguideLabel>
          </StyleguideGrid.Item>
          <StyleguideGrid.Item>
            <SelectInput
              value={option}
              onChange={e => setOption(e.target.value)}
              disabled
            >
              {OPTIONS.map(opt => (
                <option key={opt}>{opt}</option>
              ))}
            </SelectInput>
            <StyleguideLabel>disabled</StyleguideLabel>
          </StyleguideGrid.Item>
        </StyleguideGrid>
      </div>
      <div className="d-block mb-4x">
        <h3 className="type-h3">Sizes</h3>
        <StyleguideGrid>
          <StyleguideGrid.Item>
            <SelectInput
              size="small"
              value={option}
              onChange={e => setOption(e.target.value)}
            >
              {OPTIONS.map(opt => (
                <option key={opt}>{opt}</option>
              ))}
            </SelectInput>
            <StyleguideLabel>small</StyleguideLabel>
          </StyleguideGrid.Item>
          <StyleguideGrid.Item>
            <SelectInput
              value={option}
              onChange={e => setOption(e.target.value)}
            >
              {OPTIONS.map(opt => (
                <option key={opt}>{opt}</option>
              ))}
            </SelectInput>
            <StyleguideLabel>default</StyleguideLabel>
          </StyleguideGrid.Item>
          <StyleguideGrid.Item>
            <SelectInput
              size="large"
              value={option}
              onChange={e => setOption(e.target.value)}
            >
              {OPTIONS.map(opt => (
                <option key={opt}>{opt}</option>
              ))}
            </SelectInput>
            <StyleguideLabel>large</StyleguideLabel>
          </StyleguideGrid.Item>
        </StyleguideGrid>
      </div>
    </StyleguideSection>
  );
}
