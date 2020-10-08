import {TestBed} from "@angular/core/testing"
import {HeroDetailComponent} from "./hero-detail.component";
import {FormsModule} from "@angular/forms";
import {FeatureService} from "../feature.service";
import {Hero} from "../hero";
import {withFeatures} from "../feature.service.mock";

describe('Hero detail component', () => {

    it('does not show without selected hero', () => {
        const fixture = createFixture(withFeatures([]))
        fixture.detectChanges()
        expect(fixture.nativeElement.querySelector('#hero-detail')).toBeNull()
    })

    it('shows with selected hero', () => {
        const fixture = createInitializedFixture(withFeatures([]));
        expect(fixture.nativeElement.querySelector('#hero-detail')).toBeTruthy()
    })

    it('does not have superpower when feature is off', () => {
        const fixture = createInitializedFixture(withFeatures([]))
        expect(fixture.nativeElement.querySelector('#edit-superpower')).toBeNull()
    })

    it('has superpower when feature is on', () => {
        const fixture = createInitializedFixture(withFeatures(['superpower']))
        expect(fixture.nativeElement.querySelector('#edit-superpower')).toBeTruthy()
    })

    function createFixture(withFeatures: FeatureService) {
        TestBed.configureTestingModule({
            declarations: [HeroDetailComponent],
            imports: [FormsModule],
            providers: [
                {provide: FeatureService, useValue: withFeatures}
            ]
        })

        return TestBed.createComponent(HeroDetailComponent);
    }

    function createInitializedFixture(withFeatures: FeatureService) {
        const fixture = createFixture(withFeatures)
        fixture.componentInstance.hero = new Hero()
        fixture.detectChanges()
        return fixture;
    }

})
