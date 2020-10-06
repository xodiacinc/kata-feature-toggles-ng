import {FeatureService} from "./feature.service";

export function withFeatures(features: string[] = []): FeatureService {
    return {
        isOn: jest.fn(f => features && features.includes(f))
    } as FeatureService
}
