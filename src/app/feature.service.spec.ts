import {FeatureService} from './feature.service';
import {withFeatures} from "./feature.service.mock";

import {FeatureFlags} from './feature.flags'
jest.mock('./feature.flags')

describe('FeatureService', () => {

  it('is off for unknown feature', () => {
    expect(new FeatureService().isOn('unknown feature')).toBe(false)
  })

  it('is on for enabled feature', () => {
    FeatureFlags['enabled feature'] = true
    expect(new FeatureService().isOn('enabled feature')).toBe(true)
  })

  it('is off for disabled feature', () => {
    FeatureFlags['disabled feature'] = false
    expect(new FeatureService().isOn('disabled feature')).toBe(false)
  })

})

describe('FeatureServiceMock.withFeatures', () => {

  it('is off for unspecified feature', () => {
    expect(withFeatures([]).isOn('unspecified feature')).toBe(false)
  })

  it('is on for specified feature', () => {
    expect(withFeatures(['specified feature']).isOn('specified feature')).toBe(true)
  })

  it('is on for multiple specified features', () => {
    let serviceMock = withFeatures(['specified feature', 'another specified feature']);
    expect(serviceMock.isOn('specified feature')).toBe(true)
    expect(serviceMock.isOn('another specified feature')).toBe(true)
  })

})

