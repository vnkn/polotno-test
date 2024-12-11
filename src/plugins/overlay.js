import { runInAction } from 'mobx';

export const addPageOverlay = (store) => {
  const page = store.activePage;
  if (!page) {
    console.error('No active page found');
    return;
  }

  runInAction(() => {
    page.addElement({
      type: 'figure',
      subtype: 'rect',
      width: store.width,
      height: store.height,
      fill: 'rgba(0, 0, 0, 0.2)',
      stroke: 'transparent',
      strokeWidth: 0,
      selectable: false,
      alwaysOnTop: true,
      showInExport: false,
      name: 'page-overlay'
    });
  });
};
