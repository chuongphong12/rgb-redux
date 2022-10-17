import React from 'react'

const LayoutMain = () => {
  return (
    <div id="layout-wrapper">
  <div id="page-topbar" className="topbar">
    <div class="tb-container">
      <app-topbar (toggleSidebar)="openSidebar($event)" (closeSidebar)="closeSidebar($event)">
      </app-topbar>
    </div>
  </div>

  <div class="main-content">

    <app-main-nav class="d-block d-md-none"></app-main-nav>

    <div class="mc-container">
      <ng-container [ngTemplateOutlet]="templateOutlet"></ng-container>
    </div>
  </div>

  <div class="footer">
    <div class="ft-container">
      <app-footer></app-footer>
    </div>
  </div>

  )
}

export default LayoutMain