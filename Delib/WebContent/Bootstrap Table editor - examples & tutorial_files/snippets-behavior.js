(function ($) {

  var $openSnippetModal = null;
  var $technologySelect = $('#snippet-package-technology');
  var $versionSelect = $('#snippet-package-version');
  var $typeSelect = $('#snippet-package-type');
  var $privateSnippetAlert = $('#settingPrivateSnippetAlert');
  var $formSnippetPrivate = $('#formSnippetPrivate');
  var $snippetSettingsModal = $('#modalSnippetSettings');
  var $snippetSettingsPreloader = $('#snippetsSettingsPreloader');

  var likeWarning = mdb.Alert.getInstance(document.getElementById('likeWarningAlert'));
  var formWarning = mdb.Alert.getInstance(document.getElementById('snippetFormWarningAlert'));
  var reservedTagWarning = mdb.Alert.getInstance(document.getElementById('reservedTagWarningAlert'));
  var createPrivateSnippetWarning = mdb.Alert.getInstance(document.getElementById('privateSnippetWarningAlert'));
  var somethingWrongDangerAlert = mdb.Alert.getInstance(document.getElementById('somethingWrongDangerAlert'));

  var latestPackage = {};
  var packages = [];
  var tags = [];
  var technology = getTechnology();
  var pathName = window.location.pathname;
  var pathParts = pathName.split('/');
  var forbiddenTechs = ['angular', 'react', 'vue'];
  var reservedTags = ['mdb-team', 'trending', 'premium-top', 'top', 'starter', 'basic', 'advanced', 'design-block', 'plugin', 'premium', 'lab'];

  if (!snippetsCookieExists() && wpCookieExists()) getSnippetsCookie();

  /**
   * Listing snippets behavior
   */

  initTagsChips();

  $('body').on('click', '[data-mdb-target="#modalCreateSnippet"]', function loadPackages(e) {

    e.preventDefault();

    snippetSettingsShowPreloader();

    loadSortedPackages(function () {

      createOptionsSelects('Standard');

      getReservedTags(function () {

        snippetSettingsHidePreloader();
      });
    });
  });

  $('#save-snippet-settings').on('click', function saveSettings(e) {

    e.preventDefault();

    if (!validateCreateForm()) return;

    snippetSettingsShowPreloader();

    var $this = $(this);

    var technology = $technologySelect.val().startsWith('v5') ? $technologySelect.val().substr(2) : $technologySelect.val();
        technology = encodeURIComponent(technology).toLowerCase();
    var username = $this.attr('data-user-nicename');
    var action = $this.attr('data-action');
    var queryString = buildQueryString(action);

    checkIfUserCanCreateSnippet(function (canCreateSnippet) {
      if (canCreateSnippet) {
        if (action === 'forum_snippet') {

          window.open('https://mdbootstrap.com/snippets/' + technology + '/' + username + queryString, '_blank');

          snippetSettingsHidePreloader();
          $snippetSettingsModal.modal('hide');
        } else {

          window.location.assign('/snippets/' + technology + '/' + username + queryString);
        }
      } else {
        snippetSettingsHidePreloader();
      }
    });
  });

  function checkIfUserCanCreateSnippet(callback) {

    var canCreateSnippet = true;

    if (!$formSnippetPrivate.is(':checked')) {
      return callback(canCreateSnippet);
    } else {

      var $createBtn = $('#save-snippet-settings');
      $.ajax({
        url: snippets_object.wp_ajaxurl,
        method: 'POST',
        data: {
          action: 'mdb_is_current_user_pro_ajax'
        }
      })
        .done(function (response) {

          if (response.success) {
            if (!response.data.is_pro) {
              createPrivateSnippetWarning.show();
              $createBtn.prop('disabled', true);
              canCreateSnippet = false;
            }
          } else {
            somethingWrongDangerAlert.show();
            canCreateSnippet = false;
          }

          return callback(canCreateSnippet);
        })
        .fail(function() {

          somethingWrongDangerAlert.show();
          canCreateSnippet = false;
          console.error();
          return callback(canCreateSnippet);
        });
    }
  }

  $('#top, #sortby').on('change', function (e) {

    var $this = $(this);
    var $query = $this.find("option:selected");
    var updatedUrl = updateUrlParameter(location.href, $this.attr('id'), $query.val());
    location = updateUrlParameter(updatedUrl, 'paginate');
  });

  $('#category').on('change', function (e) {

    var $this = $(this);
    var categoryUrl = $this.find('option:selected').attr('data-url');
    var queryParams = updateUrlParameter(window.location.search, 'paginate');
    window.location.href = categoryUrl + queryParams;
  });

  $('.toggle-like').on('click', function () {

    var $this = $(this);

    var likeCount = parseInt($this.find('.count-like').text());
    var snippetId = $this.attr('snippet-id');
    var snippetUsername = $this.attr('snippet-username');
    var snippetUserId = $this.attr('snippet-user-id');
    var snippetTechnology = $this.attr('snippet-technology').toLowerCase();
    var currentUserId = $this.attr('current-user-id');
    var likeAction = $this.find('.like-icon').hasClass('far fa-thumbs-up') ? 'add' : 'delete';

    if (currentUserId === snippetUserId) {

      likeWarning.show();
      return;
    }

    if ($this.find('.like-icon').hasClass('far fa-thumbs-up')) {

      $this.find('.like-icon').removeClass('far fa-thumbs-up').addClass('fas fa-thumbs-up');
      $this.find('.count-like').text(likeCount + 1)
    } else {

      $this.find('.like-icon').removeClass('fas fa-thumbs-up').addClass('far fa-thumbs-up');
      $this.find('.count-like').text(likeCount - 1)
    }

    $this.addClass('disabled');

    $.ajax({
      url: snippets_object.wp_ajaxurl,
      method: 'POST',
      data: {
        action: 'ajax_is_user_logged_in'
      }
    })
      .done(function (response) {

        response = typeof response === 'string' ? JSON.parse(response) : response;

        loadSortedPackages(function (packages) {

          setLatestPackage(packages);

          var addSnippetsLikesBehavior = function () {
            $.ajax({
              url: '/api/snippets/' + snippetTechnology + '/' + snippetUsername + '/snippets/like/' + likeAction + '/' + snippetId,
              method: 'POST'
            })
              .done(function (response) {

                if (response) {

                  $this.removeClass('disabled');
                } else {

                  getSnippetsCookie(function () {

                    $this.removeClass('disabled');
                  });
                }

              })
              .fail(function (error) {

                if ($this.find('.like-icon').hasClass('far fa-thumbs-up')) {

                  $this.find('.like-icon').removeClass('far fa-thumbs-up').addClass('fas fa-thumbs-up');
                  $this.find('.count-like').text(likeCount + 1)
                } else {

                  $this.find('.like-icon').removeClass('fas fa-thumbs-up').addClass('far fa-thumbs-up');
                  $this.find('.count-like').text(likeCount - 1)
                }

                $this.removeClass('disabled');
                console.error(error);
              });
          }

          if (snippetsCookieExists()) {

            addSnippetsLikesBehavior();
          } else {

            getSnippetsCookie(function () {

              addSnippetsLikesBehavior();
            });
          }
        });
      })
      .fail(console.error);
  });

  $formSnippetPrivate.on('change', function (e) {

    var setPrivate = $(this).is(':checked');
    var $createBtn = $('#save-snippet-settings');

    if (setPrivate && !isCurrentSnippetUserPro) {
      $privateSnippetAlert.show();
      $createBtn.prop('disabled', true);
    } else if (!setPrivate || (setPrivate && isCurrentSnippetUserPro)) {
      $privateSnippetAlert.hide();
      $createBtn.prop('disabled', false);
    }
  });

  $technologySelect.on('change', function (e) {

    var technology = $(this).val();

    createOptionsSelects(technology);
    technology = technology.toLowerCase();

    if (technology.startsWith('v5')) {

      $typeSelect.val('FREE');
      $typeSelect.attr('disabled', 'true');
      $versionSelect.removeAttr('disabled');
    } else if (technology === 'custom') {

      $typeSelect.attr('disabled', 'true');
      $versionSelect.attr('disabled', 'true');
    } else {

      $typeSelect.removeAttr('disabled');
      $versionSelect.removeAttr('disabled');
    }
  });

  $versionSelect.on('change', function (e) {

    var version = $(this).val().toLowerCase();

    if (version.startsWith('v5')) {
      $typeSelect.val('FREE');
      $typeSelect.attr('disabled', 'true');
    } else {
      $typeSelect.removeAttr('disabled');
    }
  });

  function initTagsChips() {

    var $snippetTagInput = $('#mdbSnippetTagsInput');
    var $reservedTagText = $('.reservedTagWarningText');

    $snippetTagInput.on('add.mdb.chips', function (e) {

      var chip = e.arrOfObjects[e.arrOfObjects.length-1];
      var cleanName = _stripTagName(chip.tag);

      $(this)
        .find('div.chip')
        .filter(function () {
          return $(this).text() === chip.tag;
        })
        .first()
        .contents()
        .filter(function () {
          return (this.nodeType === Node.TEXT_NODE && this.nodeValue.trim() !== "");
        })
        .replaceWith(cleanName);

      if (reservedTags.indexOf(cleanName) !== -1) {

        $(this).find('div.chip').last().remove();

        $reservedTagText.text('Can\'t add ' + cleanName + ' tag - this tag is reserved! ');
        reservedTagWarning.show();
      } else {

        if (tags.indexOf(cleanName) === -1)
          tags.push(cleanName);
        else
          $(this).find('div.chip').last().remove();
      }
    });

    $snippetTagInput.on('delete.mdb.chips', function (e) {

      tags = e.arrOfObjects.map(function (el) {
        return el.tag;
      });
    });
  }

  function _stripTagName(name) {

    return name
      .trim()
      .toLowerCase()
      .replace(/\s/g, '-')
      .replace(/[^a-z0-9+#.\-]/g, '');
  }

  function buildQueryString(action) {

    var selectedTechnology = $technologySelect.val().startsWith('v5') ? $technologySelect.val().substr(2) : $technologySelect.val();
    var selectedVersion = selectedTechnology === 'Custom' ? '': $versionSelect.val();
    var selectedType = selectedTechnology === 'Custom' ? '': $typeSelect.val();

    var queryString = '?' + (!!action ? 'action=' + action : '') +
      ($formSnippetPrivate.is(':checked') ? '&status=4' : '') +
      '&tech=' + encodeURIComponent(selectedTechnology) +
      '&ver=' + encodeURIComponent(selectedVersion) +
      '&type=' + encodeURIComponent(selectedType) +
      '&title=' + encodeURIComponent($('#snippet-title').val()) +
      '&desc=' + encodeURIComponent($('#snippet-description').val()) +
      '&package=' + packages.filter(function (pack) {

        return pack.technology === selectedTechnology &&
          pack.version === selectedVersion &&
          pack.type === selectedType
      })[0].package_id;

    if (tags.length) {

      queryString += '&tags=' + tags.slice(0, 10).join(',');
    }

    return queryString;
  }

  function validateCreateForm() {

    var $titleInput = $('#snippet-title');

    var technologyValid = $technologySelect.val() !== '';
    var versionValid = $technologySelect.val().toLowerCase() === 'custom' || $versionSelect.val() !== '';
    var typeValid = $technologySelect.val().toLowerCase() === 'custom' || $typeSelect.val() !== '';
    var titleValid = $titleInput.val() && $titleInput.val().length > 3 && $titleInput.val().length < 255;
    var descriptionValid = true;
    var tagsValid = true;

    var formValid = true;

    $snippetSettingsModal.find('.chips div.chip').each(function (index) {

      var name = $(this).text();

      tagsValid = index < 10 && name.length >= 2 && name.length <= 255;
    });

    if (!(technologyValid && versionValid && typeValid && titleValid && descriptionValid && tagsValid)) {

      formWarning.show();

      formValid = false;
    }

    $titleInput[(titleValid ? 'removeClass' : 'addClass')]('is-invalid');
    $('#tags-invalid-feedback')[(tagsValid ? 'addClass' : 'removeClass')]('d-none');

    return formValid;
  }

  function updateUrlParameter(uri, param, value = null) {

    var indexOfHash = uri.indexOf('#');
    var hash = indexOfHash === -1 ? '' : uri.substr(indexOfHash);
    uri = indexOfHash === -1 ? uri : uri.substr(0, indexOfHash);

    var regExp = new RegExp("([?&])" + param + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";

    if (value === null) {

      uri = uri.replace(regExp, '$1' + '$2'); // delete
    } else {

      if (uri.match(regExp)) {

        uri = uri.replace(regExp, '$1' + param + "=" + value + '$2');
      } else {

        uri = uri + separator + param + "=" + value;
      }
    }

    return uri + hash;
  }

  function createOptionsSelects(technology) {

    var versions = [], types = [];
    var mdb4Versions = [], mdb5Versions = [];
    var selected = '';

    $versionSelect.empty();
    $typeSelect.empty();

    var snippetPackageTechnologyIns = mdb.Select.getInstance(document.getElementById('snippet-package-technology'));
    snippetPackageTechnologyIns.setValue(technology);
    technology = technology.toLowerCase();

    packages.forEach(function (pack) {

      var packTechnology = pack.version.startsWith('v5') && ( pack.technology !== 'jQuery' || pack.technology !== 'Standard' ) ? 'v5' + pack.technology.toLowerCase() : pack.technology.toLowerCase();
      var belongsToSelectedTechnology = packTechnology === technology.toLowerCase();

      if (belongsToSelectedTechnology && versions.indexOf(pack.version) === -1) {

        versions.push(pack.version);
        if (technology === 'jquery') $versionSelect.append('<option value="' + pack.version + '">' + pack.version + '</option>');
        if (technology === 'angular' || technology === 'react' || technology === 'vue' ||
            technology === 'v5angular' || technology === 'v5react' || technology === 'v5vue') {
          if (pack.version.startsWith('v5')) mdb5Versions.push(pack.version);
          else mdb4Versions.push(pack.version);
        }
      }

      if (belongsToSelectedTechnology && types.indexOf(pack.type) === -1) {

        types.push(pack.type);
        selected = pack.type === 'PRO' ? ' selected ' : '';
        $typeSelect.append('<option value="' + pack.type + '"' + selected + '>' + pack.type + '</option>');
      }
    });

    if (technology === 'standard') {

      var alphaVersions = [], betaVersions = [], stableVersions = [];
      versions.forEach(function (v) {
        if (v.toLowerCase().indexOf('-alpha') !== -1) {
          alphaVersions.push(v);
        } else if (v.toLowerCase().indexOf('-beta') !== -1) {
          betaVersions.push(v);
        } else {
          stableVersions.push(v);
        }
      });

      stableVersions.forEach(function (version) {
        $versionSelect.append('<option value="' + version + '">' + version + '</option>');
      });

      alphaVersions.forEach(function (version) {
        $versionSelect.append('<option value="' + version + '">' + version + '</option>');
      });

      betaVersions.forEach(function (version) {
        $versionSelect.append('<option value="' + version + '">' + version + '</option>');
      });
    }

    if (technology === 'angular' || technology === 'react' || technology === 'vue' ||
        technology === 'v5angular' || technology === 'v5react' || technology === 'v5vue') {
      if (mdb5Versions.length > 0) {
        mdb5Versions.forEach(function (version) {
          $versionSelect.append('<option value="' + version + '">' + version.substr(3) + '</option>');
        });
      } else if (mdb4Versions.length > 0) {
        mdb4Versions.forEach(function (version) {
          $versionSelect.append('<option value="' + version + '">' + version + '</option>');
        });
      }
    }
  }

  /**
   * Docs snippets behavior
   */

  if (forbiddenTechs.indexOf(pathParts[1]) === -1 && forbiddenTechs.indexOf(pathParts[2]) === -1 && forbiddenTechs.indexOf(pathParts[3]) === -1 || technology === 'Standard') {

    registerPrismButton();
  }

  document.addEventListener('dpl_loaded', function () {

    setOpenSnippetsModalEl();
    bindSnippetsModalEvents();
  });

  function setOpenSnippetsModalEl() {

    $openSnippetModal = $('#modalOpenSnippet');

    if (!$openSnippetModal.length) {
      $openSnippetModal = $('#modalOpenSnippetRestricted');
    }
  }

  function bindSnippetsModalEvents() {

    $('main').on('click', '.export-to-snippet', function (e) {

      e.preventDefault();

      var $this = $(this);
      var $navigation = $this.closest('.docs-pills').find('ul');

      if (!$navigation.length) {

        $navigation = $this.closest('.tab-content').siblings('ul');
      }

      var code = getSnippetCode($navigation);

      showPreloader();
      $openSnippetModal.modal();

      $.ajax({
        url: snippets_object.wp_ajaxurl,
        method: 'POST',
        data: {
          action: 'ajax_is_user_logged_in'
        }
      })
        .done(function (response) {

          response = typeof response === 'string' ? JSON.parse(response) : response;

          loadSortedPackages(function (packages) {

            setLatestPackage(packages);

            var snippet = prepareCreatePayload(code);

            if (response.loggedin) {

              if (snippetsCookieExists()) {

                saveSnippet(response, snippet);
              } else {

                getSnippetsCookie(function () {

                  saveSnippet(response, snippet)
                });
              }

            } else {

              saveGuestSnippet(response, snippet);
            }
          });
        })
        .fail(console.error);
    });

    $('a.open-snippet').on('click', function closeModal(e) {
      $openSnippetModal.modal('hide');
    });

    $('.auth-modal-toggle').on('click', function () {
      $openSnippetModal.modal('hide');
    });
  }

  function setLatestPackage(packages) {

    const technology = getTechnology();

    latestPackage = packages.filter(function (pack) {

      return pack.type === 'PRO' && pack.technology === technology;
    })[0];
  }

  function getSnippetCode($navigation) {

    var code;
    var result = {
      html: '',
      css: '',
      javascript: ''
    };

    if (technology === 'Standard') {

      code = result;
    } else {

      throw new Error('Unknown technology');
    }

    $navigation.find('.nav-link').each(function () {

      var $link = $(this);
      code[$link.text().toLowerCase()] = $('#' + $link.attr('href').split('#')[1]).find('pre').text();
    });

    if (technology === 'Standard') {

      result = code;
    }

    return result;
  }

  function prepareCreatePayload(code) {

    return {
      packageId: latestPackage.package_id.toString(),
      title: 'New snippet ' + Date.now().toString().substr(-3),
      description: 'Forked from ' + window.location.href,
      html: code.html,
      css: code.css,
      js: code.javascript,
      status: 3
    };
  }

  function saveGuestSnippet(user, snippet) {

    var technology = encodeURIComponent(latestPackage.technology).toLowerCase();
    var username = 'temp';
    var queryString = '?action=prism_export';

    createGuestSnippet(snippet, function (response) {

      $openSnippetModal.find('a.open-snippet').attr('href', '/snippets/' + technology + '/' + username + '/' + response.insertId + queryString);
      hidePreloader();
    });
  }

  function createGuestSnippet(data, callback) {

    $.ajax({
      url: '/api/snippets/' + latestPackage.technology.toLowerCase() + '/temp/snippets/temp/create',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(data)
    }).done(callback).fail(console.error);
  }

  function saveSnippet(user, snippet) {

    var technology = encodeURIComponent(latestPackage.technology).toLowerCase();
    var username = user.current_user.user_nicename;

    createSnippet(user.current_user, snippet, function (response) {

      if (response) {

        $openSnippetModal.find('a.open-snippet').attr('href', '/snippets/' + technology + '/' + username + '/' + response.insertId);
        hidePreloader();
      } else {

        getSnippetsCookie(function () {

          saveSnippet(user, snippet);
        });
      }
    });
  }

  function createSnippet(user, data, callback) {

    $.ajax({
      url: '/api/snippets/' + latestPackage.technology.toLowerCase() + '/' + user.user_nicename + '/snippets/create',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(data)
    }).done(callback).fail(console.error);
  }

  function registerPrismButton() {

    Prism.plugins.toolbar.registerButton('export-to-snippet', function (env) {

      if ($(env.element).closest('pre').data('editor') === false) {
        return;
      }

      var button = document.createElement('a');
      button.innerHTML = 'Open in MDB Editor';
      button.classList = 'btn btn-dark btn-sm export-to-snippet';

      return button;
    });

    $(document).on('DOMNodeInserted', function (e) {

      if ($(e.target).hasClass('toolbar')) {

        if ($(e.target).prev().data('editor') === false) {

          return;
        }

        $(e.target).find('.btn-copy-code').css('right', 165);
      }
    });
  }

  /**
   * Some common helper functions
   */

  function getSnippetsCookie(callback) {

    $.ajax({
      url: '/api/snippets/user/auth',
      method: 'POST',
      contentType: 'application/json'
    }).done(function () {
      callback();
    }).fail(console.error);
  }

  function snippetsCookieExists() {
    return document.cookie.indexOf('mdb_snippets_auth') !== -1;
  }

  function wpCookieExists() {
    return document.cookie.indexOf('wordpress_logged_in_') !== -1;
  }

  function showPreloader() {

    $(".mdb-snippets-prepare-text").removeClass('d-none');
    $(".mdb-snippets-ready-text").addClass('d-none');
    $(".open-snippet").addClass('disabled');
    $(".open-snippet").find('.spinner-border').removeClass('d-none');
  }

  function hidePreloader() {

    $(".mdb-snippets-prepare-text").addClass('d-none');
    $(".mdb-snippets-ready-text").removeClass('d-none');
    $(".open-snippet").removeClass('disabled');
    $(".open-snippet").find('.spinner-border').addClass('d-none');
  }

  function snippetSettingsShowPreloader() {

    $snippetSettingsPreloader.removeClass('d-none');
  }

  function snippetSettingsHidePreloader() {

    $snippetSettingsPreloader.addClass('d-none');
  }

  function loadSortedPackages(callback) {

    $.ajax({
      url: '/api/snippets/snippets/packages/read',
      method: 'GET'
    }).done(function (response) {

      var technologiesOptionsOrder = {'jQuery': 0, 'Angular': 1, 'React': 2, 'Vue': 3, 'Standard': 4, 'Custom': 5};

      packages = response
        .sort(function (a, b) {

          if (technologiesOptionsOrder[a.technology] < technologiesOptionsOrder[b.technology]) return -1;
          if (technologiesOptionsOrder[a.technology] > technologiesOptionsOrder[b.technology]) return 1;

          return b.version.localeCompare(a.version, undefined, {
            numeric: true
          });
        });

      callback(packages);
    }).fail(console.error);
  }

  function getReservedTags(callback) {

    $.ajax({
      url: '/api/snippets/snippets/tags/readReserved',
      method: 'GET',
    }).done(function (response) {

      reservedTags = response;

      callback(reservedTags);
    }).fail(console.error);
  }


  function getTechnology() {

    var pathName = window.location.pathname;

    if ((/(standard)/g).test(pathName)) {

      return 'Standard';
    } else if ((/vue/g).test(pathName)) {

      return 'Vue';
    } else if ((/react/g).test(pathName)) {

      return 'React';
    } else if ((/angular/g).test(pathName)) {

      return 'Angular'
    }

    return undefined;
  }
}(jQuery));
