'use strict';

document.addEventListener("DOMContentLoaded", function(event) {

  var exceptionPaths = [
    '/docs/standard/components/modal/'
  ];

  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (this.status >= 200 && this.status < 400) {

      var response = JSON.parse(this.response);

      if (response.success && response.data.is_pro_sub) {
        document.querySelectorAll('.mdb-pro-example').forEach(function (el) {
          var docFrag = document.createDocumentFragment();
          while (el.firstChild) {
            var child = el.removeChild(el.firstChild);
            docFrag.appendChild(child);
          }
          el.parentNode.replaceChild(docFrag, el);
        });
      } else {
        document.querySelectorAll('.mdb-pro-example').forEach(function (el) {
          var docFrag = document.createDocumentFragment();
          var tmpElMask = document.createElement('div');
          tmpElMask.className = 'bg-image border border-danger text-center';
          tmpElMask.innerHTML = '<img src="https://mdbootstrap.com/img/Others/access-restricted-prism.jpg" class="img-fluid rounded"/>\n' +
                            '    <div class="mask d-flex align-items-center" style="background-color: rgba(251, 251, 251, 0.7);">\n' +
                            '      <div class="text-center w-100">\n' +
                            '        <h2 class="p-3">Access restricted</h2>\n' +
                            '        <div class="d-none d-sm-block">\n' +
                            '          <p>To view this code you must have an <strong><u><a href="https://mdbootstrap.com/docs/standard/pro/" target="_blank">MDB 5 PRO license</a></u></strong></p>\n' +
                            '          <p><strong>Purchase MDB 5 PRO</strong> if you are a new user ' + (!response.data.is_logged_in ? 'or <strong>Log in</strong> if you already have it</p>\n' : '') +
                            '        </div>\n' +
                                      (!response.data.is_logged_in ? '<a class="auth-modal-toggle btn btn-sm btn-primary m-2" data-auth-modal-tab="sign-in">Login</a>\n' : '') +
                            '        <a class="btn m-2 btn-sm btn-danger" href="https://mdbootstrap.com/docs/standard/pro/" target="_blank" role="button">Buy Pro</a>\n' +
                            '      </div>\n' +
                            '    </div>';
          docFrag.appendChild(tmpElMask);
          el.parentNode.replaceChild(docFrag, el);
        });

        if (document.querySelector('.mdb-docs-content-pro') && !exceptionPaths.includes(window.location.pathname)) {

          var apiTab = document.querySelector('#docs-tab-gettingstarted');

          if (apiTab) {
            apiTab.setAttribute('data-mdb-toggle', 'modal');
            apiTab.setAttribute('data-mdb-target', '#apiRestrictedModal');
            apiTab.setAttribute('type', 'button');
            apiTab.removeAttribute('href');

            if (apiTab.classList.contains('active')) {
              var overviewTab = document.querySelector('#docs-tab-overview');
              var overviewTabsInstance = new mdb.Tab(overviewTab);
              overviewTabsInstance.show();
            }
          }
        }

        var event = document.createEvent('Event');
        event.initEvent('hide_pro_docs_init', true, true);
        document.dispatchEvent(event);
      }
    } else {
      console.log('There was an error with request!');
    }
  };
  xhr.onerror = function() {
    console.log('There was an connection error!');
  };
  xhr.open('POST', '/wp-admin/admin-ajax.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;');
  xhr.send('action=mdb_is_current_user_pro_sub_ajax');
});
