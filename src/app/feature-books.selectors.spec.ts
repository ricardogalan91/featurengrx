import * as fromFeatureBooks from './feature-books.reducer';
import { selectFeatureBooksState } from './feature-books.selectors';

describe('FeatureBooks Selectors', () => {
  it('should select the feature state', () => {
    const result = selectFeatureBooksState({
      [fromFeatureBooks.featureBooksFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
