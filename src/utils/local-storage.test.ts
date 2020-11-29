import { RawData } from '../data/types';
import {
  createSavedSession,
  clearSavedSession,
  loadSavedSession,
} from './local-storage';

describe('createSavedSession()', () => {
  test('Save to localStorage', () => {
    createSavedSession([
      {
        'Workout Timestamp': '2019-02-14 18:34 (EDT)',
        'Live/On-Demand': 'Live',
        'Instructor Name': 'Cody Rigsby',
        'Length (minutes)': 45,
        'Fitness Discipline': 'Cycling',
        Type: 'Theme',
        Title: '45 min 90s Pop Ride',
        'Class Timestamp': '2019-02-14 18:22 (EDT)',
        'Total Output': 84,
        'Avg. Watts': 113,
        'Avg. Resistance': '38%',
        'Avg. Cadence (RPM)': 79,
        'Avg. Speed (mph)': 16.11,
        'Distance (mi)': 3.34,
        'Calories Burned': 111,
        'Avg. Heartrate': '',
        'Avg. Incline': '',
        'Avg. Pace (min/mi)': '',
      },
    ]);
    expect(localStorage).toMatchInlineSnapshot(`
      Storage {
        "workout-data-v1": "[{\\"Workout Timestamp\\":\\"2019-02-14 18:34 (EDT)\\",\\"Live/On-Demand\\":\\"Live\\",\\"Instructor Name\\":\\"Cody Rigsby\\",\\"Length (minutes)\\":45,\\"Fitness Discipline\\":\\"Cycling\\",\\"Type\\":\\"Theme\\",\\"Title\\":\\"45 min 90s Pop Ride\\",\\"Class Timestamp\\":\\"2019-02-14 18:22 (EDT)\\",\\"Total Output\\":84,\\"Avg. Watts\\":113,\\"Avg. Resistance\\":\\"38%\\",\\"Avg. Cadence (RPM)\\":79,\\"Avg. Speed (mph)\\":16.11,\\"Distance (mi)\\":3.34,\\"Calories Burned\\":111,\\"Avg. Heartrate\\":\\"\\",\\"Avg. Incline\\":\\"\\",\\"Avg. Pace (min/mi)\\":\\"\\"}]",
      }
    `);
  });
});

describe('clearSavedSession()', () => {
  test('Remove from localStorage', () => {
    createSavedSession([]); // now it exists
    expect(localStorage).toMatchInlineSnapshot(`
      Storage {
        "workout-data-v1": "[]",
      }
    `);
    clearSavedSession(); // now it does not
    expect(localStorage).toMatchInlineSnapshot(`Storage {}`);
  });
});

describe('loadSavedSession()', () => {
  test('Load a saved session', () => {
    const input: RawData = [];
    createSavedSession(input);
    expect(localStorage).toMatchInlineSnapshot(`
      Storage {
        "workout-data-v1": "[]",
      }
    `);
    const arr = loadSavedSession();
    expect(arr).toEqual(input);
  });
  test('None exists, return `null`', () => {
    clearSavedSession();
    const nul = loadSavedSession();
    expect(nul).toEqual(null);
  });
});
