import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PSRUISvc } from '@psr/ui';
import { ActivatedRoute } from '@angular/router';
import { MccDashboardService } from '../../services/mcc-dashboard';
import { MccDashboard } from './mcc-dashboard';

describe('MccDashboard', () => {
  let component: MccDashboard;
  let fixture: ComponentFixture<MccDashboard>;

  beforeEach(() => {
    const datePipeStub = () => ({ transform: (startDate, string) => ({}) });
    const pSRUISvcStub = () => ({
      showBackButton: arg => ({}),
      setPageTitle: title => ({})
    });
    const activatedRouteStub = () => ({ snapshot: { data: {} } });
    const mccDashboardServiceStub = () => ({
      getMccAlertsData: () => ({ subscribe: f => f({}) }),
      getMccAlertsPerWeekData: () => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MccDashboard],
      providers: [
        { provide: DatePipe, useFactory: datePipeStub },
        { provide: PSRUISvc, useFactory: pSRUISvcStub },
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: MccDashboardService, useFactory: mccDashboardServiceStub }
      ]
    });
    fixture = TestBed.createComponent(MccDashboard);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`thresholdUpdateUrl has default value`, () => {
    expect(component.thresholdUpdateUrl).toEqual(url.thresholdUpdate);
  });

  it(`loading has default value`, () => {
    expect(component.loading).toEqual(true);
  });

  it(`hasAlertsErrors has default value`, () => {
    expect(component.hasAlertsErrors).toEqual(false);
  });

  it(`hasChartErrors has default value`, () => {
    expect(component.hasChartErrors).toEqual(false);
  });
});
