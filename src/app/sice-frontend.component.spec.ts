import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SiceFrontendAppComponent } from '../app/sice-frontend.component';

beforeEachProviders(() => [SiceFrontendAppComponent]);

describe('App: SiceFrontend', () => {
  it('should create the app',
      inject([SiceFrontendAppComponent], (app: SiceFrontendAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'sice-frontend works!\'',
      inject([SiceFrontendAppComponent], (app: SiceFrontendAppComponent) => {
    expect(app.title).toEqual('sice-frontend works!');
  }));
});
