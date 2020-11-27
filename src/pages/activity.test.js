import { meta } from './activity';
import { checkMetaExportStructure } from './index.test';

describe('Page data config', () => {
  test('export `meta` has correct structure', () =>
    checkMetaExportStructure(meta, expect));
});
