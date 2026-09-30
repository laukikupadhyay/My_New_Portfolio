/* ═══════════════════════════════════════════════════════════════
   TESTING & QA SHOWCASE
   The differentiator section. Structure and tooling here are factual
   (drawn from the resume); any number rendered as a chart is marked
   illustrative in the UI rather than presented as a measured result.
   ═══════════════════════════════════════════════════════════════ */

/** Test pyramid — widest base at the bottom when rendered. */
export const pyramid = [
  {
    layer: 'E2E / UI',
    width: 34,
    tools: ['Playwright', 'Appium'],
    note: 'Critical user journeys on web and Android. Page Object Model, auto-waiting, parallel execution.',
    tone: 'fail',
  },
  {
    layer: 'API / Integration',
    width: 62,
    tools: ['REST Assured', 'Postman', 'Newman'],
    note: 'Status codes, payloads, schema, headers, authentication and error handling — automated beside the UI suite.',
    tone: 'flaky',
  },
  {
    layer: 'Manual & Exploratory',
    width: 100,
    tools: ['Test Plans', 'Regression', 'Cross-browser'],
    note: 'Test design straight from requirements, plus the exploratory passes automation cannot replace.',
    tone: 'pass',
  },
];

/** Surfaces owned end to end. */
export const surfaces = [
  {
    key: 'mobile',
    label: 'Mobile',
    icon: 'phone',
    lead: 'Android, on emulators and real hardware',
    points: [
      'Install, launch, login, navigation and core journeys',
      'Explicit waits and gesture APIs for native timing',
      'BrowserStack and a shared device farm',
      'APK upload and install-flow validation',
      'Parallel runs, cross-device and cross-OS',
    ],
    tools: ['Appium', 'Appium Inspector', 'BrowserStack'],
  },
  {
    key: 'web',
    label: 'Web',
    icon: 'browser',
    lead: 'End-to-end UI on the Page Object Model',
    points: [
      'Reusable fixtures for setup, auth and data isolation',
      'Resilient locators over brittle selectors',
      'Auto-waiting instead of fixed sleeps',
      'Parallel execution to fit the CI window',
      'Cross-browser regression cycles',
    ],
    tools: ['Playwright', 'Page Object Model', 'TestNG'],
  },
  {
    key: 'api',
    label: 'API',
    icon: 'plug',
    lead: 'Contract-level verification, automated',
    points: [
      'Status codes, payloads and response headers',
      'Schema and contract validation',
      'Authentication and authorisation paths',
      'Negative and error-handling coverage',
      'Runs alongside the UI suite in CI',
    ],
    tools: ['REST Assured', 'Postman', 'Newman'],
  },
  {
    key: 'manual',
    label: 'Manual QA',
    icon: 'clipboard',
    lead: 'Where judgement beats a script',
    points: [
      'Test plans, scenarios and cases from requirements',
      'Functional, smoke and regression cycles',
      'Exploratory testing for the unscripted paths',
      'Defect lifecycle ownership through to closure',
      'Root-cause analysis on recurring failures',
    ],
    tools: ['Jira', 'Linear', 'Test Design'],
  },
];

/** Defect classification wired into ReportPortal auto-analysis. */
export const defectTypes = [
  { key: 'pb', label: 'Product Bug',    tone: 'fail',  desc: 'The application is wrong. Goes to the dev team with a reproduction.' },
  { key: 'ab', label: 'Automation Bug', tone: 'flaky', desc: 'The test is wrong. Mine to fix — usually a locator, a wait or shared state.' },
  { key: 'si', label: 'System Issue',   tone: 'skip',  desc: 'Environment, infrastructure or device. Not a product defect, and shouldn’t be counted as one.' },
];

/** Widget set configured on the ReportPortal dashboards. */
export const dashboardWidgets = [
  { key: 'trend',   label: 'Pass / Fail Trend',      desc: 'Release-to-release movement' },
  { key: 'flaky',   label: 'Flaky Test Detection',   desc: 'Tests that changed verdict without a code change' },
  { key: 'dist',    label: 'Failure Distribution',   desc: 'Where failures cluster by suite' },
  { key: 'auto',    label: 'Auto-Analysis',          desc: 'Historical matching to pre-classify new failures' },
];

/** Launch attributes used for filtering and comparison. */
export const launchAttributes = ['environment', 'build', 'browser', 'test type'];

/** The flake-reduction playbook — factual techniques, no claimed percentages. */
export const stabilityPlaybook = [
  { title: 'Explicit waits',     desc: 'Replaced implicit timing assumptions with conditions tied to actual application state.' },
  { title: 'Isolated test data',  desc: 'Each test owns its data, so parallel runs stop colliding with each other.' },
  { title: 'Retry strategy',      desc: 'Deliberate retries that surface genuine flake rather than hiding real failures.' },
  { title: 'Stability tracking',  desc: 'Flake tracked on ReportPortal over time instead of anecdotally per run.' },
];

/** Code samples. Real, idiomatic, and short enough to read at a glance. */
export const snippets = [
  {
    key: 'playwright',
    label: 'Playwright · Page Object',
    lang: 'javascript',
    file: 'pages/LoginPage.js',
    code: `export class LoginPage {
  constructor(page) {
    this.page     = page;
    this.email    = page.getByLabel('Email');
    this.password = page.getByLabel('Password');
    this.submit   = page.getByRole('button', { name: 'Sign in' });
    this.error    = page.getByRole('alert');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async signIn(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.submit.click();
    // No sleeps — wait on the state that actually matters.
    await this.page.waitForURL('**/dashboard');
  }
}`,
  },
  {
    key: 'restassured',
    label: 'REST Assured · Contract',
    lang: 'java',
    file: 'api/OrderApiTest.java',
    code: `@Test
public void createOrder_returns201_andMatchesSchema() {
    given()
        .header("Authorization", bearer(token))
        .contentType(ContentType.JSON)
        .body(newOrderPayload())
    .when()
        .post("/api/v1/orders")
    .then()
        .statusCode(201)
        .header("Location", matchesPattern("/api/v1/orders/\\\\d+"))
        .body(matchesJsonSchemaInClasspath("schema/order.json"))
        .body("status", equalTo("CREATED"))
        .time(lessThan(1500L));
}`,
  },
  {
    key: 'appium',
    label: 'Appium · Android Gesture',
    lang: 'java',
    file: 'mobile/CheckoutFlowTest.java',
    code: `// Scroll to an element by text, then confirm — the two things
// that break most often on real devices.
public void scrollToAndTap(String text) {
    driver.findElement(AppiumBy.androidUIAutomator(
        "new UiScrollable(new UiSelector().scrollable(true))" +
        ".scrollIntoView(new UiSelector().textContains(\\"" + text + "\\"))"
    )).click();
}

@Test
public void completeCheckout_onRealDevice() {
    new WebDriverWait(driver, Duration.ofSeconds(20))
        .until(ExpectedConditions.visibilityOf(cartIcon))
        .click();

    scrollToAndTap("Proceed to Pay");
    assertThat(confirmationBanner.isDisplayed()).isTrue();
}`,
  },
  {
    key: 'reportportal',
    label: 'ReportPortal · CI Publish',
    lang: 'yaml',
    file: '.github/workflows/e2e.yml',
    code: `- name: Run E2E suite
  run: npx playwright test --shard=\${{ matrix.shard }}/4

- name: Publish to ReportPortal
  if: always()                      # failures matter most
  env:
    RP_ENDPOINT: \${{ secrets.RP_ENDPOINT }}
    RP_API_KEY:  \${{ secrets.RP_API_KEY }}
  run: |
    npx rp-cli launch import ./rp-results \\
      --attributes "environment:staging;build:\${{ github.run_number }};browser:chromium;test type:e2e"`,
  },
];
