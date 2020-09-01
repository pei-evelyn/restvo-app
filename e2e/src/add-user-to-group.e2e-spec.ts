import {
    AppPage,
    MaintabPage,
    RegisterPage,
    NewsPage,
    ChatPage,
    DiscoverPage,
    DashboardPage,
    ShowfeaturePage,
    PickfeaturePopoverPage,
    PickpeoplePopoverPage,
    OnboardingfeaturePage,
    CreateFeaturePage,
    AboutPage,
    PreferencesPage
} from './app.po';
import {browser} from 'protractor';

describe('add and remove user from group', () => {
    let app: AppPage;
    let showfeature: ShowfeaturePage;
    let maintab: MaintabPage;
    let register: RegisterPage;
    let news: NewsPage;
    let chat: ChatPage;
    let discover: DiscoverPage;
    let about: AboutPage;
    let preferences: PreferencesPage;
    let me: DashboardPage;
    let pickfeature: PickfeaturePopoverPage;
    let pickpeople: PickpeoplePopoverPage;
    let createfeature: CreateFeaturePage;
    let onboardfeature: OnboardingfeaturePage;

    beforeAll(async () => {
        // testing on mobile sized screen
        /*const width = 600;
        const height = 968;
        await browser.driver.manage().window().setSize(width, height);*/
        app = new AppPage();
        maintab = new MaintabPage();
        register = new RegisterPage();
        showfeature = new ShowfeaturePage();
        news = new NewsPage();
        chat = new ChatPage();
        discover = new DiscoverPage();
        me = new DashboardPage();
        about = new AboutPage();
        preferences = new PreferencesPage();
        pickfeature = new PickfeaturePopoverPage();
        pickpeople = new PickpeoplePopoverPage();
        createfeature = new CreateFeaturePage();
        onboardfeature = new OnboardingfeaturePage();
        await browser.get('/app/activity/5e0012f714001a7dbf712de2');
        // await showfeature.waitUntilPresent();
        await browser.sleep(5000);
    });

    // it('should show unauthenticated group page', async () => {
    //     expect(await showfeature.headerIsPresent(null, '#showfeature-header')).toBeTruthy();
    // });

    it('should login and show authenticated group page', async () => {
        console.log("test1");
        await showfeature.clickSigninButton('#group-signin');
        console.log("test2");
        await browser.waitForAngular();
        console.log("test3");
        await register.fillEmail();
        console.log("test4");
        await register.fillPassword();
        console.log("test5");
        await register.submitLoginForm();
        console.log("test6");
        await showfeature.waitUntilVisible();
        expect(await showfeature.headerIsPresent(null, '#showfeature-header')).toBeTruthy();
    });
});
