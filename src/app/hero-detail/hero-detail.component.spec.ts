import { FeatureFlags } from '../feature.flags'
import {ComponentFixture, TestBed, async} from "@angular/core/testing"
import {HeroDetailComponent} from "./hero-detail.component";
import {FormsModule} from "@angular/forms";
jest.mock('../feature.flags')

describe('Hero detail component', () => {

    let component: HeroDetailComponent
    let fixture: ComponentFixture<HeroDetailComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeroDetailComponent],
            imports: [FormsModule]
        }).compileComponents()
    }))

    function createFixture() {
        fixture = TestBed.createComponent(HeroDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }

    it('does not have superpower when feature is off', () => {
        FeatureFlags['superpower'] = false
        createFixture()
        const componentElement: HTMLElement = fixture.nativeElement;
        expect(componentElement.querySelector('.edit-superpower')).toBeNull()
    })

    it('has superpower when feature is on', () => {
        FeatureFlags['superpower'] = true
        createFixture()
        const componentElement: HTMLElement = fixture.nativeElement;
        expect(componentElement.querySelector('.edit-superpower')).toBeDefined()
    })

})
