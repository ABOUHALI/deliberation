'use strict';

function initPagesRates(rootElementId) {

  var $rootElement = $('#' + rootElementId);
  var $stars = $rootElement.find('.stars');
  var $popovers = $rootElement.find('.popovers');
  var $rateTooltip = $rootElement.find('.rate-tooltip');

  var maxRequestNumber = 5;
  var requestCounter = 0;
  var $currentTooltip;

  jQuery(document).ready(function ($) {

    if ($.fn.tooltip.Constructor.Default.whiteList) {

      var myDefaultWhiteList = $.fn.tooltip.Constructor.Default.whiteList;
      myDefaultWhiteList.textarea = [];
      myDefaultWhiteList.button = [];
    }

    var clickedStarIndex;
    var pageType;

    $popovers.attr('data-content', "" +
      "<div class='md-form my-0 py-0'> " +
      "<textarea type='text' style='font-size: 0.78rem' class='md-textarea form-control vote-description-input py-0' placeholder='Write us what can we improve' rows='3'></textarea> " +
      "<button type='submit' class='btn btn-sm btn-primary vote-submit-button'>Submit!</button> <button class='btn btn-flat btn-sm close-popover-button'>Close</button>  " +
      "</div>");

    $stars.on('mouseover', function () {
      pageType = $(this).attr('data-page-template');
    });

    $stars.on('click', function () {
      var $this = $(this);
      clickedStarIndex = $this.attr('data-index');
      $currentTooltip = $('.popover-form-container');

      markStarsAsActive(clickedStarIndex);

      setTimeout(() => {
        $rateTooltip = $($currentTooltip[0].lastChild);
        const $vote_value = $rootElement.find('.stars.amber-text').length;
        let voteDescription = $currentTooltip.find('.vote-description-input').first().val();
        let lengthNotEmpty = voteDescription.trim().length;

        if($vote_value <= 3) {

          if(voteDescription === '' || lengthNotEmpty === 0) {

            toastr["info"]("For '1', '2' and '3' ratings, a description is required");

            $rateTooltip.on('click', '.close-popover-button', function () {
              clickedStarIndex = -1;
              unmarkActive();
              $popovers.popover('hide');
            });
            $rateTooltip.on('click', '.vote-submit-button', function () {
              voteDescription = $currentTooltip.find('.vote-description-input').first().val();
              lengthNotEmpty = voteDescription.trim().length;
              if(voteDescription === '' || lengthNotEmpty === 0) {

                toastr["info"]("For '1', '2' and '3' ratings, a description is required");
              } else {
                submitVote(voteDescription);
                $popovers.popover('hide');
              }
            });
          } else {

            submitVote(voteDescription);
          }
        } else {

          $rateTooltip.on('mousedown', '.vote-submit-button', function () {

            submitVote(voteDescription);
            $popovers.popover('hide');
          });

          $rateTooltip.on('click', '.close-popover-button', function () {
            $popovers.popover('hide');
          });

          submitVote('');
        }
      }, 0);
    });

    $stars.on('mouseover', function () {

      var index = $(this).attr('data-index');
      const popoverTitle = setPopoverTitle(index, pageType);

      $popovers.attr('title', popoverTitle.substring(0, popoverTitle.indexOf(". ")));
      $popovers.attr('data-original-title', popoverTitle);
      markStarsAsActive(index);
    });

    $stars.on('mouseleave', function () {

      unmarkActive();
      markStarsAsActive(clickedStarIndex);
    });

    $stars.on('click', function () {
      $stars.popover('hide');
    });

    $stars.popover({
      container: '#' + rootElementId + ' .popover-form-container'
    });
  });

  function markStarsAsActive(index) {

    unmarkActive();
    for (var i = 0; i <= index; i++) {
      $($stars.get(i)).addClass('amber-text');
    }
  }

  function unmarkActive() {
    $stars.removeClass('amber-text');
  }

  function setPopoverTitle(index, type) {

    var popoverTitleText = type === 'tutorial' ? 'lesson' : 'documentation';

    if (requestCounter >= maxRequestNumber) {
      return 'You have reached the vote limit';
    }

    switch (index) {
      case '0': {
        return `Useless ${popoverTitleText}. </br> <span class="text-danger">Comment required</span>`;
      }
      case '1': {
        return `Poor ${popoverTitleText}. </br> <span class="text-danger">Comment required</span>`;
      }
      case '2': {
        return `Ok ${popoverTitleText}. </br> <span class="text-danger">Comment required</span>`;
      }
      case '3': {
        return `Good ${popoverTitleText}. `;
      }
      case '4': {
        return `Excellent ${popoverTitleText}. `;
      }
    }
  }

  function submitVote(description) {

    doSubmit(description);
  }


  function getDevice() {

    if (/Mobi/.test(navigator.userAgent)) {
      return 1;
    }

    if (/Tablet|iPad/i.test(navigator.userAgent)) {
      return 2;
    }

    return 3;
  }

  function doSubmit(desc) {
    requestCounter++;

    if (requestCounter <= maxRequestNumber) {

      $.ajax({
        method: 'POST',
        url: example_ajax_obj.ajaxurl,
        data: {
          action: 'pages_rates_request',
          vote_value: $rootElement.find('.stars.amber-text').length,
          vote_description: desc,
          page_id: $currentTooltip.attr('data-page-id'),
          guest_id: localStorage.getItem('_uuid').substring(0, 5),
          device_type: getDevice()
        }
      }).fail(function (errorThrown) {


        toastr["error"]("An error has occurred. Try again in a few moments.");
        console.log(errorThrown);
      }).done(function () {

        toastr["success"]("Thank you for your feedback!");
      })
    }
  }
}

// initPagesRates('docsTabsOverview');
// initPagesRates('docsTabsAPI');
// initPagesRates('docsTabsExamples');
// initPagesRates('tutorialPageContainer');
// initPagesRates('docsEcommerceOverview');
