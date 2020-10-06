import {TestBed} from "@angular/core/testing";
import {HelpComponent} from "./help.component";
import {By} from "@angular/platform-browser";

describe('Help Component', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HelpComponent]
        })
    })

    it('creates the help view with #dictionary-entree element', () => {
        let fixture = TestBed.createComponent(HelpComponent)
        expect(fixture.debugElement.query(By.css('#dictionary-entree'))).toBeTruthy()
        expect(fixture.nativeElement.querySelector('#dictionary-entree')).toBeTruthy()
    })

})