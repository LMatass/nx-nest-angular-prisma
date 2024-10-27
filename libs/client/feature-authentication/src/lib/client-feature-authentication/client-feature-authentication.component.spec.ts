import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientFeatureAuthenticationComponent } from './client-feature-authentication.component';

describe('ClientFeatureAuthenticationComponent', () => {
  let component: ClientFeatureAuthenticationComponent;
  let fixture: ComponentFixture<ClientFeatureAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientFeatureAuthenticationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientFeatureAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
