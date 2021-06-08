'use strict';

jQuery(function ($) {

  var partsPlaces = {
    'body': [
      { part: 'adminbar', element: 'all' }
    ],
    '#dpl-auth-modal': [
      { part: 'modals', element: 'auth' }
    ]
  };

  if ($('.dpl-tutorials-sidebar').length !== 0) {
    partsPlaces['.dpl-tutorials-sidebar'] = [
      { part: 'sidebar', element: 'all' }
    ];
  }

  var selectorsToCheck = [
    { name: '.dpl-tutorials-sidebar', content: { part: 'sidebar', element: 'all' } },
    { name: '#dpl-gtm-scrollspy', content: { part: 'gtm', element: 'scrollspy' } },
    { name: '#dpl-gtm-scroll', content: { part: 'gtm', element: 'scroll' } },
    { name: '#dpl-gtm-frontpage', content: { part: 'gtm', element: 'frontpage' } },
    { name: '#dpl-gtm-jq', content: { part: 'gtm', element: 'navbar-jq' } },
    { name: '#dpl-gtm-ng', content: { part: 'gtm', element: 'navbar-ng' } },
    { name: '#dpl-gtm-re', content: { part: 'gtm', element: 'navbar-re' } },
    { name: '#dpl-gtm-vu', content: { part: 'gtm', element: 'navbar-vu' } },
    { name: '#dpl-gtm-ng-mobile', content: { part: 'gtm', element: 'navbar-ng-mobile' } },
    { name: '#dpl-gtm-re-mobile', content: { part: 'gtm', element: 'navbar-re-mobile' } },
    { name: '#dpl-gtm-vu-mobile', content: { part: 'gtm', element: 'navbar-vu-mobile' } },
    { name: '.dpl-newmdb-docs-alert', content: { part: 'docs', element: 'alert' } },
    { name: '.dpl-newmdb-docs-alert-advanced', content: { part: 'docs', element: 'alert-advanced' } },
    { name: '#dpl-newmdb-docs-snippets-modal', content: { part: 'docs', element: 'snippets-modal' } },
    { name: '#dpl-newmdb-pro-component-marker', content: { part: 'docs', element: 'pro-component-btn' } },
    { name: '.dpl-newmdb-pro-component-marker', content: { part: 'docs', element: 'pro-component-btn' } }
  ];

  selectorsToCheck.forEach(function (selector) {
    if ($(selector.name).length !== 0) partsPlaces[selector.name] = [selector.content];
  });

  var dpl_page_categories = dynamic_parts_loader.dpl_page_categories;
  var load_new_mdb_bundle = dynamic_parts_loader.load_new_mdb_bundle;

  if (dpl_page_categories.includes('ecommerce')) {

    partsPlaces['#dpl-navbar-ecommerce-right-buttons'] = [{ part: 'navbar', element: 'ecommerce_right_buttons' }];
  } else if (dpl_page_categories.includes('admin')) {

    partsPlaces['#dpl-navbar-admin-right-buttons'] = [{ part: 'navbar', element: 'admin_right_buttons' }];
  } else if (dpl_page_categories.includes('newmdb') || load_new_mdb_bundle) {

    partsPlaces['#dpl-navbar-new-right-buttons'] = [{ part: 'navbar', element: 'new_right_buttons' }];
    partsPlaces['#dpl-auth-modal'] = [{ part: 'modals', element: 'auth-newmdb' }];
  } else {

    var $tmpRightButtonsNew = $('#dpl-navbar-right-buttons-tmp-new');
    if ($tmpRightButtonsNew.length) {
      partsPlaces['#dpl-navbar-right-buttons-new'] = [{ part: 'navbar', element: 'right_buttons_new' }];
    } else {
      partsPlaces['#dpl-navbar-right-buttons'] = [{ part: 'navbar', element: 'right_buttons' }];
    }
  }

  var parts = [];

  for (var place in partsPlaces) {

    if (partsPlaces.hasOwnProperty(place)) {

      parts = parts.concat(partsPlaces[place]);
    }
  }

  $.ajax({
    type: 'POST',
    url: '/wp-admin/admin-ajax.php?p=' + dynamic_parts_loader.page_id,
    data: {
      action: 'get_dynamic_parts',
      parts: parts,
      options: {
        lang: dynamic_parts_loader.current_site_lang
      }
    }
  }).done(function (response) {

    response = JSON.parse(response);

    for (var place in partsPlaces) {

      if (partsPlaces.hasOwnProperty(place)) {

        var $place = $(place);
        var p = partsPlaces[place];
        p.forEach(function (part) {

          var $tmpRightButtons = $('#dpl-navbar-right-buttons-tmp');
          if ($tmpRightButtons.length) {
            $tmpRightButtons.remove();
          } else {
            var $tmpRightButtonsNew = $('#dpl-navbar-right-buttons-tmp-new');
            if ($tmpRightButtonsNew.length)
              $tmpRightButtonsNew.remove();
          }
          $place.append(response[part.part][part.element]);
        });
      }
    }

    var event = document.createEvent('Event');
    event.initEvent('dpl_loaded', true, true);
    document.dispatchEvent(event);
  }).fail(console.error);
});

document.addEventListener('dpl_loaded', function () {

  var dpl_page_categories = dynamic_parts_loader.dpl_page_categories;
  var load_new_mdb_bundle = dynamic_parts_loader.load_new_mdb_bundle;

  if (!dpl_page_categories.includes('newmdb') && !load_new_mdb_bundle) {
    $.dropdown.initAnimations();
  } else {
    var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    dropdownElementList.map(function (dropdownToggleEl) {
      var dropdownInstance = mdb.Dropdown.getInstance(dropdownToggleEl);
      if (dropdownInstance) {
        return;
      }
      return new mdb.Dropdown(dropdownToggleEl);
    });
  }
});
