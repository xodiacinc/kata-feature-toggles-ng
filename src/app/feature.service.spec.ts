import { FeatureService } from './feature.service';

import { FeatureFlags } from './feature.flags'
jest.mock('./feature.flags')

describe('FeatureService', () => {

  it('is off for unknown feature', () => {
    expect(new FeatureService().isOn('unknown.feature')).toBe(false)
  })

  it('is on for enabled feature', () => {
    FeatureFlags['enabled.feature'] = true
    expect(new FeatureService().isOn('enabled.feature')).toBe(true)
  })

  it('is off for disabled feature', () => {
    FeatureFlags['disabled.feature'] = false
    expect(new FeatureService().isOn('disabled.feature')).toBe(false)
  })

})
