jQuery(function ($) {
  var $currentForm = null;
  var $formLogin = null;
  var $formRegister = null;
  var $modal = null;
  var $signupTab = null;
  var $signupTabPill = null;
  var $singinTab = null;
  var $signinTabPill = null;

  var auth_page_categories = ajax_auth_object.auth_page_categories;

  document.addEventListener("dpl_loaded", function () {
    bindAuthFormEvents();
    bindAuthModalEvents();

    $(".mdb-logout-button").on("click", function () {
      $(".mdb-logout-button").addClass("disabled");
    });
  });

  document.addEventListener("hide_pro_docs_init", function () {
    bindAuthModalEvents();
  });

  function bindAuthFormEvents() {
    $formLogin = $("form#login");
    $formRegister = $("form#register");

    $formRegister.validate({
      rules: {
        signonname: {
          required: true,
          minlength: 3,
        },
        signonusername: {
          required: true,
          minlength: 3,
        },
        email: {
          required: true,
          email: true,
        },
        signonpassword: {
          required: true,
          minlength: 5,
        },
        password2: {
          required: true,
          equalTo: "#signonpassword",
        },
      },
      errorClass: "is-invalid",
    });
    $formLogin.validate();

    $formLogin.on("submit", onSubmit);
    $formRegister.on("submit", onSubmit);
  }

  function onSubmit(e) {
    e.preventDefault();

    $currentForm = $(this);

    if (!$currentForm.valid()) return false;

    if ($currentForm.is($formRegister)) {
      register();
    } else {
      login();
    }
  }

  function register(e) {
    showStatus(ajax_auth_object.loadingmessage);

    var payload = {
      action: "ajaxregister",
      name: $("#signonname").val(),
      username: $("#signonusername").val(),
      password: $("#signonpassword").val(),
      email: $("#email").val(),
      security: $("#signonsecurity").val(),
      newsletter: $("#newsletter").is(":checked"),
    };
    doSubmit(payload);
  }

  function login(e) {
    showStatus(ajax_auth_object.loadingmessage);

    var payload = {
      action: "ajaxlogin",
      username: $("#username").val(),
      password: $("#password").val(),
      email: "",
      security: $("#security").val(),
      name: "",
    };
    doSubmit(payload);
  }

  function doSubmit(data) {
    $.ajax({
      type: "POST",
      dataType: "json",
      url: ajax_auth_object.ajaxurl,
      data: data,
    })
      .done(function (response) {
        showStatus(response.message);

        if (response.loggedin === true) {
          if ($currentForm.is($formRegister)) {
            window.open("/newsletter/", "_blank");
          }
          location.reload();
        }
      })
      .fail(console.error);
  }

  function showStatus(text) {
    if (text.startsWith("This") && typeof toastr !== 'undefined') {
      toastr.error(text);
    } else if (text.startsWith("This") && typeof mdb !== 'undefined') {
      const alert = document.createElement("div");
      alert.innerHTML = `
        <div class="d-flex justify-content-between">
          <p class="mb-0"><strong>${text}</strong></p>
          <button
            type="button"
            class="btn-close"
            data-mdb-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
        `;
      alert.classList.add("alert", "fade");
      document.body.appendChild(alert);

      const alertInstance = new mdb.Alert(alert, {
        color: "info",
        stacking: true,
        hidden: true,
        width: "450px",
        position: "top-right",
        autohide: true,
        delay: 5000,
      });

      alertInstance.show();
    }

    $currentForm.find("p.status").show().text(text);
  }

  function bindAuthModalEvents() {
    $modal = $("#navbarLogin");
    $signupTab = $modal.find("#navbarLogin-signup");
    $signupTabPill = $modal.find('[href="#navbarLogin-signup"]');
    $singinTab = $modal.find("#navbarLogin-login");
    $signinTabPill = $modal.find('[href="#navbarLogin-login"]');

    $(".auth-modal-toggle[data-auth-modal-tab]").on("click", function (e) {
      var targetTab = $(this).attr("data-auth-modal-tab");
      if (targetTab === "sign-in") {
        activateSignInTab();
      } else if (targetTab === "sign-up") {
        activateSignUpTab();
      }

      $modal.modal("show");
    });

    $modal.on("hidden.bs.modal", activateSignUpTab);
  }

  function activateSignUpTab() {
    $singinTab.removeClass("in show active");
    $signinTabPill.removeClass("active show");

    $signupTab.addClass("in show active");
    $signupTabPill.addClass("active show");
  }

  function activateSignInTab() {
    $signupTab.removeClass("in show active");
    $signupTabPill.removeClass("active show");

    $singinTab.addClass("in show active");
    $signinTabPill.addClass("active show");
  }
});
