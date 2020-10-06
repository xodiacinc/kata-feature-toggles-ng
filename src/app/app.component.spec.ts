import {AppComponent} from "./app.component"
import {TestBed} from "@angular/core/testing"
import {RouterTestingModule} from "@angular/router/testing"
import {MessagesComponent} from "./messages/messages.component"
import {FeatureService} from "./feature.service";
import {withFeatures} from "./feature.service.mock";

describe('App component', () => {

    function createFixture(withFeatures: FeatureService) {
        TestBed.configureTestingModule({
            declarations: [AppComponent, MessagesComponent],
            imports: [RouterTestingModule],
            providers: [
                {provide: FeatureService, useValue: withFeatures}
            ]
        })

        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges()
        return fixture
    }

    it('does not apply .sidebar class to messages when sidebar feature is off', () => {
        const fixture = createFixture(withFeatures())
        expect(fixture.nativeElement.querySelector('#messages').classList).not.toContain('sidebar')
    })

    it('applies .sidebar class to messages when sidebar feature is on', () => {
        const fixture = createFixture(withFeatures(['message sidebar']))
        expect(fixture.nativeElement.querySelector('#messages').classList).toContain('sidebar')
    })

})