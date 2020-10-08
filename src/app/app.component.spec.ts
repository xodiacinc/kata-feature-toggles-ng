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

    it('needs a test...', () => {
        fail('start here...')
    })

})