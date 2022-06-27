import * as fromProductFeature from './product-feature.reducer';
import { selectProductFeatureState } from './product-feature.selectors';

describe('ProductFeature Selectors', () => {
  it('should select the feature state', () => {
    const result = selectProductFeatureState({
      [fromProductFeature.productFeatureFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
