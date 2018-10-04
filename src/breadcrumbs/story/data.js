const generateBreadcrumbs = (count) => {
  var crumbs = [];
  for (var i=1; i<=count; i++) {
    crumbs.push({ href: `/item_${i}`, text: `Breadcrumb ${i}` });
  }
  return crumbs;
};

export const longitems = Array.prototype.concat(generateBreadcrumbs(20), [{ text: 'Simple text Breadcrumb' }]);

export const shortItems = [
  { href: '/', text: 'Brdcrmb 1' },
  { href: '/', text: 'Сущности 2' },
  { href: '/', text: 'Brdcrmb 3' },
  { text: 'Simple text Breadcrumb' }
];
