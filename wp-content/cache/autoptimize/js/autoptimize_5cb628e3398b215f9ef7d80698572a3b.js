window._wpemojiSettings = {
       "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/13.0.0\/72x72\/",
       "ext": ".png",
       "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/13.0.0\/svg\/",
       "svgExt": ".svg",
       "source": {
           "concatemoji": "https:\/\/cvio.bslthemes.com\/ve1\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.5.3"
       }
   };
   ! function(e, a, t) {
       var r, n, o, i, p = a.createElement("canvas"),
           s = p.getContext && p.getContext("2d");
   
       function c(e, t) {
           var a = String.fromCharCode;
           s.clearRect(0, 0, p.width, p.height), s.fillText(a.apply(this, e), 0, 0);
           var r = p.toDataURL();
           return s.clearRect(0, 0, p.width, p.height), s.fillText(a.apply(this, t), 0, 0), r === p.toDataURL()
       }
   
       function l(e) {
           if (!s || !s.fillText) return !1;
           switch (s.textBaseline = "top", s.font = "600 32px Arial", e) {
               case "flag":
                   return !c([127987, 65039, 8205, 9895, 65039], [127987, 65039, 8203, 9895, 65039]) && (!c([55356, 56826, 55356, 56819], [55356, 56826, 8203, 55356, 56819]) && !c([55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447], [55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447]));
               case "emoji":
                   return !c([55357, 56424, 8205, 55356, 57212], [55357, 56424, 8203, 55356, 57212])
           }
           return !1
       }
   
       function d(e) {
           var t = a.createElement("script");
           t.src = e, t.defer = t.type = "text/javascript", a.getElementsByTagName("head")[0].appendChild(t)
       }
       for (i = Array("flag", "emoji"), t.supports = {
               everything: !0,
               everythingExceptFlag: !0
           }, o = 0; o < i.length; o++) t.supports[i[o]] = l(i[o]), t.supports.everything = t.supports.everything && t.supports[i[o]], "flag" !== i[o] && (t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && t.supports[i[o]]);
       t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && !t.supports.flag, t.DOMReady = !1, t.readyCallback = function() {
           t.DOMReady = !0
       }, t.supports.everything || (n = function() {
           t.readyCallback()
       }, a.addEventListener ? (a.addEventListener("DOMContentLoaded", n, !1), e.addEventListener("load", n, !1)) : (e.attachEvent("onload", n), a.attachEvent("onreadystatechange", function() {
           "complete" === a.readyState && t.readyCallback()
       })), (r = t.source || {}).concatemoji ? d(r.concatemoji) : r.wpemoji && r.twemoji && (d(r.twemoji), d(r.wpemoji)))
   }(window, document, window._wpemojiSettings);
   (function($) {
       "use strict";
       $(window).on('elementor/frontend/init', function() {
           var width = $(window).width();
           var height = $(window).height();
           elementorFrontend.hooks.addAction('frontend/element_ready/global', function($scope) {
               if (($('.typed-subtitle').length) && ($('.h-subtitle p').length > 1)) {
                   $('.typed-subtitle').each(function() {
                       $(this).typed({
                           stringsElement: $(this).prev('.typing-subtitle'),
                           typeSpeed: 80,
                           backDelay: 1800,
                           loop: true
                       });
                   });
               }
               setTimeout(function() {
                   $('.h-subtitles').addClass('ready');
                   if ($('.typed-bread').length) {
                       $('.typed-bread').typed({
                           stringsElement: $('.typing-bread'),
                           showCursor: false
                       });
                   }
               }, 1000);
               if ($('.jarallax').length) {
                   $('.jarallax').jarallax();
               }
               if ($('.jarallax-video').length) {
                   $('body').addClass('background-enabled');
                   $('.jarallax-video').jarallax();
               }
               if ($('#grained_container').length) {
                   var grained_options = {
                       'animate': true,
                       'patternWidth': 400,
                       'patternHeight': 400,
                       'grainOpacity': 0.15,
                       'grainDensity': 3,
                       'grainWidth': 1,
                       'grainHeight': 1
                   }
                   grained('#grained_container', grained_options);
               }
               if ($('.started-carousel').length) {
                   var slider_container = $('.started-carousel .swiper-container');
                   var is_autoplaytime = slider_container.data('autoplaytime');
                   var is_loop = slider_container.data('loop');
                   var started_slider = new Swiper('.started-carousel .swiper-container', {
                       init: false,
                       loop: is_loop,
                       spaceBetween: 0,
                       effect: 'fade',
                       slidesPerView: 1,
                       simulateTouch: false,
                       autoplay: {
                           delay: is_autoplaytime,
                           disableOnInteraction: false,
                           waitForTransition: false,
                       },
                       navigation: {
                           nextEl: '.started .swiper-button-next',
                           prevEl: '.started .swiper-button-prev',
                       },
                   });
                   started_slider.on('slideChange', function() {
                       var index = started_slider.realIndex;
                       var total = started_slider.slides.length;
                       $('.started-carousel .swiper-slide').removeClass('first');
                       $('.started-carousel .swiper-slide').each(function(i, slide) {
                           if ((index - 1) >= i) {
                               $(slide).addClass('swiper-clip-active');
                           } else {
                               $(slide).removeClass('swiper-clip-active');
                           }
                       });
                       $('.started-carousel .swiper-slide').each(function(i, slide) {
                           $(slide).css({
                               'z-index': total - i
                           });
                       });
                   });
                   started_slider.init();
               }
               $('.hover-animated .circle').on({
                   mouseenter: function(e) {
                       if ($(this).find(".ink").length === 0) {
                           $(this).prepend("<span class='ink'></span>");
                       }
                       var ink = $(this).find(".ink");
                       ink.removeClass("animate");
                       if (!ink.height() && !ink.width()) {
                           var d = Math.max($(this).outerWidth(), $(this).outerHeight());
                           ink.css({
                               height: d,
                               width: d
                           });
                       }
                       var x = e.pageX - $(this).offset().left - ink.width() / 2;
                       var y = e.pageY - $(this).offset().top - ink.height() / 2;
                       ink.css({
                           top: y + 'px',
                           left: x + 'px'
                       }).addClass("ink-animate");
                       $('.cursor-follower').addClass('hide');
                   },
                   mouseleave: function(e) {
                       var ink = $(this).find(".ink");
                       var x = e.pageX - $(this).offset().left - ink.width() / 2;
                       var y = e.pageY - $(this).offset().top - ink.height() / 2;
                       ink.css({
                           top: y + 'px',
                           left: x + 'px'
                       }).removeClass("ink-animate");
                       $('.cursor-follower').removeClass('hide');
                   }
               });
   
               function skills() {
                   var skills_dotted = $('.skills.dotted .progress');
                   var skills_dotted_w = skills_dotted.width();
                   if (skills_dotted.length) {
                       skills_dotted.append('<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
                       skills_dotted.find('.percentage').append('<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
                       skills_dotted.find('.percentage .da').css({
                           'width': skills_dotted_w
                       });
                   }
               }
               setTimeout(skills, 1000);
               var skills_circles = $('.skills.circles .progress');
               if (skills_circles.length) {
                   skills_circles.append('<div class="slice"><div class="bar"></div><div class="fill"></div></div>');
               }
               if ($('.reviews-carousel').length) {
                   var rev_slider = $('.reviews-carousel .swiper-container');
                   var is_autoplaytime = rev_slider.data('autoplaytime');
                   var is_loop = rev_slider.data('loop');
                   var is_slidesview = rev_slider.data('slidesview');
                   var is_spacebetween = rev_slider.data('spacebetween');
                   var rev_slider = new Swiper('.reviews-carousel .swiper-container', {
                       loop: is_loop,
                       spaceBetween: is_spacebetween,
                       slidesPerView: is_slidesview,
                       autoplay: false,
                       navigation: {
                           nextEl: '.reviews-carousel .swiper-button-next',
                           prevEl: '.reviews-carousel .swiper-button-prev',
                       },
                       pagination: {
                           el: '.reviews-carousel .swiper-pagination',
                           type: 'bullets',
                       },
                       breakpoints: {
                           720: {
                               slidesPerView: 1,
                               spaceBetween: is_spacebetween,
                           },
                           1200: {
                               slidesPerView: is_slidesview,
                               spaceBetween: is_spacebetween,
                           },
                       }
                   });
               }
               if ($('.team-carousel').length) {
                   var team_slider = $('.team-carousel .swiper-container');
                   var t_is_autoplaytime = team_slider.data('autoplaytime');
                   var t_is_loop = team_slider.data('loop');
                   var t_is_slidesview = team_slider.data('slidesview');
                   var t_is_spacebetween = team_slider.data('spacebetween');
                   var team_slider = new Swiper('.team-carousel .swiper-container', {
                       loop: t_is_loop,
                       spaceBetween: t_is_spacebetween,
                       slidesPerView: t_is_slidesview,
                       autoplay: false,
                       navigation: {
                           nextEl: '.team-carousel .swiper-button-next',
                           prevEl: '.team-carousel .swiper-button-prev',
                       },
                       pagination: {
                           el: '.team-carousel .swiper-pagination',
                           type: 'bullets',
                       },
                       breakpoints: {
                           720: {
                               slidesPerView: 1,
                               spaceBetween: t_is_spacebetween,
                           },
                           1200: {
                               slidesPerView: t_is_slidesview,
                               spaceBetween: t_is_spacebetween,
                           },
                       }
                   });
               }
               var $container = $('.portfolio-items');
               $container.imagesLoaded(function() {
                   $container.isotope({
                       percentPosition: true,
                       itemSelector: '.box-item'
                   });
                   if ($('.portfolio-items.portfolio-new').length) {
                       var s_parallax = document.getElementsByClassName('wp-post-image');
                       new simpleParallax(s_parallax);
                   }
               });
           });
           elementorFrontend.hooks.addAction('frontend/element_ready/widget', function($scope) {});
       });
   })(jQuery);
   var wpcf7 = {
       "apiSettings": {
           "root": "https:\/\/cvio.bslthemes.com\/ve1\/wp-json\/contact-form-7\/v1",
           "namespace": "contact-form-7\/v1"
       }
   };
   (function($) {
       'use strict';
       if (typeof wpcf7 === 'undefined' || wpcf7 === null) {
           return;
       }
       wpcf7 = $.extend({
           cached: 0,
           inputs: []
       }, wpcf7);
       $(function() {
           wpcf7.supportHtml5 = (function() {
               var features = {};
               var input = document.createElement('input');
               features.placeholder = 'placeholder' in input;
               var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
               $.each(inputTypes, function(index, value) {
                   input.setAttribute('type', value);
                   features[value] = input.type !== 'text';
               });
               return features;
           })();
           $('div.wpcf7 > form').each(function() {
               var $form = $(this);
               wpcf7.initForm($form);
               if (wpcf7.cached) {
                   wpcf7.refill($form);
               }
           });
       });
       wpcf7.getId = function(form) {
           return parseInt($('input[name="_wpcf7"]', form).val(), 10);
       };
       wpcf7.initForm = function(form) {
           var $form = $(form);
           wpcf7.setStatus($form, 'init');
           $form.submit(function(event) {
               if (!wpcf7.supportHtml5.placeholder) {
                   $('[placeholder].placeheld', $form).each(function(i, n) {
                       $(n).val('').removeClass('placeheld');
                   });
               }
               if (typeof window.FormData === 'function') {
                   wpcf7.submit($form);
                   event.preventDefault();
               }
           });
           $('.wpcf7-submit', $form).after('<span class="ajax-loader"></span>');
           wpcf7.toggleSubmit($form);
           $form.on('click', '.wpcf7-acceptance', function() {
               wpcf7.toggleSubmit($form);
           });
           $('.wpcf7-exclusive-checkbox', $form).on('click', 'input:checkbox', function() {
               var name = $(this).attr('name');
               $form.find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
           });
           $('.wpcf7-list-item.has-free-text', $form).each(function() {
               var $freetext = $(':input.wpcf7-free-text', this);
               var $wrap = $(this).closest('.wpcf7-form-control');
               if ($(':checkbox, :radio', this).is(':checked')) {
                   $freetext.prop('disabled', false);
               } else {
                   $freetext.prop('disabled', true);
               }
               $wrap.on('change', ':checkbox, :radio', function() {
                   var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
                   if ($cb.is(':checked')) {
                       $freetext.prop('disabled', false).focus();
                   } else {
                       $freetext.prop('disabled', true);
                   }
               });
           });
           if (!wpcf7.supportHtml5.placeholder) {
               $('[placeholder]', $form).each(function() {
                   $(this).val($(this).attr('placeholder'));
                   $(this).addClass('placeheld');
                   $(this).focus(function() {
                       if ($(this).hasClass('placeheld')) {
                           $(this).val('').removeClass('placeheld');
                       }
                   });
                   $(this).blur(function() {
                       if ('' === $(this).val()) {
                           $(this).val($(this).attr('placeholder'));
                           $(this).addClass('placeheld');
                       }
                   });
               });
           }
           if (wpcf7.jqueryUi && !wpcf7.supportHtml5.date) {
               $form.find('input.wpcf7-date[type="date"]').each(function() {
                   $(this).datepicker({
                       dateFormat: 'yy-mm-dd',
                       minDate: new Date($(this).attr('min')),
                       maxDate: new Date($(this).attr('max'))
                   });
               });
           }
           if (wpcf7.jqueryUi && !wpcf7.supportHtml5.number) {
               $form.find('input.wpcf7-number[type="number"]').each(function() {
                   $(this).spinner({
                       min: $(this).attr('min'),
                       max: $(this).attr('max'),
                       step: $(this).attr('step')
                   });
               });
           }
           wpcf7.resetCounter($form);
           $form.on('change', '.wpcf7-validates-as-url', function() {
               var val = $.trim($(this).val());
               if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== val.indexOf('.')) {
                   val = val.replace(/^\/+/, '');
                   val = 'http://' + val;
               }
               $(this).val(val);
           });
       };
       wpcf7.submit = function(form) {
           if (typeof window.FormData !== 'function') {
               return;
           }
           var $form = $(form);
           $('.ajax-loader', $form).addClass('is-active');
           wpcf7.clearResponse($form);
           var formData = new FormData($form.get(0));
           var detail = {
               id: $form.closest('div.wpcf7').attr('id'),
               status: 'init',
               inputs: [],
               formData: formData
           };
           $.each($form.serializeArray(), function(i, field) {
               if ('_wpcf7' == field.name) {
                   detail.contactFormId = field.value;
               } else if ('_wpcf7_version' == field.name) {
                   detail.pluginVersion = field.value;
               } else if ('_wpcf7_locale' == field.name) {
                   detail.contactFormLocale = field.value;
               } else if ('_wpcf7_unit_tag' == field.name) {
                   detail.unitTag = field.value;
               } else if ('_wpcf7_container_post' == field.name) {
                   detail.containerPostId = field.value;
               } else if (field.name.match(/^_/)) {} else {
                   detail.inputs.push(field);
               }
           });
           wpcf7.triggerEvent($form.closest('div.wpcf7'), 'beforesubmit', detail);
           var ajaxSuccess = function(data, status, xhr, $form) {
               detail.id = $(data.into).attr('id');
               detail.status = data.status;
               detail.apiResponse = data;
               switch (data.status) {
                   case 'init':
                       wpcf7.setStatus($form, 'init');
                       break;
                   case 'validation_failed':
                       $.each(data.invalid_fields, function(i, n) {
                           $(n.into, $form).each(function() {
                               wpcf7.notValidTip(this, n.message);
                               $('.wpcf7-form-control', this).addClass('wpcf7-not-valid');
                               $('[aria-invalid]', this).attr('aria-invalid', 'true');
                           });
                       });
                       wpcf7.setStatus($form, 'invalid');
                       wpcf7.triggerEvent(data.into, 'invalid', detail);
                       break;
                   case 'acceptance_missing':
                       wpcf7.setStatus($form, 'unaccepted');
                       wpcf7.triggerEvent(data.into, 'unaccepted', detail);
                       break;
                   case 'spam':
                       wpcf7.setStatus($form, 'spam');
                       wpcf7.triggerEvent(data.into, 'spam', detail);
                       break;
                   case 'aborted':
                       wpcf7.setStatus($form, 'aborted');
                       wpcf7.triggerEvent(data.into, 'aborted', detail);
                       break;
                   case 'mail_sent':
                       wpcf7.setStatus($form, 'sent');
                       wpcf7.triggerEvent(data.into, 'mailsent', detail);
                       break;
                   case 'mail_failed':
                       wpcf7.setStatus($form, 'failed');
                       wpcf7.triggerEvent(data.into, 'mailfailed', detail);
                       break;
                   default:
                       wpcf7.setStatus($form, 'custom-' + data.status.replace(/[^0-9a-z]+/i, '-'));
               }
               wpcf7.refill($form, data);
               wpcf7.triggerEvent(data.into, 'submit', detail);
               if ('mail_sent' == data.status) {
                   $form.each(function() {
                       this.reset();
                   });
                   wpcf7.toggleSubmit($form);
                   wpcf7.resetCounter($form);
               }
               if (!wpcf7.supportHtml5.placeholder) {
                   $form.find('[placeholder].placeheld').each(function(i, n) {
                       $(n).val($(n).attr('placeholder'));
                   });
               }
               $('.wpcf7-response-output', $form).html('').append(data.message).slideDown('fast');
               $('.screen-reader-response', $form.closest('.wpcf7')).each(function() {
                   var $response = $(this);
                   $response.html('').append(data.message);
                   if (data.invalid_fields) {
                       var $invalids = $('<ul></ul>');
                       $.each(data.invalid_fields, function(i, n) {
                           if (n.idref) {
                               var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
                           } else {
                               var $li = $('<li></li>').append(n.message);
                           }
                           $invalids.append($li);
                       });
                       $response.append($invalids);
                   }
                   $response.focus();
               });
               if (data.posted_data_hash) {
                   $form.find('input[name="_wpcf7_posted_data_hash"]').first().val(data.posted_data_hash);
               }
           };
           $.ajax({
               type: 'POST',
               url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/feedback'),
               data: formData,
               dataType: 'json',
               processData: false,
               contentType: false
           }).done(function(data, status, xhr) {
               ajaxSuccess(data, status, xhr, $form);
               $('.ajax-loader', $form).removeClass('is-active');
           }).fail(function(xhr, status, error) {
               var $e = $('<div class="ajax-error"></div>').text(error.message);
               $form.after($e);
           });
       };
       wpcf7.triggerEvent = function(target, name, detail) {
           var event = new CustomEvent('wpcf7' + name, {
               bubbles: true,
               detail: detail
           });
           $(target).get(0).dispatchEvent(event);
       };
       wpcf7.setStatus = function(form, status) {
           var $form = $(form);
           var prevStatus = $form.data('status');
           $form.data('status', status);
           $form.addClass(status);
           if (prevStatus && prevStatus !== status) {
               $form.removeClass(prevStatus);
           }
       }
       wpcf7.toggleSubmit = function(form, state) {
           var $form = $(form);
           var $submit = $('input:submit', $form);
           if (typeof state !== 'undefined') {
               $submit.prop('disabled', !state);
               return;
           }
           if ($form.hasClass('wpcf7-acceptance-as-validation')) {
               return;
           }
           $submit.prop('disabled', false);
           $('.wpcf7-acceptance', $form).each(function() {
               var $span = $(this);
               var $input = $('input:checkbox', $span);
               if (!$span.hasClass('optional')) {
                   if ($span.hasClass('invert') && $input.is(':checked') || !$span.hasClass('invert') && !$input.is(':checked')) {
                       $submit.prop('disabled', true);
                       return false;
                   }
               }
           });
       };
       wpcf7.resetCounter = function(form) {
           var $form = $(form);
           $('.wpcf7-character-count', $form).each(function() {
               var $count = $(this);
               var name = $count.attr('data-target-name');
               var down = $count.hasClass('down');
               var starting = parseInt($count.attr('data-starting-value'), 10);
               var maximum = parseInt($count.attr('data-maximum-value'), 10);
               var minimum = parseInt($count.attr('data-minimum-value'), 10);
               var updateCount = function(target) {
                   var $target = $(target);
                   var length = $target.val().length;
                   var count = down ? starting - length : length;
                   $count.attr('data-current-value', count);
                   $count.text(count);
                   if (maximum && maximum < length) {
                       $count.addClass('too-long');
                   } else {
                       $count.removeClass('too-long');
                   }
                   if (minimum && length < minimum) {
                       $count.addClass('too-short');
                   } else {
                       $count.removeClass('too-short');
                   }
               };
               $(':input[name="' + name + '"]', $form).each(function() {
                   updateCount(this);
                   $(this).keyup(function() {
                       updateCount(this);
                   });
               });
           });
       };
       wpcf7.notValidTip = function(target, message) {
           var $target = $(target);
           $('.wpcf7-not-valid-tip', $target).remove();
           $('<span></span>').attr({
               'class': 'wpcf7-not-valid-tip',
               'role': 'alert',
               'aria-hidden': 'true',
           }).text(message).appendTo($target);
           if ($target.is('.use-floating-validation-tip *')) {
               var fadeOut = function(target) {
                   $(target).not(':hidden').animate({
                       opacity: 0
                   }, 'fast', function() {
                       $(this).css({
                           'z-index': -100
                       });
                   });
               };
               $target.on('mouseover', '.wpcf7-not-valid-tip', function() {
                   fadeOut(this);
               });
               $target.on('focus', ':input', function() {
                   fadeOut($('.wpcf7-not-valid-tip', $target));
               });
           }
       };
       wpcf7.refill = function(form, data) {
           var $form = $(form);
           var refillCaptcha = function($form, items) {
               $.each(items, function(i, n) {
                   $form.find(':input[name="' + i + '"]').val('');
                   $form.find('img.wpcf7-captcha-' + i).attr('src', n);
                   var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
                   $form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
               });
           };
           var refillQuiz = function($form, items) {
               $.each(items, function(i, n) {
                   $form.find(':input[name="' + i + '"]').val('');
                   $form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
                   $form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
               });
           };
           if (typeof data === 'undefined') {
               $.ajax({
                   type: 'GET',
                   url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/refill'),
                   beforeSend: function(xhr) {
                       var nonce = $form.find(':input[name="_wpnonce"]').val();
                       if (nonce) {
                           xhr.setRequestHeader('X-WP-Nonce', nonce);
                       }
                   },
                   dataType: 'json'
               }).done(function(data, status, xhr) {
                   if (data.captcha) {
                       refillCaptcha($form, data.captcha);
                   }
                   if (data.quiz) {
                       refillQuiz($form, data.quiz);
                   }
               });
           } else {
               if (data.captcha) {
                   refillCaptcha($form, data.captcha);
               }
               if (data.quiz) {
                   refillQuiz($form, data.quiz);
               }
           }
       };
       wpcf7.clearResponse = function(form) {
           var $form = $(form);
           $form.siblings('.screen-reader-response').html('');
           $('.wpcf7-not-valid-tip', $form).remove();
           $('[aria-invalid]', $form).attr('aria-invalid', 'false');
           $('.wpcf7-form-control', $form).removeClass('wpcf7-not-valid');
           $('.wpcf7-response-output', $form).hide().empty();
       };
       wpcf7.apiSettings.getRoute = function(path) {
           var url = wpcf7.apiSettings.root;
           url = url.replace(wpcf7.apiSettings.namespace, wpcf7.apiSettings.namespace + path);
           return url;
       };
   })(jQuery);
   (function() {
       if (typeof window.CustomEvent === "function") return false;
   
       function CustomEvent(event, params) {
           params = params || {
               bubbles: false,
               cancelable: false,
               detail: undefined
           };
           var evt = document.createEvent('CustomEvent');
           evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
           return evt;
       }
       CustomEvent.prototype = window.Event.prototype;
       window.CustomEvent = CustomEvent;
   })();
   /*!
    Ridiculously Responsive Social Sharing Buttons
    Team: @dbox, @joshuatuscan
    Site: http://www.rrssb.ml
    Twitter: @therealkni
   
           ___           ___
          /__/|         /__/\        ___
         |  |:|         \  \:\      /  /\
         |  |:|          \  \:\    /  /:/
       __|  |:|      _____\__\:\  /__/::\
      /__/\_|:|____ /__/::::::::\ \__\/\:\__
      \  \:\/:::::/ \  \:\~~\~~\/    \  \:\/\
       \  \::/~~~~   \  \:\  ~~~      \__\::/
        \  \:\        \  \:\          /__/:/
         \  \:\        \  \:\         \__\/
          \__\/         \__\/
   */
   +
   (function(window, $, undefined) {
       'use strict';
       $.fn.rrssb = function(options) {
           var settings = $.extend({
               description: undefined,
               emailAddress: undefined,
               emailBody: undefined,
               emailSubject: undefined,
               image: undefined,
               title: undefined,
               url: undefined
           }, options);
           settings.emailSubject = settings.emailSubject || settings.title;
           settings.emailBody = settings.emailBody || ((settings.description ? settings.description : '') +
               (settings.url ? '\n\n' + settings.url : ''));
           for (var key in settings) {
               if (settings.hasOwnProperty(key) && settings[key] !== undefined) {
                   settings[key] = encodeString(settings[key]);
               }
           };
           if (settings.url !== undefined) {
               $(this).find('.share-btn-facebook').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + settings.url);
               $(this).find('.share-btn-tumblr').attr('href', 'http://tumblr.com/share/link?url=' + settings.url + (settings.title !== undefined ? '&name=' + settings.title : '') + (settings.description !== undefined ? '&description=' + settings.description : ''));
               $(this).find('.share-btn-linkedin').attr('href', 'http://www.linkedin.com/shareArticle?mini=true&url=' + settings.url + (settings.title !== undefined ? '&title=' + settings.title : '') + (settings.description !== undefined ? '&summary=' + settings.description : ''));
               $(this).find('.share-btn-twitter').attr('href', 'https://twitter.com/intent/tweet?text=' + (settings.description !== undefined ? settings.description : '') + '%20' + settings.url);
               $(this).find('.share-btn-reddit').attr('href', 'http://www.reddit.com/submit?url=' + settings.url + (settings.description !== undefined ? '&text=' + settings.description : '') + (settings.title !== undefined ? '&title=' + settings.title : ''));
               $(this).find('.share-btn-googleplus').attr('href', 'https://plus.google.com/share?url=' + settings.url);
               $(this).find('.share-btn-pinterest').attr('href', 'http://pinterest.com/pin/create/button/?url=' + settings.url + ((settings.image !== undefined) ? '&amp;media=' + settings.image : '') + (settings.description !== undefined ? '&description=' + settings.description : ''));
               $(this).find('.share-btn-print').attr('href', 'javascript:window.print()');
               $(this).find('.share-btn-whatsapp').attr('href', 'whatsapp://send?text=' + (settings.description !== undefined ? settings.description + '%20' : (settings.title !== undefined ? settings.title + '%20' : '')) + settings.url);
           }
           if (settings.emailAddress !== undefined || settings.emailSubject) {
               $(this).find('.rrssb-email a').attr('href', 'mailto:' + (settings.emailAddress ? settings.emailAddress : '') + '?' + (settings.emailSubject !== undefined ? 'subject=' + settings.emailSubject : '') + (settings.emailBody !== undefined ? '&body=' + settings.emailBody : ''));
           }
       };
       var encodeString = function(string) {
           if (string !== undefined && string !== null) {
               if (string.match(/%[0-9a-f]{2}/i) !== null) {
                   string = decodeURIComponent(string);
                   encodeString(string);
               } else {
                   return encodeURIComponent(string);
               }
           }
       };
       var rrssbInit = function() {
           $('.share-btn').each(function(index) {
               $(this).addClass('share-btn-' + (index + 1));
           });
       };
       var popupCenter = function(url, title, w, h) {
           var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
           var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;
           var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
           var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
           var left = ((width / 2) - (w / 2)) + dualScreenLeft;
           var top = ((height / 3) - (h / 3)) + dualScreenTop;
           var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
           if (newWindow && newWindow.focus) {
               newWindow.focus();
           }
       };
       $(document).ready(function() {
           try {
               $(document).on('click', '.share-btn', {}, function popUp(e) {
                   var self = $(this);
                   popupCenter(self.attr('href'), self.attr('title'), 580, 470);
                   e.preventDefault();
               });
           } catch (e) {}
           rrssbInit();
       });
       window.rrssbInit = rrssbInit;
   })(window, jQuery);
   jQuery(document).ready(function($) {
       $(".social-share").rrssb({
           title: "Water and Shore",
           url: "https://cvio.bslthemes.com/ve1/portfolio-archive/water-and-shore/"
       });
   });
   (function($) {
       'use strict';
       var container, button, menu, links, i, len;
       container = document.getElementById('site-navigation');
       if (!container) {
           return;
       }
       button = container.getElementsByTagName('button')[0];
       if ('undefined' === typeof button) {
           return;
       }
       menu = container.getElementsByTagName('ul')[0];
       if ('undefined' === typeof menu) {
           button.style.display = 'none';
           return;
       }
       menu.setAttribute('aria-expanded', 'false');
       if (-1 === menu.className.indexOf('nav-menu')) {
           menu.className += ' nav-menu';
       }
       button.onclick = function() {
           if (-1 !== container.className.indexOf('toggled')) {
               container.className = container.className.replace(' toggled', '');
               button.setAttribute('aria-expanded', 'false');
               menu.setAttribute('aria-expanded', 'false');
           } else {
               container.className += ' toggled';
               button.setAttribute('aria-expanded', 'true');
               menu.setAttribute('aria-expanded', 'true');
           }
       };
       links = menu.getElementsByTagName('a');
       for (i = 0, len = links.length; i < len; i++) {
           links[i].addEventListener('focus', toggleFocus, true);
           links[i].addEventListener('blur', toggleFocus, true);
       }
   
       function toggleFocus() {
           var self = this;
           while (-1 === self.className.indexOf('nav-menu')) {
               if ('li' === self.tagName.toLowerCase()) {
                   if (-1 !== self.className.indexOf('focus')) {
                       self.className = self.className.replace(' focus', '');
                   } else {
                       self.className += ' focus';
                   }
               }
               self = self.parentElement;
           }
       }
       (function(container) {
           var touchStartFn, i, parentLink = container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');
           if ('ontouchstart' in window) {
               touchStartFn = function(e) {
                   var menuItem = this.parentNode,
                       i;
                   if (!menuItem.classList.contains('focus')) {
                       e.preventDefault();
                       for (i = 0; i < menuItem.parentNode.children.length; ++i) {
                           if (menuItem === menuItem.parentNode.children[i]) {
                               continue;
                           }
                           menuItem.parentNode.children[i].classList.remove('focus');
                       }
                       menuItem.classList.add('focus');
                   } else {
                       menuItem.classList.remove('focus');
                   }
               };
               for (i = 0; i < parentLink.length; ++i) {
                   parentLink[i].addEventListener('touchstart', touchStartFn, false);
               }
           }
       }(container));
   })();
   (function($) {
       'use strict';
       var isIe = /(trident|msie)/i.test(navigator.userAgent);
       if (isIe && document.getElementById && window.addEventListener) {
           window.addEventListener('hashchange', function() {
               var id = location.hash.substring(1),
                   element;
               if (!(/^[A-z0-9_-]+$/.test(id))) {
                   return;
               }
               element = document.getElementById(id);
               if (element) {
                   if (!(/^(?:a|select|input|button|textarea)$/i.test(element.tagName))) {
                       element.tabIndex = -1;
                   }
                   element.focus();
               }
           }, false);
       }
   })();;
   /*! Magnific Popup - v1.1.0 - 2016-02-20
    * http://dimsemenov.com/plugins/magnific-popup/
    * Copyright (c) 2016 Dmitry Semenov; */
   (function(factory) {
       if (typeof define === 'function' && define.amd) {
           define(['jquery'], factory);
       } else if (typeof exports === 'object') {
           factory(require('jquery'));
       } else {
           factory(window.jQuery || window.Zepto);
       }
   }(function($) {
       var CLOSE_EVENT = 'Close',
           BEFORE_CLOSE_EVENT = 'BeforeClose',
           AFTER_CLOSE_EVENT = 'AfterClose',
           BEFORE_APPEND_EVENT = 'BeforeAppend',
           MARKUP_PARSE_EVENT = 'MarkupParse',
           OPEN_EVENT = 'Open',
           CHANGE_EVENT = 'Change',
           NS = 'mfp',
           EVENT_NS = '.' + NS,
           READY_CLASS = 'mfp-ready',
           REMOVING_CLASS = 'mfp-removing',
           PREVENT_CLOSE_CLASS = 'mfp-prevent-close';
       var mfp, MagnificPopup = function() {},
           _isJQ = !!(window.jQuery),
           _prevStatus, _window = $(window),
           _document, _prevContentType, _wrapClasses, _currPopupType;
       var _mfpOn = function(name, f) {
               mfp.ev.on(NS + name + EVENT_NS, f);
           },
           _getEl = function(className, appendTo, html, raw) {
               var el = document.createElement('div');
               el.className = 'mfp-' + className;
               if (html) {
                   el.innerHTML = html;
               }
               if (!raw) {
                   el = $(el);
                   if (appendTo) {
                       el.appendTo(appendTo);
                   }
               } else if (appendTo) {
                   appendTo.appendChild(el);
               }
               return el;
           },
           _mfpTrigger = function(e, data) {
               mfp.ev.triggerHandler(NS + e, data);
               if (mfp.st.callbacks) {
                   e = e.charAt(0).toLowerCase() + e.slice(1);
                   if (mfp.st.callbacks[e]) {
                       mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
                   }
               }
           },
           _getCloseBtn = function(type) {
               if (type !== _currPopupType || !mfp.currTemplate.closeBtn) {
                   mfp.currTemplate.closeBtn = $(mfp.st.closeMarkup.replace('%title%', mfp.st.tClose));
                   _currPopupType = type;
               }
               return mfp.currTemplate.closeBtn;
           },
           _checkInstance = function() {
               if (!$.magnificPopup.instance) {
                   mfp = new MagnificPopup();
                   mfp.init();
                   $.magnificPopup.instance = mfp;
               }
           },
           supportsTransitions = function() {
               var s = document.createElement('p').style,
                   v = ['ms', 'O', 'Moz', 'Webkit'];
               if (s['transition'] !== undefined) {
                   return true;
               }
               while (v.length) {
                   if (v.pop() + 'Transition' in s) {
                       return true;
                   }
               }
               return false;
           };
       MagnificPopup.prototype = {
           constructor: MagnificPopup,
           init: function() {
               var appVersion = navigator.appVersion;
               mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
               mfp.isAndroid = (/android/gi).test(appVersion);
               mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
               mfp.supportsTransition = supportsTransitions();
               mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));
               _document = $(document);
               mfp.popupsCache = {};
           },
           open: function(data) {
               var i;
               if (data.isObj === false) {
                   mfp.items = data.items.toArray();
                   mfp.index = 0;
                   var items = data.items,
                       item;
                   for (i = 0; i < items.length; i++) {
                       item = items[i];
                       if (item.parsed) {
                           item = item.el[0];
                       }
                       if (item === data.el[0]) {
                           mfp.index = i;
                           break;
                       }
                   }
               } else {
                   mfp.items = $.isArray(data.items) ? data.items : [data.items];
                   mfp.index = data.index || 0;
               }
               if (mfp.isOpen) {
                   mfp.updateItemHTML();
                   return;
               }
               mfp.types = [];
               _wrapClasses = '';
               if (data.mainEl && data.mainEl.length) {
                   mfp.ev = data.mainEl.eq(0);
               } else {
                   mfp.ev = _document;
               }
               if (data.key) {
                   if (!mfp.popupsCache[data.key]) {
                       mfp.popupsCache[data.key] = {};
                   }
                   mfp.currTemplate = mfp.popupsCache[data.key];
               } else {
                   mfp.currTemplate = {};
               }
               mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data);
               mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;
               if (mfp.st.modal) {
                   mfp.st.closeOnContentClick = false;
                   mfp.st.closeOnBgClick = false;
                   mfp.st.showCloseBtn = false;
                   mfp.st.enableEscapeKey = false;
               }
               if (!mfp.bgOverlay) {
                   mfp.bgOverlay = _getEl('bg').on('click' + EVENT_NS, function() {
                       mfp.close();
                   });
                   mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click' + EVENT_NS, function(e) {
                       if (mfp._checkIfClose(e.target)) {
                           mfp.close();
                       }
                   });
                   mfp.container = _getEl('container', mfp.wrap);
               }
               mfp.contentContainer = _getEl('content');
               if (mfp.st.preloader) {
                   mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
               }
               var modules = $.magnificPopup.modules;
               for (i = 0; i < modules.length; i++) {
                   var n = modules[i];
                   n = n.charAt(0).toUpperCase() + n.slice(1);
                   mfp['init' + n].call(mfp);
               }
               _mfpTrigger('BeforeOpen');
               if (mfp.st.showCloseBtn) {
                   if (!mfp.st.closeBtnInside) {
                       mfp.wrap.append(_getCloseBtn());
                   } else {
                       _mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
                           values.close_replaceWith = _getCloseBtn(item.type);
                       });
                       _wrapClasses += ' mfp-close-btn-in';
                   }
               }
               if (mfp.st.alignTop) {
                   _wrapClasses += ' mfp-align-top';
               }
               if (mfp.fixedContentPos) {
                   mfp.wrap.css({
                       overflow: mfp.st.overflowY,
                       overflowX: 'hidden',
                       overflowY: mfp.st.overflowY
                   });
               } else {
                   mfp.wrap.css({
                       top: _window.scrollTop(),
                       position: 'absolute'
                   });
               }
               if (mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos)) {
                   mfp.bgOverlay.css({
                       height: _document.height(),
                       position: 'absolute'
                   });
               }
               if (mfp.st.enableEscapeKey) {
                   _document.on('keyup' + EVENT_NS, function(e) {
                       if (e.keyCode === 27) {
                           mfp.close();
                       }
                   });
               }
               _window.on('resize' + EVENT_NS, function() {
                   mfp.updateSize();
               });
               if (!mfp.st.closeOnContentClick) {
                   _wrapClasses += ' mfp-auto-cursor';
               }
               if (_wrapClasses)
                   mfp.wrap.addClass(_wrapClasses);
               var windowHeight = mfp.wH = _window.height();
               var windowStyles = {};
               if (mfp.fixedContentPos) {
                   if (mfp._hasScrollBar(windowHeight)) {
                       var s = mfp._getScrollbarSize();
                       if (s) {
                           windowStyles.marginRight = s;
                       }
                   }
               }
               if (mfp.fixedContentPos) {
                   if (!mfp.isIE7) {
                       windowStyles.overflow = 'hidden';
                   } else {
                       $('body, html').css('overflow', 'hidden');
                   }
               }
               var classesToadd = mfp.st.mainClass;
               if (mfp.isIE7) {
                   classesToadd += ' mfp-ie7';
               }
               if (classesToadd) {
                   mfp._addClassToMFP(classesToadd);
               }
               mfp.updateItemHTML();
               _mfpTrigger('BuildControls');
               $('html').css(windowStyles);
               mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo || $(document.body));
               mfp._lastFocusedEl = document.activeElement;
               setTimeout(function() {
                   if (mfp.content) {
                       mfp._addClassToMFP(READY_CLASS);
                       mfp._setFocus();
                   } else {
                       mfp.bgOverlay.addClass(READY_CLASS);
                   }
                   _document.on('focusin' + EVENT_NS, mfp._onFocusIn);
               }, 16);
               mfp.isOpen = true;
               mfp.updateSize(windowHeight);
               _mfpTrigger(OPEN_EVENT);
               return data;
           },
           close: function() {
               if (!mfp.isOpen) return;
               _mfpTrigger(BEFORE_CLOSE_EVENT);
               mfp.isOpen = false;
               if (mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition) {
                   mfp._addClassToMFP(REMOVING_CLASS);
                   setTimeout(function() {
                       mfp._close();
                   }, mfp.st.removalDelay);
               } else {
                   mfp._close();
               }
           },
           _close: function() {
               _mfpTrigger(CLOSE_EVENT);
               var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';
               mfp.bgOverlay.detach();
               mfp.wrap.detach();
               mfp.container.empty();
               if (mfp.st.mainClass) {
                   classesToRemove += mfp.st.mainClass + ' ';
               }
               mfp._removeClassFromMFP(classesToRemove);
               if (mfp.fixedContentPos) {
                   var windowStyles = {
                       marginRight: ''
                   };
                   if (mfp.isIE7) {
                       $('body, html').css('overflow', '');
                   } else {
                       windowStyles.overflow = '';
                   }
                   $('html').css(windowStyles);
               }
               _document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
               mfp.ev.off(EVENT_NS);
               mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
               mfp.bgOverlay.attr('class', 'mfp-bg');
               mfp.container.attr('class', 'mfp-container');
               if (mfp.st.showCloseBtn && (!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
                   if (mfp.currTemplate.closeBtn)
                       mfp.currTemplate.closeBtn.detach();
               }
               if (mfp.st.autoFocusLast && mfp._lastFocusedEl) {
                   $(mfp._lastFocusedEl).focus();
               }
               mfp.currItem = null;
               mfp.content = null;
               mfp.currTemplate = null;
               mfp.prevHeight = 0;
               _mfpTrigger(AFTER_CLOSE_EVENT);
           },
           updateSize: function(winHeight) {
               if (mfp.isIOS) {
                   var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
                   var height = window.innerHeight * zoomLevel;
                   mfp.wrap.css('height', height);
                   mfp.wH = height;
               } else {
                   mfp.wH = winHeight || _window.height();
               }
               if (!mfp.fixedContentPos) {
                   mfp.wrap.css('height', mfp.wH);
               }
               _mfpTrigger('Resize');
           },
           updateItemHTML: function() {
               var item = mfp.items[mfp.index];
               mfp.contentContainer.detach();
               if (mfp.content)
                   mfp.content.detach();
               if (!item.parsed) {
                   item = mfp.parseEl(mfp.index);
               }
               var type = item.type;
               _mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
               mfp.currItem = item;
               if (!mfp.currTemplate[type]) {
                   var markup = mfp.st[type] ? mfp.st[type].markup : false;
                   _mfpTrigger('FirstMarkupParse', markup);
                   if (markup) {
                       mfp.currTemplate[type] = $(markup);
                   } else {
                       mfp.currTemplate[type] = true;
                   }
               }
               if (_prevContentType && _prevContentType !== item.type) {
                   mfp.container.removeClass('mfp-' + _prevContentType + '-holder');
               }
               var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
               mfp.appendContent(newContent, type);
               item.preloaded = true;
               _mfpTrigger(CHANGE_EVENT, item);
               _prevContentType = item.type;
               mfp.container.prepend(mfp.contentContainer);
               _mfpTrigger('AfterChange');
           },
           appendContent: function(newContent, type) {
               mfp.content = newContent;
               if (newContent) {
                   if (mfp.st.showCloseBtn && mfp.st.closeBtnInside && mfp.currTemplate[type] === true) {
                       if (!mfp.content.find('.mfp-close').length) {
                           mfp.content.append(_getCloseBtn());
                       }
                   } else {
                       mfp.content = newContent;
                   }
               } else {
                   mfp.content = '';
               }
               _mfpTrigger(BEFORE_APPEND_EVENT);
               mfp.container.addClass('mfp-' + type + '-holder');
               mfp.contentContainer.append(mfp.content);
           },
           parseEl: function(index) {
               var item = mfp.items[index],
                   type;
               if (item.tagName) {
                   item = {
                       el: $(item)
                   };
               } else {
                   type = item.type;
                   item = {
                       data: item,
                       src: item.src
                   };
               }
               if (item.el) {
                   var types = mfp.types;
                   for (var i = 0; i < types.length; i++) {
                       if (item.el.hasClass('mfp-' + types[i])) {
                           type = types[i];
                           break;
                       }
                   }
                   item.src = item.el.attr('data-mfp-src');
                   if (!item.src) {
                       item.src = item.el.attr('href');
                   }
               }
               item.type = type || mfp.st.type || 'inline';
               item.index = index;
               item.parsed = true;
               mfp.items[index] = item;
               _mfpTrigger('ElementParse', item);
               return mfp.items[index];
           },
           addGroup: function(el, options) {
               var eHandler = function(e) {
                   e.mfpEl = this;
                   mfp._openClick(e, el, options);
               };
               if (!options) {
                   options = {};
               }
               var eName = 'click.magnificPopup';
               options.mainEl = el;
               if (options.items) {
                   options.isObj = true;
                   el.off(eName).on(eName, eHandler);
               } else {
                   options.isObj = false;
                   if (options.delegate) {
                       el.off(eName).on(eName, options.delegate, eHandler);
                   } else {
                       options.items = el;
                       el.off(eName).on(eName, eHandler);
                   }
               }
           },
           _openClick: function(e, el, options) {
               var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;
               if (!midClick && (e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
                   return;
               }
               var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;
               if (disableOn) {
                   if ($.isFunction(disableOn)) {
                       if (!disableOn.call(mfp)) {
                           return true;
                       }
                   } else {
                       if (_window.width() < disableOn) {
                           return true;
                       }
                   }
               }
               if (e.type) {
                   e.preventDefault();
                   if (mfp.isOpen) {
                       e.stopPropagation();
                   }
               }
               options.el = $(e.mfpEl);
               if (options.delegate) {
                   options.items = el.find(options.delegate);
               }
               mfp.open(options);
           },
           updateStatus: function(status, text) {
               if (mfp.preloader) {
                   if (_prevStatus !== status) {
                       mfp.container.removeClass('mfp-s-' + _prevStatus);
                   }
                   if (!text && status === 'loading') {
                       text = mfp.st.tLoading;
                   }
                   var data = {
                       status: status,
                       text: text
                   };
                   _mfpTrigger('UpdateStatus', data);
                   status = data.status;
                   text = data.text;
                   mfp.preloader.html(text);
                   mfp.preloader.find('a').on('click', function(e) {
                       e.stopImmediatePropagation();
                   });
                   mfp.container.addClass('mfp-s-' + status);
                   _prevStatus = status;
               }
           },
           _checkIfClose: function(target) {
               if ($(target).hasClass(PREVENT_CLOSE_CLASS)) {
                   return;
               }
               var closeOnContent = mfp.st.closeOnContentClick;
               var closeOnBg = mfp.st.closeOnBgClick;
               if (closeOnContent && closeOnBg) {
                   return true;
               } else {
                   if (!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0])) {
                       return true;
                   }
                   if ((target !== mfp.content[0] && !$.contains(mfp.content[0], target))) {
                       if (closeOnBg) {
                           if ($.contains(document, target)) {
                               return true;
                           }
                       }
                   } else if (closeOnContent) {
                       return true;
                   }
               }
               return false;
           },
           _addClassToMFP: function(cName) {
               mfp.bgOverlay.addClass(cName);
               mfp.wrap.addClass(cName);
           },
           _removeClassFromMFP: function(cName) {
               this.bgOverlay.removeClass(cName);
               mfp.wrap.removeClass(cName);
           },
           _hasScrollBar: function(winHeight) {
               return ((mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()));
           },
           _setFocus: function() {
               (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
           },
           _onFocusIn: function(e) {
               if (e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target)) {
                   mfp._setFocus();
                   return false;
               }
           },
           _parseMarkup: function(template, values, item) {
               var arr;
               if (item.data) {
                   values = $.extend(item.data, values);
               }
               _mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item]);
               $.each(values, function(key, value) {
                   if (value === undefined || value === false) {
                       return true;
                   }
                   arr = key.split('_');
                   if (arr.length > 1) {
                       var el = template.find(EVENT_NS + '-' + arr[0]);
                       if (el.length > 0) {
                           var attr = arr[1];
                           if (attr === 'replaceWith') {
                               if (el[0] !== value[0]) {
                                   el.replaceWith(value);
                               }
                           } else if (attr === 'img') {
                               if (el.is('img')) {
                                   el.attr('src', value);
                               } else {
                                   el.replaceWith($('<img>').attr('src', value).attr('class', el.attr('class')));
                               }
                           } else {
                               el.attr(arr[1], value);
                           }
                       }
                   } else {
                       template.find(EVENT_NS + '-' + key).html(value);
                   }
               });
           },
           _getScrollbarSize: function() {
               if (mfp.scrollbarSize === undefined) {
                   var scrollDiv = document.createElement("div");
                   scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
                   document.body.appendChild(scrollDiv);
                   mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                   document.body.removeChild(scrollDiv);
               }
               return mfp.scrollbarSize;
           }
       };
       $.magnificPopup = {
           instance: null,
           proto: MagnificPopup.prototype,
           modules: [],
           open: function(options, index) {
               _checkInstance();
               if (!options) {
                   options = {};
               } else {
                   options = $.extend(true, {}, options);
               }
               options.isObj = true;
               options.index = index || 0;
               return this.instance.open(options);
           },
           close: function() {
               return $.magnificPopup.instance && $.magnificPopup.instance.close();
           },
           registerModule: function(name, module) {
               if (module.options) {
                   $.magnificPopup.defaults[name] = module.options;
               }
               $.extend(this.proto, module.proto);
               this.modules.push(name);
           },
           defaults: {
               disableOn: 0,
               key: null,
               midClick: false,
               mainClass: '',
               preloader: true,
               focus: '',
               closeOnContentClick: false,
               closeOnBgClick: true,
               closeBtnInside: true,
               showCloseBtn: true,
               enableEscapeKey: true,
               modal: false,
               alignTop: false,
               removalDelay: 0,
               prependTo: null,
               fixedContentPos: 'auto',
               fixedBgPos: 'auto',
               overflowY: 'auto',
               closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
               tClose: 'Close (Esc)',
               tLoading: 'Loading...',
               autoFocusLast: true
           }
       };
       $.fn.magnificPopup = function(options) {
           _checkInstance();
           var jqEl = $(this);
           if (typeof options === "string") {
               if (options === 'open') {
                   var items, itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
                       index = parseInt(arguments[1], 10) || 0;
                   if (itemOpts.items) {
                       items = itemOpts.items[index];
                   } else {
                       items = jqEl;
                       if (itemOpts.delegate) {
                           items = items.find(itemOpts.delegate);
                       }
                       items = items.eq(index);
                   }
                   mfp._openClick({
                       mfpEl: items
                   }, jqEl, itemOpts);
               } else {
                   if (mfp.isOpen)
                       mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
               }
           } else {
               options = $.extend(true, {}, options);
               if (_isJQ) {
                   jqEl.data('magnificPopup', options);
               } else {
                   jqEl[0].magnificPopup = options;
               }
               mfp.addGroup(jqEl, options);
           }
           return jqEl;
       };
       var INLINE_NS = 'inline',
           _hiddenClass, _inlinePlaceholder, _lastInlineElement, _putInlineElementsBack = function() {
               if (_lastInlineElement) {
                   _inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();
                   _lastInlineElement = null;
               }
           };
       $.magnificPopup.registerModule(INLINE_NS, {
           options: {
               hiddenClass: 'hide',
               markup: '',
               tNotFound: 'Content not found'
           },
           proto: {
               initInline: function() {
                   mfp.types.push(INLINE_NS);
                   _mfpOn(CLOSE_EVENT + '.' + INLINE_NS, function() {
                       _putInlineElementsBack();
                   });
               },
               getInline: function(item, template) {
                   _putInlineElementsBack();
                   if (item.src) {
                       var inlineSt = mfp.st.inline,
                           el = $(item.src);
                       if (el.length) {
                           var parent = el[0].parentNode;
                           if (parent && parent.tagName) {
                               if (!_inlinePlaceholder) {
                                   _hiddenClass = inlineSt.hiddenClass;
                                   _inlinePlaceholder = _getEl(_hiddenClass);
                                   _hiddenClass = 'mfp-' + _hiddenClass;
                               }
                               _lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
                           }
                           mfp.updateStatus('ready');
                       } else {
                           mfp.updateStatus('error', inlineSt.tNotFound);
                           el = $('<div>');
                       }
                       item.inlineElement = el;
                       return el;
                   }
                   mfp.updateStatus('ready');
                   mfp._parseMarkup(template, {}, item);
                   return template;
               }
           }
       });
       var AJAX_NS = 'ajax',
           _ajaxCur, _removeAjaxCursor = function() {
               if (_ajaxCur) {
                   $(document.body).removeClass(_ajaxCur);
               }
           },
           _destroyAjaxRequest = function() {
               _removeAjaxCursor();
               if (mfp.req) {
                   mfp.req.abort();
               }
           };
       $.magnificPopup.registerModule(AJAX_NS, {
           options: {
               settings: null,
               cursor: 'mfp-ajax-cur',
               tError: '<a href="%url%">The content</a> could not be loaded.'
           },
           proto: {
               initAjax: function() {
                   mfp.types.push(AJAX_NS);
                   _ajaxCur = mfp.st.ajax.cursor;
                   _mfpOn(CLOSE_EVENT + '.' + AJAX_NS, _destroyAjaxRequest);
                   _mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
               },
               getAjax: function(item) {
                   if (_ajaxCur) {
                       $(document.body).addClass(_ajaxCur);
                   }
                   mfp.updateStatus('loading');
                   var opts = $.extend({
                       url: item.src,
                       success: function(data, textStatus, jqXHR) {
                           var temp = {
                               data: data,
                               xhr: jqXHR
                           };
                           _mfpTrigger('ParseAjax', temp);
                           mfp.appendContent($(temp.data), AJAX_NS);
                           item.finished = true;
                           _removeAjaxCursor();
                           mfp._setFocus();
                           setTimeout(function() {
                               mfp.wrap.addClass(READY_CLASS);
                           }, 16);
                           mfp.updateStatus('ready');
                           _mfpTrigger('AjaxContentAdded');
                       },
                       error: function() {
                           _removeAjaxCursor();
                           item.finished = item.loadError = true;
                           mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
                       }
                   }, mfp.st.ajax.settings);
                   mfp.req = $.ajax(opts);
                   return '';
               }
           }
       });
       var _imgInterval, _getTitle = function(item) {
           if (item.data && item.data.title !== undefined)
               return item.data.title;
           var src = mfp.st.image.titleSrc;
           if (src) {
               if ($.isFunction(src)) {
                   return src.call(mfp, item);
               } else if (item.el) {
                   return item.el.attr(src) || '';
               }
           }
           return '';
       };
       $.magnificPopup.registerModule('image', {
           options: {
               markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<figure>' + '<div class="mfp-img"></div>' + '<figcaption>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + '</div>' + '</figcaption>' + '</figure>' + '</div>',
               cursor: 'mfp-zoom-out-cur',
               titleSrc: 'title',
               verticalFit: true,
               tError: '<a href="%url%">The image</a> could not be loaded.'
           },
           proto: {
               initImage: function() {
                   var imgSt = mfp.st.image,
                       ns = '.image';
                   mfp.types.push('image');
                   _mfpOn(OPEN_EVENT + ns, function() {
                       if (mfp.currItem.type === 'image' && imgSt.cursor) {
                           $(document.body).addClass(imgSt.cursor);
                       }
                   });
                   _mfpOn(CLOSE_EVENT + ns, function() {
                       if (imgSt.cursor) {
                           $(document.body).removeClass(imgSt.cursor);
                       }
                       _window.off('resize' + EVENT_NS);
                   });
                   _mfpOn('Resize' + ns, mfp.resizeImage);
                   if (mfp.isLowIE) {
                       _mfpOn('AfterChange', mfp.resizeImage);
                   }
               },
               resizeImage: function() {
                   var item = mfp.currItem;
                   if (!item || !item.img) return;
                   if (mfp.st.image.verticalFit) {
                       var decr = 0;
                       if (mfp.isLowIE) {
                           decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'), 10);
                       }
                       item.img.css('max-height', mfp.wH - decr);
                   }
               },
               _onImageHasSize: function(item) {
                   if (item.img) {
                       item.hasSize = true;
                       if (_imgInterval) {
                           clearInterval(_imgInterval);
                       }
                       item.isCheckingImgSize = false;
                       _mfpTrigger('ImageHasSize', item);
                       if (item.imgHidden) {
                           if (mfp.content)
                               mfp.content.removeClass('mfp-loading');
                           item.imgHidden = false;
                       }
                   }
               },
               findImageSize: function(item) {
                   var counter = 0,
                       img = item.img[0],
                       mfpSetInterval = function(delay) {
                           if (_imgInterval) {
                               clearInterval(_imgInterval);
                           }
                           _imgInterval = setInterval(function() {
                               if (img.naturalWidth > 0) {
                                   mfp._onImageHasSize(item);
                                   return;
                               }
                               if (counter > 200) {
                                   clearInterval(_imgInterval);
                               }
                               counter++;
                               if (counter === 3) {
                                   mfpSetInterval(10);
                               } else if (counter === 40) {
                                   mfpSetInterval(50);
                               } else if (counter === 100) {
                                   mfpSetInterval(500);
                               }
                           }, delay);
                       };
                   mfpSetInterval(1);
               },
               getImage: function(item, template) {
                   var guard = 0,
                       onLoadComplete = function() {
                           if (item) {
                               if (item.img[0].complete) {
                                   item.img.off('.mfploader');
                                   if (item === mfp.currItem) {
                                       mfp._onImageHasSize(item);
                                       mfp.updateStatus('ready');
                                   }
                                   item.hasSize = true;
                                   item.loaded = true;
                                   _mfpTrigger('ImageLoadComplete');
                               } else {
                                   guard++;
                                   if (guard < 200) {
                                       setTimeout(onLoadComplete, 100);
                                   } else {
                                       onLoadError();
                                   }
                               }
                           }
                       },
                       onLoadError = function() {
                           if (item) {
                               item.img.off('.mfploader');
                               if (item === mfp.currItem) {
                                   mfp._onImageHasSize(item);
                                   mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
                               }
                               item.hasSize = true;
                               item.loaded = true;
                               item.loadError = true;
                           }
                       },
                       imgSt = mfp.st.image;
                   var el = template.find('.mfp-img');
                   if (el.length) {
                       var img = document.createElement('img');
                       img.className = 'mfp-img';
                       if (item.el && item.el.find('img').length) {
                           img.alt = item.el.find('img').attr('alt');
                       }
                       item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
                       img.src = item.src;
                       if (el.is('img')) {
                           item.img = item.img.clone();
                       }
                       img = item.img[0];
                       if (img.naturalWidth > 0) {
                           item.hasSize = true;
                       } else if (!img.width) {
                           item.hasSize = false;
                       }
                   }
                   mfp._parseMarkup(template, {
                       title: _getTitle(item),
                       img_replaceWith: item.img
                   }, item);
                   mfp.resizeImage();
                   if (item.hasSize) {
                       if (_imgInterval) clearInterval(_imgInterval);
                       if (item.loadError) {
                           template.addClass('mfp-loading');
                           mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
                       } else {
                           template.removeClass('mfp-loading');
                           mfp.updateStatus('ready');
                       }
                       return template;
                   }
                   mfp.updateStatus('loading');
                   item.loading = true;
                   if (!item.hasSize) {
                       item.imgHidden = true;
                       template.addClass('mfp-loading');
                       mfp.findImageSize(item);
                   }
                   return template;
               }
           }
       });
       var hasMozTransform, getHasMozTransform = function() {
           if (hasMozTransform === undefined) {
               hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
           }
           return hasMozTransform;
       };
       $.magnificPopup.registerModule('zoom', {
           options: {
               enabled: false,
               easing: 'ease-in-out',
               duration: 300,
               opener: function(element) {
                   return element.is('img') ? element : element.find('img');
               }
           },
           proto: {
               initZoom: function() {
                   var zoomSt = mfp.st.zoom,
                       ns = '.zoom',
                       image;
                   if (!zoomSt.enabled || !mfp.supportsTransition) {
                       return;
                   }
                   var duration = zoomSt.duration,
                       getElToAnimate = function(image) {
                           var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
                               transition = 'all ' + (zoomSt.duration / 1000) + 's ' + zoomSt.easing,
                               cssObj = {
                                   position: 'fixed',
                                   zIndex: 9999,
                                   left: 0,
                                   top: 0,
                                   '-webkit-backface-visibility': 'hidden'
                               },
                               t = 'transition';
                           cssObj['-webkit-' + t] = cssObj['-moz-' + t] = cssObj['-o-' + t] = cssObj[t] = transition;
                           newImg.css(cssObj);
                           return newImg;
                       },
                       showMainContent = function() {
                           mfp.content.css('visibility', 'visible');
                       },
                       openTimeout, animatedImg;
                   _mfpOn('BuildControls' + ns, function() {
                       if (mfp._allowZoom()) {
                           clearTimeout(openTimeout);
                           mfp.content.css('visibility', 'hidden');
                           image = mfp._getItemToZoom();
                           if (!image) {
                               showMainContent();
                               return;
                           }
                           animatedImg = getElToAnimate(image);
                           animatedImg.css(mfp._getOffset());
                           mfp.wrap.append(animatedImg);
                           openTimeout = setTimeout(function() {
                               animatedImg.css(mfp._getOffset(true));
                               openTimeout = setTimeout(function() {
                                   showMainContent();
                                   setTimeout(function() {
                                       animatedImg.remove();
                                       image = animatedImg = null;
                                       _mfpTrigger('ZoomAnimationEnded');
                                   }, 16);
                               }, duration);
                           }, 16);
                       }
                   });
                   _mfpOn(BEFORE_CLOSE_EVENT + ns, function() {
                       if (mfp._allowZoom()) {
                           clearTimeout(openTimeout);
                           mfp.st.removalDelay = duration;
                           if (!image) {
                               image = mfp._getItemToZoom();
                               if (!image) {
                                   return;
                               }
                               animatedImg = getElToAnimate(image);
                           }
                           animatedImg.css(mfp._getOffset(true));
                           mfp.wrap.append(animatedImg);
                           mfp.content.css('visibility', 'hidden');
                           setTimeout(function() {
                               animatedImg.css(mfp._getOffset());
                           }, 16);
                       }
                   });
                   _mfpOn(CLOSE_EVENT + ns, function() {
                       if (mfp._allowZoom()) {
                           showMainContent();
                           if (animatedImg) {
                               animatedImg.remove();
                           }
                           image = null;
                       }
                   });
               },
               _allowZoom: function() {
                   return mfp.currItem.type === 'image';
               },
               _getItemToZoom: function() {
                   if (mfp.currItem.hasSize) {
                       return mfp.currItem.img;
                   } else {
                       return false;
                   }
               },
               _getOffset: function(isLarge) {
                   var el;
                   if (isLarge) {
                       el = mfp.currItem.img;
                   } else {
                       el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
                   }
                   var offset = el.offset();
                   var paddingTop = parseInt(el.css('padding-top'), 10);
                   var paddingBottom = parseInt(el.css('padding-bottom'), 10);
                   offset.top -= ($(window).scrollTop() - paddingTop);
                   var obj = {
                       width: el.width(),
                       height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
                   };
                   if (getHasMozTransform()) {
                       obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
                   } else {
                       obj.left = offset.left;
                       obj.top = offset.top;
                   }
                   return obj;
               }
           }
       });
       var IFRAME_NS = 'iframe',
           _emptyPage = '//about:blank',
           _fixIframeBugs = function(isShowing) {
               if (mfp.currTemplate[IFRAME_NS]) {
                   var el = mfp.currTemplate[IFRAME_NS].find('iframe');
                   if (el.length) {
                       if (!isShowing) {
                           el[0].src = _emptyPage;
                       }
                       if (mfp.isIE8) {
                           el.css('display', isShowing ? 'block' : 'none');
                       }
                   }
               }
           };
       $.magnificPopup.registerModule(IFRAME_NS, {
           options: {
               markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>' + '</div>',
               srcAction: 'iframe_src',
               patterns: {
                   youtube: {
                       index: 'youtube.com',
                       id: 'v=',
                       src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                   },
                   vimeo: {
                       index: 'vimeo.com/',
                       id: '/',
                       src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                   },
                   gmaps: {
                       index: '//maps.google.',
                       src: '%id%&output=embed'
                   }
               }
           },
           proto: {
               initIframe: function() {
                   mfp.types.push(IFRAME_NS);
                   _mfpOn('BeforeChange', function(e, prevType, newType) {
                       if (prevType !== newType) {
                           if (prevType === IFRAME_NS) {
                               _fixIframeBugs();
                           } else if (newType === IFRAME_NS) {
                               _fixIframeBugs(true);
                           }
                       }
                   });
                   _mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
                       _fixIframeBugs();
                   });
               },
               getIframe: function(item, template) {
                   var embedSrc = item.src;
                   var iframeSt = mfp.st.iframe;
                   $.each(iframeSt.patterns, function() {
                       if (embedSrc.indexOf(this.index) > -1) {
                           if (this.id) {
                               if (typeof this.id === 'string') {
                                   embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id) + this.id.length, embedSrc.length);
                               } else {
                                   embedSrc = this.id.call(this, embedSrc);
                               }
                           }
                           embedSrc = this.src.replace('%id%', embedSrc);
                           return false;
                       }
                   });
                   var dataObj = {};
                   if (iframeSt.srcAction) {
                       dataObj[iframeSt.srcAction] = embedSrc;
                   }
                   mfp._parseMarkup(template, dataObj, item);
                   mfp.updateStatus('ready');
                   return template;
               }
           }
       });
       var _getLoopedId = function(index) {
               var numSlides = mfp.items.length;
               if (index > numSlides - 1) {
                   return index - numSlides;
               } else if (index < 0) {
                   return numSlides + index;
               }
               return index;
           },
           _replaceCurrTotal = function(text, curr, total) {
               return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
           };
       $.magnificPopup.registerModule('gallery', {
           options: {
               enabled: false,
               arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
               preload: [0, 2],
               navigateByImgClick: true,
               arrows: true,
               tPrev: 'Previous (Left arrow key)',
               tNext: 'Next (Right arrow key)',
               tCounter: '%curr% of %total%'
           },
           proto: {
               initGallery: function() {
                   var gSt = mfp.st.gallery,
                       ns = '.mfp-gallery';
                   mfp.direction = true;
                   if (!gSt || !gSt.enabled) return false;
                   _wrapClasses += ' mfp-gallery';
                   _mfpOn(OPEN_EVENT + ns, function() {
                       if (gSt.navigateByImgClick) {
                           mfp.wrap.on('click' + ns, '.mfp-img', function() {
                               if (mfp.items.length > 1) {
                                   mfp.next();
                                   return false;
                               }
                           });
                       }
                       _document.on('keydown' + ns, function(e) {
                           if (e.keyCode === 37) {
                               mfp.prev();
                           } else if (e.keyCode === 39) {
                               mfp.next();
                           }
                       });
                   });
                   _mfpOn('UpdateStatus' + ns, function(e, data) {
                       if (data.text) {
                           data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
                       }
                   });
                   _mfpOn(MARKUP_PARSE_EVENT + ns, function(e, element, values, item) {
                       var l = mfp.items.length;
                       values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
                   });
                   _mfpOn('BuildControls' + ns, function() {
                       if (mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
                           var markup = gSt.arrowMarkup,
                               arrowLeft = mfp.arrowLeft = $(markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left')).addClass(PREVENT_CLOSE_CLASS),
                               arrowRight = mfp.arrowRight = $(markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right')).addClass(PREVENT_CLOSE_CLASS);
                           arrowLeft.click(function() {
                               mfp.prev();
                           });
                           arrowRight.click(function() {
                               mfp.next();
                           });
                           mfp.container.append(arrowLeft.add(arrowRight));
                       }
                   });
                   _mfpOn(CHANGE_EVENT + ns, function() {
                       if (mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);
                       mfp._preloadTimeout = setTimeout(function() {
                           mfp.preloadNearbyImages();
                           mfp._preloadTimeout = null;
                       }, 16);
                   });
                   _mfpOn(CLOSE_EVENT + ns, function() {
                       _document.off(ns);
                       mfp.wrap.off('click' + ns);
                       mfp.arrowRight = mfp.arrowLeft = null;
                   });
               },
               next: function() {
                   mfp.direction = true;
                   mfp.index = _getLoopedId(mfp.index + 1);
                   mfp.updateItemHTML();
               },
               prev: function() {
                   mfp.direction = false;
                   mfp.index = _getLoopedId(mfp.index - 1);
                   mfp.updateItemHTML();
               },
               goTo: function(newIndex) {
                   mfp.direction = (newIndex >= mfp.index);
                   mfp.index = newIndex;
                   mfp.updateItemHTML();
               },
               preloadNearbyImages: function() {
                   var p = mfp.st.gallery.preload,
                       preloadBefore = Math.min(p[0], mfp.items.length),
                       preloadAfter = Math.min(p[1], mfp.items.length),
                       i;
                   for (i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
                       mfp._preloadItem(mfp.index + i);
                   }
                   for (i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
                       mfp._preloadItem(mfp.index - i);
                   }
               },
               _preloadItem: function(index) {
                   index = _getLoopedId(index);
                   if (mfp.items[index].preloaded) {
                       return;
                   }
                   var item = mfp.items[index];
                   if (!item.parsed) {
                       item = mfp.parseEl(index);
                   }
                   _mfpTrigger('LazyLoad', item);
                   if (item.type === 'image') {
                       item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
                           item.hasSize = true;
                       }).on('error.mfploader', function() {
                           item.hasSize = true;
                           item.loadError = true;
                           _mfpTrigger('LazyLoadError', item);
                       }).attr('src', item.src);
                   }
                   item.preloaded = true;
               }
           }
       });
       var RETINA_NS = 'retina';
       $.magnificPopup.registerModule(RETINA_NS, {
           options: {
               replaceSrc: function(item) {
                   return item.src.replace(/\.\w+$/, function(m) {
                       return '@2x' + m;
                   });
               },
               ratio: 1
           },
           proto: {
               initRetina: function() {
                   if (window.devicePixelRatio > 1) {
                       var st = mfp.st.retina,
                           ratio = st.ratio;
                       ratio = !isNaN(ratio) ? ratio : ratio();
                       if (ratio > 1) {
                           _mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
                               item.img.css({
                                   'max-width': item.img[0].naturalWidth / ratio,
                                   'width': '100%'
                               });
                           });
                           _mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
                               item.src = st.replaceSrc(item, ratio);
                           });
                       }
                   }
               }
           }
       });
       _checkInstance();
   }));
   /*! Grained.js
    * Author : Sarath Saleem  - https://github.com/sarathsaleem
    * MIT license: http://opensource.org/licenses/MIT
    * GitHub : https://github.com/sarathsaleem/grained
    * v0.0.1
    */
   (function(window, doc) {
       "use strict";
   
       function grained(ele, opt) {
           var element = null,
               elementId = null,
               selectorElement = null;
           if (typeof ele === 'string') {
               element = doc.getElementById(ele.split('#')[1]);
           }
           if (!element) {
               console.error('Grained: cannot find the element with id ' + ele);
               return;
           } else {
               elementId = element.id;
           }
           if (element.style.position !== 'absolute') {
               element.style.position = 'relative';
           }
           element.style.overflow = 'hidden';
           var prefixes = ["", "-moz-", "-o-animation-", "-webkit-", "-ms-"];
           var options = {
               animate: true,
               patternWidth: 100,
               patternHeight: 100,
               grainOpacity: 0.1,
               grainDensity: 1,
               grainWidth: 1,
               grainHeight: 1,
               grainChaos: 0.5,
               grainSpeed: 20
           };
           Object.keys(opt).forEach(function(key) {
               options[key] = opt[key];
           });
           var generateNoise = function() {
               var canvas = doc.createElement('canvas');
               var ctx = canvas.getContext('2d');
               canvas.width = options.patternWidth;
               canvas.height = options.patternHeight;
               for (var w = 0; w < options.patternWidth; w += options.grainDensity) {
                   for (var h = 0; h < options.patternHeight; h += options.grainDensity) {
                       var rgb = Math.random() * 256 | 0;
                       ctx.fillStyle = 'rgba(' + [rgb, rgb, rgb, options.grainOpacity].join() + ')';
                       ctx.fillRect(w, h, options.grainWidth, options.grainHeight);
                   }
               }
               return canvas.toDataURL('image/png');
           };
   
           function addCSSRule(sheet, selector, rules, index) {
               var ins = '';
               if (selector.length) {
                   ins = selector + "{" + rules + "}";
               } else {
                   ins = rules;
               }
               if ("insertRule" in sheet) {
                   sheet.insertRule(ins, index);
               } else if ("addRule" in sheet) {
                   sheet.addRule(selector, rules, index);
               }
           }
           var noise = generateNoise();
           var animation = '',
               keyFrames = ['0%:-10%,10%', '10%:-25%,0%', '20%:-30%,10%', '30%:-30%,30%', '40%::-20%,20%', '50%:-15%,10%', '60%:-20%,20%', '70%:-5%,20%', '80%:-25%,5%', '90%:-30%,25%', '100%:-10%,10%'];
           var pre = prefixes.length;
           while (pre--) {
               animation += '@' + prefixes[pre] + 'keyframes grained{';
               for (var key = 0; key < keyFrames.length; key++) {
                   var keyVal = keyFrames[key].split(':');
                   animation += keyVal[0] + '{';
                   animation += prefixes[pre] + 'transform:translate(' + keyVal[1] + ');';
                   animation += '}';
               }
               animation += '}';
           }
           var animationAdded = doc.getElementById('grained-animation');
           if (animationAdded) {
               animationAdded.parentElement.removeChild(animationAdded);
           }
           var style = doc.createElement("style");
           style.type = "text/css";
           style.id = 'grained-animation';
           style.innerHTML = animation;
           doc.body.appendChild(style);
           var styleAdded = doc.getElementById('grained-animation-' + elementId);
           if (styleAdded) {
               styleAdded.parentElement.removeChild(styleAdded);
           }
           style = doc.createElement("style");
           style.type = "text/css";
           style.id = 'grained-animation-' + elementId;
           doc.body.appendChild(style);
           var rule = 'background-image: url(' + noise + ');';
           rule += 'position: absolute;content: "";height: 300%;width: 300%;left: -100%;top: -100%;';
           pre = prefixes.length;
           if (options.animate) {
               while (pre--) {
                   rule += prefixes[pre] + 'animation-name:grained;';
                   rule += prefixes[pre] + 'animation-iteration-count: infinite;';
                   rule += prefixes[pre] + 'animation-duration: ' + options.grainChaos + 's;';
                   rule += prefixes[pre] + 'animation-timing-function: steps(' + options.grainSpeed + ', end);';
               }
           }
           selectorElement = '#' + elementId + '::before';
           addCSSRule(style.sheet, selectorElement, rule);
       }
       window.grained = grained;
   })(window, document);
   
   ! function(e, t) {
       "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
   }(this, (function() {
       "use strict";
       var e = "undefined" == typeof document ? {
               body: {},
               addEventListener: function() {},
               removeEventListener: function() {},
               activeElement: {
                   blur: function() {},
                   nodeName: ""
               },
               querySelector: function() {
                   return null
               },
               querySelectorAll: function() {
                   return []
               },
               getElementById: function() {
                   return null
               },
               createEvent: function() {
                   return {
                       initEvent: function() {}
                   }
               },
               createElement: function() {
                   return {
                       children: [],
                       childNodes: [],
                       style: {},
                       setAttribute: function() {},
                       getElementsByTagName: function() {
                           return []
                       }
                   }
               },
               location: {
                   hash: ""
               }
           } : document,
           t = "undefined" == typeof window ? {
               document: e,
               navigator: {
                   userAgent: ""
               },
               location: {},
               history: {},
               CustomEvent: function() {
                   return this
               },
               addEventListener: function() {},
               removeEventListener: function() {},
               getComputedStyle: function() {
                   return {
                       getPropertyValue: function() {
                           return ""
                       }
                   }
               },
               Image: function() {},
               Date: function() {},
               screen: {},
               setTimeout: function() {},
               clearTimeout: function() {}
           } : window,
           i = function(e) {
               for (var t = 0; t < e.length; t += 1) this[t] = e[t];
               return this.length = e.length, this
           };
   
       function s(s, a) {
           var r = [],
               n = 0;
           if (s && !a && s instanceof i) return s;
           if (s)
               if ("string" == typeof s) {
                   var o, l, d = s.trim();
                   if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
                       var h = "div";
                       for (0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = e.createElement(h)).innerHTML = d, n = 0; n < l.childNodes.length; n += 1) r.push(l.childNodes[n])
                   } else
                       for (o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [e.getElementById(s.trim().split("#")[1])], n = 0; n < o.length; n += 1) o[n] && r.push(o[n])
               } else if (s.nodeType || s === t || s === e) r.push(s);
           else if (s.length > 0 && s[0].nodeType)
               for (n = 0; n < s.length; n += 1) r.push(s[n]);
           return new i(r)
       }
   
       function a(e) {
           for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
           return t
       }
       s.fn = i.prototype, s.Class = i, s.Dom7 = i;
       var r = {
           addClass: function(e) {
               if (void 0 === e) return this;
               for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                   for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]);
               return this
           },
           removeClass: function(e) {
               for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                   for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]);
               return this
           },
           hasClass: function(e) {
               return !!this[0] && this[0].classList.contains(e)
           },
           toggleClass: function(e) {
               for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                   for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
               return this
           },
           attr: function(e, t) {
               var i = arguments;
               if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
               for (var s = 0; s < this.length; s += 1)
                   if (2 === i.length) this[s].setAttribute(e, t);
                   else
                       for (var a in e) this[s][a] = e[a], this[s].setAttribute(a, e[a]);
               return this
           },
           removeAttr: function(e) {
               for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
               return this
           },
           data: function(e, t) {
               var i;
               if (void 0 !== t) {
                   for (var s = 0; s < this.length; s += 1)(i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                   return this
               }
               if (i = this[0]) {
                   if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
                   var a = i.getAttribute("data-" + e);
                   return a || void 0
               }
           },
           transform: function(e) {
               for (var t = 0; t < this.length; t += 1) {
                   var i = this[t].style;
                   i.webkitTransform = e, i.transform = e
               }
               return this
           },
           transition: function(e) {
               "string" != typeof e && (e += "ms");
               for (var t = 0; t < this.length; t += 1) {
                   var i = this[t].style;
                   i.webkitTransitionDuration = e, i.transitionDuration = e
               }
               return this
           },
           on: function() {
               for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
               var a = t[0],
                   r = t[1],
                   n = t[2],
                   o = t[3];
   
               function l(e) {
                   var t = e.target;
                   if (t) {
                       var i = e.target.dom7EventData || [];
                       if (i.indexOf(e) < 0 && i.unshift(e), s(t).is(r)) n.apply(t, i);
                       else
                           for (var a = s(t).parents(), o = 0; o < a.length; o += 1) s(a[o]).is(r) && n.apply(a[o], i)
                   }
               }
   
               function d(e) {
                   var t = e && e.target && e.target.dom7EventData || [];
                   t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
               }
               "function" == typeof t[1] && (a = (e = t)[0], n = e[1], o = e[2], r = void 0), o || (o = !1);
               for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
                   var u = this[c];
                   if (r)
                       for (h = 0; h < p.length; h += 1) {
                           var v = p[h];
                           u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []), u.dom7LiveListeners[v].push({
                               listener: n,
                               proxyListener: l
                           }), u.addEventListener(v, l, o)
                       } else
                           for (h = 0; h < p.length; h += 1) {
                               var f = p[h];
                               u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[f] || (u.dom7Listeners[f] = []), u.dom7Listeners[f].push({
                                   listener: n,
                                   proxyListener: d
                               }), u.addEventListener(f, d, o)
                           }
               }
               return this
           },
           off: function() {
               for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
               var s = t[0],
                   a = t[1],
                   r = t[2],
                   n = t[3];
               "function" == typeof t[1] && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1);
               for (var o = s.split(" "), l = 0; l < o.length; l += 1)
                   for (var d = o[l], h = 0; h < this.length; h += 1) {
                       var p = this[h],
                           c = void 0;
                       if (!a && p.dom7Listeners ? c = p.dom7Listeners[d] : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]), c && c.length)
                           for (var u = c.length - 1; u >= 0; u -= 1) {
                               var v = c[u];
                               r && v.listener === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1))
                           }
                   }
               return this
           },
           trigger: function() {
               for (var i = [], s = arguments.length; s--;) i[s] = arguments[s];
               for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1)
                   for (var o = a[n], l = 0; l < this.length; l += 1) {
                       var d = this[l],
                           h = void 0;
                       try {
                           h = new t.CustomEvent(o, {
                               detail: r,
                               bubbles: !0,
                               cancelable: !0
                           })
                       } catch (t) {
                           (h = e.createEvent("Event")).initEvent(o, !0, !0), h.detail = r
                       }
                       d.dom7EventData = i.filter((function(e, t) {
                           return t > 0
                       })), d.dispatchEvent(h), d.dom7EventData = [], delete d.dom7EventData
                   }
               return this
           },
           transitionEnd: function(e) {
               var t, i = ["webkitTransitionEnd", "transitionend"],
                   s = this;
   
               function a(r) {
                   if (r.target === this)
                       for (e.call(this, r), t = 0; t < i.length; t += 1) s.off(i[t], a)
               }
               if (e)
                   for (t = 0; t < i.length; t += 1) s.on(i[t], a);
               return this
           },
           outerWidth: function(e) {
               if (this.length > 0) {
                   if (e) {
                       var t = this.styles();
                       return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                   }
                   return this[0].offsetWidth
               }
               return null
           },
           outerHeight: function(e) {
               if (this.length > 0) {
                   if (e) {
                       var t = this.styles();
                       return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                   }
                   return this[0].offsetHeight
               }
               return null
           },
           offset: function() {
               if (this.length > 0) {
                   var i = this[0],
                       s = i.getBoundingClientRect(),
                       a = e.body,
                       r = i.clientTop || a.clientTop || 0,
                       n = i.clientLeft || a.clientLeft || 0,
                       o = i === t ? t.scrollY : i.scrollTop,
                       l = i === t ? t.scrollX : i.scrollLeft;
                   return {
                       top: s.top + o - r,
                       left: s.left + l - n
                   }
               }
               return null
           },
           css: function(e, i) {
               var s;
               if (1 === arguments.length) {
                   if ("string" != typeof e) {
                       for (s = 0; s < this.length; s += 1)
                           for (var a in e) this[s].style[a] = e[a];
                       return this
                   }
                   if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e)
               }
               if (2 === arguments.length && "string" == typeof e) {
                   for (s = 0; s < this.length; s += 1) this[s].style[e] = i;
                   return this
               }
               return this
           },
           each: function(e) {
               if (!e) return this;
               for (var t = 0; t < this.length; t += 1)
                   if (!1 === e.call(this[t], t, this[t])) return this;
               return this
           },
           html: function(e) {
               if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
               for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
               return this
           },
           text: function(e) {
               if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
               for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
               return this
           },
           is: function(a) {
               var r, n, o = this[0];
               if (!o || void 0 === a) return !1;
               if ("string" == typeof a) {
                   if (o.matches) return o.matches(a);
                   if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);
                   if (o.msMatchesSelector) return o.msMatchesSelector(a);
                   for (r = s(a), n = 0; n < r.length; n += 1)
                       if (r[n] === o) return !0;
                   return !1
               }
               if (a === e) return o === e;
               if (a === t) return o === t;
               if (a.nodeType || a instanceof i) {
                   for (r = a.nodeType ? [a] : a, n = 0; n < r.length; n += 1)
                       if (r[n] === o) return !0;
                   return !1
               }
               return !1
           },
           index: function() {
               var e, t = this[0];
               if (t) {
                   for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                   return e
               }
           },
           eq: function(e) {
               if (void 0 === e) return this;
               var t, s = this.length;
               return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [this[t]] : [this[e]])
           },
           append: function() {
               for (var t, s = [], a = arguments.length; a--;) s[a] = arguments[a];
               for (var r = 0; r < s.length; r += 1) {
                   t = s[r];
                   for (var n = 0; n < this.length; n += 1)
                       if ("string" == typeof t) {
                           var o = e.createElement("div");
                           for (o.innerHTML = t; o.firstChild;) this[n].appendChild(o.firstChild)
                       } else if (t instanceof i)
                       for (var l = 0; l < t.length; l += 1) this[n].appendChild(t[l]);
                   else this[n].appendChild(t)
               }
               return this
           },
           prepend: function(t) {
               var s, a;
               for (s = 0; s < this.length; s += 1)
                   if ("string" == typeof t) {
                       var r = e.createElement("div");
                       for (r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1) this[s].insertBefore(r.childNodes[a], this[s].childNodes[0])
                   } else if (t instanceof i)
                   for (a = 0; a < t.length; a += 1) this[s].insertBefore(t[a], this[s].childNodes[0]);
               else this[s].insertBefore(t, this[s].childNodes[0]);
               return this
           },
           next: function(e) {
               return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([])
           },
           nextAll: function(e) {
               var t = [],
                   a = this[0];
               if (!a) return new i([]);
               for (; a.nextElementSibling;) {
                   var r = a.nextElementSibling;
                   e ? s(r).is(e) && t.push(r) : t.push(r), a = r
               }
               return new i(t)
           },
           prev: function(e) {
               if (this.length > 0) {
                   var t = this[0];
                   return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([])
               }
               return new i([])
           },
           prevAll: function(e) {
               var t = [],
                   a = this[0];
               if (!a) return new i([]);
               for (; a.previousElementSibling;) {
                   var r = a.previousElementSibling;
                   e ? s(r).is(e) && t.push(r) : t.push(r), a = r
               }
               return new i(t)
           },
           parent: function(e) {
               for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
               return s(a(t))
           },
           parents: function(e) {
               for (var t = [], i = 0; i < this.length; i += 1)
                   for (var r = this[i].parentNode; r;) e ? s(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
               return s(a(t))
           },
           closest: function(e) {
               var t = this;
               return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
           },
           find: function(e) {
               for (var t = [], s = 0; s < this.length; s += 1)
                   for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1) t.push(a[r]);
               return new i(t)
           },
           children: function(e) {
               for (var t = [], r = 0; r < this.length; r += 1)
                   for (var n = this[r].childNodes, o = 0; o < n.length; o += 1) e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
               return new i(a(t))
           },
           filter: function(e) {
               for (var t = [], s = 0; s < this.length; s += 1) e.call(this[s], s, this[s]) && t.push(this[s]);
               return new i(t)
           },
           remove: function() {
               for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
               return this
           },
           add: function() {
               for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
               var i, a;
               for (i = 0; i < e.length; i += 1) {
                   var r = s(e[i]);
                   for (a = 0; a < r.length; a += 1) this[this.length] = r[a], this.length += 1
               }
               return this
           },
           styles: function() {
               return this[0] ? t.getComputedStyle(this[0], null) : {}
           }
       };
       Object.keys(r).forEach((function(e) {
           s.fn[e] = s.fn[e] || r[e]
       }));
       var n = {
               deleteProps: function(e) {
                   var t = e;
                   Object.keys(t).forEach((function(e) {
                       try {
                           t[e] = null
                       } catch (e) {}
                       try {
                           delete t[e]
                       } catch (e) {}
                   }))
               },
               nextTick: function(e, t) {
                   return void 0 === t && (t = 0), setTimeout(e, t)
               },
               now: function() {
                   return Date.now()
               },
               getTranslate: function(e, i) {
                   var s, a, r;
                   void 0 === i && (i = "x");
                   var n = t.getComputedStyle(e, null);
                   return t.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map((function(e) {
                       return e.replace(",", ".")
                   })).join(", ")), r = new t.WebKitCSSMatrix("none" === a ? "" : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), a || 0
               },
               parseUrlQuery: function(e) {
                   var i, s, a, r, n = {},
                       o = e || t.location.href;
                   if ("string" == typeof o && o.length)
                       for (r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter((function(e) {
                               return "" !== e
                           }))).length, i = 0; i < r; i += 1) a = s[i].replace(/#\S+/g, "").split("="), n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
                   return n
               },
               isObject: function(e) {
                   return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
               },
               extend: function() {
                   for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                   for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
                       var a = e[s];
                       if (null != a)
                           for (var r = Object.keys(Object(a)), o = 0, l = r.length; o < l; o += 1) {
                               var d = r[o],
                                   h = Object.getOwnPropertyDescriptor(a, d);
                               void 0 !== h && h.enumerable && (n.isObject(i[d]) && n.isObject(a[d]) ? n.extend(i[d], a[d]) : !n.isObject(i[d]) && n.isObject(a[d]) ? (i[d] = {}, n.extend(i[d], a[d])) : i[d] = a[d])
                           }
                   }
                   return i
               }
           },
           o = {
               touch: t.Modernizr && !0 === t.Modernizr.touch || !!(t.navigator.maxTouchPoints > 0 || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
               pointerEvents: !!t.PointerEvent && "maxTouchPoints" in t.navigator && t.navigator.maxTouchPoints > 0,
               observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
               passiveListener: function() {
                   var e = !1;
                   try {
                       var i = Object.defineProperty({}, "passive", {
                           get: function() {
                               e = !0
                           }
                       });
                       t.addEventListener("testPassiveListener", null, i)
                   } catch (e) {}
                   return e
               }(),
               gestures: "ongesturestart" in t
           },
           l = function(e) {
               void 0 === e && (e = {});
               var t = this;
               t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach((function(e) {
                   t.on(e, t.params.on[e])
               }))
           },
           d = {
               components: {
                   configurable: !0
               }
           };
       l.prototype.on = function(e, t, i) {
           var s = this;
           if ("function" != typeof t) return s;
           var a = i ? "unshift" : "push";
           return e.split(" ").forEach((function(e) {
               s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t)
           })), s
       }, l.prototype.once = function(e, t, i) {
           var s = this;
           if ("function" != typeof t) return s;
   
           function a() {
               for (var i = [], r = arguments.length; r--;) i[r] = arguments[r];
               s.off(e, a), a.f7proxy && delete a.f7proxy, t.apply(s, i)
           }
           return a.f7proxy = t, s.on(e, a, i)
       }, l.prototype.off = function(e, t) {
           var i = this;
           return i.eventsListeners ? (e.split(" ").forEach((function(e) {
               void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach((function(s, a) {
                   (s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(a, 1)
               }))
           })), i) : i
       }, l.prototype.emit = function() {
           for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
           var i, s, a, r = this;
           if (!r.eventsListeners) return r;
           "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r);
           var n = Array.isArray(i) ? i : i.split(" ");
           return n.forEach((function(e) {
               if (r.eventsListeners && r.eventsListeners[e]) {
                   var t = [];
                   r.eventsListeners[e].forEach((function(e) {
                       t.push(e)
                   })), t.forEach((function(e) {
                       e.apply(a, s)
                   }))
               }
           })), r
       }, l.prototype.useModulesParams = function(e) {
           var t = this;
           t.modules && Object.keys(t.modules).forEach((function(i) {
               var s = t.modules[i];
               s.params && n.extend(e, s.params)
           }))
       }, l.prototype.useModules = function(e) {
           void 0 === e && (e = {});
           var t = this;
           t.modules && Object.keys(t.modules).forEach((function(i) {
               var s = t.modules[i],
                   a = e[i] || {};
               s.instance && Object.keys(s.instance).forEach((function(e) {
                   var i = s.instance[e];
                   t[e] = "function" == typeof i ? i.bind(t) : i
               })), s.on && t.on && Object.keys(s.on).forEach((function(e) {
                   t.on(e, s.on[e])
               })), s.create && s.create.bind(t)(a)
           }))
       }, d.components.set = function(e) {
           this.use && this.use(e)
       }, l.installModule = function(e) {
           for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
           var s = this;
           s.prototype.modules || (s.prototype.modules = {});
           var a = e.name || Object.keys(s.prototype.modules).length + "_" + n.now();
           return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach((function(t) {
               s.prototype[t] = e.proto[t]
           })), e.static && Object.keys(e.static).forEach((function(t) {
               s[t] = e.static[t]
           })), e.install && e.install.apply(s, t), s
       }, l.use = function(e) {
           for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
           var s = this;
           return Array.isArray(e) ? (e.forEach((function(e) {
               return s.installModule(e)
           })), s) : s.installModule.apply(s, [e].concat(t))
       }, Object.defineProperties(l, d);
       var h = {
           updateSize: function() {
               var e, t, i = this.$el;
               e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), n.extend(this, {
                   width: e,
                   height: t,
                   size: this.isHorizontal() ? e : t
               }))
           },
           updateSlides: function() {
               var e = this.params,
                   i = this.$wrapperEl,
                   s = this.size,
                   a = this.rtlTranslate,
                   r = this.wrongRTL,
                   o = this.virtual && e.virtual.enabled,
                   l = o ? this.virtual.slides.length : this.slides.length,
                   d = i.children("." + this.params.slideClass),
                   h = o ? this.virtual.slides.length : d.length,
                   p = [],
                   c = [],
                   u = [];
   
               function v(t) {
                   return !e.cssMode || t !== d.length - 1
               }
               var f = e.slidesOffsetBefore;
               "function" == typeof f && (f = e.slidesOffsetBefore.call(this));
               var m = e.slidesOffsetAfter;
               "function" == typeof m && (m = e.slidesOffsetAfter.call(this));
               var g = this.snapGrid.length,
                   b = this.snapGrid.length,
                   w = e.spaceBetween,
                   y = -f,
                   x = 0,
                   T = 0;
               if (void 0 !== s) {
                   var E, S;
                   "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * s), this.virtualSize = -w, a ? d.css({
                       marginLeft: "",
                       marginTop: ""
                   }) : d.css({
                       marginRight: "",
                       marginBottom: ""
                   }), e.slidesPerColumn > 1 && (E = Math.floor(h / e.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)));
                   for (var C, M = e.slidesPerColumn, P = E / M, z = Math.floor(h / e.slidesPerColumn), k = 0; k < h; k += 1) {
                       S = 0;
                       var $ = d.eq(k);
                       if (e.slidesPerColumn > 1) {
                           var L = void 0,
                               I = void 0,
                               D = void 0;
                           if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
                               var O = Math.floor(k / (e.slidesPerGroup * e.slidesPerColumn)),
                                   A = k - e.slidesPerColumn * e.slidesPerGroup * O,
                                   G = 0 === O ? e.slidesPerGroup : Math.min(Math.ceil((h - O * M * e.slidesPerGroup) / M), e.slidesPerGroup);
                               L = (I = A - (D = Math.floor(A / G)) * G + O * e.slidesPerGroup) + D * E / M, $.css({
                                   "-webkit-box-ordinal-group": L,
                                   "-moz-box-ordinal-group": L,
                                   "-ms-flex-order": L,
                                   "-webkit-order": L,
                                   order: L
                               })
                           } else "column" === e.slidesPerColumnFill ? (D = k - (I = Math.floor(k / M)) * M, (I > z || I === z && D === M - 1) && (D += 1) >= M && (D = 0, I += 1)) : I = k - (D = Math.floor(k / P)) * P;
                           $.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== D && e.spaceBetween && e.spaceBetween + "px")
                       }
                       if ("none" !== $.css("display")) {
                           if ("auto" === e.slidesPerView) {
                               var H = t.getComputedStyle($[0], null),
                                   B = $[0].style.transform,
                                   N = $[0].style.webkitTransform;
                               if (B && ($[0].style.transform = "none"), N && ($[0].style.webkitTransform = "none"), e.roundLengths) S = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);
                               else if (this.isHorizontal()) {
                                   var X = parseFloat(H.getPropertyValue("width")),
                                       V = parseFloat(H.getPropertyValue("padding-left")),
                                       Y = parseFloat(H.getPropertyValue("padding-right")),
                                       F = parseFloat(H.getPropertyValue("margin-left")),
                                       W = parseFloat(H.getPropertyValue("margin-right")),
                                       R = H.getPropertyValue("box-sizing");
                                   S = R && "border-box" === R ? X + F + W : X + V + Y + F + W
                               } else {
                                   var q = parseFloat(H.getPropertyValue("height")),
                                       j = parseFloat(H.getPropertyValue("padding-top")),
                                       K = parseFloat(H.getPropertyValue("padding-bottom")),
                                       U = parseFloat(H.getPropertyValue("margin-top")),
                                       _ = parseFloat(H.getPropertyValue("margin-bottom")),
                                       Z = H.getPropertyValue("box-sizing");
                                   S = Z && "border-box" === Z ? q + U + _ : q + j + K + U + _
                               }
                               B && ($[0].style.transform = B), N && ($[0].style.webkitTransform = N), e.roundLengths && (S = Math.floor(S))
                           } else S = (s - (e.slidesPerView - 1) * w) / e.slidesPerView, e.roundLengths && (S = Math.floor(S)), d[k] && (this.isHorizontal() ? d[k].style.width = S + "px" : d[k].style.height = S + "px");
                           d[k] && (d[k].swiperSlideSize = S), u.push(S), e.centeredSlides ? (y = y + S / 2 + x / 2 + w, 0 === x && 0 !== k && (y = y - s / 2 - w), 0 === k && (y = y - s / 2 - w), Math.abs(y) < .001 && (y = 0), e.roundLengths && (y = Math.floor(y)), T % e.slidesPerGroup == 0 && p.push(y), c.push(y)) : (e.roundLengths && (y = Math.floor(y)), (T - Math.min(this.params.slidesPerGroupSkip, T)) % this.params.slidesPerGroup == 0 && p.push(y), c.push(y), y = y + S + w), this.virtualSize += S + w, x = S, T += 1
                       }
                   }
                   if (this.virtualSize = Math.max(this.virtualSize, s) + m, a && r && ("slide" === e.effect || "coverflow" === e.effect) && i.css({
                           width: this.virtualSize + e.spaceBetween + "px"
                       }), e.setWrapperSize && (this.isHorizontal() ? i.css({
                           width: this.virtualSize + e.spaceBetween + "px"
                       }) : i.css({
                           height: this.virtualSize + e.spaceBetween + "px"
                       })), e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * E, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? i.css({
                           width: this.virtualSize + e.spaceBetween + "px"
                       }) : i.css({
                           height: this.virtualSize + e.spaceBetween + "px"
                       }), e.centeredSlides)) {
                       C = [];
                       for (var Q = 0; Q < p.length; Q += 1) {
                           var J = p[Q];
                           e.roundLengths && (J = Math.floor(J)), p[Q] < this.virtualSize + p[0] && C.push(J)
                       }
                       p = C
                   }
                   if (!e.centeredSlides) {
                       C = [];
                       for (var ee = 0; ee < p.length; ee += 1) {
                           var te = p[ee];
                           e.roundLengths && (te = Math.floor(te)), p[ee] <= this.virtualSize - s && C.push(te)
                       }
                       p = C, Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - s)
                   }
                   if (0 === p.length && (p = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? a ? d.filter(v).css({
                           marginLeft: w + "px"
                       }) : d.filter(v).css({
                           marginRight: w + "px"
                       }) : d.filter(v).css({
                           marginBottom: w + "px"
                       })), e.centeredSlides && e.centeredSlidesBounds) {
                       var ie = 0;
                       u.forEach((function(t) {
                           ie += t + (e.spaceBetween ? e.spaceBetween : 0)
                       }));
                       var se = (ie -= e.spaceBetween) - s;
                       p = p.map((function(e) {
                           return e < 0 ? -f : e > se ? se + m : e
                       }))
                   }
                   if (e.centerInsufficientSlides) {
                       var ae = 0;
                       if (u.forEach((function(t) {
                               ae += t + (e.spaceBetween ? e.spaceBetween : 0)
                           })), (ae -= e.spaceBetween) < s) {
                           var re = (s - ae) / 2;
                           p.forEach((function(e, t) {
                               p[t] = e - re
                           })), c.forEach((function(e, t) {
                               c[t] = e + re
                           }))
                       }
                   }
                   n.extend(this, {
                       slides: d,
                       snapGrid: p,
                       slidesGrid: c,
                       slidesSizesGrid: u
                   }), h !== l && this.emit("slidesLengthChange"), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), c.length !== b && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
               }
           },
           updateAutoHeight: function(e) {
               var t, i = [],
                   s = 0;
               if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                   if (this.params.centeredSlides) i.push.apply(i, this.visibleSlides);
                   else
                       for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                           var a = this.activeIndex + t;
                           if (a > this.slides.length) break;
                           i.push(this.slides.eq(a)[0])
                       } else i.push(this.slides.eq(this.activeIndex)[0]);
               for (t = 0; t < i.length; t += 1)
                   if (void 0 !== i[t]) {
                       var r = i[t].offsetHeight;
                       s = r > s ? r : s
                   } s && this.$wrapperEl.css("height", s + "px")
           },
           updateSlidesOffset: function() {
               for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
           },
           updateSlidesProgress: function(e) {
               void 0 === e && (e = this && this.translate || 0);
               var t = this.params,
                   i = this.slides,
                   a = this.rtlTranslate;
               if (0 !== i.length) {
                   void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                   var r = -e;
                   a && (r = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                   for (var n = 0; n < i.length; n += 1) {
                       var o = i[n],
                           l = (r + (t.centeredSlides ? this.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + t.spaceBetween);
                       if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
                           var d = -(r - o.swiperSlideOffset),
                               h = d + this.slidesSizesGrid[n];
                           (d >= 0 && d < this.size - 1 || h > 1 && h <= this.size || d <= 0 && h >= this.size) && (this.visibleSlides.push(o), this.visibleSlidesIndexes.push(n), i.eq(n).addClass(t.slideVisibleClass))
                       }
                       o.progress = a ? -l : l
                   }
                   this.visibleSlides = s(this.visibleSlides)
               }
           },
           updateProgress: function(e) {
               if (void 0 === e) {
                   var t = this.rtlTranslate ? -1 : 1;
                   e = this && this.translate && this.translate * t || 0
               }
               var i = this.params,
                   s = this.maxTranslate() - this.minTranslate(),
                   a = this.progress,
                   r = this.isBeginning,
                   o = this.isEnd,
                   l = r,
                   d = o;
               0 === s ? (a = 0, r = !0, o = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, o = a >= 1), n.extend(this, {
                   progress: a,
                   isBeginning: r,
                   isEnd: o
               }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), r && !l && this.emit("reachBeginning toEdge"), o && !d && this.emit("reachEnd toEdge"), (l && !r || d && !o) && this.emit("fromEdge"), this.emit("progress", a)
           },
           updateSlidesClasses: function() {
               var e, t = this.slides,
                   i = this.params,
                   s = this.$wrapperEl,
                   a = this.activeIndex,
                   r = this.realIndex,
                   n = this.virtual && i.virtual.enabled;
               t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
               var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
               i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
               var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
               i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
           },
           updateActiveIndex: function(e) {
               var t, i = this.rtlTranslate ? this.translate : -this.translate,
                   s = this.slidesGrid,
                   a = this.snapGrid,
                   r = this.params,
                   o = this.activeIndex,
                   l = this.realIndex,
                   d = this.snapIndex,
                   h = e;
               if (void 0 === h) {
                   for (var p = 0; p < s.length; p += 1) void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
                   r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0)
               }
               if (a.indexOf(i) >= 0) t = a.indexOf(i);
               else {
                   var c = Math.min(r.slidesPerGroupSkip, h);
                   t = c + Math.floor((h - c) / r.slidesPerGroup)
               }
               if (t >= a.length && (t = a.length - 1), h !== o) {
                   var u = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
                   n.extend(this, {
                       snapIndex: t,
                       realIndex: u,
                       previousIndex: o,
                       activeIndex: h
                   }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), l !== u && this.emit("realIndexChange"), (this.initialized || this.runCallbacksOnInit) && this.emit("slideChange")
               } else t !== d && (this.snapIndex = t, this.emit("snapIndexChange"))
           },
           updateClickedSlide: function(e) {
               var t = this.params,
                   i = s(e.target).closest("." + t.slideClass)[0],
                   a = !1;
               if (i)
                   for (var r = 0; r < this.slides.length; r += 1) this.slides[r] === i && (a = !0);
               if (!i || !a) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
               this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
           }
       };
       var p = {
           getTranslate: function(e) {
               void 0 === e && (e = this.isHorizontal() ? "x" : "y");
               var t = this.params,
                   i = this.rtlTranslate,
                   s = this.translate,
                   a = this.$wrapperEl;
               if (t.virtualTranslate) return i ? -s : s;
               if (t.cssMode) return s;
               var r = n.getTranslate(a[0], e);
               return i && (r = -r), r || 0
           },
           setTranslate: function(e, t) {
               var i = this.rtlTranslate,
                   s = this.params,
                   a = this.$wrapperEl,
                   r = this.wrapperEl,
                   n = this.progress,
                   o = 0,
                   l = 0;
               this.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : s.virtualTranslate || a.transform("translate3d(" + o + "px, " + l + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? o : l;
               var d = this.maxTranslate() - this.minTranslate();
               (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
           },
           minTranslate: function() {
               return -this.snapGrid[0]
           },
           maxTranslate: function() {
               return -this.snapGrid[this.snapGrid.length - 1]
           },
           translateTo: function(e, t, i, s, a) {
               var r;
               void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
               var n = this,
                   o = n.params,
                   l = n.wrapperEl;
               if (n.animating && o.preventInteractionOnTransition) return !1;
               var d, h = n.minTranslate(),
                   p = n.maxTranslate();
               if (d = s && e > h ? h : s && e < p ? p : e, n.updateProgress(d), o.cssMode) {
                   var c = n.isHorizontal();
                   return 0 === t ? l[c ? "scrollLeft" : "scrollTop"] = -d : l.scrollTo ? l.scrollTo(((r = {})[c ? "left" : "top"] = -d, r.behavior = "smooth", r)) : l[c ? "scrollLeft" : "scrollTop"] = -d, !0
               }
               return 0 === t ? (n.setTransition(0), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
                   n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit("transitionEnd"))
               }), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), !0
           }
       };
       var c = {
           setTransition: function(e, t) {
               this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
           },
           transitionStart: function(e, t) {
               void 0 === e && (e = !0);
               var i = this.activeIndex,
                   s = this.params,
                   a = this.previousIndex;
               if (!s.cssMode) {
                   s.autoHeight && this.updateAutoHeight();
                   var r = t;
                   if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
                       if ("reset" === r) return void this.emit("slideResetTransitionStart");
                       this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                   }
               }
           },
           transitionEnd: function(e, t) {
               void 0 === e && (e = !0);
               var i = this.activeIndex,
                   s = this.previousIndex,
                   a = this.params;
               if (this.animating = !1, !a.cssMode) {
                   this.setTransition(0);
                   var r = t;
                   if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
                       if ("reset" === r) return void this.emit("slideResetTransitionEnd");
                       this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                   }
               }
           }
       };
       var u = {
           slideTo: function(e, t, i, s) {
               var a;
               void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
               var r = this,
                   n = e;
               n < 0 && (n = 0);
               var o = r.params,
                   l = r.snapGrid,
                   d = r.slidesGrid,
                   h = r.previousIndex,
                   p = r.activeIndex,
                   c = r.rtlTranslate,
                   u = r.wrapperEl;
               if (r.animating && o.preventInteractionOnTransition) return !1;
               var v = Math.min(r.params.slidesPerGroupSkip, n),
                   f = v + Math.floor((n - v) / r.params.slidesPerGroup);
               f >= l.length && (f = l.length - 1), (p || o.initialSlide || 0) === (h || 0) && i && r.emit("beforeSlideChangeStart");
               var m, g = -l[f];
               if (r.updateProgress(g), o.normalizeSlideIndex)
                   for (var b = 0; b < d.length; b += 1) - Math.floor(100 * g) >= Math.floor(100 * d[b]) && (n = b);
               if (r.initialized && n !== p) {
                   if (!r.allowSlideNext && g < r.translate && g < r.minTranslate()) return !1;
                   if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (p || 0) !== n) return !1
               }
               if (m = n > p ? "next" : n < p ? "prev" : "reset", c && -g === r.translate || !c && g === r.translate) return r.updateActiveIndex(n), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(g), "reset" !== m && (r.transitionStart(i, m), r.transitionEnd(i, m)), !1;
               if (o.cssMode) {
                   var w = r.isHorizontal();
                   return 0 === t ? u[w ? "scrollLeft" : "scrollTop"] = -g : u.scrollTo ? u.scrollTo(((a = {})[w ? "left" : "top"] = -g, a.behavior = "smooth", a)) : u[w ? "scrollLeft" : "scrollTop"] = -g, !0
               }
               return 0 === t ? (r.setTransition(0), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.transitionEnd(i, m)) : (r.setTransition(t), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                   r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, m))
               }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0
           },
           slideToLoop: function(e, t, i, s) {
               void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
               var a = e;
               return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s)
           },
           slideNext: function(e, t, i) {
               void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
               var s = this.params,
                   a = this.animating,
                   r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
               if (s.loop) {
                   if (a) return !1;
                   this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
               }
               return this.slideTo(this.activeIndex + r, e, t, i)
           },
           slidePrev: function(e, t, i) {
               void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
               var s = this.params,
                   a = this.animating,
                   r = this.snapGrid,
                   n = this.slidesGrid,
                   o = this.rtlTranslate;
               if (s.loop) {
                   if (a) return !1;
                   this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
               }
   
               function l(e) {
                   return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
               }
               var d, h = l(o ? this.translate : -this.translate),
                   p = r.map((function(e) {
                       return l(e)
                   })),
                   c = (n.map((function(e) {
                       return l(e)
                   })), r[p.indexOf(h)], r[p.indexOf(h) - 1]);
               return void 0 === c && s.cssMode && r.forEach((function(e) {
                   !c && h >= e && (c = e)
               })), void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i)
           },
           slideReset: function(e, t, i) {
               return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
           },
           slideToClosest: function(e, t, i, s) {
               void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
               var a = this.activeIndex,
                   r = Math.min(this.params.slidesPerGroupSkip, a),
                   n = r + Math.floor((a - r) / this.params.slidesPerGroup),
                   o = this.rtlTranslate ? this.translate : -this.translate;
               if (o >= this.snapGrid[n]) {
                   var l = this.snapGrid[n];
                   o - l > (this.snapGrid[n + 1] - l) * s && (a += this.params.slidesPerGroup)
               } else {
                   var d = this.snapGrid[n - 1];
                   o - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup)
               }
               return a = Math.max(a, 0), a = Math.min(a, this.slidesGrid.length - 1), this.slideTo(a, e, t, i)
           },
           slideToClickedSlide: function() {
               var e, t = this,
                   i = t.params,
                   a = t.$wrapperEl,
                   r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                   o = t.clickedIndex;
               if (i.loop) {
                   if (t.animating) return;
                   e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? o < t.loopedSlides - r / 2 || o > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), n.nextTick((function() {
                       t.slideTo(o)
                   }))) : t.slideTo(o) : o > t.slides.length - r ? (t.loopFix(), o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), n.nextTick((function() {
                       t.slideTo(o)
                   }))) : t.slideTo(o)
               } else t.slideTo(o)
           }
       };
       var v = {
           loopCreate: function() {
               var t = this,
                   i = t.params,
                   a = t.$wrapperEl;
               a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
               var r = a.children("." + i.slideClass);
               if (i.loopFillGroupWithBlank) {
                   var n = i.slidesPerGroup - r.length % i.slidesPerGroup;
                   if (n !== i.slidesPerGroup) {
                       for (var o = 0; o < n; o += 1) {
                           var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                           a.append(l)
                       }
                       r = a.children("." + i.slideClass)
                   }
               }
               "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
               var d = [],
                   h = [];
               r.each((function(e, i) {
                   var a = s(i);
                   e < t.loopedSlides && h.push(i), e < r.length && e >= r.length - t.loopedSlides && d.push(i), a.attr("data-swiper-slide-index", e)
               }));
               for (var p = 0; p < h.length; p += 1) a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
               for (var c = d.length - 1; c >= 0; c -= 1) a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))
           },
           loopFix: function() {
               this.emit("beforeLoopFix");
               var e, t = this.activeIndex,
                   i = this.slides,
                   s = this.loopedSlides,
                   a = this.allowSlidePrev,
                   r = this.allowSlideNext,
                   n = this.snapGrid,
                   o = this.rtlTranslate;
               this.allowSlidePrev = !0, this.allowSlideNext = !0;
               var l = -n[t] - this.getTranslate();
               if (t < s) e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);
               else if (t >= i.length - s) {
                   e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l)
               }
               this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("loopFix")
           },
           loopDestroy: function() {
               var e = this.$wrapperEl,
                   t = this.params,
                   i = this.slides;
               e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
           }
       };
       var f = {
           setGrabCursor: function(e) {
               if (!(o.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
                   var t = this.el;
                   t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
               }
           },
           unsetGrabCursor: function() {
               o.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
           }
       };
       var m, g, b, w, y, x, T, E, S, C, M, P, z, k, $, L = {
               appendSlide: function(e) {
                   var t = this.$wrapperEl,
                       i = this.params;
                   if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
                       for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
                   else t.append(e);
                   i.loop && this.loopCreate(), i.observer && o.observer || this.update()
               },
               prependSlide: function(e) {
                   var t = this.params,
                       i = this.$wrapperEl,
                       s = this.activeIndex;
                   t.loop && this.loopDestroy();
                   var a = s + 1;
                   if ("object" == typeof e && "length" in e) {
                       for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
                       a = s + e.length
                   } else i.prepend(e);
                   t.loop && this.loopCreate(), t.observer && o.observer || this.update(), this.slideTo(a, 0, !1)
               },
               addSlide: function(e, t) {
                   var i = this.$wrapperEl,
                       s = this.params,
                       a = this.activeIndex;
                   s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
                   var r = this.slides.length;
                   if (e <= 0) this.prependSlide(t);
                   else if (e >= r) this.appendSlide(t);
                   else {
                       for (var n = a > e ? a + 1 : a, l = [], d = r - 1; d >= e; d -= 1) {
                           var h = this.slides.eq(d);
                           h.remove(), l.unshift(h)
                       }
                       if ("object" == typeof t && "length" in t) {
                           for (var p = 0; p < t.length; p += 1) t[p] && i.append(t[p]);
                           n = a > e ? a + t.length : a
                       } else i.append(t);
                       for (var c = 0; c < l.length; c += 1) i.append(l[c]);
                       s.loop && this.loopCreate(), s.observer && o.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1)
                   }
               },
               removeSlide: function(e) {
                   var t = this.params,
                       i = this.$wrapperEl,
                       s = this.activeIndex;
                   t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
                   var a, r = s;
                   if ("object" == typeof e && "length" in e) {
                       for (var n = 0; n < e.length; n += 1) a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
                       r = Math.max(r, 0)
                   } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
                   t.loop && this.loopCreate(), t.observer && o.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
               },
               removeAllSlides: function() {
                   for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                   this.removeSlide(e)
               }
           },
           I = (m = t.navigator.platform, g = t.navigator.userAgent, b = {
               ios: !1,
               android: !1,
               androidChrome: !1,
               desktop: !1,
               iphone: !1,
               ipod: !1,
               ipad: !1,
               edge: !1,
               ie: !1,
               firefox: !1,
               macos: !1,
               windows: !1,
               cordova: !(!t.cordova && !t.phonegap),
               phonegap: !(!t.cordova && !t.phonegap),
               electron: !1
           }, w = t.screen.width, y = t.screen.height, x = g.match(/(Android);?[\s\/]+([\d.]+)?/), T = g.match(/(iPad).*OS\s([\d_]+)/), E = g.match(/(iPod)(.*OS\s([\d_]+))?/), S = !T && g.match(/(iPhone\sOS|iOS)\s([\d_]+)/), C = g.indexOf("MSIE ") >= 0 || g.indexOf("Trident/") >= 0, M = g.indexOf("Edge/") >= 0, P = g.indexOf("Gecko/") >= 0 && g.indexOf("Firefox/") >= 0, z = "Win32" === m, k = g.toLowerCase().indexOf("electron") >= 0, $ = "MacIntel" === m, !T && $ && o.touch && (1024 === w && 1366 === y || 834 === w && 1194 === y || 834 === w && 1112 === y || 768 === w && 1024 === y) && (T = g.match(/(Version)\/([\d.]+)/), $ = !1), b.ie = C, b.edge = M, b.firefox = P, x && !z && (b.os = "android", b.osVersion = x[2], b.android = !0, b.androidChrome = g.toLowerCase().indexOf("chrome") >= 0), (T || S || E) && (b.os = "ios", b.ios = !0), S && !E && (b.osVersion = S[2].replace(/_/g, "."), b.iphone = !0), T && (b.osVersion = T[2].replace(/_/g, "."), b.ipad = !0), E && (b.osVersion = E[3] ? E[3].replace(/_/g, ".") : null, b.ipod = !0), b.ios && b.osVersion && g.indexOf("Version/") >= 0 && "10" === b.osVersion.split(".")[0] && (b.osVersion = g.toLowerCase().split("version/")[1].split(" ")[0]), b.webView = !(!(S || T || E) || !g.match(/.*AppleWebKit(?!.*Safari)/i) && !t.navigator.standalone) || t.matchMedia && t.matchMedia("(display-mode: standalone)").matches, b.webview = b.webView, b.standalone = b.webView, b.desktop = !(b.ios || b.android) || k, b.desktop && (b.electron = k, b.macos = $, b.windows = z, b.macos && (b.os = "macos"), b.windows && (b.os = "windows")), b.pixelRatio = t.devicePixelRatio || 1, b);
   
       function D(i) {
           var a = this.touchEventsData,
               r = this.params,
               o = this.touches;
           if (!this.animating || !r.preventInteractionOnTransition) {
               var l = i;
               l.originalEvent && (l = l.originalEvent);
               var d = s(l.target);
               if (("wrapper" !== r.touchEventsTarget || d.closest(this.wrapperEl).length) && (a.isTouchEvent = "touchstart" === l.type, (a.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!a.isTouchEvent && "button" in l && l.button > 0 || a.isTouched && a.isMoved)))
                   if (r.noSwiping && d.closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0;
                   else if (!r.swipeHandler || d.closest(r.swipeHandler)[0]) {
                   o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                   var h = o.currentX,
                       p = o.currentY,
                       c = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                       u = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                   if (!c || !(h <= u || h >= t.screen.width - u)) {
                       if (n.extend(a, {
                               isTouched: !0,
                               isMoved: !1,
                               allowTouchCallbacks: !0,
                               isScrolling: void 0,
                               startMoving: void 0
                           }), o.startX = h, o.startY = p, a.touchStartTime = n.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== l.type) {
                           var v = !0;
                           d.is(a.formElements) && (v = !1), e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== d[0] && e.activeElement.blur();
                           var f = v && this.allowTouchMove && r.touchStartPreventDefault;
                           (r.touchStartForcePreventDefault || f) && l.preventDefault()
                       }
                       this.emit("touchStart", l)
                   }
               }
           }
       }
   
       function O(t) {
           var i = this.touchEventsData,
               a = this.params,
               r = this.touches,
               o = this.rtlTranslate,
               l = t;
           if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
               if (!i.isTouchEvent || "mousemove" !== l.type) {
                   var d = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                       h = "touchmove" === l.type ? d.pageX : l.pageX,
                       p = "touchmove" === l.type ? d.pageY : l.pageY;
                   if (l.preventedByNestedSwiper) return r.startX = h, void(r.startY = p);
                   if (!this.allowTouchMove) return this.allowClick = !1, void(i.isTouched && (n.extend(r, {
                       startX: h,
                       startY: p,
                       currentX: h,
                       currentY: p
                   }), i.touchStartTime = n.now()));
                   if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                       if (this.isVertical()) {
                           if (p < r.startY && this.translate <= this.maxTranslate() || p > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
                       } else if (h < r.startX && this.translate <= this.maxTranslate() || h > r.startX && this.translate >= this.minTranslate()) return;
                   if (i.isTouchEvent && e.activeElement && l.target === e.activeElement && s(l.target).is(i.formElements)) return i.isMoved = !0, void(this.allowClick = !1);
                   if (i.allowTouchCallbacks && this.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
                       r.currentX = h, r.currentY = p;
                       var c = r.currentX - r.startX,
                           u = r.currentY - r.startY;
                       if (!(this.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) < this.params.threshold)) {
                           var v;
                           if (void 0 === i.isScrolling) this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (v = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, i.isScrolling = this.isHorizontal() ? v > a.touchAngle : 90 - v > a.touchAngle);
                           if (i.isScrolling && this.emit("touchMoveOpposite", l), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
                           else if (i.startMoving) {
                               this.allowClick = !1, a.cssMode || l.preventDefault(), a.touchMoveStopPropagation && !a.nested && l.stopPropagation(), i.isMoved || (a.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", l)), this.emit("sliderMove", l), i.isMoved = !0;
                               var f = this.isHorizontal() ? c : u;
                               r.diff = f, f *= a.touchRatio, o && (f = -f), this.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
                               var m = !0,
                                   g = a.resistanceRatio;
                               if (a.touchReleaseOnEdges && (g = 0), f > 0 && i.currentTranslate > this.minTranslate() ? (m = !1, a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, g))) : f < 0 && i.currentTranslate < this.maxTranslate() && (m = !1, a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, g))), m && (l.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.threshold > 0) {
                                   if (!(Math.abs(f) > a.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                                   if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void(r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                               }
                               a.followFinger && !a.cssMode && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && (0 === i.velocities.length && i.velocities.push({
                                   position: r[this.isHorizontal() ? "startX" : "startY"],
                                   time: i.touchStartTime
                               }), i.velocities.push({
                                   position: r[this.isHorizontal() ? "currentX" : "currentY"],
                                   time: n.now()
                               })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
                           }
                       }
                   }
               }
           } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l)
       }
   
       function A(e) {
           var t = this,
               i = t.touchEventsData,
               s = t.params,
               a = t.touches,
               r = t.rtlTranslate,
               o = t.$wrapperEl,
               l = t.slidesGrid,
               d = t.snapGrid,
               h = e;
           if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
           s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
           var p, c = n.now(),
               u = c - i.touchStartTime;
           if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap click", h), u < 300 && c - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", h)), i.lastClickTime = n.now(), n.nextTick((function() {
                   t.destroyed || (t.allowClick = !0)
               })), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
           if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode)
               if (s.freeMode) {
                   if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                   if (p > -t.maxTranslate()) return void(t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1));
                   if (s.freeModeMomentum) {
                       if (i.velocities.length > 1) {
                           var v = i.velocities.pop(),
                               f = i.velocities.pop(),
                               m = v.position - f.position,
                               g = v.time - f.time;
                           t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || n.now() - v.time > 300) && (t.velocity = 0)
                       } else t.velocity = 0;
                       t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                       var b = 1e3 * s.freeModeMomentumRatio,
                           w = t.velocity * b,
                           y = t.translate + w;
                       r && (y = -y);
                       var x, T, E = !1,
                           S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                       if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), x = t.maxTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (T = !0);
                       else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), x = t.minTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (T = !0);
                       else if (s.freeModeSticky) {
                           for (var C, M = 0; M < d.length; M += 1)
                               if (d[M] > -y) {
                                   C = M;
                                   break
                               } y = -(y = Math.abs(d[C] - y) < Math.abs(d[C - 1] - y) || "next" === t.swipeDirection ? d[C] : d[C - 1])
                       }
                       if (T && t.once("transitionEnd", (function() {
                               t.loopFix()
                           })), 0 !== t.velocity) {
                           if (b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity), s.freeModeSticky) {
                               var P = Math.abs((r ? -y : y) - t.translate),
                                   z = t.slidesSizesGrid[t.activeIndex];
                               b = P < z ? s.speed : P < 2 * z ? 1.5 * s.speed : 2.5 * s.speed
                           }
                       } else if (s.freeModeSticky) return void t.slideToClosest();
                       s.freeModeMomentumBounce && E ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, o.transitionEnd((function() {
                           t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(x), o.transitionEnd((function() {
                               t && !t.destroyed && t.transitionEnd()
                           })))
                       }))) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, o.transitionEnd((function() {
                           t && !t.destroyed && t.transitionEnd()
                       })))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses()
                   } else if (s.freeModeSticky) return void t.slideToClosest();
                   (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
               } else {
                   for (var k = 0, $ = t.slidesSizesGrid[0], L = 0; L < l.length; L += L < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                       var I = L < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                       void 0 !== l[L + I] ? p >= l[L] && p < l[L + I] && (k = L, $ = l[L + I] - l[L]) : p >= l[L] && (k = L, $ = l[l.length - 1] - l[l.length - 2])
                   }
                   var D = (p - l[k]) / $,
                       O = k < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                   if (u > s.longSwipesMs) {
                       if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                       "next" === t.swipeDirection && (D >= s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k)), "prev" === t.swipeDirection && (D > 1 - s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k))
                   } else {
                       if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                       t.navigation && (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl) ? h.target === t.navigation.nextEl ? t.slideTo(k + O) : t.slideTo(k) : ("next" === t.swipeDirection && t.slideTo(k + O), "prev" === t.swipeDirection && t.slideTo(k))
                   }
               }
       }
   
       function G() {
           var e = this.params,
               t = this.el;
           if (!t || 0 !== t.offsetWidth) {
               e.breakpoints && this.setBreakpoint();
               var i = this.allowSlideNext,
                   s = this.allowSlidePrev,
                   a = this.snapGrid;
               this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
           }
       }
   
       function H(e) {
           this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
       }
   
       function B() {
           var e = this.wrapperEl;
           this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? -e.scrollLeft : -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
           var t = this.maxTranslate() - this.minTranslate();
           (0 === t ? 0 : (this.translate - this.minTranslate()) / t) !== this.progress && this.updateProgress(this.translate), this.emit("setTranslate", this.translate, !1)
       }
       var N = !1;
   
       function X() {}
       var V = {
               init: !0,
               direction: "horizontal",
               touchEventsTarget: "container",
               initialSlide: 0,
               speed: 300,
               cssMode: !1,
               updateOnWindowResize: !0,
               preventInteractionOnTransition: !1,
               edgeSwipeDetection: !1,
               edgeSwipeThreshold: 20,
               freeMode: !1,
               freeModeMomentum: !0,
               freeModeMomentumRatio: 1,
               freeModeMomentumBounce: !0,
               freeModeMomentumBounceRatio: 1,
               freeModeMomentumVelocityRatio: 1,
               freeModeSticky: !1,
               freeModeMinimumVelocity: .02,
               autoHeight: !1,
               setWrapperSize: !1,
               virtualTranslate: !1,
               effect: "slide",
               breakpoints: void 0,
               spaceBetween: 0,
               slidesPerView: 1,
               slidesPerColumn: 1,
               slidesPerColumnFill: "column",
               slidesPerGroup: 1,
               slidesPerGroupSkip: 0,
               centeredSlides: !1,
               centeredSlidesBounds: !1,
               slidesOffsetBefore: 0,
               slidesOffsetAfter: 0,
               normalizeSlideIndex: !0,
               centerInsufficientSlides: !1,
               watchOverflow: !1,
               roundLengths: !1,
               touchRatio: 1,
               touchAngle: 45,
               simulateTouch: !0,
               shortSwipes: !0,
               longSwipes: !0,
               longSwipesRatio: .5,
               longSwipesMs: 300,
               followFinger: !0,
               allowTouchMove: !0,
               threshold: 0,
               touchMoveStopPropagation: !1,
               touchStartPreventDefault: !0,
               touchStartForcePreventDefault: !1,
               touchReleaseOnEdges: !1,
               uniqueNavElements: !0,
               resistance: !0,
               resistanceRatio: .85,
               watchSlidesProgress: !1,
               watchSlidesVisibility: !1,
               grabCursor: !1,
               preventClicks: !0,
               preventClicksPropagation: !0,
               slideToClickedSlide: !1,
               preloadImages: !0,
               updateOnImagesReady: !0,
               loop: !1,
               loopAdditionalSlides: 0,
               loopedSlides: null,
               loopFillGroupWithBlank: !1,
               allowSlidePrev: !0,
               allowSlideNext: !0,
               swipeHandler: null,
               noSwiping: !0,
               noSwipingClass: "swiper-no-swiping",
               noSwipingSelector: null,
               passiveListeners: !0,
               containerModifierClass: "swiper-container-",
               slideClass: "swiper-slide",
               slideBlankClass: "swiper-slide-invisible-blank",
               slideActiveClass: "swiper-slide-active",
               slideDuplicateActiveClass: "swiper-slide-duplicate-active",
               slideVisibleClass: "swiper-slide-visible",
               slideDuplicateClass: "swiper-slide-duplicate",
               slideNextClass: "swiper-slide-next",
               slideDuplicateNextClass: "swiper-slide-duplicate-next",
               slidePrevClass: "swiper-slide-prev",
               slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
               wrapperClass: "swiper-wrapper",
               runCallbacksOnInit: !0
           },
           Y = {
               update: h,
               translate: p,
               transition: c,
               slide: u,
               loop: v,
               grabCursor: f,
               manipulation: L,
               events: {
                   attachEvents: function() {
                       var t = this.params,
                           i = this.touchEvents,
                           s = this.el,
                           a = this.wrapperEl;
                       this.onTouchStart = D.bind(this), this.onTouchMove = O.bind(this), this.onTouchEnd = A.bind(this), t.cssMode && (this.onScroll = B.bind(this)), this.onClick = H.bind(this);
                       var r = !!t.nested;
                       if (!o.touch && o.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, r), e.addEventListener(i.end, this.onTouchEnd, !1);
                       else {
                           if (o.touch) {
                               var n = !("touchstart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
                                   passive: !0,
                                   capture: !1
                               };
                               s.addEventListener(i.start, this.onTouchStart, n), s.addEventListener(i.move, this.onTouchMove, o.passiveListener ? {
                                   passive: !1,
                                   capture: r
                               } : r), s.addEventListener(i.end, this.onTouchEnd, n), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, n), N || (e.addEventListener("touchstart", X), N = !0)
                           }(t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, r), e.addEventListener("mouseup", this.onTouchEnd, !1))
                       }(t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), t.cssMode && a.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G, !0) : this.on("observerUpdate", G, !0)
                   },
                   detachEvents: function() {
                       var t = this.params,
                           i = this.touchEvents,
                           s = this.el,
                           a = this.wrapperEl,
                           r = !!t.nested;
                       if (!o.touch && o.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, r), e.removeEventListener(i.end, this.onTouchEnd, !1);
                       else {
                           if (o.touch) {
                               var n = !("onTouchStart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
                                   passive: !0,
                                   capture: !1
                               };
                               s.removeEventListener(i.start, this.onTouchStart, n), s.removeEventListener(i.move, this.onTouchMove, r), s.removeEventListener(i.end, this.onTouchEnd, n), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, n)
                           }(t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, r), e.removeEventListener("mouseup", this.onTouchEnd, !1))
                       }(t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), t.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G)
                   }
               },
               breakpoints: {
                   setBreakpoint: function() {
                       var e = this.activeIndex,
                           t = this.initialized,
                           i = this.loopedSlides;
                       void 0 === i && (i = 0);
                       var s = this.params,
                           a = this.$el,
                           r = s.breakpoints;
                       if (r && (!r || 0 !== Object.keys(r).length)) {
                           var o = this.getBreakpoint(r);
                           if (o && this.currentBreakpoint !== o) {
                               var l = o in r ? r[o] : void 0;
                               l && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function(e) {
                                   var t = l[e];
                                   void 0 !== t && (l[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                               }));
                               var d = l || this.originalParams,
                                   h = s.slidesPerColumn > 1,
                                   p = d.slidesPerColumn > 1;
                               h && !p ? a.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column") : !h && p && (a.addClass(s.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && a.addClass(s.containerModifierClass + "multirow-column"));
                               var c = d.direction && d.direction !== s.direction,
                                   u = s.loop && (d.slidesPerView !== s.slidesPerView || c);
                               c && t && this.changeDirection(), n.extend(this.params, d), n.extend(this, {
                                   allowTouchMove: this.params.allowTouchMove,
                                   allowSlideNext: this.params.allowSlideNext,
                                   allowSlidePrev: this.params.allowSlidePrev
                               }), this.currentBreakpoint = o, u && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", d)
                           }
                       }
                   },
                   getBreakpoint: function(e) {
                       if (e) {
                           var i = !1,
                               s = Object.keys(e).map((function(e) {
                                   if ("string" == typeof e && 0 === e.indexOf("@")) {
                                       var i = parseFloat(e.substr(1));
                                       return {
                                           value: t.innerHeight * i,
                                           point: e
                                       }
                                   }
                                   return {
                                       value: e,
                                       point: e
                                   }
                               }));
                           s.sort((function(e, t) {
                               return parseInt(e.value, 10) - parseInt(t.value, 10)
                           }));
                           for (var a = 0; a < s.length; a += 1) {
                               var r = s[a],
                                   n = r.point;
                               r.value <= t.innerWidth && (i = n)
                           }
                           return i || "max"
                       }
                   }
               },
               checkOverflow: {
                   checkOverflow: function() {
                       var e = this.params,
                           t = this.isLocked,
                           i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                       e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation.update())
                   }
               },
               classes: {
                   addClasses: function() {
                       var e = this.classNames,
                           t = this.params,
                           i = this.rtl,
                           s = this.$el,
                           a = [];
                       a.push("initialized"), a.push(t.direction), t.freeMode && a.push("free-mode"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && (a.push("multirow"), "column" === t.slidesPerColumnFill && a.push("multirow-column")), I.android && a.push("android"), I.ios && a.push("ios"), t.cssMode && a.push("css-mode"), a.forEach((function(i) {
                           e.push(t.containerModifierClass + i)
                       })), s.addClass(e.join(" "))
                   },
                   removeClasses: function() {
                       var e = this.$el,
                           t = this.classNames;
                       e.removeClass(t.join(" "))
                   }
               },
               images: {
                   loadImage: function(e, i, s, a, r, n) {
                       var o;
   
                       function l() {
                           n && n()
                       }
                       e.complete && r ? l() : i ? ((o = new t.Image).onload = l, o.onerror = l, a && (o.sizes = a), s && (o.srcset = s), i && (o.src = i)) : l()
                   },
                   preloadImages: function() {
                       var e = this;
   
                       function t() {
                           null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                       }
                       e.imagesToLoad = e.$el.find("img");
                       for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                           var s = e.imagesToLoad[i];
                           e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                       }
                   }
               }
           },
           F = {},
           W = function(e) {
               function t() {
                   for (var i, a, r, l = [], d = arguments.length; d--;) l[d] = arguments[d];
                   1 === l.length && l[0].constructor && l[0].constructor === Object ? r = l[0] : (a = (i = l)[0], r = i[1]), r || (r = {}), r = n.extend({}, r), a && !r.el && (r.el = a), e.call(this, r), Object.keys(Y).forEach((function(e) {
                       Object.keys(Y[e]).forEach((function(i) {
                           t.prototype[i] || (t.prototype[i] = Y[e][i])
                       }))
                   }));
                   var h = this;
                   void 0 === h.modules && (h.modules = {}), Object.keys(h.modules).forEach((function(e) {
                       var t = h.modules[e];
                       if (t.params) {
                           var i = Object.keys(t.params)[0],
                               s = t.params[i];
                           if ("object" != typeof s || null === s) return;
                           if (!(i in r && "enabled" in s)) return;
                           !0 === r[i] && (r[i] = {
                               enabled: !0
                           }), "object" != typeof r[i] || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = {
                               enabled: !1
                           })
                       }
                   }));
                   var p = n.extend({}, V);
                   h.useModulesParams(p), h.params = n.extend({}, p, F, r), h.originalParams = n.extend({}, h.params), h.passedParams = n.extend({}, r), h.$ = s;
                   var c = s(h.params.el);
                   if (a = c[0]) {
                       if (c.length > 1) {
                           var u = [];
                           return c.each((function(e, i) {
                               var s = n.extend({}, r, {
                                   el: i
                               });
                               u.push(new t(s))
                           })), u
                       }
                       var v, f, m;
                       return a.swiper = h, c.data("swiper", h), a && a.shadowRoot && a.shadowRoot.querySelector ? (v = s(a.shadowRoot.querySelector("." + h.params.wrapperClass))).children = function(e) {
                           return c.children(e)
                       } : v = c.children("." + h.params.wrapperClass), n.extend(h, {
                           $el: c,
                           el: a,
                           $wrapperEl: v,
                           wrapperEl: v[0],
                           classNames: [],
                           slides: s(),
                           slidesGrid: [],
                           snapGrid: [],
                           slidesSizesGrid: [],
                           isHorizontal: function() {
                               return "horizontal" === h.params.direction
                           },
                           isVertical: function() {
                               return "vertical" === h.params.direction
                           },
                           rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"),
                           rtlTranslate: "horizontal" === h.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")),
                           wrongRTL: "-webkit-box" === v.css("display"),
                           activeIndex: 0,
                           realIndex: 0,
                           isBeginning: !0,
                           isEnd: !1,
                           translate: 0,
                           previousTranslate: 0,
                           progress: 0,
                           velocity: 0,
                           animating: !1,
                           allowSlideNext: h.params.allowSlideNext,
                           allowSlidePrev: h.params.allowSlidePrev,
                           touchEvents: (f = ["touchstart", "touchmove", "touchend", "touchcancel"], m = ["mousedown", "mousemove", "mouseup"], o.pointerEvents && (m = ["pointerdown", "pointermove", "pointerup"]), h.touchEventsTouch = {
                               start: f[0],
                               move: f[1],
                               end: f[2],
                               cancel: f[3]
                           }, h.touchEventsDesktop = {
                               start: m[0],
                               move: m[1],
                               end: m[2]
                           }, o.touch || !h.params.simulateTouch ? h.touchEventsTouch : h.touchEventsDesktop),
                           touchEventsData: {
                               isTouched: void 0,
                               isMoved: void 0,
                               allowTouchCallbacks: void 0,
                               touchStartTime: void 0,
                               isScrolling: void 0,
                               currentTranslate: void 0,
                               startTranslate: void 0,
                               allowThresholdMove: void 0,
                               formElements: "input, select, option, textarea, button, video, label",
                               lastClickTime: n.now(),
                               clickTimeout: void 0,
                               velocities: [],
                               allowMomentumBounce: void 0,
                               isTouchEvent: void 0,
                               startMoving: void 0
                           },
                           allowClick: !0,
                           allowTouchMove: h.params.allowTouchMove,
                           touches: {
                               startX: 0,
                               startY: 0,
                               currentX: 0,
                               currentY: 0,
                               diff: 0
                           },
                           imagesToLoad: [],
                           imagesLoaded: 0
                       }), h.useModules(), h.params.init && h.init(), h
                   }
               }
               e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
               var i = {
                   extendedDefaults: {
                       configurable: !0
                   },
                   defaults: {
                       configurable: !0
                   },
                   Class: {
                       configurable: !0
                   },
                   $: {
                       configurable: !0
                   }
               };
               return t.prototype.slidesPerViewDynamic = function() {
                   var e = this.params,
                       t = this.slides,
                       i = this.slidesGrid,
                       s = this.size,
                       a = this.activeIndex,
                       r = 1;
                   if (e.centeredSlides) {
                       for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0));
                       for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0))
                   } else
                       for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
                   return r
               }, t.prototype.update = function() {
                   var e = this;
                   if (e && !e.destroyed) {
                       var t = e.snapGrid,
                           i = e.params;
                       i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                   }
   
                   function s() {
                       var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                           i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                       e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                   }
               }, t.prototype.changeDirection = function(e, t) {
                   void 0 === t && (t = !0);
                   var i = this.params.direction;
                   return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e ? this : (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.params.direction = e, this.slides.each((function(t, i) {
                       "vertical" === e ? i.style.width = "" : i.style.height = ""
                   })), this.emit("changeDirection"), t && this.update(), this)
               }, t.prototype.init = function() {
                   this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
               }, t.prototype.destroy = function(e, t) {
                   void 0 === e && (e = !0), void 0 === t && (t = !0);
                   var i = this,
                       s = i.params,
                       a = i.$el,
                       r = i.$wrapperEl,
                       o = i.slides;
                   return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), o && o.length && o.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((function(e) {
                       i.off(e)
                   })), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), n.deleteProps(i)), i.destroyed = !0, null)
               }, t.extendDefaults = function(e) {
                   n.extend(F, e)
               }, i.extendedDefaults.get = function() {
                   return F
               }, i.defaults.get = function() {
                   return V
               }, i.Class.get = function() {
                   return e
               }, i.$.get = function() {
                   return s
               }, Object.defineProperties(t, i), t
           }(l),
           R = {
               name: "device",
               proto: {
                   device: I
               },
               static: {
                   device: I
               }
           },
           q = {
               name: "support",
               proto: {
                   support: o
               },
               static: {
                   support: o
               }
           },
           j = {
               isEdge: !!t.navigator.userAgent.match(/Edge/g),
               isSafari: function() {
                   var e = t.navigator.userAgent.toLowerCase();
                   return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
               }(),
               isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
           },
           K = {
               name: "browser",
               proto: {
                   browser: j
               },
               static: {
                   browser: j
               }
           },
           U = {
               name: "resize",
               create: function() {
                   var e = this;
                   n.extend(e, {
                       resize: {
                           resizeHandler: function() {
                               e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                           },
                           orientationChangeHandler: function() {
                               e && !e.destroyed && e.initialized && e.emit("orientationchange")
                           }
                       }
                   })
               },
               on: {
                   init: function() {
                       t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                   },
                   destroy: function() {
                       t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                   }
               }
           },
           _ = {
               func: t.MutationObserver || t.WebkitMutationObserver,
               attach: function(e, i) {
                   void 0 === i && (i = {});
                   var s = this,
                       a = new(0, _.func)((function(e) {
                           if (1 !== e.length) {
                               var i = function() {
                                   s.emit("observerUpdate", e[0])
                               };
                               t.requestAnimationFrame ? t.requestAnimationFrame(i) : t.setTimeout(i, 0)
                           } else s.emit("observerUpdate", e[0])
                       }));
                   a.observe(e, {
                       attributes: void 0 === i.attributes || i.attributes,
                       childList: void 0 === i.childList || i.childList,
                       characterData: void 0 === i.characterData || i.characterData
                   }), s.observer.observers.push(a)
               },
               init: function() {
                   if (o.observer && this.params.observer) {
                       if (this.params.observeParents)
                           for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                       this.observer.attach(this.$el[0], {
                           childList: this.params.observeSlideChildren
                       }), this.observer.attach(this.$wrapperEl[0], {
                           attributes: !1
                       })
                   }
               },
               destroy: function() {
                   this.observer.observers.forEach((function(e) {
                       e.disconnect()
                   })), this.observer.observers = []
               }
           },
           Z = {
               name: "observer",
               params: {
                   observer: !1,
                   observeParents: !1,
                   observeSlideChildren: !1
               },
               create: function() {
                   n.extend(this, {
                       observer: {
                           init: _.init.bind(this),
                           attach: _.attach.bind(this),
                           destroy: _.destroy.bind(this),
                           observers: []
                       }
                   })
               },
               on: {
                   init: function() {
                       this.observer.init()
                   },
                   destroy: function() {
                       this.observer.destroy()
                   }
               }
           },
           Q = {
               update: function(e) {
                   var t = this,
                       i = t.params,
                       s = i.slidesPerView,
                       a = i.slidesPerGroup,
                       r = i.centeredSlides,
                       o = t.params.virtual,
                       l = o.addSlidesBefore,
                       d = o.addSlidesAfter,
                       h = t.virtual,
                       p = h.from,
                       c = h.to,
                       u = h.slides,
                       v = h.slidesGrid,
                       f = h.renderSlide,
                       m = h.offset;
                   t.updateActiveIndex();
                   var g, b, w, y = t.activeIndex || 0;
                   g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (b = Math.floor(s / 2) + a + l, w = Math.floor(s / 2) + a + d) : (b = s + (a - 1) + l, w = a + d);
                   var x = Math.max((y || 0) - w, 0),
                       T = Math.min((y || 0) + b, u.length - 1),
                       E = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);
   
                   function S() {
                       t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                   }
                   if (n.extend(t.virtual, {
                           from: x,
                           to: T,
                           offset: E,
                           slidesGrid: t.slidesGrid
                       }), p === x && c === T && !e) return t.slidesGrid !== v && E !== m && t.slides.css(g, E + "px"), void t.updateProgress();
                   if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                       offset: E,
                       from: x,
                       to: T,
                       slides: function() {
                           for (var e = [], t = x; t <= T; t += 1) e.push(u[t]);
                           return e
                       }()
                   }), void S();
                   var C = [],
                       M = [];
                   if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                   else
                       for (var P = p; P <= c; P += 1)(P < x || P > T) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + P + '"]').remove();
                   for (var z = 0; z < u.length; z += 1) z >= x && z <= T && (void 0 === c || e ? M.push(z) : (z > c && M.push(z), z < p && C.push(z)));
                   M.forEach((function(e) {
                       t.$wrapperEl.append(f(u[e], e))
                   })), C.sort((function(e, t) {
                       return t - e
                   })).forEach((function(e) {
                       t.$wrapperEl.prepend(f(u[e], e))
                   })), t.$wrapperEl.children(".swiper-slide").css(g, E + "px"), S()
               },
               renderSlide: function(e, t) {
                   var i = this.params.virtual;
                   if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
                   var a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                   return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = a), a
               },
               appendSlide: function(e) {
                   if ("object" == typeof e && "length" in e)
                       for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
                   else this.virtual.slides.push(e);
                   this.virtual.update(!0)
               },
               prependSlide: function(e) {
                   var t = this.activeIndex,
                       i = t + 1,
                       s = 1;
                   if (Array.isArray(e)) {
                       for (var a = 0; a < e.length; a += 1) e[a] && this.virtual.slides.unshift(e[a]);
                       i = t + e.length, s = e.length
                   } else this.virtual.slides.unshift(e);
                   if (this.params.virtual.cache) {
                       var r = this.virtual.cache,
                           n = {};
                       Object.keys(r).forEach((function(e) {
                           var t = r[e],
                               i = t.attr("data-swiper-slide-index");
                           i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t
                       })), this.virtual.cache = n
                   }
                   this.virtual.update(!0), this.slideTo(i, 0)
               },
               removeSlide: function(e) {
                   if (null != e) {
                       var t = this.activeIndex;
                       if (Array.isArray(e))
                           for (var i = e.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0);
                       else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                       this.virtual.update(!0), this.slideTo(t, 0)
                   }
               },
               removeAllSlides: function() {
                   this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0)
               }
           },
           J = {
               name: "virtual",
               params: {
                   virtual: {
                       enabled: !1,
                       slides: [],
                       cache: !0,
                       renderSlide: null,
                       renderExternal: null,
                       addSlidesBefore: 0,
                       addSlidesAfter: 0
                   }
               },
               create: function() {
                   n.extend(this, {
                       virtual: {
                           update: Q.update.bind(this),
                           appendSlide: Q.appendSlide.bind(this),
                           prependSlide: Q.prependSlide.bind(this),
                           removeSlide: Q.removeSlide.bind(this),
                           removeAllSlides: Q.removeAllSlides.bind(this),
                           renderSlide: Q.renderSlide.bind(this),
                           slides: this.params.virtual.slides,
                           cache: {}
                       }
                   })
               },
               on: {
                   beforeInit: function() {
                       if (this.params.virtual.enabled) {
                           this.classNames.push(this.params.containerModifierClass + "virtual");
                           var e = {
                               watchSlidesProgress: !0
                           };
                           n.extend(this.params, e), n.extend(this.originalParams, e), this.params.initialSlide || this.virtual.update()
                       }
                   },
                   setTranslate: function() {
                       this.params.virtual.enabled && this.virtual.update()
                   }
               }
           },
           ee = {
               handle: function(i) {
                   var s = this.rtlTranslate,
                       a = i;
                   a.originalEvent && (a = a.originalEvent);
                   var r = a.keyCode || a.charCode;
                   if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r || 34 === r)) return !1;
                   if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r || 33 === r)) return !1;
                   if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
                       if (this.params.keyboard.onlyInViewport && (33 === r || 34 === r || 37 === r || 39 === r || 38 === r || 40 === r)) {
                           var n = !1;
                           if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                           var o = t.innerWidth,
                               l = t.innerHeight,
                               d = this.$el.offset();
                           s && (d.left -= this.$el[0].scrollLeft);
                           for (var h = [
                                   [d.left, d.top],
                                   [d.left + this.width, d.top],
                                   [d.left, d.top + this.height],
                                   [d.left + this.width, d.top + this.height]
                               ], p = 0; p < h.length; p += 1) {
                               var c = h[p];
                               c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0)
                           }
                           if (!n) return
                       }
                       this.isHorizontal() ? (33 !== r && 34 !== r && 37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (34 !== r && 39 !== r || s) && (33 !== r && 37 !== r || !s) || this.slideNext(), (33 !== r && 37 !== r || s) && (34 !== r && 39 !== r || !s) || this.slidePrev()) : (33 !== r && 34 !== r && 38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 34 !== r && 40 !== r || this.slideNext(), 33 !== r && 38 !== r || this.slidePrev()), this.emit("keyPress", r)
                   }
               },
               enable: function() {
                   this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
               },
               disable: function() {
                   this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
               }
           },
           te = {
               name: "keyboard",
               params: {
                   keyboard: {
                       enabled: !1,
                       onlyInViewport: !0
                   }
               },
               create: function() {
                   n.extend(this, {
                       keyboard: {
                           enabled: !1,
                           enable: ee.enable.bind(this),
                           disable: ee.disable.bind(this),
                           handle: ee.handle.bind(this)
                       }
                   })
               },
               on: {
                   init: function() {
                       this.params.keyboard.enabled && this.keyboard.enable()
                   },
                   destroy: function() {
                       this.keyboard.enabled && this.keyboard.disable()
                   }
               }
           };
       var ie = {
               lastScrollTime: n.now(),
               lastEventBeforeSnap: void 0,
               recentWheelEvents: [],
               event: function() {
                   return t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                       var t = "onwheel" in e;
                       if (!t) {
                           var i = e.createElement("div");
                           i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel
                       }
                       return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t
                   }() ? "wheel" : "mousewheel"
               },
               normalize: function(e) {
                   var t = 0,
                       i = 0,
                       s = 0,
                       a = 0;
                   return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
                       spinX: t,
                       spinY: i,
                       pixelX: s,
                       pixelY: a
                   }
               },
               handleMouseEnter: function() {
                   this.mouseEntered = !0
               },
               handleMouseLeave: function() {
                   this.mouseEntered = !1
               },
               handle: function(e) {
                   var t = e,
                       i = this,
                       a = i.params.mousewheel;
                   i.params.cssMode && t.preventDefault();
                   var r = i.$el;
                   if ("container" !== i.params.mousewheel.eventsTarged && (r = s(i.params.mousewheel.eventsTarged)), !i.mouseEntered && !r[0].contains(t.target) && !a.releaseOnEdges) return !0;
                   t.originalEvent && (t = t.originalEvent);
                   var o = 0,
                       l = i.rtlTranslate ? -1 : 1,
                       d = ie.normalize(t);
                   if (a.forceToAxis)
                       if (i.isHorizontal()) {
                           if (!(Math.abs(d.pixelX) > Math.abs(d.pixelY))) return !0;
                           o = d.pixelX * l
                       } else {
                           if (!(Math.abs(d.pixelY) > Math.abs(d.pixelX))) return !0;
                           o = d.pixelY
                       }
                   else o = Math.abs(d.pixelX) > Math.abs(d.pixelY) ? -d.pixelX * l : -d.pixelY;
                   if (0 === o) return !0;
                   if (a.invert && (o = -o), i.params.freeMode) {
                       var h = {
                               time: n.now(),
                               delta: Math.abs(o),
                               direction: Math.sign(o)
                           },
                           p = i.mousewheel.lastEventBeforeSnap,
                           c = p && h.time < p.time + 500 && h.delta <= p.delta && h.direction === p.direction;
                       if (!c) {
                           i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
                           var u = i.getTranslate() + o * a.sensitivity,
                               v = i.isBeginning,
                               f = i.isEnd;
                           if (u >= i.minTranslate() && (u = i.minTranslate()), u <= i.maxTranslate() && (u = i.maxTranslate()), i.setTransition(0), i.setTranslate(u), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!v && i.isBeginning || !f && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
                               clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
                               var m = i.mousewheel.recentWheelEvents;
                               m.length >= 15 && m.shift();
                               var g = m.length ? m[m.length - 1] : void 0,
                                   b = m[0];
                               if (m.push(h), g && (h.delta > g.delta || h.direction !== g.direction)) m.splice(0);
                               else if (m.length >= 15 && h.time - b.time < 500 && b.delta - h.delta >= 1 && h.delta <= 6) {
                                   var w = o > 0 ? .8 : .2;
                                   i.mousewheel.lastEventBeforeSnap = h, m.splice(0), i.mousewheel.timeout = n.nextTick((function() {
                                       i.slideToClosest(i.params.speed, !0, void 0, w)
                                   }), 0)
                               }
                               i.mousewheel.timeout || (i.mousewheel.timeout = n.nextTick((function() {
                                   i.mousewheel.lastEventBeforeSnap = h, m.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5)
                               }), 500))
                           }
                           if (c || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), u === i.minTranslate() || u === i.maxTranslate()) return !0
                       }
                   } else {
                       var y = {
                               time: n.now(),
                               delta: Math.abs(o),
                               direction: Math.sign(o),
                               raw: e
                           },
                           x = i.mousewheel.recentWheelEvents;
                       x.length >= 2 && x.shift();
                       var T = x.length ? x[x.length - 1] : void 0;
                       if (x.push(y), T ? (y.direction !== T.direction || y.delta > T.delta) && i.mousewheel.animateSlider(y) : i.mousewheel.animateSlider(y), i.mousewheel.releaseScroll(y)) return !0
                   }
                   return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
               },
               animateSlider: function(e) {
                   return e.delta >= 6 && n.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = (new t.Date).getTime(), !1)
               },
               releaseScroll: function(e) {
                   var t = this.params.mousewheel;
                   if (e.direction < 0) {
                       if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0
                   } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
                   return !1
               },
               enable: function() {
                   var e = ie.event();
                   if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
                   if (!e) return !1;
                   if (this.mousewheel.enabled) return !1;
                   var t = this.$el;
                   return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
               },
               disable: function() {
                   var e = ie.event();
                   if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
                   if (!e) return !1;
                   if (!this.mousewheel.enabled) return !1;
                   var t = this.$el;
                   return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
               }
           },
           se = {
               update: function() {
                   var e = this.params.navigation;
                   if (!this.params.loop) {
                       var t = this.navigation,
                           i = t.$nextEl,
                           s = t.$prevEl;
                       s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
                   }
               },
               onPrevClick: function(e) {
                   e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
               },
               onNextClick: function(e) {
                   e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
               },
               init: function() {
                   var e, t, i = this.params.navigation;
                   (i.nextEl || i.prevEl) && (i.nextEl && (e = s(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = s(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), n.extend(this.navigation, {
                       $nextEl: e,
                       nextEl: e && e[0],
                       $prevEl: t,
                       prevEl: t && t[0]
                   }))
               },
               destroy: function() {
                   var e = this.navigation,
                       t = e.$nextEl,
                       i = e.$prevEl;
                   t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass))
               }
           },
           ae = {
               update: function() {
                   var e = this.rtl,
                       t = this.params.pagination;
                   if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                       var i, a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                           r = this.pagination.$el,
                           n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                       if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                           var o, l, d, h = this.pagination.bullets;
                           if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), r.length > 1) h.each((function(e, a) {
                               var r = s(a),
                                   n = r.index();
                               n === i && r.addClass(t.bulletActiveClass), t.dynamicBullets && (n >= o && n <= l && r.addClass(t.bulletActiveClass + "-main"), n === o && r.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), n === l && r.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
                           }));
                           else {
                               var p = h.eq(i),
                                   c = p.index();
                               if (p.addClass(t.bulletActiveClass), t.dynamicBullets) {
                                   for (var u = h.eq(o), v = h.eq(l), f = o; f <= l; f += 1) h.eq(f).addClass(t.bulletActiveClass + "-main");
                                   if (this.params.loop)
                                       if (c >= h.length - t.dynamicMainBullets) {
                                           for (var m = t.dynamicMainBullets; m >= 0; m -= 1) h.eq(h.length - m).addClass(t.bulletActiveClass + "-main");
                                           h.eq(h.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev")
                                       } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                                   else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
                               }
                           }
                           if (t.dynamicBullets) {
                               var g = Math.min(h.length, t.dynamicMainBullets + 4),
                                   b = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
                                   w = e ? "right" : "left";
                               h.css(this.isHorizontal() ? w : "top", b + "px")
                           }
                       }
                       if ("fraction" === t.type && (r.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), r.find("." + t.totalClass).text(t.formatFractionTotal(n))), "progressbar" === t.type) {
                           var y;
                           y = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                           var x = (i + 1) / n,
                               T = 1,
                               E = 1;
                           "horizontal" === y ? T = x : E = x, r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + E + ")").transition(this.params.speed)
                       }
                       "custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)), this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
                   }
               },
               render: function() {
                   var e = this.params.pagination;
                   if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                       var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                           i = this.pagination.$el,
                           s = "";
                       if ("bullets" === e.type) {
                           for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                           i.html(s), this.pagination.bullets = i.find("." + e.bulletClass)
                       }
                       "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
                   }
               },
               init: function() {
                   var e = this,
                       t = e.params.pagination;
                   if (t.el) {
                       var i = s(t.el);
                       0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, (function(t) {
                           t.preventDefault();
                           var i = s(this).index() * e.params.slidesPerGroup;
                           e.params.loop && (i += e.loopedSlides), e.slideTo(i)
                       })), n.extend(e.pagination, {
                           $el: i,
                           el: i[0]
                       }))
                   }
               },
               destroy: function() {
                   var e = this.params.pagination;
                   if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                       var t = this.pagination.$el;
                       t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
                   }
               }
           },
           re = {
               setTranslate: function() {
                   if (this.params.scrollbar.el && this.scrollbar.el) {
                       var e = this.scrollbar,
                           t = this.rtlTranslate,
                           i = this.progress,
                           s = e.dragSize,
                           a = e.trackSize,
                           r = e.$dragEl,
                           n = e.$el,
                           o = this.params.scrollbar,
                           l = s,
                           d = (a - s) * i;
                       t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"), r[0].style.width = l + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout((function() {
                           n[0].style.opacity = 0, n.transition(400)
                       }), 1e3))
                   }
               },
               setTransition: function(e) {
                   this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
               },
               updateSize: function() {
                   if (this.params.scrollbar.el && this.scrollbar.el) {
                       var e = this.scrollbar,
                           t = e.$dragEl,
                           i = e.$el;
                       t[0].style.width = "", t[0].style.height = "";
                       var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                           r = this.size / this.virtualSize,
                           o = r * (a / this.size);
                       s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), n.extend(e, {
                           trackSize: a,
                           divider: r,
                           moveDivider: o,
                           dragSize: s
                       }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
                   }
               },
               getPointerPosition: function(e) {
                   return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
               },
               setDragPosition: function(e) {
                   var t, i = this.scrollbar,
                       s = this.rtlTranslate,
                       a = i.$el,
                       r = i.dragSize,
                       n = i.trackSize,
                       o = i.dragStartPos;
                   t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
                   var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
                   this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses()
               },
               onDragStart: function(e) {
                   var t = this.params.scrollbar,
                       i = this.scrollbar,
                       s = this.$wrapperEl,
                       a = i.$el,
                       r = i.$dragEl;
                   this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e)
               },
               onDragMove: function(e) {
                   var t = this.scrollbar,
                       i = this.$wrapperEl,
                       s = t.$el,
                       a = t.$dragEl;
                   this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e))
               },
               onDragEnd: function(e) {
                   var t = this.params.scrollbar,
                       i = this.scrollbar,
                       s = this.$wrapperEl,
                       a = i.$el;
                   this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = n.nextTick((function() {
                       a.css("opacity", 0), a.transition(400)
                   }), 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
               },
               enableDraggable: function() {
                   if (this.params.scrollbar.el) {
                       var t = this.scrollbar,
                           i = this.touchEventsTouch,
                           s = this.touchEventsDesktop,
                           a = this.params,
                           r = t.$el[0],
                           n = !(!o.passiveListener || !a.passiveListeners) && {
                               passive: !1,
                               capture: !1
                           },
                           l = !(!o.passiveListener || !a.passiveListeners) && {
                               passive: !0,
                               capture: !1
                           };
                       o.touch ? (r.addEventListener(i.start, this.scrollbar.onDragStart, n), r.addEventListener(i.move, this.scrollbar.onDragMove, n), r.addEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), e.addEventListener(s.move, this.scrollbar.onDragMove, n), e.addEventListener(s.end, this.scrollbar.onDragEnd, l))
                   }
               },
               disableDraggable: function() {
                   if (this.params.scrollbar.el) {
                       var t = this.scrollbar,
                           i = this.touchEventsTouch,
                           s = this.touchEventsDesktop,
                           a = this.params,
                           r = t.$el[0],
                           n = !(!o.passiveListener || !a.passiveListeners) && {
                               passive: !1,
                               capture: !1
                           },
                           l = !(!o.passiveListener || !a.passiveListeners) && {
                               passive: !0,
                               capture: !1
                           };
                       o.touch ? (r.removeEventListener(i.start, this.scrollbar.onDragStart, n), r.removeEventListener(i.move, this.scrollbar.onDragMove, n), r.removeEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), e.removeEventListener(s.move, this.scrollbar.onDragMove, n), e.removeEventListener(s.end, this.scrollbar.onDragEnd, l))
                   }
               },
               init: function() {
                   if (this.params.scrollbar.el) {
                       var e = this.scrollbar,
                           t = this.$el,
                           i = this.params.scrollbar,
                           a = s(i.el);
                       this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el));
                       var r = a.find("." + this.params.scrollbar.dragClass);
                       0 === r.length && (r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'), a.append(r)), n.extend(e, {
                           $el: a,
                           el: a[0],
                           $dragEl: r,
                           dragEl: r[0]
                       }), i.draggable && e.enableDraggable()
                   }
               },
               destroy: function() {
                   this.scrollbar.disableDraggable()
               }
           },
           ne = {
               setTransform: function(e, t) {
                   var i = this.rtl,
                       a = s(e),
                       r = i ? -1 : 1,
                       n = a.attr("data-swiper-parallax") || "0",
                       o = a.attr("data-swiper-parallax-x"),
                       l = a.attr("data-swiper-parallax-y"),
                       d = a.attr("data-swiper-parallax-scale"),
                       h = a.attr("data-swiper-parallax-opacity");
                   if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = n, l = "0") : (l = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != h) {
                       var p = h - (h - 1) * (1 - Math.abs(t));
                       a[0].style.opacity = p
                   }
                   if (null == d) a.transform("translate3d(" + o + ", " + l + ", 0px)");
                   else {
                       var c = d - (d - 1) * (1 - Math.abs(t));
                       a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")")
                   }
               },
               setTranslate: function() {
                   var e = this,
                       t = e.$el,
                       i = e.slides,
                       a = e.progress,
                       r = e.snapGrid;
                   t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                       e.parallax.setTransform(i, a)
                   })), i.each((function(t, i) {
                       var n = i.progress;
                       e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                           e.parallax.setTransform(i, n)
                       }))
                   }))
               },
               setTransition: function(e) {
                   void 0 === e && (e = this.params.speed);
                   this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                       var a = s(i),
                           r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                       0 === e && (r = 0), a.transition(r)
                   }))
               }
           },
           oe = {
               getDistanceBetweenTouches: function(e) {
                   if (e.targetTouches.length < 2) return 1;
                   var t = e.targetTouches[0].pageX,
                       i = e.targetTouches[0].pageY,
                       s = e.targetTouches[1].pageX,
                       a = e.targetTouches[1].pageY;
                   return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
               },
               onGestureStart: function(e) {
                   var t = this.params.zoom,
                       i = this.zoom,
                       a = i.gesture;
                   if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !o.gestures) {
                       if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                       i.fakeGestureTouched = !0, a.scaleStart = oe.getDistanceBetweenTouches(e)
                   }
                   a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest("." + this.params.slideClass), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0
               },
               onGestureChange: function(e) {
                   var t = this.params.zoom,
                       i = this.zoom,
                       s = i.gesture;
                   if (!o.gestures) {
                       if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                       i.fakeGestureMoved = !0, s.scaleMove = oe.getDistanceBetweenTouches(e)
                   }
                   s.$imageEl && 0 !== s.$imageEl.length && (o.gestures ? i.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
               },
               onGestureEnd: function(e) {
                   var t = this.params.zoom,
                       i = this.zoom,
                       s = i.gesture;
                   if (!o.gestures) {
                       if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                       if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !I.android) return;
                       i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                   }
                   s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
               },
               onTouchStart: function(e) {
                   var t = this.zoom,
                       i = t.gesture,
                       s = t.image;
                   i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (I.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
               },
               onTouchMove: function(e) {
                   var t = this.zoom,
                       i = t.gesture,
                       s = t.image,
                       a = t.velocity;
                   if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
                       s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = n.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = n.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                       var r = s.width * t.scale,
                           o = s.height * t.scale;
                       if (!(r < i.slideWidth && o < i.slideHeight)) {
                           if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
                               if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
                               if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
                           }
                           e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                       }
                   }
               },
               onTouchEnd: function() {
                   var e = this.zoom,
                       t = e.gesture,
                       i = e.image,
                       s = e.velocity;
                   if (t.$imageEl && 0 !== t.$imageEl.length) {
                       if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                       i.isTouched = !1, i.isMoved = !1;
                       var a = 300,
                           r = 300,
                           n = s.x * a,
                           o = i.currentX + n,
                           l = s.y * r,
                           d = i.currentY + l;
                       0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                       var h = Math.max(a, r);
                       i.currentX = o, i.currentY = d;
                       var p = i.width * e.scale,
                           c = i.height * e.scale;
                       i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                   }
               },
               onTransitionEnd: function() {
                   var e = this.zoom,
                       t = e.gesture;
                   t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
               },
               toggle: function(e) {
                   var t = this.zoom;
                   t.scale && 1 !== t.scale ? t.out() : t.in(e)
               },
               in: function(e) {
                   var t, i, s, a, r, n, o, l, d, h, p, c, u, v, f, m, g = this.zoom,
                       b = this.params.zoom,
                       w = g.gesture,
                       y = g.image;
                   (w.$slideEl || (w.$slideEl = this.slides.eq(this.activeIndex), w.$imageEl = w.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass)), w.$imageEl && 0 !== w.$imageEl.length) && (w.$slideEl.addClass("" + b.zoomedSlideClass), void 0 === y.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = y.touchesStart.x, i = y.touchesStart.y), g.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, g.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, e ? (f = w.$slideEl[0].offsetWidth, m = w.$slideEl[0].offsetHeight, s = w.$slideEl.offset().left + f / 2 - t, a = w.$slideEl.offset().top + m / 2 - i, o = w.$imageEl[0].offsetWidth, l = w.$imageEl[0].offsetHeight, d = o * g.scale, h = l * g.scale, u = -(p = Math.min(f / 2 - d / 2, 0)), v = -(c = Math.min(m / 2 - h / 2, 0)), (r = s * g.scale) < p && (r = p), r > u && (r = u), (n = a * g.scale) < c && (n = c), n > v && (n = v)) : (r = 0, n = 0), w.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"))
               },
               out: function() {
                   var e = this.zoom,
                       t = this.params.zoom,
                       i = e.gesture;
                   i.$slideEl || (i.$slideEl = this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
               },
               enable: function() {
                   var e = this.zoom;
                   if (!e.enabled) {
                       e.enabled = !0;
                       var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
                               passive: !0,
                               capture: !1
                           },
                           i = !o.passiveListener || {
                               passive: !1,
                               capture: !0
                           },
                           s = "." + this.params.slideClass;
                       o.gestures ? (this.$wrapperEl.on("gesturestart", s, e.onGestureStart, t), this.$wrapperEl.on("gesturechange", s, e.onGestureChange, t), this.$wrapperEl.on("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, s, e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, s, e.onGestureChange, i), this.$wrapperEl.on(this.touchEvents.end, s, e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, s, e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
                   }
               },
               disable: function() {
                   var e = this.zoom;
                   if (e.enabled) {
                       this.zoom.enabled = !1;
                       var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
                               passive: !0,
                               capture: !1
                           },
                           i = !o.passiveListener || {
                               passive: !1,
                               capture: !0
                           },
                           s = "." + this.params.slideClass;
                       o.gestures ? (this.$wrapperEl.off("gesturestart", s, e.onGestureStart, t), this.$wrapperEl.off("gesturechange", s, e.onGestureChange, t), this.$wrapperEl.off("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, s, e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, s, e.onGestureChange, i), this.$wrapperEl.off(this.touchEvents.end, s, e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, s, e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
                   }
               }
           },
           le = {
               loadInSlide: function(e, t) {
                   void 0 === t && (t = !0);
                   var i = this,
                       a = i.params.lazy;
                   if (void 0 !== e && 0 !== i.slides.length) {
                       var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
                           n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
                       !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each((function(e, n) {
                           var o = s(n);
                           o.addClass(a.loadingClass);
                           var l = o.attr("data-background"),
                               d = o.attr("data-src"),
                               h = o.attr("data-srcset"),
                               p = o.attr("data-sizes");
                           i.loadImage(o[0], d || l, h, p, !1, (function() {
                               if (null != i && i && (!i || i.params) && !i.destroyed) {
                                   if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(a.loadedClass).removeClass(a.loadingClass), r.find("." + a.preloaderClass).remove(), i.params.loop && t) {
                                       var e = r.attr("data-swiper-slide-index");
                                       if (r.hasClass(i.params.slideDuplicateClass)) {
                                           var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                           i.lazy.loadInSlide(s.index(), !1)
                                       } else {
                                           var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                           i.lazy.loadInSlide(n.index(), !1)
                                       }
                                   }
                                   i.emit("lazyImageReady", r[0], o[0]), i.params.autoHeight && i.updateAutoHeight()
                               }
                           })), i.emit("lazyImageLoad", r[0], o[0])
                       }))
                   }
               },
               load: function() {
                   var e = this,
                       t = e.$wrapperEl,
                       i = e.params,
                       a = e.slides,
                       r = e.activeIndex,
                       n = e.virtual && i.virtual.enabled,
                       o = i.lazy,
                       l = i.slidesPerView;
   
                   function d(e) {
                       if (n) {
                           if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                       } else if (a[e]) return !0;
                       return !1
                   }
   
                   function h(e) {
                       return n ? s(e).attr("data-swiper-slide-index") : s(e).index()
                   }
                   if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each((function(t, i) {
                       var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
                       e.lazy.loadInSlide(a)
                   }));
                   else if (l > 1)
                       for (var p = r; p < r + l; p += 1) d(p) && e.lazy.loadInSlide(p);
                   else e.lazy.loadInSlide(r);
                   if (o.loadPrevNext)
                       if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                           for (var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; m < v; m += 1) d(m) && e.lazy.loadInSlide(m);
                           for (var g = f; g < r; g += 1) d(g) && e.lazy.loadInSlide(g)
                       } else {
                           var b = t.children("." + i.slideNextClass);
                           b.length > 0 && e.lazy.loadInSlide(h(b));
                           var w = t.children("." + i.slidePrevClass);
                           w.length > 0 && e.lazy.loadInSlide(h(w))
                       }
               }
           },
           de = {
               LinearSpline: function(e, t) {
                   var i, s, a, r, n, o = function(e, t) {
                       for (s = -1, i = e.length; i - s > 1;) e[a = i + s >> 1] <= t ? s = a : i = a;
                       return i
                   };
                   return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                       return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
                   }, this
               },
               getInterpolateFunction: function(e) {
                   this.controller.spline || (this.controller.spline = this.params.loop ? new de.LinearSpline(this.slidesGrid, e.slidesGrid) : new de.LinearSpline(this.snapGrid, e.snapGrid))
               },
               setTranslate: function(e, t) {
                   var i, s, a = this,
                       r = a.controller.control;
   
                   function n(e) {
                       var t = a.rtlTranslate ? -a.translate : a.translate;
                       "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses()
                   }
                   if (Array.isArray(r))
                       for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof W && n(r[o]);
                   else r instanceof W && t !== r && n(r)
               },
               setTransition: function(e, t) {
                   var i, s = this,
                       a = s.controller.control;
   
                   function r(t) {
                       t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && n.nextTick((function() {
                           t.updateAutoHeight()
                       })), t.$wrapperEl.transitionEnd((function() {
                           a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd())
                       })))
                   }
                   if (Array.isArray(a))
                       for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof W && r(a[i]);
                   else a instanceof W && t !== a && r(a)
               }
           },
           he = {
               makeElFocusable: function(e) {
                   return e.attr("tabIndex", "0"), e
               },
               addElRole: function(e, t) {
                   return e.attr("role", t), e
               },
               addElLabel: function(e, t) {
                   return e.attr("aria-label", t), e
               },
               disableEl: function(e) {
                   return e.attr("aria-disabled", !0), e
               },
               enableEl: function(e) {
                   return e.attr("aria-disabled", !1), e
               },
               onEnterKey: function(e) {
                   var t = this.params.a11y;
                   if (13 === e.keyCode) {
                       var i = s(e.target);
                       this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
                   }
               },
               notify: function(e) {
                   var t = this.a11y.liveRegion;
                   0 !== t.length && (t.html(""), t.html(e))
               },
               updateNavigation: function() {
                   if (!this.params.loop && this.navigation) {
                       var e = this.navigation,
                           t = e.$nextEl,
                           i = e.$prevEl;
                       i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
                   }
               },
               updatePagination: function() {
                   var e = this,
                       t = e.params.a11y;
                   e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function(i, a) {
                       var r = s(a);
                       e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
                   }))
               },
               init: function() {
                   this.$el.append(this.a11y.liveRegion);
                   var e, t, i = this.params.a11y;
                   this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
               },
               destroy: function() {
                   var e, t;
                   this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
               }
           },
           pe = {
               init: function() {
                   if (this.params.history) {
                       if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
                       var e = this.history;
                       e.initialized = !0, e.paths = pe.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState))
                   }
               },
               destroy: function() {
                   this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState)
               },
               setHistoryPopState: function() {
                   this.history.paths = pe.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
               },
               getPathValues: function() {
                   var e = t.location.pathname.slice(1).split("/").filter((function(e) {
                           return "" !== e
                       })),
                       i = e.length;
                   return {
                       key: e[i - 2],
                       value: e[i - 1]
                   }
               },
               setHistory: function(e, i) {
                   if (this.history.initialized && this.params.history.enabled) {
                       var s = this.slides.eq(i),
                           a = pe.slugify(s.attr("data-history"));
                       t.location.pathname.includes(e) || (a = e + "/" + a);
                       var r = t.history.state;
                       r && r.value === a || (this.params.history.replaceState ? t.history.replaceState({
                           value: a
                       }, null, a) : t.history.pushState({
                           value: a
                       }, null, a))
                   }
               },
               slugify: function(e) {
                   return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
               },
               scrollToSlide: function(e, t, i) {
                   if (t)
                       for (var s = 0, a = this.slides.length; s < a; s += 1) {
                           var r = this.slides.eq(s);
                           if (pe.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                               var n = r.index();
                               this.slideTo(n, e, i)
                           }
                       } else this.slideTo(0, e, i)
               }
           },
           ce = {
               onHashCange: function() {
                   var t = e.location.hash.replace("#", "");
                   if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                       var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
                       if (void 0 === i) return;
                       this.slideTo(i)
                   }
               },
               setHash: function() {
                   if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                       if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
                       else {
                           var i = this.slides.eq(this.activeIndex),
                               s = i.attr("data-hash") || i.attr("data-history");
                           e.location.hash = s || ""
                       }
               },
               init: function() {
                   if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                       this.hashNavigation.initialized = !0;
                       var i = e.location.hash.replace("#", "");
                       if (i)
                           for (var a = 0, r = this.slides.length; a < r; a += 1) {
                               var n = this.slides.eq(a);
                               if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
                                   var o = n.index();
                                   this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
                               }
                           }
                       this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange)
                   }
               },
               destroy: function() {
                   this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange)
               }
           },
           ue = {
               run: function() {
                   var e = this,
                       t = e.slides.eq(e.activeIndex),
                       i = e.params.autoplay.delay;
                   t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = n.nextTick((function() {
                       e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run()
                   }), i)
               },
               start: function() {
                   return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
               },
               stop: function() {
                   return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0))
               },
               pause: function(e) {
                   this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
               }
           },
           ve = {
               setTranslate: function() {
                   for (var e = this.slides, t = 0; t < e.length; t += 1) {
                       var i = this.slides.eq(t),
                           s = -i[0].swiperSlideOffset;
                       this.params.virtualTranslate || (s -= this.translate);
                       var a = 0;
                       this.isHorizontal() || (a = s, s = 0);
                       var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                       i.css({
                           opacity: r
                       }).transform("translate3d(" + s + "px, " + a + "px, 0px)")
                   }
               },
               setTransition: function(e) {
                   var t = this,
                       i = t.slides,
                       s = t.$wrapperEl;
                   if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                       var a = !1;
                       i.transitionEnd((function() {
                           if (!a && t && !t.destroyed) {
                               a = !0, t.animating = !1;
                               for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i])
                           }
                       }))
                   }
               }
           },
           fe = {
               setTranslate: function() {
                   var e, t = this.$el,
                       i = this.$wrapperEl,
                       a = this.slides,
                       r = this.width,
                       n = this.height,
                       o = this.rtlTranslate,
                       l = this.size,
                       d = this.params.cubeEffect,
                       h = this.isHorizontal(),
                       p = this.virtual && this.params.virtual.enabled,
                       c = 0;
                   d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
                       height: r + "px"
                   })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), t.append(e)));
                   for (var u = 0; u < a.length; u += 1) {
                       var v = a.eq(u),
                           f = u;
                       p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                       var m = 90 * f,
                           g = Math.floor(m / 360);
                       o && (m = -m, g = Math.floor(-m / 360));
                       var b = Math.max(Math.min(v[0].progress, 1), -1),
                           w = 0,
                           y = 0,
                           x = 0;
                       f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, w = 0);
                       var T = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                       if (b <= 1 && b > -1 && (c = 90 * f + 90 * b, o && (c = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
                           var E = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                               S = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                           0 === E.length && (E = s('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0))
                       }
                   }
                   if (i.css({
                           "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                           "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                           "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                           "transform-origin": "50% 50% -" + l / 2 + "px"
                       }), d.shadow)
                       if (h) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                       else {
                           var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                               M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
                               P = d.shadowScale,
                               z = d.shadowScale / M,
                               k = d.shadowOffset;
                           e.transform("scale3d(" + P + ", 1, " + z + ") translate3d(0px, " + (n / 2 + k) + "px, " + -n / 2 / z + "px) rotateX(-90deg)")
                       } var $ = j.isSafari || j.isUiWebView ? -l / 2 : 0;
                   i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)")
               },
               setTransition: function(e) {
                   var t = this.$el;
                   this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
               }
           },
           me = {
               setTranslate: function() {
                   for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                       var a = e.eq(i),
                           r = a[0].progress;
                       this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
                       var n = -180 * r,
                           o = 0,
                           l = -a[0].swiperSlideOffset,
                           d = 0;
                       if (this.isHorizontal() ? t && (n = -n) : (d = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, this.params.flipEffect.slideShadows) {
                           var h = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                               p = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                           0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), a.append(h)), 0 === p.length && (p = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(p)), h.length && (h[0].style.opacity = Math.max(-r, 0)), p.length && (p[0].style.opacity = Math.max(r, 0))
                       }
                       a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
                   }
               },
               setTransition: function(e) {
                   var t = this,
                       i = t.slides,
                       s = t.activeIndex,
                       a = t.$wrapperEl;
                   if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                       var r = !1;
                       i.eq(s).transitionEnd((function() {
                           if (!r && t && !t.destroyed) {
                               r = !0, t.animating = !1;
                               for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i])
                           }
                       }))
                   }
               }
           },
           ge = {
               setTranslate: function() {
                   for (var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, l = this.isHorizontal(), d = this.translate, h = l ? e / 2 - d : t / 2 - d, p = l ? n.rotate : -n.rotate, c = n.depth, u = 0, v = i.length; u < v; u += 1) {
                       var f = i.eq(u),
                           m = r[u],
                           g = (h - f[0].swiperSlideOffset - m / 2) / m * n.modifier,
                           b = l ? p * g : 0,
                           w = l ? 0 : p * g,
                           y = -c * Math.abs(g),
                           x = n.stretch;
                       "string" == typeof x && -1 !== x.indexOf("%") && (x = parseFloat(n.stretch) / 100 * m);
                       var T = l ? 0 : x * g,
                           E = l ? x * g : 0;
                       Math.abs(E) < .001 && (E = 0), Math.abs(T) < .001 && (T = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0);
                       var S = "translate3d(" + E + "px," + T + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
                       if (f.transform(S), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), n.slideShadows) {
                           var C = l ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                               M = l ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                           0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), f.append(C)), 0 === M.length && (M = s('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), f.append(M)), C.length && (C[0].style.opacity = g > 0 ? g : 0), M.length && (M[0].style.opacity = -g > 0 ? -g : 0)
                       }
                   }(o.pointerEvents || o.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = h + "px 50%")
               },
               setTransition: function(e) {
                   this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
               }
           },
           be = {
               init: function() {
                   var e = this.params.thumbs,
                       t = this.constructor;
                   e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, n.extend(this.thumbs.swiper.originalParams, {
                       watchSlidesProgress: !0,
                       slideToClickedSlide: !1
                   }), n.extend(this.thumbs.swiper.params, {
                       watchSlidesProgress: !0,
                       slideToClickedSlide: !1
                   })) : n.isObject(e.swiper) && (this.thumbs.swiper = new t(n.extend({}, e.swiper, {
                       watchSlidesVisibility: !0,
                       watchSlidesProgress: !0,
                       slideToClickedSlide: !1
                   })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
               },
               onThumbClick: function() {
                   var e = this.thumbs.swiper;
                   if (e) {
                       var t = e.clickedIndex,
                           i = e.clickedSlide;
                       if (!(i && s(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
                           var a;
                           if (a = e.params.loop ? parseInt(s(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
                               var r = this.activeIndex;
                               this.slides.eq(r).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, r = this.activeIndex);
                               var n = this.slides.eq(r).prevAll('[data-swiper-slide-index="' + a + '"]').eq(0).index(),
                                   o = this.slides.eq(r).nextAll('[data-swiper-slide-index="' + a + '"]').eq(0).index();
                               a = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n
                           }
                           this.slideTo(a)
                       }
                   }
               },
               update: function(e) {
                   var t = this.thumbs.swiper;
                   if (t) {
                       var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView;
                       if (this.realIndex !== t.realIndex) {
                           var s, a = t.activeIndex;
                           if (t.params.loop) {
                               t.slides.eq(a).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, a = t.activeIndex);
                               var r = t.slides.eq(a).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                                   n = t.slides.eq(a).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                               s = void 0 === r ? n : void 0 === n ? r : n - a == a - r ? a : n - a < a - r ? n : r
                           } else s = this.realIndex;
                           t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(s) < 0 && (t.params.centeredSlides ? s = s > a ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : s > a && (s = s - i + 1), t.slideTo(s, e ? 0 : void 0))
                       }
                       var o = 1,
                           l = this.params.thumbs.slideThumbActiveClass;
                       if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (o = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (o = 1), o = Math.floor(o), t.slides.removeClass(l), t.params.loop || t.params.virtual && t.params.virtual.enabled)
                           for (var d = 0; d < o; d += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + d) + '"]').addClass(l);
                       else
                           for (var h = 0; h < o; h += 1) t.slides.eq(this.realIndex + h).addClass(l)
                   }
               }
           },
           we = [R, q, K, U, Z, J, te, {
               name: "mousewheel",
               params: {
                   mousewheel: {
                       enabled: !1,
                       releaseOnEdges: !1,
                       invert: !1,
                       forceToAxis: !1,
                       sensitivity: 1,
                       eventsTarged: "container"
                   }
               },
               create: function() {
                   n.extend(this, {
                       mousewheel: {
                           enabled: !1,
                           enable: ie.enable.bind(this),
                           disable: ie.disable.bind(this),
                           handle: ie.handle.bind(this),
                           handleMouseEnter: ie.handleMouseEnter.bind(this),
                           handleMouseLeave: ie.handleMouseLeave.bind(this),
                           animateSlider: ie.animateSlider.bind(this),
                           releaseScroll: ie.releaseScroll.bind(this),
                           lastScrollTime: n.now(),
                           lastEventBeforeSnap: void 0,
                           recentWheelEvents: []
                       }
                   })
               },
               on: {
                   init: function() {
                       !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), this.params.mousewheel.enabled && this.mousewheel.enable()
                   },
                   destroy: function() {
                       this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable()
                   }
               }
           }, {
               name: "navigation",
               params: {
                   navigation: {
                       nextEl: null,
                       prevEl: null,
                       hideOnClick: !1,
                       disabledClass: "swiper-button-disabled",
                       hiddenClass: "swiper-button-hidden",
                       lockClass: "swiper-button-lock"
                   }
               },
               create: function() {
                   n.extend(this, {
                       navigation: {
                           init: se.init.bind(this),
                           update: se.update.bind(this),
                           destroy: se.destroy.bind(this),
                           onNextClick: se.onNextClick.bind(this),
                           onPrevClick: se.onPrevClick.bind(this)
                       }
                   })
               },
               on: {
                   init: function() {
                       this.navigation.init(), this.navigation.update()
                   },
                   toEdge: function() {
                       this.navigation.update()
                   },
                   fromEdge: function() {
                       this.navigation.update()
                   },
                   destroy: function() {
                       this.navigation.destroy()
                   },
                   click: function(e) {
                       var t, i = this.navigation,
                           a = i.$nextEl,
                           r = i.$prevEl;
                       !this.params.navigation.hideOnClick || s(e.target).is(r) || s(e.target).is(a) || (a ? t = a.hasClass(this.params.navigation.hiddenClass) : r && (t = r.hasClass(this.params.navigation.hiddenClass)), !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this), a && a.toggleClass(this.params.navigation.hiddenClass), r && r.toggleClass(this.params.navigation.hiddenClass))
                   }
               }
           }, {
               name: "pagination",
               params: {
                   pagination: {
                       el: null,
                       bulletElement: "span",
                       clickable: !1,
                       hideOnClick: !1,
                       renderBullet: null,
                       renderProgressbar: null,
                       renderFraction: null,
                       renderCustom: null,
                       progressbarOpposite: !1,
                       type: "bullets",
                       dynamicBullets: !1,
                       dynamicMainBullets: 1,
                       formatFractionCurrent: function(e) {
                           return e
                       },
                       formatFractionTotal: function(e) {
                           return e
                       },
                       bulletClass: "swiper-pagination-bullet",
                       bulletActiveClass: "swiper-pagination-bullet-active",
                       modifierClass: "swiper-pagination-",
                       currentClass: "swiper-pagination-current",
                       totalClass: "swiper-pagination-total",
                       hiddenClass: "swiper-pagination-hidden",
                       progressbarFillClass: "swiper-pagination-progressbar-fill",
                       progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                       clickableClass: "swiper-pagination-clickable",
                       lockClass: "swiper-pagination-lock"
                   }
               },
               create: function() {
                   n.extend(this, {
                       pagination: {
                           init: ae.init.bind(this),
                           render: ae.render.bind(this),
                           update: ae.update.bind(this),
                           destroy: ae.destroy.bind(this),
                           dynamicBulletIndex: 0
                       }
                   })
               },
               on: {
                   init: function() {
                       this.pagination.init(), this.pagination.render(), this.pagination.update()
                   },
                   activeIndexChange: function() {
                       this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
                   },
                   snapIndexChange: function() {
                       this.params.loop || this.pagination.update()
                   },
                   slidesLengthChange: function() {
                       this.params.loop && (this.pagination.render(), this.pagination.update())
                   },
                   snapGridLengthChange: function() {
                       this.params.loop || (this.pagination.render(), this.pagination.update())
                   },
                   destroy: function() {
                       this.pagination.destroy()
                   },
                   click: function(e) {
                       this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
                   }
               }
           }, {
               name: "scrollbar",
               params: {
                   scrollbar: {
                       el: null,
                       dragSize: "auto",
                       hide: !1,
                       draggable: !1,
                       snapOnRelease: !0,
                       lockClass: "swiper-scrollbar-lock",
                       dragClass: "swiper-scrollbar-drag"
                   }
               },
               create: function() {
                   n.extend(this, {
                       scrollbar: {
                           init: re.init.bind(this),
                           destroy: re.destroy.bind(this),
                           updateSize: re.updateSize.bind(this),
                           setTranslate: re.setTranslate.bind(this),
                           setTransition: re.setTransition.bind(this),
                           enableDraggable: re.enableDraggable.bind(this),
                           disableDraggable: re.disableDraggable.bind(this),
                           setDragPosition: re.setDragPosition.bind(this),
                           getPointerPosition: re.getPointerPosition.bind(this),
                           onDragStart: re.onDragStart.bind(this),
                           onDragMove: re.onDragMove.bind(this),
                           onDragEnd: re.onDragEnd.bind(this),
                           isTouched: !1,
                           timeout: null,
                           dragTimeout: null
                       }
                   })
               },
               on: {
                   init: function() {
                       this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                   },
                   update: function() {
                       this.scrollbar.updateSize()
                   },
                   resize: function() {
                       this.scrollbar.updateSize()
                   },
                   observerUpdate: function() {
                       this.scrollbar.updateSize()
                   },
                   setTranslate: function() {
                       this.scrollbar.setTranslate()
                   },
                   setTransition: function(e) {
                       this.scrollbar.setTransition(e)
                   },
                   destroy: function() {
                       this.scrollbar.destroy()
                   }
               }
           }, {
               name: "parallax",
               params: {
                   parallax: {
                       enabled: !1
                   }
               },
               create: function() {
                   n.extend(this, {
                       parallax: {
                           setTransform: ne.setTransform.bind(this),
                           setTranslate: ne.setTranslate.bind(this),
                           setTransition: ne.setTransition.bind(this)
                       }
                   })
               },
               on: {
                   beforeInit: function() {
                       this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                   },
                   init: function() {
                       this.params.parallax.enabled && this.parallax.setTranslate()
                   },
                   setTranslate: function() {
                       this.params.parallax.enabled && this.parallax.setTranslate()
                   },
                   setTransition: function(e) {
                       this.params.parallax.enabled && this.parallax.setTransition(e)
                   }
               }
           }, {
               name: "zoom",
               params: {
                   zoom: {
                       enabled: !1,
                       maxRatio: 3,
                       minRatio: 1,
                       toggle: !0,
                       containerClass: "swiper-zoom-container",
                       zoomedSlideClass: "swiper-slide-zoomed"
                   }
               },
               create: function() {
                   var e = this,
                       t = {
                           enabled: !1,
                           scale: 1,
                           currentScale: 1,
                           isScaling: !1,
                           gesture: {
                               $slideEl: void 0,
                               slideWidth: void 0,
                               slideHeight: void 0,
                               $imageEl: void 0,
                               $imageWrapEl: void 0,
                               maxRatio: 3
                           },
                           image: {
                               isTouched: void 0,
                               isMoved: void 0,
                               currentX: void 0,
                               currentY: void 0,
                               minX: void 0,
                               minY: void 0,
                               maxX: void 0,
                               maxY: void 0,
                               width: void 0,
                               height: void 0,
                               startX: void 0,
                               startY: void 0,
                               touchesStart: {},
                               touchesCurrent: {}
                           },
                           velocity: {
                               x: void 0,
                               y: void 0,
                               prevPositionX: void 0,
                               prevPositionY: void 0,
                               prevTime: void 0
                           }
                       };
                   "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function(i) {
                       t[i] = oe[i].bind(e)
                   })), n.extend(e, {
                       zoom: t
                   });
                   var i = 1;
                   Object.defineProperty(e.zoom, "scale", {
                       get: function() {
                           return i
                       },
                       set: function(t) {
                           if (i !== t) {
                               var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                                   a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                               e.emit("zoomChange", t, s, a)
                           }
                           i = t
                       }
                   })
               },
               on: {
                   init: function() {
                       this.params.zoom.enabled && this.zoom.enable()
                   },
                   destroy: function() {
                       this.zoom.disable()
                   },
                   touchStart: function(e) {
                       this.zoom.enabled && this.zoom.onTouchStart(e)
                   },
                   touchEnd: function(e) {
                       this.zoom.enabled && this.zoom.onTouchEnd(e)
                   },
                   doubleTap: function(e) {
                       this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                   },
                   transitionEnd: function() {
                       this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                   },
                   slideChange: function() {
                       this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd()
                   }
               }
           }, {
               name: "lazy",
               params: {
                   lazy: {
                       enabled: !1,
                       loadPrevNext: !1,
                       loadPrevNextAmount: 1,
                       loadOnTransitionStart: !1,
                       elementClass: "swiper-lazy",
                       loadingClass: "swiper-lazy-loading",
                       loadedClass: "swiper-lazy-loaded",
                       preloaderClass: "swiper-lazy-preloader"
                   }
               },
               create: function() {
                   n.extend(this, {
                       lazy: {
                           initialImageLoaded: !1,
                           load: le.load.bind(this),
                           loadInSlide: le.loadInSlide.bind(this)
                       }
                   })
               },
               on: {
                   beforeInit: function() {
                       this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                   },
                   init: function() {
                       this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                   },
                   scroll: function() {
                       this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                   },
                   resize: function() {
                       this.params.lazy.enabled && this.lazy.load()
                   },
                   scrollbarDragMove: function() {
                       this.params.lazy.enabled && this.lazy.load()
                   },
                   transitionStart: function() {
                       this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
                   },
                   transitionEnd: function() {
                       this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                   },
                   slideChange: function() {
                       this.params.lazy.enabled && this.params.cssMode && this.lazy.load()
                   }
               }
           }, {
               name: "controller",
               params: {
                   controller: {
                       control: void 0,
                       inverse: !1,
                       by: "slide"
                   }
               },
               create: function() {
                   n.extend(this, {
                       controller: {
                           control: this.params.controller.control,
                           getInterpolateFunction: de.getInterpolateFunction.bind(this),
                           setTranslate: de.setTranslate.bind(this),
                           setTransition: de.setTransition.bind(this)
                       }
                   })
               },
               on: {
                   update: function() {
                       this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                   },
                   resize: function() {
                       this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                   },
                   observerUpdate: function() {
                       this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                   },
                   setTranslate: function(e, t) {
                       this.controller.control && this.controller.setTranslate(e, t)
                   },
                   setTransition: function(e, t) {
                       this.controller.control && this.controller.setTransition(e, t)
                   }
               }
           }, {
               name: "a11y",
               params: {
                   a11y: {
                       enabled: !0,
                       notificationClass: "swiper-notification",
                       prevSlideMessage: "Previous slide",
                       nextSlideMessage: "Next slide",
                       firstSlideMessage: "This is the first slide",
                       lastSlideMessage: "This is the last slide",
                       paginationBulletMessage: "Go to slide {{index}}"
                   }
               },
               create: function() {
                   var e = this;
                   n.extend(e, {
                       a11y: {
                           liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                       }
                   }), Object.keys(he).forEach((function(t) {
                       e.a11y[t] = he[t].bind(e)
                   }))
               },
               on: {
                   init: function() {
                       this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                   },
                   toEdge: function() {
                       this.params.a11y.enabled && this.a11y.updateNavigation()
                   },
                   fromEdge: function() {
                       this.params.a11y.enabled && this.a11y.updateNavigation()
                   },
                   paginationUpdate: function() {
                       this.params.a11y.enabled && this.a11y.updatePagination()
                   },
                   destroy: function() {
                       this.params.a11y.enabled && this.a11y.destroy()
                   }
               }
           }, {
               name: "history",
               params: {
                   history: {
                       enabled: !1,
                       replaceState: !1,
                       key: "slides"
                   }
               },
               create: function() {
                   n.extend(this, {
                       history: {
                           init: pe.init.bind(this),
                           setHistory: pe.setHistory.bind(this),
                           setHistoryPopState: pe.setHistoryPopState.bind(this),
                           scrollToSlide: pe.scrollToSlide.bind(this),
                           destroy: pe.destroy.bind(this)
                       }
                   })
               },
               on: {
                   init: function() {
                       this.params.history.enabled && this.history.init()
                   },
                   destroy: function() {
                       this.params.history.enabled && this.history.destroy()
                   },
                   transitionEnd: function() {
                       this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                   },
                   slideChange: function() {
                       this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex)
                   }
               }
           }, {
               name: "hash-navigation",
               params: {
                   hashNavigation: {
                       enabled: !1,
                       replaceState: !1,
                       watchState: !1
                   }
               },
               create: function() {
                   n.extend(this, {
                       hashNavigation: {
                           initialized: !1,
                           init: ce.init.bind(this),
                           destroy: ce.destroy.bind(this),
                           setHash: ce.setHash.bind(this),
                           onHashCange: ce.onHashCange.bind(this)
                       }
                   })
               },
               on: {
                   init: function() {
                       this.params.hashNavigation.enabled && this.hashNavigation.init()
                   },
                   destroy: function() {
                       this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                   },
                   transitionEnd: function() {
                       this.hashNavigation.initialized && this.hashNavigation.setHash()
                   },
                   slideChange: function() {
                       this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash()
                   }
               }
           }, {
               name: "autoplay",
               params: {
                   autoplay: {
                       enabled: !1,
                       delay: 3e3,
                       waitForTransition: !0,
                       disableOnInteraction: !0,
                       stopOnLastSlide: !1,
                       reverseDirection: !1
                   }
               },
               create: function() {
                   var e = this;
                   n.extend(e, {
                       autoplay: {
                           running: !1,
                           paused: !1,
                           run: ue.run.bind(e),
                           start: ue.start.bind(e),
                           stop: ue.stop.bind(e),
                           pause: ue.pause.bind(e),
                           onVisibilityChange: function() {
                               "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1)
                           },
                           onTransitionEnd: function(t) {
                               e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                           }
                       }
                   })
               },
               on: {
                   init: function() {
                       this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange))
                   },
                   beforeTransitionStart: function(e, t) {
                       this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                   },
                   sliderFirstMove: function() {
                       this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                   },
                   touchEnd: function() {
                       this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run()
                   },
                   destroy: function() {
                       this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange)
                   }
               }
           }, {
               name: "effect-fade",
               params: {
                   fadeEffect: {
                       crossFade: !1
                   }
               },
               create: function() {
                   n.extend(this, {
                       fadeEffect: {
                           setTranslate: ve.setTranslate.bind(this),
                           setTransition: ve.setTransition.bind(this)
                       }
                   })
               },
               on: {
                   beforeInit: function() {
                       if ("fade" === this.params.effect) {
                           this.classNames.push(this.params.containerModifierClass + "fade");
                           var e = {
                               slidesPerView: 1,
                               slidesPerColumn: 1,
                               slidesPerGroup: 1,
                               watchSlidesProgress: !0,
                               spaceBetween: 0,
                               virtualTranslate: !0
                           };
                           n.extend(this.params, e), n.extend(this.originalParams, e)
                       }
                   },
                   setTranslate: function() {
                       "fade" === this.params.effect && this.fadeEffect.setTranslate()
                   },
                   setTransition: function(e) {
                       "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                   }
               }
           }, {
               name: "effect-cube",
               params: {
                   cubeEffect: {
                       slideShadows: !0,
                       shadow: !0,
                       shadowOffset: 20,
                       shadowScale: .94
                   }
               },
               create: function() {
                   n.extend(this, {
                       cubeEffect: {
                           setTranslate: fe.setTranslate.bind(this),
                           setTransition: fe.setTransition.bind(this)
                       }
                   })
               },
               on: {
                   beforeInit: function() {
                       if ("cube" === this.params.effect) {
                           this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                           var e = {
                               slidesPerView: 1,
                               slidesPerColumn: 1,
                               slidesPerGroup: 1,
                               watchSlidesProgress: !0,
                               resistanceRatio: 0,
                               spaceBetween: 0,
                               centeredSlides: !1,
                               virtualTranslate: !0
                           };
                           n.extend(this.params, e), n.extend(this.originalParams, e)
                       }
                   },
                   setTranslate: function() {
                       "cube" === this.params.effect && this.cubeEffect.setTranslate()
                   },
                   setTransition: function(e) {
                       "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                   }
               }
           }, {
               name: "effect-flip",
               params: {
                   flipEffect: {
                       slideShadows: !0,
                       limitRotation: !0
                   }
               },
               create: function() {
                   n.extend(this, {
                       flipEffect: {
                           setTranslate: me.setTranslate.bind(this),
                           setTransition: me.setTransition.bind(this)
                       }
                   })
               },
               on: {
                   beforeInit: function() {
                       if ("flip" === this.params.effect) {
                           this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                           var e = {
                               slidesPerView: 1,
                               slidesPerColumn: 1,
                               slidesPerGroup: 1,
                               watchSlidesProgress: !0,
                               spaceBetween: 0,
                               virtualTranslate: !0
                           };
                           n.extend(this.params, e), n.extend(this.originalParams, e)
                       }
                   },
                   setTranslate: function() {
                       "flip" === this.params.effect && this.flipEffect.setTranslate()
                   },
                   setTransition: function(e) {
                       "flip" === this.params.effect && this.flipEffect.setTransition(e)
                   }
               }
           }, {
               name: "effect-coverflow",
               params: {
                   coverflowEffect: {
                       rotate: 50,
                       stretch: 0,
                       depth: 100,
                       modifier: 1,
                       slideShadows: !0
                   }
               },
               create: function() {
                   n.extend(this, {
                       coverflowEffect: {
                           setTranslate: ge.setTranslate.bind(this),
                           setTransition: ge.setTransition.bind(this)
                       }
                   })
               },
               on: {
                   beforeInit: function() {
                       "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                   },
                   setTranslate: function() {
                       "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                   },
                   setTransition: function(e) {
                       "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                   }
               }
           }, {
               name: "thumbs",
               params: {
                   thumbs: {
                       multipleActiveThumbs: !0,
                       swiper: null,
                       slideThumbActiveClass: "swiper-slide-thumb-active",
                       thumbsContainerClass: "swiper-container-thumbs"
                   }
               },
               create: function() {
                   n.extend(this, {
                       thumbs: {
                           swiper: null,
                           init: be.init.bind(this),
                           update: be.update.bind(this),
                           onThumbClick: be.onThumbClick.bind(this)
                       }
                   })
               },
               on: {
                   beforeInit: function() {
                       var e = this.params.thumbs;
                       e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                   },
                   slideChange: function() {
                       this.thumbs.swiper && this.thumbs.update()
                   },
                   update: function() {
                       this.thumbs.swiper && this.thumbs.update()
                   },
                   resize: function() {
                       this.thumbs.swiper && this.thumbs.update()
                   },
                   observerUpdate: function() {
                       this.thumbs.swiper && this.thumbs.update()
                   },
                   setTransition: function(e) {
                       var t = this.thumbs.swiper;
                       t && t.setTransition(e)
                   },
                   beforeDestroy: function() {
                       var e = this.thumbs.swiper;
                       e && this.thumbs.swiperCreated && e && e.destroy()
                   }
               }
           }];
       return void 0 === W.use && (W.use = W.Class.use, W.installModule = W.Class.installModule), W.use(we), W
   }));
   /*!
    * jQuery Validation Plugin v1.17.0
    *
    * https://jqueryvalidation.org/
    *
    * Copyright (c) 2017 Jörn Zaefferer
    * Released under the MIT license
    */
   (function(factory) {
       if (typeof define === "function" && define.amd) {
           define(["jquery"], factory);
       } else if (typeof module === "object" && module.exports) {
           module.exports = factory(require("jquery"));
       } else {
           factory(jQuery);
       }
   }(function($) {
       $.extend($.fn, {
           validate: function(options) {
               if (!this.length) {
                   if (options && options.debug && window.console) {
                       console.warn("Nothing selected, can't validate, returning nothing.");
                   }
                   return;
               }
               var validator = $.data(this[0], "validator");
               if (validator) {
                   return validator;
               }
               this.attr("novalidate", "novalidate");
               validator = new $.validator(options, this[0]);
               $.data(this[0], "validator", validator);
               if (validator.settings.onsubmit) {
                   this.on("click.validate", ":submit", function(event) {
                       validator.submitButton = event.currentTarget;
                       if ($(this).hasClass("cancel")) {
                           validator.cancelSubmit = true;
                       }
                       if ($(this).attr("formnovalidate") !== undefined) {
                           validator.cancelSubmit = true;
                       }
                   });
                   this.on("submit.validate", function(event) {
                       if (validator.settings.debug) {
                           event.preventDefault();
                       }
   
                       function handle() {
                           var hidden, result;
                           if (validator.submitButton && (validator.settings.submitHandler || validator.formSubmitted)) {
                               hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val($(validator.submitButton).val()).appendTo(validator.currentForm);
                           }
                           if (validator.settings.submitHandler) {
                               result = validator.settings.submitHandler.call(validator, validator.currentForm, event);
                               if (hidden) {
                                   hidden.remove();
                               }
                               if (result !== undefined) {
                                   return result;
                               }
                               return false;
                           }
                           return true;
                       }
                       if (validator.cancelSubmit) {
                           validator.cancelSubmit = false;
                           return handle();
                       }
                       if (validator.form()) {
                           if (validator.pendingRequest) {
                               validator.formSubmitted = true;
                               return false;
                           }
                           return handle();
                       } else {
                           validator.focusInvalid();
                           return false;
                       }
                   });
               }
               return validator;
           },
           valid: function() {
               var valid, validator, errorList;
               if ($(this[0]).is("form")) {
                   valid = this.validate().form();
               } else {
                   errorList = [];
                   valid = true;
                   validator = $(this[0].form).validate();
                   this.each(function() {
                       valid = validator.element(this) && valid;
                       if (!valid) {
                           errorList = errorList.concat(validator.errorList);
                       }
                   });
                   validator.errorList = errorList;
               }
               return valid;
           },
           rules: function(command, argument) {
               var element = this[0],
                   settings, staticRules, existingRules, data, param, filtered;
               if (element == null) {
                   return;
               }
               if (!element.form && element.hasAttribute("contenteditable")) {
                   element.form = this.closest("form")[0];
                   element.name = this.attr("name");
               }
               if (element.form == null) {
                   return;
               }
               if (command) {
                   settings = $.data(element.form, "validator").settings;
                   staticRules = settings.rules;
                   existingRules = $.validator.staticRules(element);
                   switch (command) {
                       case "add":
                           $.extend(existingRules, $.validator.normalizeRule(argument));
                           delete existingRules.messages;
                           staticRules[element.name] = existingRules;
                           if (argument.messages) {
                               settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
                           }
                           break;
                       case "remove":
                           if (!argument) {
                               delete staticRules[element.name];
                               return existingRules;
                           }
                           filtered = {};
                           $.each(argument.split(/\s/), function(index, method) {
                               filtered[method] = existingRules[method];
                               delete existingRules[method];
                           });
                           return filtered;
                   }
               }
               data = $.validator.normalizeRules($.extend({}, $.validator.classRules(element), $.validator.attributeRules(element), $.validator.dataRules(element), $.validator.staticRules(element)), element);
               if (data.required) {
                   param = data.required;
                   delete data.required;
                   data = $.extend({
                       required: param
                   }, data);
               }
               if (data.remote) {
                   param = data.remote;
                   delete data.remote;
                   data = $.extend(data, {
                       remote: param
                   });
               }
               return data;
           }
       });
       $.extend($.expr.pseudos || $.expr[":"], {
           blank: function(a) {
               return !$.trim("" + $(a).val());
           },
           filled: function(a) {
               var val = $(a).val();
               return val !== null && !!$.trim("" + val);
           },
           unchecked: function(a) {
               return !$(a).prop("checked");
           }
       });
       $.validator = function(options, form) {
           this.settings = $.extend(true, {}, $.validator.defaults, options);
           this.currentForm = form;
           this.init();
       };
       $.validator.format = function(source, params) {
           if (arguments.length === 1) {
               return function() {
                   var args = $.makeArray(arguments);
                   args.unshift(source);
                   return $.validator.format.apply(this, args);
               };
           }
           if (params === undefined) {
               return source;
           }
           if (arguments.length > 2 && params.constructor !== Array) {
               params = $.makeArray(arguments).slice(1);
           }
           if (params.constructor !== Array) {
               params = [params];
           }
           $.each(params, function(i, n) {
               source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function() {
                   return n;
               });
           });
           return source;
       };
       $.extend($.validator, {
           defaults: {
               messages: {},
               groups: {},
               rules: {},
               errorClass: "error",
               pendingClass: "pending",
               validClass: "valid",
               errorElement: "label",
               focusCleanup: false,
               focusInvalid: true,
               errorContainer: $([]),
               errorLabelContainer: $([]),
               onsubmit: true,
               ignore: ":hidden",
               ignoreTitle: false,
               onfocusin: function(element) {
                   this.lastActive = element;
                   if (this.settings.focusCleanup) {
                       if (this.settings.unhighlight) {
                           this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
                       }
                       this.hideThese(this.errorsFor(element));
                   }
               },
               onfocusout: function(element) {
                   if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
                       this.element(element);
                   }
               },
               onkeyup: function(element, event) {
                   var excludedKeys = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                   if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
                       return;
                   } else if (element.name in this.submitted || element.name in this.invalid) {
                       this.element(element);
                   }
               },
               onclick: function(element) {
                   if (element.name in this.submitted) {
                       this.element(element);
                   } else if (element.parentNode.name in this.submitted) {
                       this.element(element.parentNode);
                   }
               },
               highlight: function(element, errorClass, validClass) {
                   if (element.type === "radio") {
                       this.findByName(element.name).addClass(errorClass).removeClass(validClass);
                   } else {
                       $(element).addClass(errorClass).removeClass(validClass);
                   }
               },
               unhighlight: function(element, errorClass, validClass) {
                   if (element.type === "radio") {
                       this.findByName(element.name).removeClass(errorClass).addClass(validClass);
                   } else {
                       $(element).removeClass(errorClass).addClass(validClass);
                   }
               }
           },
           setDefaults: function(settings) {
               $.extend($.validator.defaults, settings);
           },
           messages: {
               required: "This field is required.",
               remote: "Please fix this field.",
               email: "Please enter a valid email address.",
               url: "Please enter a valid URL.",
               date: "Please enter a valid date.",
               dateISO: "Please enter a valid date (ISO).",
               number: "Please enter a valid number.",
               digits: "Please enter only digits.",
               equalTo: "Please enter the same value again.",
               maxlength: $.validator.format("Please enter no more than {0} characters."),
               minlength: $.validator.format("Please enter at least {0} characters."),
               rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
               range: $.validator.format("Please enter a value between {0} and {1}."),
               max: $.validator.format("Please enter a value less than or equal to {0}."),
               min: $.validator.format("Please enter a value greater than or equal to {0}."),
               step: $.validator.format("Please enter a multiple of {0}.")
           },
           autoCreateRanges: false,
           prototype: {
               init: function() {
                   this.labelContainer = $(this.settings.errorLabelContainer);
                   this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
                   this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                   this.submitted = {};
                   this.valueCache = {};
                   this.pendingRequest = 0;
                   this.pending = {};
                   this.invalid = {};
                   this.reset();
                   var groups = (this.groups = {}),
                       rules;
                   $.each(this.settings.groups, function(key, value) {
                       if (typeof value === "string") {
                           value = value.split(/\s/);
                       }
                       $.each(value, function(index, name) {
                           groups[name] = key;
                       });
                   });
                   rules = this.settings.rules;
                   $.each(rules, function(key, value) {
                       rules[key] = $.validator.normalizeRule(value);
                   });
   
                   function delegate(event) {
                       if (!this.form && this.hasAttribute("contenteditable")) {
                           this.form = $(this).closest("form")[0];
                           this.name = $(this).attr("name");
                       }
                       var validator = $.data(this.form, "validator"),
                           eventType = "on" + event.type.replace(/^validate/, ""),
                           settings = validator.settings;
                       if (settings[eventType] && !$(this).is(settings.ignore)) {
                           settings[eventType].call(validator, this, event);
                       }
                   }
                   $(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " + "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " + "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " + "[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate).on("click.validate", "select, option, [type='radio'], [type='checkbox']", delegate);
                   if (this.settings.invalidHandler) {
                       $(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
                   }
               },
               form: function() {
                   this.checkForm();
                   $.extend(this.submitted, this.errorMap);
                   this.invalid = $.extend({}, this.errorMap);
                   if (!this.valid()) {
                       $(this.currentForm).triggerHandler("invalid-form", [this]);
                   }
                   this.showErrors();
                   return this.valid();
               },
               checkForm: function() {
                   this.prepareForm();
                   for (var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++) {
                       this.check(elements[i]);
                   }
                   return this.valid();
               },
               element: function(element) {
                   var cleanElement = this.clean(element),
                       checkElement = this.validationTargetFor(cleanElement),
                       v = this,
                       result = true,
                       rs, group;
                   if (checkElement === undefined) {
                       delete this.invalid[cleanElement.name];
                   } else {
                       this.prepareElement(checkElement);
                       this.currentElements = $(checkElement);
                       group = this.groups[checkElement.name];
                       if (group) {
                           $.each(this.groups, function(name, testgroup) {
                               if (testgroup === group && name !== checkElement.name) {
                                   cleanElement = v.validationTargetFor(v.clean(v.findByName(name)));
                                   if (cleanElement && cleanElement.name in v.invalid) {
                                       v.currentElements.push(cleanElement);
                                       result = v.check(cleanElement) && result;
                                   }
                               }
                           });
                       }
                       rs = this.check(checkElement) !== false;
                       result = result && rs;
                       if (rs) {
                           this.invalid[checkElement.name] = false;
                       } else {
                           this.invalid[checkElement.name] = true;
                       }
                       if (!this.numberOfInvalids()) {
                           this.toHide = this.toHide.add(this.containers);
                       }
                       this.showErrors();
                       $(element).attr("aria-invalid", !rs);
                   }
                   return result;
               },
               showErrors: function(errors) {
                   if (errors) {
                       var validator = this;
                       $.extend(this.errorMap, errors);
                       this.errorList = $.map(this.errorMap, function(message, name) {
                           return {
                               message: message,
                               element: validator.findByName(name)[0]
                           };
                       });
                       this.successList = $.grep(this.successList, function(element) {
                           return !(element.name in errors);
                       });
                   }
                   if (this.settings.showErrors) {
                       this.settings.showErrors.call(this, this.errorMap, this.errorList);
                   } else {
                       this.defaultShowErrors();
                   }
               },
               resetForm: function() {
                   if ($.fn.resetForm) {
                       $(this.currentForm).resetForm();
                   }
                   this.invalid = {};
                   this.submitted = {};
                   this.prepareForm();
                   this.hideErrors();
                   var elements = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                   this.resetElements(elements);
               },
               resetElements: function(elements) {
                   var i;
                   if (this.settings.unhighlight) {
                       for (i = 0; elements[i]; i++) {
                           this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, "");
                           this.findByName(elements[i].name).removeClass(this.settings.validClass);
                       }
                   } else {
                       elements.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
                   }
               },
               numberOfInvalids: function() {
                   return this.objectLength(this.invalid);
               },
               objectLength: function(obj) {
                   var count = 0,
                       i;
                   for (i in obj) {
                       if (obj[i] !== undefined && obj[i] !== null && obj[i] !== false) {
                           count++;
                       }
                   }
                   return count;
               },
               hideErrors: function() {
                   this.hideThese(this.toHide);
               },
               hideThese: function(errors) {
                   errors.not(this.containers).text("");
                   this.addWrapper(errors).hide();
               },
               valid: function() {
                   return this.size() === 0;
               },
               size: function() {
                   return this.errorList.length;
               },
               focusInvalid: function() {
                   if (this.settings.focusInvalid) {
                       try {
                           $(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
                       } catch (e) {}
                   }
               },
               findLastActive: function() {
                   var lastActive = this.lastActive;
                   return lastActive && $.grep(this.errorList, function(n) {
                       return n.element.name === lastActive.name;
                   }).length === 1 && lastActive;
               },
               elements: function() {
                   var validator = this,
                       rulesCache = {};
                   return $(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                       var name = this.name || $(this).attr("name");
                       if (!name && validator.settings.debug && window.console) {
                           console.error("%o has no name assigned", this);
                       }
                       if (this.hasAttribute("contenteditable")) {
                           this.form = $(this).closest("form")[0];
                           this.name = name;
                       }
                       if (name in rulesCache || !validator.objectLength($(this).rules())) {
                           return false;
                       }
                       rulesCache[name] = true;
                       return true;
                   });
               },
               clean: function(selector) {
                   return $(selector)[0];
               },
               errors: function() {
                   var errorClass = this.settings.errorClass.split(" ").join(".");
                   return $(this.settings.errorElement + "." + errorClass, this.errorContext);
               },
               resetInternals: function() {
                   this.successList = [];
                   this.errorList = [];
                   this.errorMap = {};
                   this.toShow = $([]);
                   this.toHide = $([]);
               },
               reset: function() {
                   this.resetInternals();
                   this.currentElements = $([]);
               },
               prepareForm: function() {
                   this.reset();
                   this.toHide = this.errors().add(this.containers);
               },
               prepareElement: function(element) {
                   this.reset();
                   this.toHide = this.errorsFor(element);
               },
               elementValue: function(element) {
                   var $element = $(element),
                       type = element.type,
                       val, idx;
                   if (type === "radio" || type === "checkbox") {
                       return this.findByName(element.name).filter(":checked").val();
                   } else if (type === "number" && typeof element.validity !== "undefined") {
                       return element.validity.badInput ? "NaN" : $element.val();
                   }
                   if (element.hasAttribute("contenteditable")) {
                       val = $element.text();
                   } else {
                       val = $element.val();
                   }
                   if (type === "file") {
                       if (val.substr(0, 12) === "C:\\fakepath\\") {
                           return val.substr(12);
                       }
                       idx = val.lastIndexOf("/");
                       if (idx >= 0) {
                           return val.substr(idx + 1);
                       }
                       idx = val.lastIndexOf("\\");
                       if (idx >= 0) {
                           return val.substr(idx + 1);
                       }
                       return val;
                   }
                   if (typeof val === "string") {
                       return val.replace(/\r/g, "");
                   }
                   return val;
               },
               check: function(element) {
                   element = this.validationTargetFor(this.clean(element));
                   var rules = $(element).rules(),
                       rulesCount = $.map(rules, function(n, i) {
                           return i;
                       }).length,
                       dependencyMismatch = false,
                       val = this.elementValue(element),
                       result, method, rule, normalizer;
                   if (typeof rules.normalizer === "function") {
                       normalizer = rules.normalizer;
                   } else if (typeof this.settings.normalizer === "function") {
                       normalizer = this.settings.normalizer;
                   }
                   if (normalizer) {
                       val = normalizer.call(element, val);
                       if (typeof val !== "string") {
                           throw new TypeError("The normalizer should return a string value.");
                       }
                       delete rules.normalizer;
                   }
                   for (method in rules) {
                       rule = {
                           method: method,
                           parameters: rules[method]
                       };
                       try {
                           result = $.validator.methods[method].call(this, val, element, rule.parameters);
                           if (result === "dependency-mismatch" && rulesCount === 1) {
                               dependencyMismatch = true;
                               continue;
                           }
                           dependencyMismatch = false;
                           if (result === "pending") {
                               this.toHide = this.toHide.not(this.errorsFor(element));
                               return;
                           }
                           if (!result) {
                               this.formatAndAdd(element, rule);
                               return false;
                           }
                       } catch (e) {
                           if (this.settings.debug && window.console) {
                               console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e);
                           }
                           if (e instanceof TypeError) {
                               e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
                           }
                           throw e;
                       }
                   }
                   if (dependencyMismatch) {
                       return;
                   }
                   if (this.objectLength(rules)) {
                       this.successList.push(element);
                   }
                   return true;
               },
               customDataMessage: function(element, method) {
                   return $(element).data("msg" + method.charAt(0).toUpperCase() +
                       method.substring(1).toLowerCase()) || $(element).data("msg");
               },
               customMessage: function(name, method) {
                   var m = this.settings.messages[name];
                   return m && (m.constructor === String ? m : m[method]);
               },
               findDefined: function() {
                   for (var i = 0; i < arguments.length; i++) {
                       if (arguments[i] !== undefined) {
                           return arguments[i];
                       }
                   }
                   return undefined;
               },
               defaultMessage: function(element, rule) {
                   if (typeof rule === "string") {
                       rule = {
                           method: rule
                       };
                   }
                   var message = this.findDefined(this.customMessage(element.name, rule.method), this.customDataMessage(element, rule.method), !this.settings.ignoreTitle && element.title || undefined, $.validator.messages[rule.method], "<strong>Warning: No message defined for " + element.name + "</strong>"),
                       theregex = /\$?\{(\d+)\}/g;
                   if (typeof message === "function") {
                       message = message.call(this, rule.parameters, element);
                   } else if (theregex.test(message)) {
                       message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
                   }
                   return message;
               },
               formatAndAdd: function(element, rule) {
                   var message = this.defaultMessage(element, rule);
                   this.errorList.push({
                       message: message,
                       element: element,
                       method: rule.method
                   });
                   this.errorMap[element.name] = message;
                   this.submitted[element.name] = message;
               },
               addWrapper: function(toToggle) {
                   if (this.settings.wrapper) {
                       toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
                   }
                   return toToggle;
               },
               defaultShowErrors: function() {
                   var i, elements, error;
                   for (i = 0; this.errorList[i]; i++) {
                       error = this.errorList[i];
                       if (this.settings.highlight) {
                           this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
                       }
                       this.showLabel(error.element, error.message);
                   }
                   if (this.errorList.length) {
                       this.toShow = this.toShow.add(this.containers);
                   }
                   if (this.settings.success) {
                       for (i = 0; this.successList[i]; i++) {
                           this.showLabel(this.successList[i]);
                       }
                   }
                   if (this.settings.unhighlight) {
                       for (i = 0, elements = this.validElements(); elements[i]; i++) {
                           this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
                       }
                   }
                   this.toHide = this.toHide.not(this.toShow);
                   this.hideErrors();
                   this.addWrapper(this.toShow).show();
               },
               validElements: function() {
                   return this.currentElements.not(this.invalidElements());
               },
               invalidElements: function() {
                   return $(this.errorList).map(function() {
                       return this.element;
                   });
               },
               showLabel: function(element, message) {
                   var place, group, errorID, v, error = this.errorsFor(element),
                       elementID = this.idOrName(element),
                       describedBy = $(element).attr("aria-describedby");
                   if (error.length) {
                       error.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
                       error.html(message);
                   } else {
                       error = $("<" + this.settings.errorElement + ">").attr("id", elementID + "-error").addClass(this.settings.errorClass).html(message || "");
                       place = error;
                       if (this.settings.wrapper) {
                           place = error.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
                       }
                       if (this.labelContainer.length) {
                           this.labelContainer.append(place);
                       } else if (this.settings.errorPlacement) {
                           this.settings.errorPlacement.call(this, place, $(element));
                       } else {
                           place.insertAfter(element);
                       }
                       if (error.is("label")) {
                           error.attr("for", elementID);
                       } else if (error.parents("label[for='" + this.escapeCssMeta(elementID) + "']").length === 0) {
                           errorID = error.attr("id");
                           if (!describedBy) {
                               describedBy = errorID;
                           } else if (!describedBy.match(new RegExp("\\b" + this.escapeCssMeta(errorID) + "\\b"))) {
                               describedBy += " " + errorID;
                           }
                           $(element).attr("aria-describedby", describedBy);
                           group = this.groups[element.name];
                           if (group) {
                               v = this;
                               $.each(v.groups, function(name, testgroup) {
                                   if (testgroup === group) {
                                       $("[name='" + v.escapeCssMeta(name) + "']", v.currentForm).attr("aria-describedby", error.attr("id"));
                                   }
                               });
                           }
                       }
                   }
                   if (!message && this.settings.success) {
                       error.text("");
                       if (typeof this.settings.success === "string") {
                           error.addClass(this.settings.success);
                       } else {
                           this.settings.success(error, element);
                       }
                   }
                   this.toShow = this.toShow.add(error);
               },
               errorsFor: function(element) {
                   var name = this.escapeCssMeta(this.idOrName(element)),
                       describer = $(element).attr("aria-describedby"),
                       selector = "label[for='" + name + "'], label[for='" + name + "'] *";
                   if (describer) {
                       selector = selector + ", #" + this.escapeCssMeta(describer).replace(/\s+/g, ", #");
                   }
                   return this.errors().filter(selector);
               },
               escapeCssMeta: function(string) {
                   return string.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
               },
               idOrName: function(element) {
                   return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
               },
               validationTargetFor: function(element) {
                   if (this.checkable(element)) {
                       element = this.findByName(element.name);
                   }
                   return $(element).not(this.settings.ignore)[0];
               },
               checkable: function(element) {
                   return (/radio|checkbox/i).test(element.type);
               },
               findByName: function(name) {
                   return $(this.currentForm).find("[name='" + this.escapeCssMeta(name) + "']");
               },
               getLength: function(value, element) {
                   switch (element.nodeName.toLowerCase()) {
                       case "select":
                           return $("option:selected", element).length;
                       case "input":
                           if (this.checkable(element)) {
                               return this.findByName(element.name).filter(":checked").length;
                           }
                   }
                   return value.length;
               },
               depend: function(param, element) {
                   return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
               },
               dependTypes: {
                   "boolean": function(param) {
                       return param;
                   },
                   "string": function(param, element) {
                       return !!$(param, element.form).length;
                   },
                   "function": function(param, element) {
                       return param(element);
                   }
               },
               optional: function(element) {
                   var val = this.elementValue(element);
                   return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
               },
               startRequest: function(element) {
                   if (!this.pending[element.name]) {
                       this.pendingRequest++;
                       $(element).addClass(this.settings.pendingClass);
                       this.pending[element.name] = true;
                   }
               },
               stopRequest: function(element, valid) {
                   this.pendingRequest--;
                   if (this.pendingRequest < 0) {
                       this.pendingRequest = 0;
                   }
                   delete this.pending[element.name];
                   $(element).removeClass(this.settings.pendingClass);
                   if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
                       $(this.currentForm).submit();
                       if (this.submitButton) {
                           $("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove();
                       }
                       this.formSubmitted = false;
                   } else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
                       $(this.currentForm).triggerHandler("invalid-form", [this]);
                       this.formSubmitted = false;
                   }
               },
               previousValue: function(element, method) {
                   method = typeof method === "string" && method || "remote";
                   return $.data(element, "previousValue") || $.data(element, "previousValue", {
                       old: null,
                       valid: true,
                       message: this.defaultMessage(element, {
                           method: method
                       })
                   });
               },
               destroy: function() {
                   this.resetForm();
                   $(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur");
               }
           },
           classRuleSettings: {
               required: {
                   required: true
               },
               email: {
                   email: true
               },
               url: {
                   url: true
               },
               date: {
                   date: true
               },
               dateISO: {
                   dateISO: true
               },
               number: {
                   number: true
               },
               digits: {
                   digits: true
               },
               creditcard: {
                   creditcard: true
               }
           },
           addClassRules: function(className, rules) {
               if (className.constructor === String) {
                   this.classRuleSettings[className] = rules;
               } else {
                   $.extend(this.classRuleSettings, className);
               }
           },
           classRules: function(element) {
               var rules = {},
                   classes = $(element).attr("class");
               if (classes) {
                   $.each(classes.split(" "), function() {
                       if (this in $.validator.classRuleSettings) {
                           $.extend(rules, $.validator.classRuleSettings[this]);
                       }
                   });
               }
               return rules;
           },
           normalizeAttributeRule: function(rules, type, method, value) {
               if (/min|max|step/.test(method) && (type === null || /number|range|text/.test(type))) {
                   value = Number(value);
                   if (isNaN(value)) {
                       value = undefined;
                   }
               }
               if (value || value === 0) {
                   rules[method] = value;
               } else if (type === method && type !== "range") {
                   rules[method] = true;
               }
           },
           attributeRules: function(element) {
               var rules = {},
                   $element = $(element),
                   type = element.getAttribute("type"),
                   method, value;
               for (method in $.validator.methods) {
                   if (method === "required") {
                       value = element.getAttribute(method);
                       if (value === "") {
                           value = true;
                       }
                       value = !!value;
                   } else {
                       value = $element.attr(method);
                   }
                   this.normalizeAttributeRule(rules, type, method, value);
               }
               if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
                   delete rules.maxlength;
               }
               return rules;
           },
           dataRules: function(element) {
               var rules = {},
                   $element = $(element),
                   type = element.getAttribute("type"),
                   method, value;
               for (method in $.validator.methods) {
                   value = $element.data("rule" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase());
                   this.normalizeAttributeRule(rules, type, method, value);
               }
               return rules;
           },
           staticRules: function(element) {
               var rules = {},
                   validator = $.data(element.form, "validator");
               if (validator.settings.rules) {
                   rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
               }
               return rules;
           },
           normalizeRules: function(rules, element) {
               $.each(rules, function(prop, val) {
                   if (val === false) {
                       delete rules[prop];
                       return;
                   }
                   if (val.param || val.depends) {
                       var keepRule = true;
                       switch (typeof val.depends) {
                           case "string":
                               keepRule = !!$(val.depends, element.form).length;
                               break;
                           case "function":
                               keepRule = val.depends.call(element, element);
                               break;
                       }
                       if (keepRule) {
                           rules[prop] = val.param !== undefined ? val.param : true;
                       } else {
                           $.data(element.form, "validator").resetElements($(element));
                           delete rules[prop];
                       }
                   }
               });
               $.each(rules, function(rule, parameter) {
                   rules[rule] = $.isFunction(parameter) && rule !== "normalizer" ? parameter(element) : parameter;
               });
               $.each(["minlength", "maxlength"], function() {
                   if (rules[this]) {
                       rules[this] = Number(rules[this]);
                   }
               });
               $.each(["rangelength", "range"], function() {
                   var parts;
                   if (rules[this]) {
                       if ($.isArray(rules[this])) {
                           rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
                       } else if (typeof rules[this] === "string") {
                           parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
                           rules[this] = [Number(parts[0]), Number(parts[1])];
                       }
                   }
               });
               if ($.validator.autoCreateRanges) {
                   if (rules.min != null && rules.max != null) {
                       rules.range = [rules.min, rules.max];
                       delete rules.min;
                       delete rules.max;
                   }
                   if (rules.minlength != null && rules.maxlength != null) {
                       rules.rangelength = [rules.minlength, rules.maxlength];
                       delete rules.minlength;
                       delete rules.maxlength;
                   }
               }
               return rules;
           },
           normalizeRule: function(data) {
               if (typeof data === "string") {
                   var transformed = {};
                   $.each(data.split(/\s/), function() {
                       transformed[this] = true;
                   });
                   data = transformed;
               }
               return data;
           },
           addMethod: function(name, method, message) {
               $.validator.methods[name] = method;
               $.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
               if (method.length < 3) {
                   $.validator.addClassRules(name, $.validator.normalizeRule(name));
               }
           },
           methods: {
               required: function(value, element, param) {
                   if (!this.depend(param, element)) {
                       return "dependency-mismatch";
                   }
                   if (element.nodeName.toLowerCase() === "select") {
                       var val = $(element).val();
                       return val && val.length > 0;
                   }
                   if (this.checkable(element)) {
                       return this.getLength(value, element) > 0;
                   }
                   return value.length > 0;
               },
               email: function(value, element) {
                   return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
               },
               url: function(value, element) {
                   return this.optional(element) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
               },
               date: function(value, element) {
                   return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
               },
               dateISO: function(value, element) {
                   return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
               },
               number: function(value, element) {
                   return this.optional(element) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
               },
               digits: function(value, element) {
                   return this.optional(element) || /^\d+$/.test(value);
               },
               minlength: function(value, element, param) {
                   var length = $.isArray(value) ? value.length : this.getLength(value, element);
                   return this.optional(element) || length >= param;
               },
               maxlength: function(value, element, param) {
                   var length = $.isArray(value) ? value.length : this.getLength(value, element);
                   return this.optional(element) || length <= param;
               },
               rangelength: function(value, element, param) {
                   var length = $.isArray(value) ? value.length : this.getLength(value, element);
                   return this.optional(element) || (length >= param[0] && length <= param[1]);
               },
               min: function(value, element, param) {
                   return this.optional(element) || value >= param;
               },
               max: function(value, element, param) {
                   return this.optional(element) || value <= param;
               },
               range: function(value, element, param) {
                   return this.optional(element) || (value >= param[0] && value <= param[1]);
               },
               step: function(value, element, param) {
                   var type = $(element).attr("type"),
                       errorMessage = "Step attribute on input type " + type + " is not supported.",
                       supportedTypes = ["text", "number", "range"],
                       re = new RegExp("\\b" + type + "\\b"),
                       notSupported = type && !re.test(supportedTypes.join()),
                       decimalPlaces = function(num) {
                           var match = ("" + num).match(/(?:\.(\d+))?$/);
                           if (!match) {
                               return 0;
                           }
                           return match[1] ? match[1].length : 0;
                       },
                       toInt = function(num) {
                           return Math.round(num * Math.pow(10, decimals));
                       },
                       valid = true,
                       decimals;
                   if (notSupported) {
                       throw new Error(errorMessage);
                   }
                   decimals = decimalPlaces(param);
                   if (decimalPlaces(value) > decimals || toInt(value) % toInt(param) !== 0) {
                       valid = false;
                   }
                   return this.optional(element) || valid;
               },
               equalTo: function(value, element, param) {
                   var target = $(param);
                   if (this.settings.onfocusout && target.not(".validate-equalTo-blur").length) {
                       target.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                           $(element).valid();
                       });
                   }
                   return value === target.val();
               },
               remote: function(value, element, param, method) {
                   if (this.optional(element)) {
                       return "dependency-mismatch";
                   }
                   method = typeof method === "string" && method || "remote";
                   var previous = this.previousValue(element, method),
                       validator, data, optionDataString;
                   if (!this.settings.messages[element.name]) {
                       this.settings.messages[element.name] = {};
                   }
                   previous.originalMessage = previous.originalMessage || this.settings.messages[element.name][method];
                   this.settings.messages[element.name][method] = previous.message;
                   param = typeof param === "string" && {
                       url: param
                   } || param;
                   optionDataString = $.param($.extend({
                       data: value
                   }, param.data));
                   if (previous.old === optionDataString) {
                       return previous.valid;
                   }
                   previous.old = optionDataString;
                   validator = this;
                   this.startRequest(element);
                   data = {};
                   data[element.name] = value;
                   $.ajax($.extend(true, {
                       mode: "abort",
                       port: "validate" + element.name,
                       dataType: "json",
                       data: data,
                       context: validator.currentForm,
                       success: function(response) {
                           var valid = response === true || response === "true",
                               errors, message, submitted;
                           validator.settings.messages[element.name][method] = previous.originalMessage;
                           if (valid) {
                               submitted = validator.formSubmitted;
                               validator.resetInternals();
                               validator.toHide = validator.errorsFor(element);
                               validator.formSubmitted = submitted;
                               validator.successList.push(element);
                               validator.invalid[element.name] = false;
                               validator.showErrors();
                           } else {
                               errors = {};
                               message = response || validator.defaultMessage(element, {
                                   method: method,
                                   parameters: value
                               });
                               errors[element.name] = previous.message = message;
                               validator.invalid[element.name] = true;
                               validator.showErrors(errors);
                           }
                           previous.valid = valid;
                           validator.stopRequest(element, valid);
                       }
                   }, param));
                   return "pending";
               }
           }
       });
       var pendingRequests = {},
           ajax;
       if ($.ajaxPrefilter) {
           $.ajaxPrefilter(function(settings, _, xhr) {
               var port = settings.port;
               if (settings.mode === "abort") {
                   if (pendingRequests[port]) {
                       pendingRequests[port].abort();
                   }
                   pendingRequests[port] = xhr;
               }
           });
       } else {
           ajax = $.ajax;
           $.ajax = function(settings) {
               var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
                   port = ("port" in settings ? settings : $.ajaxSettings).port;
               if (mode === "abort") {
                   if (pendingRequests[port]) {
                       pendingRequests[port].abort();
                   }
                   pendingRequests[port] = ajax.apply(this, arguments);
                   return pendingRequests[port];
               }
               return ajax.apply(this, arguments);
           };
       }
       return $;
   }));
   /*!
    * imagesLoaded PACKAGED v4.1.4
    * JavaScript is all like "You images are done yet or what?"
    * MIT License
    */
   (function(global, factory) {
       if (typeof define == 'function' && define.amd) {
           define('ev-emitter/ev-emitter', factory);
       } else if (typeof module == 'object' && module.exports) {
           module.exports = factory();
       } else {
           global.EvEmitter = factory();
       }
   }(typeof window != 'undefined' ? window : this, function() {
       function EvEmitter() {}
       var proto = EvEmitter.prototype;
       proto.on = function(eventName, listener) {
           if (!eventName || !listener) {
               return;
           }
           var events = this._events = this._events || {};
           var listeners = events[eventName] = events[eventName] || [];
           if (listeners.indexOf(listener) == -1) {
               listeners.push(listener);
           }
           return this;
       };
       proto.once = function(eventName, listener) {
           if (!eventName || !listener) {
               return;
           }
           this.on(eventName, listener);
           var onceEvents = this._onceEvents = this._onceEvents || {};
           var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
           onceListeners[listener] = true;
           return this;
       };
       proto.off = function(eventName, listener) {
           var listeners = this._events && this._events[eventName];
           if (!listeners || !listeners.length) {
               return;
           }
           var index = listeners.indexOf(listener);
           if (index != -1) {
               listeners.splice(index, 1);
           }
           return this;
       };
       proto.emitEvent = function(eventName, args) {
           var listeners = this._events && this._events[eventName];
           if (!listeners || !listeners.length) {
               return;
           }
           listeners = listeners.slice(0);
           args = args || [];
           var onceListeners = this._onceEvents && this._onceEvents[eventName];
           for (var i = 0; i < listeners.length; i++) {
               var listener = listeners[i]
               var isOnce = onceListeners && onceListeners[listener];
               if (isOnce) {
                   this.off(eventName, listener);
                   delete onceListeners[listener];
               }
               listener.apply(this, args);
           }
           return this;
       };
       proto.allOff = function() {
           delete this._events;
           delete this._onceEvents;
       };
       return EvEmitter;
   }));
   /*!
    * imagesLoaded v4.1.4
    * JavaScript is all like "You images are done yet or what?"
    * MIT License
    */
   (function(window, factory) {
       'use strict';
       if (typeof define == 'function' && define.amd) {
           define(['ev-emitter/ev-emitter'], function(EvEmitter) {
               return factory(window, EvEmitter);
           });
       } else if (typeof module == 'object' && module.exports) {
           module.exports = factory(window, require('ev-emitter'));
       } else {
           window.imagesLoaded = factory(window, window.EvEmitter);
       }
   })(typeof window !== 'undefined' ? window : this, function factory(window, EvEmitter) {
       var $ = window.jQuery;
       var console = window.console;
   
       function extend(a, b) {
           for (var prop in b) {
               a[prop] = b[prop];
           }
           return a;
       }
       var arraySlice = Array.prototype.slice;
   
       function makeArray(obj) {
           if (Array.isArray(obj)) {
               return obj;
           }
           var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
           if (isArrayLike) {
               return arraySlice.call(obj);
           }
           return [obj];
       }
   
       function ImagesLoaded(elem, options, onAlways) {
           if (!(this instanceof ImagesLoaded)) {
               return new ImagesLoaded(elem, options, onAlways);
           }
           var queryElem = elem;
           if (typeof elem == 'string') {
               queryElem = document.querySelectorAll(elem);
           }
           if (!queryElem) {
               console.error('Bad element for imagesLoaded ' + (queryElem || elem));
               return;
           }
           this.elements = makeArray(queryElem);
           this.options = extend({}, this.options);
           if (typeof options == 'function') {
               onAlways = options;
           } else {
               extend(this.options, options);
           }
           if (onAlways) {
               this.on('always', onAlways);
           }
           this.getImages();
           if ($) {
               this.jqDeferred = new $.Deferred();
           }
           setTimeout(this.check.bind(this));
       }
       ImagesLoaded.prototype = Object.create(EvEmitter.prototype);
       ImagesLoaded.prototype.options = {};
       ImagesLoaded.prototype.getImages = function() {
           this.images = [];
           this.elements.forEach(this.addElementImages, this);
       };
       ImagesLoaded.prototype.addElementImages = function(elem) {
           if (elem.nodeName == 'IMG') {
               this.addImage(elem);
           }
           if (this.options.background === true) {
               this.addElementBackgroundImages(elem);
           }
           var nodeType = elem.nodeType;
           if (!nodeType || !elementNodeTypes[nodeType]) {
               return;
           }
           var childImgs = elem.querySelectorAll('img');
           for (var i = 0; i < childImgs.length; i++) {
               var img = childImgs[i];
               this.addImage(img);
           }
           if (typeof this.options.background == 'string') {
               var children = elem.querySelectorAll(this.options.background);
               for (i = 0; i < children.length; i++) {
                   var child = children[i];
                   this.addElementBackgroundImages(child);
               }
           }
       };
       var elementNodeTypes = {
           1: true,
           9: true,
           11: true
       };
       ImagesLoaded.prototype.addElementBackgroundImages = function(elem) {
           var style = getComputedStyle(elem);
           if (!style) {
               return;
           }
           var reURL = /url\((['"])?(.*?)\1\)/gi;
           var matches = reURL.exec(style.backgroundImage);
           while (matches !== null) {
               var url = matches && matches[2];
               if (url) {
                   this.addBackground(url, elem);
               }
               matches = reURL.exec(style.backgroundImage);
           }
       };
       ImagesLoaded.prototype.addImage = function(img) {
           var loadingImage = new LoadingImage(img);
           this.images.push(loadingImage);
       };
       ImagesLoaded.prototype.addBackground = function(url, elem) {
           var background = new Background(url, elem);
           this.images.push(background);
       };
       ImagesLoaded.prototype.check = function() {
           var _this = this;
           this.progressedCount = 0;
           this.hasAnyBroken = false;
           if (!this.images.length) {
               this.complete();
               return;
           }
   
           function onProgress(image, elem, message) {
               setTimeout(function() {
                   _this.progress(image, elem, message);
               });
           }
           this.images.forEach(function(loadingImage) {
               loadingImage.once('progress', onProgress);
               loadingImage.check();
           });
       };
       ImagesLoaded.prototype.progress = function(image, elem, message) {
           this.progressedCount++;
           this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
           this.emitEvent('progress', [this, image, elem]);
           if (this.jqDeferred && this.jqDeferred.notify) {
               this.jqDeferred.notify(this, image);
           }
           if (this.progressedCount == this.images.length) {
               this.complete();
           }
           if (this.options.debug && console) {
               console.log('progress: ' + message, image, elem);
           }
       };
       ImagesLoaded.prototype.complete = function() {
           var eventName = this.hasAnyBroken ? 'fail' : 'done';
           this.isComplete = true;
           this.emitEvent(eventName, [this]);
           this.emitEvent('always', [this]);
           if (this.jqDeferred) {
               var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
               this.jqDeferred[jqMethod](this);
           }
       };
   
       function LoadingImage(img) {
           this.img = img;
       }
       LoadingImage.prototype = Object.create(EvEmitter.prototype);
       LoadingImage.prototype.check = function() {
           var isComplete = this.getIsImageComplete();
           if (isComplete) {
               this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
               return;
           }
           this.proxyImage = new Image();
           this.proxyImage.addEventListener('load', this);
           this.proxyImage.addEventListener('error', this);
           this.img.addEventListener('load', this);
           this.img.addEventListener('error', this);
           this.proxyImage.src = this.img.src;
       };
       LoadingImage.prototype.getIsImageComplete = function() {
           return this.img.complete && this.img.naturalWidth;
       };
       LoadingImage.prototype.confirm = function(isLoaded, message) {
           this.isLoaded = isLoaded;
           this.emitEvent('progress', [this, this.img, message]);
       };
       LoadingImage.prototype.handleEvent = function(event) {
           var method = 'on' + event.type;
           if (this[method]) {
               this[method](event);
           }
       };
       LoadingImage.prototype.onload = function() {
           this.confirm(true, 'onload');
           this.unbindEvents();
       };
       LoadingImage.prototype.onerror = function() {
           this.confirm(false, 'onerror');
           this.unbindEvents();
       };
       LoadingImage.prototype.unbindEvents = function() {
           this.proxyImage.removeEventListener('load', this);
           this.proxyImage.removeEventListener('error', this);
           this.img.removeEventListener('load', this);
           this.img.removeEventListener('error', this);
       };
   
       function Background(url, element) {
           this.url = url;
           this.element = element;
           this.img = new Image();
       }
       Background.prototype = Object.create(LoadingImage.prototype);
       Background.prototype.check = function() {
           this.img.addEventListener('load', this);
           this.img.addEventListener('error', this);
           this.img.src = this.url;
           var isComplete = this.getIsImageComplete();
           if (isComplete) {
               this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
               this.unbindEvents();
           }
       };
       Background.prototype.unbindEvents = function() {
           this.img.removeEventListener('load', this);
           this.img.removeEventListener('error', this);
       };
       Background.prototype.confirm = function(isLoaded, message) {
           this.isLoaded = isLoaded;
           this.emitEvent('progress', [this, this.element, message]);
       };
       ImagesLoaded.makeJQueryPlugin = function(jQuery) {
           jQuery = jQuery || window.jQuery;
           if (!jQuery) {
               return;
           }
           $ = jQuery;
           $.fn.imagesLoaded = function(options, callback) {
               var instance = new ImagesLoaded(this, options, callback);
               return instance.jqDeferred.promise($(this));
           };
       };
       ImagesLoaded.makeJQueryPlugin();
       return ImagesLoaded;
   });
   /*!
    * Isotope PACKAGED v3.0.6
    *
    * Licensed GPLv3 for open source use
    * or Isotope Commercial License for commercial use
    *
    * https://isotope.metafizzy.co
    * Copyright 2010-2018 Metafizzy
    */
   (function(window, factory) {
       if (typeof define == 'function' && define.amd) {
           define('jquery-bridget/jquery-bridget', ['jquery'], function(jQuery) {
               return factory(window, jQuery);
           });
       } else if (typeof module == 'object' && module.exports) {
           module.exports = factory(window, require('jquery'));
       } else {
           window.jQueryBridget = factory(window, window.jQuery);
       }
   }(window, function factory(window, jQuery) {
       'use strict';
       var arraySlice = Array.prototype.slice;
       var console = window.console;
       var logError = typeof console == 'undefined' ? function() {} : function(message) {
           console.error(message);
       };
   
       function jQueryBridget(namespace, PluginClass, $) {
           $ = $ || jQuery || window.jQuery;
           if (!$) {
               return;
           }
           if (!PluginClass.prototype.option) {
               PluginClass.prototype.option = function(opts) {
                   if (!$.isPlainObject(opts)) {
                       return;
                   }
                   this.options = $.extend(true, this.options, opts);
               };
           }
           $.fn[namespace] = function(arg0) {
               if (typeof arg0 == 'string') {
                   var args = arraySlice.call(arguments, 1);
                   return methodCall(this, arg0, args);
               }
               plainCall(this, arg0);
               return this;
           };
   
           function methodCall($elems, methodName, args) {
               var returnValue;
               var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';
               $elems.each(function(i, elem) {
                   var instance = $.data(elem, namespace);
                   if (!instance) {
                       logError(namespace + ' not initialized. Cannot call methods, i.e. ' +
                           pluginMethodStr);
                       return;
                   }
                   var method = instance[methodName];
                   if (!method || methodName.charAt(0) == '_') {
                       logError(pluginMethodStr + ' is not a valid method');
                       return;
                   }
                   var value = method.apply(instance, args);
                   returnValue = returnValue === undefined ? value : returnValue;
               });
               return returnValue !== undefined ? returnValue : $elems;
           }
   
           function plainCall($elems, options) {
               $elems.each(function(i, elem) {
                   var instance = $.data(elem, namespace);
                   if (instance) {
                       instance.option(options);
                       instance._init();
                   } else {
                       instance = new PluginClass(elem, options);
                       $.data(elem, namespace, instance);
                   }
               });
           }
           updateJQuery($);
       }
   
       function updateJQuery($) {
           if (!$ || ($ && $.bridget)) {
               return;
           }
           $.bridget = jQueryBridget;
       }
       updateJQuery(jQuery || window.jQuery);
       return jQueryBridget;
   }));
   (function(global, factory) {
       if (typeof define == 'function' && define.amd) {
           define('ev-emitter/ev-emitter', factory);
       } else if (typeof module == 'object' && module.exports) {
           module.exports = factory();
       } else {
           global.EvEmitter = factory();
       }
   }(typeof window != 'undefined' ? window : this, function() {
       function EvEmitter() {}
       var proto = EvEmitter.prototype;
       proto.on = function(eventName, listener) {
           if (!eventName || !listener) {
               return;
           }
           var events = this._events = this._events || {};
           var listeners = events[eventName] = events[eventName] || [];
           if (listeners.indexOf(listener) == -1) {
               listeners.push(listener);
           }
           return this;
       };
       proto.once = function(eventName, listener) {
           if (!eventName || !listener) {
               return;
           }
           this.on(eventName, listener);
           var onceEvents = this._onceEvents = this._onceEvents || {};
           var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
           onceListeners[listener] = true;
           return this;
       };
       proto.off = function(eventName, listener) {
           var listeners = this._events && this._events[eventName];
           if (!listeners || !listeners.length) {
               return;
           }
           var index = listeners.indexOf(listener);
           if (index != -1) {
               listeners.splice(index, 1);
           }
           return this;
       };
       proto.emitEvent = function(eventName, args) {
           var listeners = this._events && this._events[eventName];
           if (!listeners || !listeners.length) {
               return;
           }
           listeners = listeners.slice(0);
           args = args || [];
           var onceListeners = this._onceEvents && this._onceEvents[eventName];
           for (var i = 0; i < listeners.length; i++) {
               var listener = listeners[i]
               var isOnce = onceListeners && onceListeners[listener];
               if (isOnce) {
                   this.off(eventName, listener);
                   delete onceListeners[listener];
               }
               listener.apply(this, args);
           }
           return this;
       };
       proto.allOff = function() {
           delete this._events;
           delete this._onceEvents;
       };
       return EvEmitter;
   }));
   /*!
    * getSize v2.0.3
    * measure size of elements
    * MIT license
    */
   (function(window, factory) {
       if (typeof define == 'function' && define.amd) {
           define('get-size/get-size', factory);
       } else if (typeof module == 'object' && module.exports) {
           module.exports = factory();
       } else {
           window.getSize = factory();
       }
   })(window, function factory() {
       'use strict';
   
       function getStyleSize(value) {
           var num = parseFloat(value);
           var isValid = value.indexOf('%') == -1 && !isNaN(num);
           return isValid && num;
       }
   
       function noop() {}
       var logError = typeof console == 'undefined' ? noop : function(message) {
           console.error(message);
       };
       var measurements = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'];
       var measurementsLength = measurements.length;
   
       function getZeroSize() {
           var size = {
               width: 0,
               height: 0,
               innerWidth: 0,
               innerHeight: 0,
               outerWidth: 0,
               outerHeight: 0
           };
           for (var i = 0; i < measurementsLength; i++) {
               var measurement = measurements[i];
               size[measurement] = 0;
           }
           return size;
       }
   
       function getStyle(elem) {
           var style = getComputedStyle(elem);
           if (!style) {
               logError('Style returned ' + style + '. Are you running this code in a hidden iframe on Firefox? ' + 'See https://bit.ly/getsizebug1');
           }
           return style;
       }
       var isSetup = false;
       var isBoxSizeOuter;
   
       function setup() {
           if (isSetup) {
               return;
           }
           isSetup = true;
           var div = document.createElement('div');
           div.style.width = '200px';
           div.style.padding = '1px 2px 3px 4px';
           div.style.borderStyle = 'solid';
           div.style.borderWidth = '1px 2px 3px 4px';
           div.style.boxSizing = 'border-box';
           var body = document.body || document.documentElement;
           body.appendChild(div);
           var style = getStyle(div);
           isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
           getSize.isBoxSizeOuter = isBoxSizeOuter;
           body.removeChild(div);
       }
   
       function getSize(elem) {
           setup();
           if (typeof elem == 'string') {
               elem = document.querySelector(elem);
           }
           if (!elem || typeof elem != 'object' || !elem.nodeType) {
               return;
           }
           var style = getStyle(elem);
           if (style.display == 'none') {
               return getZeroSize();
           }
           var size = {};
           size.width = elem.offsetWidth;
           size.height = elem.offsetHeight;
           var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';
           for (var i = 0; i < measurementsLength; i++) {
               var measurement = measurements[i];
               var value = style[measurement];
               var num = parseFloat(value);
               size[measurement] = !isNaN(num) ? num : 0;
           }
           var paddingWidth = size.paddingLeft + size.paddingRight;
           var paddingHeight = size.paddingTop + size.paddingBottom;
           var marginWidth = size.marginLeft + size.marginRight;
           var marginHeight = size.marginTop + size.marginBottom;
           var borderWidth = size.borderLeftWidth + size.borderRightWidth;
           var borderHeight = size.borderTopWidth + size.borderBottomWidth;
           var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
           var styleWidth = getStyleSize(style.width);
           if (styleWidth !== false) {
               size.width = styleWidth +
                   (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
           }
           var styleHeight = getStyleSize(style.height);
           if (styleHeight !== false) {
               size.height = styleHeight +
                   (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
           }
           size.innerWidth = size.width - (paddingWidth + borderWidth);
           size.innerHeight = size.height - (paddingHeight + borderHeight);
           size.outerWidth = size.width + marginWidth;
           size.outerHeight = size.height + marginHeight;
           return size;
       }
       return getSize;
   });
   (function(window, factory) {
       'use strict';
       if (typeof define == 'function' && define.amd) {
           define('desandro-matches-selector/matches-selector', factory);
       } else if (typeof module == 'object' && module.exports) {
           module.exports = factory();
       } else {
           window.matchesSelector = factory();
       }
   }(window, function factory() {
       'use strict';
       var matchesMethod = (function() {
           var ElemProto = window.Element.prototype;
           if (ElemProto.matches) {
               return 'matches';
           }
           if (ElemProto.matchesSelector) {
               return 'matchesSelector';
           }
           var prefixes = ['webkit', 'moz', 'ms', 'o'];
           for (var i = 0; i < prefixes.length; i++) {
               var prefix = prefixes[i];
               var method = prefix + 'MatchesSelector';
               if (ElemProto[method]) {
                   return method;
               }
           }
       })();
       return function matchesSelector(elem, selector) {
           return elem[matchesMethod](selector);
       };
   }));
   (function(window, factory) {
       if (typeof define == 'function' && define.amd) {
           define('fizzy-ui-utils/utils', ['desandro-matches-selector/matches-selector'], function(matchesSelector) {
               return factory(window, matchesSelector);
           });
       } else if (typeof module == 'object' && module.exports) {
           module.exports = factory(window, require('desandro-matches-selector'));
       } else {
           window.fizzyUIUtils = factory(window, window.matchesSelector);
       }
   }(window, function factory(window, matchesSelector) {
       var utils = {};
       utils.extend = function(a, b) {
           for (var prop in b) {
               a[prop] = b[prop];
           }
           return a;
       };
       utils.modulo = function(num, div) {
           return ((num % div) + div) % div;
       };
       var arraySlice = Array.prototype.slice;
       utils.makeArray = function(obj) {
           if (Array.isArray(obj)) {
               return obj;
           }
           if (obj === null || obj === undefined) {
               return [];
           }
           var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
           if (isArrayLike) {
               return arraySlice.call(obj);
           }
           return [obj];
       };
       utils.removeFrom = function(ary, obj) {
           var index = ary.indexOf(obj);
           if (index != -1) {
               ary.splice(index, 1);
           }
       };
       utils.getParent = function(elem, selector) {
           while (elem.parentNode && elem != document.body) {
               elem = elem.parentNode;
               if (matchesSelector(elem, selector)) {
                   return elem;
               }
           }
       };
       utils.getQueryElement = function(elem) {
           if (typeof elem == 'string') {
               return document.querySelector(elem);
           }
           return elem;
       };
       utils.handleEvent = function(event) {
           var method = 'on' + event.type;
           if (this[method]) {
               this[method](event);
           }
       };
       utils.filterFindElements = function(elems, selector) {
           elems = utils.makeArray(elems);
           var ffElems = [];
           elems.forEach(function(elem) {
               if (!(elem instanceof HTMLElement)) {
                   return;
               }
               if (!selector) {
                   ffElems.push(elem);
                   return;
               }
               if (matchesSelector(elem, selector)) {
                   ffElems.push(elem);
               }
               var childElems = elem.querySelectorAll(selector);
               for (var i = 0; i < childElems.length; i++) {
                   ffElems.push(childElems[i]);
               }
           });
           return ffElems;
       };
       utils.debounceMethod = function(_class, methodName, threshold) {
           threshold = threshold || 100;
           var method = _class.prototype[methodName];
           var timeoutName = methodName + 'Timeout';
           _class.prototype[methodName] = function() {
               var timeout = this[timeoutName];
               clearTimeout(timeout);
               var args = arguments;
               var _this = this;
               this[timeoutName] = setTimeout(function() {
                   method.apply(_this, args);
                   delete _this[timeoutName];
               }, threshold);
           };
       };
       utils.docReady = function(callback) {
           var readyState = document.readyState;
           if (readyState == 'complete' || readyState == 'interactive') {
               setTimeout(callback);
           } else {
               document.addEventListener('DOMContentLoaded', callback);
           }
       };
       utils.toDashed = function(str) {
           return str.replace(/(.)([A-Z])/g, function(match, $1, $2) {
               return $1 + '-' + $2;
           }).toLowerCase();
       };
       var console = window.console;
       utils.htmlInit = function(WidgetClass, namespace) {
           utils.docReady(function() {
               var dashedNamespace = utils.toDashed(namespace);
               var dataAttr = 'data-' + dashedNamespace;
               var dataAttrElems = document.querySelectorAll('[' + dataAttr + ']');
               var jsDashElems = document.querySelectorAll('.js-' + dashedNamespace);
               var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
               var dataOptionsAttr = dataAttr + '-options';
               var jQuery = window.jQuery;
               elems.forEach(function(elem) {
                   var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
                   var options;
                   try {
                       options = attr && JSON.parse(attr);
                   } catch (error) {
                       if (console) {
                           console.error('Error parsing ' + dataAttr + ' on ' + elem.className + ': ' + error);
                       }
                       return;
                   }
                   var instance = new WidgetClass(elem, options);
                   if (jQuery) {
                       jQuery.data(elem, namespace, instance);
                   }
               });
           });
       };
       return utils;
   }));
   (function(window, factory) {
       if (typeof define == 'function' && define.amd) {
           define('outlayer/item', ['ev-emitter/ev-emitter', 'get-size/get-size'], factory);
       } else if (typeof module == 'object' && module.exports) {
           module.exports = factory(require('ev-emitter'), require('get-size'));
       } else {
           window.Outlayer = {};
           window.Outlayer.Item = factory(window.EvEmitter, window.getSize);
       }
   }(window, function factory(EvEmitter, getSize) {
       'use strict';
   
       function isEmptyObj(obj) {
           for (var prop in obj) {
               return false;
           }
           prop = null;
           return true;
       }
       var docElemStyle = document.documentElement.style;
       var transitionProperty = typeof docElemStyle.transition == 'string' ? 'transition' : 'WebkitTransition';
       var transformProperty = typeof docElemStyle.transform == 'string' ? 'transform' : 'WebkitTransform';
       var transitionEndEvent = {
           WebkitTransition: 'webkitTransitionEnd',
           transition: 'transitionend'
       } [transitionProperty];
       var vendorProperties = {
           transform: transformProperty,
           transition: transitionProperty,
           transitionDuration: transitionProperty + 'Duration',
           transitionProperty: transitionProperty + 'Property',
           transitionDelay: transitionProperty + 'Delay'
       };
   
       function Item(element, layout) {
           if (!element) {
               return;
           }
           this.element = element;
           this.layout = layout;
           this.position = {
               x: 0,
               y: 0
           };
           this._create();
       }
       var proto = Item.prototype = Object.create(EvEmitter.prototype);
       proto.constructor = Item;
       proto._create = function() {
           this._transn = {
               ingProperties: {},
               clean: {},
               onEnd: {}
           };
           this.css({
               position: 'absolute'
           });
       };
       proto.handleEvent = function(event) {
           var method = 'on' + event.type;
           if (this[method]) {
               this[method](event);
           }
       };
       proto.getSize = function() {
           this.size = getSize(this.element);
       };
       proto.css = function(style) {
           var elemStyle = this.element.style;
           for (var prop in style) {
               var supportedProp = vendorProperties[prop] || prop;
               elemStyle[supportedProp] = style[prop];
           }
       };
       proto.getPosition = function() {
           var style = getComputedStyle(this.element);
           var isOriginLeft = this.layout._getOption('originLeft');
           var isOriginTop = this.layout._getOption('originTop');
           var xValue = style[isOriginLeft ? 'left' : 'right'];
           var yValue = style[isOriginTop ? 'top' : 'bottom'];
           var x = parseFloat(xValue);
           var y = parseFloat(yValue);
           var layoutSize = this.layout.size;
           if (xValue.indexOf('%') != -1) {
               x = (x / 100) * layoutSize.width;
           }
           if (yValue.indexOf('%') != -1) {
               y = (y / 100) * layoutSize.height;
           }
           x = isNaN(x) ? 0 : x;
           y = isNaN(y) ? 0 : y;
           x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
           y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
           this.position.x = x;
           this.position.y = y;
       };
       proto.layoutPosition = function() {
           var layoutSize = this.layout.size;
           var style = {};
           var isOriginLeft = this.layout._getOption('originLeft');
           var isOriginTop = this.layout._getOption('originTop');
           var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
           var xProperty = isOriginLeft ? 'left' : 'right';
           var xResetProperty = isOriginLeft ? 'right' : 'left';
           var x = this.position.x + layoutSize[xPadding];
           style[xProperty] = this.getXValue(x);
           style[xResetProperty] = '';
           var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
           var yProperty = isOriginTop ? 'top' : 'bottom';
           var yResetProperty = isOriginTop ? 'bottom' : 'top';
           var y = this.position.y + layoutSize[yPadding];
           style[yProperty] = this.getYValue(y);
           style[yResetProperty] = '';
           this.css(style);
           this.emitEvent('layout', [this]);
       };
       proto.getXValue = function(x) {
           var isHorizontal = this.layout._getOption('horizontal');
           return this.layout.options.percentPosition && !isHorizontal ? ((x / this.layout.size.width) * 100) + '%' : x + 'px';
       };
       proto.getYValue = function(y) {
           var isHorizontal = this.layout._getOption('horizontal');
           return this.layout.options.percentPosition && isHorizontal ? ((y / this.layout.size.height) * 100) + '%' : y + 'px';
       };
       proto._transitionTo = function(x, y) {
           this.getPosition();
           var curX = this.position.x;
           var curY = this.position.y;
           var didNotMove = x == this.position.x && y == this.position.y;
           this.setPosition(x, y);
           if (didNotMove && !this.isTransitioning) {
               this.layoutPosition();
               return;
           }
           var transX = x - curX;
           var transY = y - curY;
           var transitionStyle = {};
           transitionStyle.transform = this.getTranslate(transX, transY);
           this.transition({
               to: transitionStyle,
               onTransitionEnd: {
                   transform: this.layoutPosition
               },
               isCleaning: true
           });
       };
       proto.getTranslate = function(x, y) {
           var isOriginLeft = this.layout._getOption('originLeft');
           var isOriginTop = this.layout._getOption('originTop');
           x = isOriginLeft ? x : -x;
           y = isOriginTop ? y : -y;
           return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
       };
       proto.goTo = function(x, y) {
           this.setPosition(x, y);
           this.layoutPosition();
       };
       proto.moveTo = proto._transitionTo;
       proto.setPosition = function(x, y) {
           this.position.x = parseFloat(x);
           this.position.y = parseFloat(y);
       };
       proto._nonTransition = function(args) {
           this.css(args.to);
           if (args.isCleaning) {
               this._removeStyles(args.to);
           }
           for (var prop in args.onTransitionEnd) {
               args.onTransitionEnd[prop].call(this);
           }
       };
       proto.transition = function(args) {
           if (!parseFloat(this.layout.options.transitionDuration)) {
               this._nonTransition(args);
               return;
           }
           var _transition = this._transn;
           for (var prop in args.onTransitionEnd) {
               _transition.onEnd[prop] = args.onTransitionEnd[prop];
           }
           for (prop in args.to) {
               _transition.ingProperties[prop] = true;
               if (args.isCleaning) {
                   _transition.clean[prop] = true;
               }
           }
           if (args.from) {
               this.css(args.from);
               var h = this.element.offsetHeight;
               h = null;
           }
           this.enableTransition(args.to);
           this.css(args.to);
           this.isTransitioning = true;
       };
   
       function toDashedAll(str) {
           return str.replace(/([A-Z])/g, function($1) {
               return '-' + $1.toLowerCase();
           });
       }
       var transitionProps = 'opacity,' + toDashedAll(transformProperty);
       proto.enableTransition = function() {
           if (this.isTransitioning) {
               return;
           }
           var duration = this.layout.options.transitionDuration;
           duration = typeof duration == 'number' ? duration + 'ms' : duration;
           this.css({
               transitionProperty: transitionProps,
               transitionDuration: duration,
               transitionDelay: this.staggerDelay || 0
           });
           this.element.addEventListener(transitionEndEvent, this, false);
       };
       proto.onwebkitTransitionEnd = function(event) {
           this.ontransitionend(event);
       };
       proto.onotransitionend = function(event) {
           this.ontransitionend(event);
       };
       var dashedVendorProperties = {
           '-webkit-transform': 'transform'
       };
       proto.ontransitionend = function(event) {
           if (event.target !== this.element) {
               return;
           }
           var _transition = this._transn;
           var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;
           delete _transition.ingProperties[propertyName];
           if (isEmptyObj(_transition.ingProperties)) {
               this.disableTransition();
           }
           if (propertyName in _transition.clean) {
               this.element.style[event.propertyName] = '';
               delete _transition.clean[propertyName];
           }
           if (propertyName in _transition.onEnd) {
               var onTransitionEnd = _transition.onEnd[propertyName];
               onTransitionEnd.call(this);
               delete _transition.onEnd[propertyName];
           }
           this.emitEvent('transitionEnd', [this]);
       };
       proto.disableTransition = function() {
           this.removeTransitionStyles();
           this.element.removeEventListener(transitionEndEvent, this, false);
           this.isTransitioning = false;
       };
       proto._removeStyles = function(style) {
           var cleanStyle = {};
           for (var prop in style) {
               cleanStyle[prop] = '';
           }
           this.css(cleanStyle);
       };
       var cleanTransitionStyle = {
           transitionProperty: '',
           transitionDuration: '',
           transitionDelay: ''
       };
       proto.removeTransitionStyles = function() {
           this.css(cleanTransitionStyle);
       };
       proto.stagger = function(delay) {
           delay = isNaN(delay) ? 0 : delay;
           this.staggerDelay = delay + 'ms';
       };
       proto.removeElem = function() {
           this.element.parentNode.removeChild(this.element);
           this.css({
               display: ''
           });
           this.emitEvent('remove', [this]);
       };
       proto.remove = function() {
           if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
               this.removeElem();
               return;
           }
           this.once('transitionEnd', function() {
               this.removeElem();
           });
           this.hide();
       };
       proto.reveal = function() {
           delete this.isHidden;
           this.css({
               display: ''
           });
           var options = this.layout.options;
           var onTransitionEnd = {};
           var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
           onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
           this.transition({
               from: options.hiddenStyle,
               to: options.visibleStyle,
               isCleaning: true,
               onTransitionEnd: onTransitionEnd
           });
       };
       proto.onRevealTransitionEnd = function() {
           if (!this.isHidden) {
               this.emitEvent('reveal');
           }
       };
       proto.getHideRevealTransitionEndProperty = function(styleProperty) {
           var optionStyle = this.layout.options[styleProperty];
           if (optionStyle.opacity) {
               return 'opacity';
           }
           for (var prop in optionStyle) {
               return prop;
           }
       };
       proto.hide = function() {
           this.isHidden = true;
           this.css({
               display: ''
           });
           var options = this.layout.options;
           var onTransitionEnd = {};
           var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
           onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
           this.transition({
               from: options.visibleStyle,
               to: options.hiddenStyle,
               isCleaning: true,
               onTransitionEnd: onTransitionEnd
           });
       };
       proto.onHideTransitionEnd = function() {
           if (this.isHidden) {
               this.css({
                   display: 'none'
               });
               this.emitEvent('hide');
           }
       };
       proto.destroy = function() {
           this.css({
               position: '',
               left: '',
               right: '',
               top: '',
               bottom: '',
               transition: '',
               transform: ''
           });
       };
       return Item;
   }));
   /*!
    * Outlayer v2.1.1
    * the brains and guts of a layout library
    * MIT license
    */
   (function(window, factory) {
       'use strict';
       if (typeof define == 'function' && define.amd) {
           define('outlayer/outlayer', ['ev-emitter/ev-emitter', 'get-size/get-size', 'fizzy-ui-utils/utils', './item'], function(EvEmitter, getSize, utils, Item) {
               return factory(window, EvEmitter, getSize, utils, Item);
           });
       } else if (typeof module == 'object' && module.exports) {
           module.exports = factory(window, require('ev-emitter'), require('get-size'), require('fizzy-ui-utils'), require('./item'));
       } else {
           window.Outlayer = factory(window, window.EvEmitter, window.getSize, window.fizzyUIUtils, window.Outlayer.Item);
       }
   }(window, function factory(window, EvEmitter, getSize, utils, Item) {
       'use strict';
       var console = window.console;
       var jQuery = window.jQuery;
       var noop = function() {};
       var GUID = 0;
       var instances = {};
   
       function Outlayer(element, options) {
           var queryElement = utils.getQueryElement(element);
           if (!queryElement) {
               if (console) {
                   console.error('Bad element for ' + this.constructor.namespace + ': ' + (queryElement || element));
               }
               return;
           }
           this.element = queryElement;
           if (jQuery) {
               this.$element = jQuery(this.element);
           }
           this.options = utils.extend({}, this.constructor.defaults);
           this.option(options);
           var id = ++GUID;
           this.element.outlayerGUID = id;
           instances[id] = this;
           this._create();
           var isInitLayout = this._getOption('initLayout');
           if (isInitLayout) {
               this.layout();
           }
       }
       Outlayer.namespace = 'outlayer';
       Outlayer.Item = Item;
       Outlayer.defaults = {
           containerStyle: {
               position: 'relative'
           },
           initLayout: true,
           originLeft: true,
           originTop: true,
           resize: true,
           resizeContainer: true,
           transitionDuration: '0.4s',
           hiddenStyle: {
               opacity: 0,
               transform: 'scale(0.001)'
           },
           visibleStyle: {
               opacity: 1,
               transform: 'scale(1)'
           }
       };
       var proto = Outlayer.prototype;
       utils.extend(proto, EvEmitter.prototype);
       proto.option = function(opts) {
           utils.extend(this.options, opts);
       };
       proto._getOption = function(option) {
           var oldOption = this.constructor.compatOptions[option];
           return oldOption && this.options[oldOption] !== undefined ? this.options[oldOption] : this.options[option];
       };
       Outlayer.compatOptions = {
           initLayout: 'isInitLayout',
           horizontal: 'isHorizontal',
           layoutInstant: 'isLayoutInstant',
           originLeft: 'isOriginLeft',
           originTop: 'isOriginTop',
           resize: 'isResizeBound',
           resizeContainer: 'isResizingContainer'
       };
       proto._create = function() {
           this.reloadItems();
           this.stamps = [];
           this.stamp(this.options.stamp);
           utils.extend(this.element.style, this.options.containerStyle);
           var canBindResize = this._getOption('resize');
           if (canBindResize) {
               this.bindResize();
           }
       };
       proto.reloadItems = function() {
           this.items = this._itemize(this.element.children);
       };
       proto._itemize = function(elems) {
           var itemElems = this._filterFindItemElements(elems);
           var Item = this.constructor.Item;
           var items = [];
           for (var i = 0; i < itemElems.length; i++) {
               var elem = itemElems[i];
               var item = new Item(elem, this);
               items.push(item);
           }
           return items;
       };
       proto._filterFindItemElements = function(elems) {
           return utils.filterFindElements(elems, this.options.itemSelector);
       };
       proto.getItemElements = function() {
           return this.items.map(function(item) {
               return item.element;
           });
       };
       proto.layout = function() {
           this._resetLayout();
           this._manageStamps();
           var layoutInstant = this._getOption('layoutInstant');
           var isInstant = layoutInstant !== undefined ? layoutInstant : !this._isLayoutInited;
           this.layoutItems(this.items, isInstant);
           this._isLayoutInited = true;
       };
       proto._init = proto.layout;
       proto._resetLayout = function() {
           this.getSize();
       };
       proto.getSize = function() {
           this.size = getSize(this.element);
       };
       proto._getMeasurement = function(measurement, size) {
           var option = this.options[measurement];
           var elem;
           if (!option) {
               this[measurement] = 0;
           } else {
               if (typeof option == 'string') {
                   elem = this.element.querySelector(option);
               } else if (option instanceof HTMLElement) {
                   elem = option;
               }
               this[measurement] = elem ? getSize(elem)[size] : option;
           }
       };
       proto.layoutItems = function(items, isInstant) {
           items = this._getItemsForLayout(items);
           this._layoutItems(items, isInstant);
           this._postLayout();
       };
       proto._getItemsForLayout = function(items) {
           return items.filter(function(item) {
               return !item.isIgnored;
           });
       };
       proto._layoutItems = function(items, isInstant) {
           this._emitCompleteOnItems('layout', items);
           if (!items || !items.length) {
               return;
           }
           var queue = [];
           items.forEach(function(item) {
               var position = this._getItemLayoutPosition(item);
               position.item = item;
               position.isInstant = isInstant || item.isLayoutInstant;
               queue.push(position);
           }, this);
           this._processLayoutQueue(queue);
       };
       proto._getItemLayoutPosition = function() {
           return {
               x: 0,
               y: 0
           };
       };
       proto._processLayoutQueue = function(queue) {
           this.updateStagger();
           queue.forEach(function(obj, i) {
               this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
           }, this);
       };
       proto.updateStagger = function() {
           var stagger = this.options.stagger;
           if (stagger === null || stagger === undefined) {
               this.stagger = 0;
               return;
           }
           this.stagger = getMilliseconds(stagger);
           return this.stagger;
       };
       proto._positionItem = function(item, x, y, isInstant, i) {
           if (isInstant) {
               item.goTo(x, y);
           } else {
               item.stagger(i * this.stagger);
               item.moveTo(x, y);
           }
       };
       proto._postLayout = function() {
           this.resizeContainer();
       };
       proto.resizeContainer = function() {
           var isResizingContainer = this._getOption('resizeContainer');
           if (!isResizingContainer) {
               return;
           }
           var size = this._getContainerSize();
           if (size) {
               this._setContainerMeasure(size.width, true);
               this._setContainerMeasure(size.height, false);
           }
       };
       proto._getContainerSize = noop;
       proto._setContainerMeasure = function(measure, isWidth) {
           if (measure === undefined) {
               return;
           }
           var elemSize = this.size;
           if (elemSize.isBorderBox) {
               measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
                   elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop +
                   elemSize.borderTopWidth + elemSize.borderBottomWidth;
           }
           measure = Math.max(measure, 0);
           this.element.style[isWidth ? 'width' : 'height'] = measure + 'px';
       };
       proto._emitCompleteOnItems = function(eventName, items) {
           var _this = this;
   
           function onComplete() {
               _this.dispatchEvent(eventName + 'Complete', null, [items]);
           }
           var count = items.length;
           if (!items || !count) {
               onComplete();
               return;
           }
           var doneCount = 0;
   
           function tick() {
               doneCount++;
               if (doneCount == count) {
                   onComplete();
               }
           }
           items.forEach(function(item) {
               item.once(eventName, tick);
           });
       };
       proto.dispatchEvent = function(type, event, args) {
           var emitArgs = event ? [event].concat(args) : args;
           this.emitEvent(type, emitArgs);
           if (jQuery) {
               this.$element = this.$element || jQuery(this.element);
               if (event) {
                   var $event = jQuery.Event(event);
                   $event.type = type;
                   this.$element.trigger($event, args);
               } else {
                   this.$element.trigger(type, args);
               }
           }
       };
       proto.ignore = function(elem) {
           var item = this.getItem(elem);
           if (item) {
               item.isIgnored = true;
           }
       };
       proto.unignore = function(elem) {
           var item = this.getItem(elem);
           if (item) {
               delete item.isIgnored;
           }
       };
       proto.stamp = function(elems) {
           elems = this._find(elems);
           if (!elems) {
               return;
           }
           this.stamps = this.stamps.concat(elems);
           elems.forEach(this.ignore, this);
       };
       proto.unstamp = function(elems) {
           elems = this._find(elems);
           if (!elems) {
               return;
           }
           elems.forEach(function(elem) {
               utils.removeFrom(this.stamps, elem);
               this.unignore(elem);
           }, this);
       };
       proto._find = function(elems) {
           if (!elems) {
               return;
           }
           if (typeof elems == 'string') {
               elems = this.element.querySelectorAll(elems);
           }
           elems = utils.makeArray(elems);
           return elems;
       };
       proto._manageStamps = function() {
           if (!this.stamps || !this.stamps.length) {
               return;
           }
           this._getBoundingRect();
           this.stamps.forEach(this._manageStamp, this);
       };
       proto._getBoundingRect = function() {
           var boundingRect = this.element.getBoundingClientRect();
           var size = this.size;
           this._boundingRect = {
               left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
               top: boundingRect.top + size.paddingTop + size.borderTopWidth,
               right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
               bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
           };
       };
       proto._manageStamp = noop;
       proto._getElementOffset = function(elem) {
           var boundingRect = elem.getBoundingClientRect();
           var thisRect = this._boundingRect;
           var size = getSize(elem);
           var offset = {
               left: boundingRect.left - thisRect.left - size.marginLeft,
               top: boundingRect.top - thisRect.top - size.marginTop,
               right: thisRect.right - boundingRect.right - size.marginRight,
               bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
           };
           return offset;
       };
       proto.handleEvent = utils.handleEvent;
       proto.bindResize = function() {
           window.addEventListener('resize', this);
           this.isResizeBound = true;
       };
       proto.unbindResize = function() {
           window.removeEventListener('resize', this);
           this.isResizeBound = false;
       };
       proto.onresize = function() {
           this.resize();
       };
       utils.debounceMethod(Outlayer, 'onresize', 100);
       proto.resize = function() {
           if (!this.isResizeBound || !this.needsResizeLayout()) {
               return;
           }
           this.layout();
       };
       proto.needsResizeLayout = function() {
           var size = getSize(this.element);
           var hasSizes = this.size && size;
           return hasSizes && size.innerWidth !== this.size.innerWidth;
       };
       proto.addItems = function(elems) {
           var items = this._itemize(elems);
           if (items.length) {
               this.items = this.items.concat(items);
           }
           return items;
       };
       proto.appended = function(elems) {
           var items = this.addItems(elems);
           if (!items.length) {
               return;
           }
           this.layoutItems(items, true);
           this.reveal(items);
       };
       proto.prepended = function(elems) {
           var items = this._itemize(elems);
           if (!items.length) {
               return;
           }
           var previousItems = this.items.slice(0);
           this.items = items.concat(previousItems);
           this._resetLayout();
           this._manageStamps();
           this.layoutItems(items, true);
           this.reveal(items);
           this.layoutItems(previousItems);
       };
       proto.reveal = function(items) {
           this._emitCompleteOnItems('reveal', items);
           if (!items || !items.length) {
               return;
           }
           var stagger = this.updateStagger();
           items.forEach(function(item, i) {
               item.stagger(i * stagger);
               item.reveal();
           });
       };
       proto.hide = function(items) {
           this._emitCompleteOnItems('hide', items);
           if (!items || !items.length) {
               return;
           }
           var stagger = this.updateStagger();
           items.forEach(function(item, i) {
               item.stagger(i * stagger);
               item.hide();
           });
       };
       proto.revealItemElements = function(elems) {
           var items = this.getItems(elems);
           this.reveal(items);
       };
       proto.hideItemElements = function(elems) {
           var items = this.getItems(elems);
           this.hide(items);
       };
       proto.getItem = function(elem) {
           for (var i = 0; i < this.items.length; i++) {
               var item = this.items[i];
               if (item.element == elem) {
                   return item;
               }
           }
       };
       proto.getItems = function(elems) {
           elems = utils.makeArray(elems);
           var items = [];
           elems.forEach(function(elem) {
               var item = this.getItem(elem);
               if (item) {
                   items.push(item);
               }
           }, this);
           return items;
       };
       proto.remove = function(elems) {
           var removeItems = this.getItems(elems);
           this._emitCompleteOnItems('remove', removeItems);
           if (!removeItems || !removeItems.length) {
               return;
           }
           removeItems.forEach(function(item) {
               item.remove();
               utils.removeFrom(this.items, item);
           }, this);
       };
       proto.destroy = function() {
           var style = this.element.style;
           style.height = '';
           style.position = '';
           style.width = '';
           this.items.forEach(function(item) {
               item.destroy();
           });
           this.unbindResize();
           var id = this.element.outlayerGUID;
           delete instances[id];
           delete this.element.outlayerGUID;
           if (jQuery) {
               jQuery.removeData(this.element, this.constructor.namespace);
           }
       };
       Outlayer.data = function(elem) {
           elem = utils.getQueryElement(elem);
           var id = elem && elem.outlayerGUID;
           return id && instances[id];
       };
       Outlayer.create = function(namespace, options) {
           var Layout = subclass(Outlayer);
           Layout.defaults = utils.extend({}, Outlayer.defaults);
           utils.extend(Layout.defaults, options);
           Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);
           Layout.namespace = namespace;
           Layout.data = Outlayer.data;
           Layout.Item = subclass(Item);
           utils.htmlInit(Layout, namespace);
           if (jQuery && jQuery.bridget) {
               jQuery.bridget(namespace, Layout);
           }
           return Layout;
       };
   
       function subclass(Parent) {
           function SubClass() {
               Parent.apply(this, arguments);
           }
           SubClass.prototype = Object.create(Parent.prototype);
           SubClass.prototype.constructor = SubClass;
           return SubClass;
       }
       var msUnits = {
           ms: 1,
           s: 1000
       };
   
       function getMilliseconds(time) {
           if (typeof time == 'number') {
               return time;
           }
           var matches = time.match(/(^\d*\.?\d*)(\w*)/);
           var num = matches && matches[1];
           var unit = matches && matches[2];
           if (!num.length) {
               return 0;
           }
           num = parseFloat(num);
           var mult = msUnits[unit] || 1;
           return num * mult;
       }
       Outlayer.Item = Item;
       return Outlayer;
   }));
   (function(window, factory) {
       if (typeof define == 'function' && define.amd) {
           define('isotope-layout/js/item', ['outlayer/outlayer'], factory);
       } else if (typeof module == 'object' && module.exports) {
           module.exports = factory(require('outlayer'));
       } else {
           window.Isotope = window.Isotope || {};
           window.Isotope.Item = factory(window.Outlayer);
       }
   }(window, function factory(Outlayer) {
       'use strict';
   
       function Item() {
           Outlayer.Item.apply(this, arguments);
       }
       var proto = Item.prototype = Object.create(Outlayer.Item.prototype);
       var _create = proto._create;
       proto._create = function() {
           this.id = this.layout.itemGUID++;
           _create.call(this);
           this.sortData = {};
       };
       proto.updateSortData = function() {
           if (this.isIgnored) {
               return;
           }
           this.sortData.id = this.id;
           this.sortData['original-order'] = this.id;
           this.sortData.random = Math.random();
           var getSortData = this.layout.options.getSortData;
           var sorters = this.layout._sorters;
           for (var key in getSortData) {
               var sorter = sorters[key];
               this.sortData[key] = sorter(this.element, this);
           }
       };
       var _destroy = proto.destroy;
       proto.destroy = function() {
           _destroy.apply(this, arguments);
           this.css({
               display: ''
           });
       };
       return Item;
   }));
   (function(window, factory) {
       if (typeof define == 'function' && define.amd) {
           define('isotope-layout/js/layout-mode', ['get-size/get-size', 'outlayer/outlayer'], factory);
       } else if (typeof module == 'object' && module.exports) {
           module.exports = factory(require('get-size'), require('outlayer'));
       } else {
           window.Isotope = window.Isotope || {};
           window.Isotope.LayoutMode = factory(window.getSize, window.Outlayer);
       }
   }(window, function factory(getSize, Outlayer) {
       'use strict';
   
       function LayoutMode(isotope) {
           this.isotope = isotope;
           if (isotope) {
               this.options = isotope.options[this.namespace];
               this.element = isotope.element;
               this.items = isotope.filteredItems;
               this.size = isotope.size;
           }
       }
       var proto = LayoutMode.prototype;
       var facadeMethods = ['_resetLayout', '_getItemLayoutPosition', '_manageStamp', '_getContainerSize', '_getElementOffset', 'needsResizeLayout', '_getOption'];
       facadeMethods.forEach(function(methodName) {
           proto[methodName] = function() {
               return Outlayer.prototype[methodName].apply(this.isotope, arguments);
           };
       });
       proto.needsVerticalResizeLayout = function() {
           var size = getSize(this.isotope.element);
           var hasSizes = this.isotope.size && size;
           return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
       };
       proto._getMeasurement = function() {
           this.isotope._getMeasurement.apply(this, arguments);
       };
       proto.getColumnWidth = function() {
           this.getSegmentSize('column', 'Width');
       };
       proto.getRowHeight = function() {
           this.getSegmentSize('row', 'Height');
       };
       proto.getSegmentSize = function(segment, size) {
           var segmentName = segment + size;
           var outerSize = 'outer' + size;
           this._getMeasurement(segmentName, outerSize);
           if (this[segmentName]) {
               return;
           }
           var firstItemSize = this.getFirstItemSize();
           this[segmentName] = firstItemSize && firstItemSize[outerSize] || this.isotope.size['inner' + size];
       };
       proto.getFirstItemSize = function() {
           var firstItem = this.isotope.filteredItems[0];
           return firstItem && firstItem.element && getSize(firstItem.element);
       };
       proto.layout = function() {
           this.isotope.layout.apply(this.isotope, arguments);
       };
       proto.getSize = function() {
           this.isotope.getSize();
           this.size = this.isotope.size;
       };
       LayoutMode.modes = {};
       LayoutMode.create = function(namespace, options) {
           function Mode() {
               LayoutMode.apply(this, arguments);
           }
           Mode.prototype = Object.create(proto);
           Mode.prototype.constructor = Mode;
           if (options) {
               Mode.options = options;
           }
           Mode.prototype.namespace = namespace;
           LayoutMode.modes[namespace] = Mode;
           return Mode;
       };
       return LayoutMode;
   }));
   /*!
    * Masonry v4.2.1
    * Cascading grid layout library
    * https://masonry.desandro.com
    * MIT License
    * by David DeSandro
    */
   (function(window, factory) {
       if (typeof define == 'function' && define.amd) {
           define('masonry-layout/masonry', ['outlayer/outlayer', 'get-size/get-size'], factory);
       } else if (typeof module == 'object' && module.exports) {
           module.exports = factory(require('outlayer'), require('get-size'));
       } else {
           window.Masonry = factory(window.Outlayer, window.getSize);
       }
   }(window, function factory(Outlayer, getSize) {
       var Masonry = Outlayer.create('masonry');
       Masonry.compatOptions.fitWidth = 'isFitWidth';
       var proto = Masonry.prototype;
       proto._resetLayout = function() {
           this.getSize();
           this._getMeasurement('columnWidth', 'outerWidth');
           this._getMeasurement('gutter', 'outerWidth');
           this.measureColumns();
           this.colYs = [];
           for (var i = 0; i < this.cols; i++) {
               this.colYs.push(0);
           }
           this.maxY = 0;
           this.horizontalColIndex = 0;
       };
       proto.measureColumns = function() {
           this.getContainerWidth();
           if (!this.columnWidth) {
               var firstItem = this.items[0];
               var firstItemElem = firstItem && firstItem.element;
               this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth || this.containerWidth;
           }
           var columnWidth = this.columnWidth += this.gutter;
           var containerWidth = this.containerWidth + this.gutter;
           var cols = containerWidth / columnWidth;
           var excess = columnWidth - containerWidth % columnWidth;
           var mathMethod = excess && excess < 1 ? 'round' : 'floor';
           cols = Math[mathMethod](cols);
           this.cols = Math.max(cols, 1);
       };
       proto.getContainerWidth = function() {
           var isFitWidth = this._getOption('fitWidth');
           var container = isFitWidth ? this.element.parentNode : this.element;
           var size = getSize(container);
           this.containerWidth = size && size.innerWidth;
       };
       proto._getItemLayoutPosition = function(item) {
           item.getSize();
           var remainder = item.size.outerWidth % this.columnWidth;
           var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
           var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
           colSpan = Math.min(colSpan, this.cols);
           var colPosMethod = this.options.horizontalOrder ? '_getHorizontalColPosition' : '_getTopColPosition';
           var colPosition = this[colPosMethod](colSpan, item);
           var position = {
               x: this.columnWidth * colPosition.col,
               y: colPosition.y
           };
           var setHeight = colPosition.y + item.size.outerHeight;
           var setMax = colSpan + colPosition.col;
           for (var i = colPosition.col; i < setMax; i++) {
               this.colYs[i] = setHeight;
           }
           return position;
       };
       proto._getTopColPosition = function(colSpan) {
           var colGroup = this._getTopColGroup(colSpan);
           var minimumY = Math.min.apply(Math, colGroup);
           return {
               col: colGroup.indexOf(minimumY),
               y: minimumY,
           };
       };
       proto._getTopColGroup = function(colSpan) {
           if (colSpan < 2) {
               return this.colYs;
           }
           var colGroup = [];
           var groupCount = this.cols + 1 - colSpan;
           for (var i = 0; i < groupCount; i++) {
               colGroup[i] = this._getColGroupY(i, colSpan);
           }
           return colGroup;
       };
       proto._getColGroupY = function(col, colSpan) {
           if (colSpan < 2) {
               return this.colYs[col];
           }
           var groupColYs = this.colYs.slice(col, col + colSpan);
           return Math.max.apply(Math, groupColYs);
       };
       proto._getHorizontalColPosition = function(colSpan, item) {
           var col = this.horizontalColIndex % this.cols;
           var isOver = colSpan > 1 && col + colSpan > this.cols;
           col = isOver ? 0 : col;
           var hasSize = item.size.outerWidth && item.size.outerHeight;
           this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;
           return {
               col: col,
               y: this._getColGroupY(col, colSpan),
           };
       };
       proto._manageStamp = function(stamp) {
           var stampSize = getSize(stamp);
           var offset = this._getElementOffset(stamp);
           var isOriginLeft = this._getOption('originLeft');
           var firstX = isOriginLeft ? offset.left : offset.right;
           var lastX = firstX + stampSize.outerWidth;
           var firstCol = Math.floor(firstX / this.columnWidth);
           firstCol = Math.max(0, firstCol);
           var lastCol = Math.floor(lastX / this.columnWidth);
           lastCol -= lastX % this.columnWidth ? 0 : 1;
           lastCol = Math.min(this.cols - 1, lastCol);
           var isOriginTop = this._getOption('originTop');
           var stampMaxY = (isOriginTop ? offset.top : offset.bottom) +
               stampSize.outerHeight;
           for (var i = firstCol; i <= lastCol; i++) {
               this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
           }
       };
       proto._getContainerSize = function() {
           this.maxY = Math.max.apply(Math, this.colYs);
           var size = {
               height: this.maxY
           };
           if (this._getOption('fitWidth')) {
               size.width = this._getContainerFitWidth();
           }
           return size;
       };
       proto._getContainerFitWidth = function() {
           var unusedCols = 0;
           var i = this.cols;
           while (--i) {
               if (this.colYs[i] !== 0) {
                   break;
               }
               unusedCols++;
           }
           return (this.cols - unusedCols) * this.columnWidth - this.gutter;
       };
       proto.needsResizeLayout = function() {
           var previousWidth = this.containerWidth;
           this.getContainerWidth();
           return previousWidth != this.containerWidth;
       };
       return Masonry;
   }));
   /*!
    * Masonry layout mode
    * sub-classes Masonry
    * https://masonry.desandro.com
    */
   (function(window, factory) {
       if (typeof define == 'function' && define.amd) {
           define('isotope-layout/js/layout-modes/masonry', ['../layout-mode', 'masonry-layout/masonry'], factory);
       } else if (typeof module == 'object' && module.exports) {
           module.exports = factory(require('../layout-mode'), require('masonry-layout'));
       } else {
           factory(window.Isotope.LayoutMode, window.Masonry);
       }
   }(window, function factory(LayoutMode, Masonry) {
       'use strict';
       var MasonryMode = LayoutMode.create('masonry');
       var proto = MasonryMode.prototype;
       var keepModeMethods = {
           _getElementOffset: true,
           layout: true,
           _getMeasurement: true
       };
       for (var method in Masonry.prototype) {
           if (!keepModeMethods[method]) {
               proto[method] = Masonry.prototype[method];
           }
       }
       var measureColumns = proto.measureColumns;
       proto.measureColumns = function() {
           this.items = this.isotope.filteredItems;
           measureColumns.call(this);
       };
       var _getOption = proto._getOption;
       proto._getOption = function(option) {
           if (option == 'fitWidth') {
               return this.options.isFitWidth !== undefined ? this.options.isFitWidth : this.options.fitWidth;
           }
           return _getOption.apply(this.isotope, arguments);
       };
       return MasonryMode;
   }));
   (function(window, factory) {
       if (typeof define == 'function' && define.amd) {
           define('isotope-layout/js/layout-modes/fit-rows', ['../layout-mode'], factory);
       } else if (typeof exports == 'object') {
           module.exports = factory(require('../layout-mode'));
       } else {
           factory(window.Isotope.LayoutMode);
       }
   }(window, function factory(LayoutMode) {
       'use strict';
       var FitRows = LayoutMode.create('fitRows');
       var proto = FitRows.prototype;
       proto._resetLayout = function() {
           this.x = 0;
           this.y = 0;
           this.maxY = 0;
           this._getMeasurement('gutter', 'outerWidth');
       };
       proto._getItemLayoutPosition = function(item) {
           item.getSize();
           var itemWidth = item.size.outerWidth + this.gutter;
           var containerWidth = this.isotope.size.innerWidth + this.gutter;
           if (this.x !== 0 && itemWidth + this.x > containerWidth) {
               this.x = 0;
               this.y = this.maxY;
           }
           var position = {
               x: this.x,
               y: this.y
           };
           this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
           this.x += itemWidth;
           return position;
       };
       proto._getContainerSize = function() {
           return {
               height: this.maxY
           };
       };
       return FitRows;
   }));
   (function(window, factory) {
       if (typeof define == 'function' && define.amd) {
           define('isotope-layout/js/layout-modes/vertical', ['../layout-mode'], factory);
       } else if (typeof module == 'object' && module.exports) {
           module.exports = factory(require('../layout-mode'));
       } else {
           factory(window.Isotope.LayoutMode);
       }
   }(window, function factory(LayoutMode) {
       'use strict';
       var Vertical = LayoutMode.create('vertical', {
           horizontalAlignment: 0
       });
       var proto = Vertical.prototype;
       proto._resetLayout = function() {
           this.y = 0;
       };
       proto._getItemLayoutPosition = function(item) {
           item.getSize();
           var x = (this.isotope.size.innerWidth - item.size.outerWidth) * this.options.horizontalAlignment;
           var y = this.y;
           this.y += item.size.outerHeight;
           return {
               x: x,
               y: y
           };
       };
       proto._getContainerSize = function() {
           return {
               height: this.y
           };
       };
       return Vertical;
   }));
   /*!
    * Isotope v3.0.6
    *
    * Licensed GPLv3 for open source use
    * or Isotope Commercial License for commercial use
    *
    * https://isotope.metafizzy.co
    * Copyright 2010-2018 Metafizzy
    */
   (function(window, factory) {
       if (typeof define == 'function' && define.amd) {
           define(['outlayer/outlayer', 'get-size/get-size', 'desandro-matches-selector/matches-selector', 'fizzy-ui-utils/utils', 'isotope-layout/js/item', 'isotope-layout/js/layout-mode', 'isotope-layout/js/layout-modes/masonry', 'isotope-layout/js/layout-modes/fit-rows', 'isotope-layout/js/layout-modes/vertical'], function(Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
               return factory(window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode);
           });
       } else if (typeof module == 'object' && module.exports) {
           module.exports = factory(window, require('outlayer'), require('get-size'), require('desandro-matches-selector'), require('fizzy-ui-utils'), require('isotope-layout/js/item'), require('isotope-layout/js/layout-mode'), require('isotope-layout/js/layout-modes/masonry'), require('isotope-layout/js/layout-modes/fit-rows'), require('isotope-layout/js/layout-modes/vertical'));
       } else {
           window.Isotope = factory(window, window.Outlayer, window.getSize, window.matchesSelector, window.fizzyUIUtils, window.Isotope.Item, window.Isotope.LayoutMode);
       }
   }(window, function factory(window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
       var jQuery = window.jQuery;
       var trim = String.prototype.trim ? function(str) {
           return str.trim();
       } : function(str) {
           return str.replace(/^\s+|\s+$/g, '');
       };
       var Isotope = Outlayer.create('isotope', {
           layoutMode: 'masonry',
           isJQueryFiltering: true,
           sortAscending: true
       });
       Isotope.Item = Item;
       Isotope.LayoutMode = LayoutMode;
       var proto = Isotope.prototype;
       proto._create = function() {
           this.itemGUID = 0;
           this._sorters = {};
           this._getSorters();
           Outlayer.prototype._create.call(this);
           this.modes = {};
           this.filteredItems = this.items;
           this.sortHistory = ['original-order'];
           for (var name in LayoutMode.modes) {
               this._initLayoutMode(name);
           }
       };
       proto.reloadItems = function() {
           this.itemGUID = 0;
           Outlayer.prototype.reloadItems.call(this);
       };
       proto._itemize = function() {
           var items = Outlayer.prototype._itemize.apply(this, arguments);
           for (var i = 0; i < items.length; i++) {
               var item = items[i];
               item.id = this.itemGUID++;
           }
           this._updateItemsSortData(items);
           return items;
       };
       proto._initLayoutMode = function(name) {
           var Mode = LayoutMode.modes[name];
           var initialOpts = this.options[name] || {};
           this.options[name] = Mode.options ? utils.extend(Mode.options, initialOpts) : initialOpts;
           this.modes[name] = new Mode(this);
       };
       proto.layout = function() {
           if (!this._isLayoutInited && this._getOption('initLayout')) {
               this.arrange();
               return;
           }
           this._layout();
       };
       proto._layout = function() {
           var isInstant = this._getIsInstant();
           this._resetLayout();
           this._manageStamps();
           this.layoutItems(this.filteredItems, isInstant);
           this._isLayoutInited = true;
       };
       proto.arrange = function(opts) {
           this.option(opts);
           this._getIsInstant();
           var filtered = this._filter(this.items);
           this.filteredItems = filtered.matches;
           this._bindArrangeComplete();
           if (this._isInstant) {
               this._noTransition(this._hideReveal, [filtered]);
           } else {
               this._hideReveal(filtered);
           }
           this._sort();
           this._layout();
       };
       proto._init = proto.arrange;
       proto._hideReveal = function(filtered) {
           this.reveal(filtered.needReveal);
           this.hide(filtered.needHide);
       };
       proto._getIsInstant = function() {
           var isLayoutInstant = this._getOption('layoutInstant');
           var isInstant = isLayoutInstant !== undefined ? isLayoutInstant : !this._isLayoutInited;
           this._isInstant = isInstant;
           return isInstant;
       };
       proto._bindArrangeComplete = function() {
           var isLayoutComplete, isHideComplete, isRevealComplete;
           var _this = this;
   
           function arrangeParallelCallback() {
               if (isLayoutComplete && isHideComplete && isRevealComplete) {
                   _this.dispatchEvent('arrangeComplete', null, [_this.filteredItems]);
               }
           }
           this.once('layoutComplete', function() {
               isLayoutComplete = true;
               arrangeParallelCallback();
           });
           this.once('hideComplete', function() {
               isHideComplete = true;
               arrangeParallelCallback();
           });
           this.once('revealComplete', function() {
               isRevealComplete = true;
               arrangeParallelCallback();
           });
       };
       proto._filter = function(items) {
           var filter = this.options.filter;
           filter = filter || '*';
           var matches = [];
           var hiddenMatched = [];
           var visibleUnmatched = [];
           var test = this._getFilterTest(filter);
           for (var i = 0; i < items.length; i++) {
               var item = items[i];
               if (item.isIgnored) {
                   continue;
               }
               var isMatched = test(item);
               if (isMatched) {
                   matches.push(item);
               }
               if (isMatched && item.isHidden) {
                   hiddenMatched.push(item);
               } else if (!isMatched && !item.isHidden) {
                   visibleUnmatched.push(item);
               }
           }
           return {
               matches: matches,
               needReveal: hiddenMatched,
               needHide: visibleUnmatched
           };
       };
       proto._getFilterTest = function(filter) {
           if (jQuery && this.options.isJQueryFiltering) {
               return function(item) {
                   return jQuery(item.element).is(filter);
               };
           }
           if (typeof filter == 'function') {
               return function(item) {
                   return filter(item.element);
               };
           }
           return function(item) {
               return matchesSelector(item.element, filter);
           };
       };
       proto.updateSortData = function(elems) {
           var items;
           if (elems) {
               elems = utils.makeArray(elems);
               items = this.getItems(elems);
           } else {
               items = this.items;
           }
           this._getSorters();
           this._updateItemsSortData(items);
       };
       proto._getSorters = function() {
           var getSortData = this.options.getSortData;
           for (var key in getSortData) {
               var sorter = getSortData[key];
               this._sorters[key] = mungeSorter(sorter);
           }
       };
       proto._updateItemsSortData = function(items) {
           var len = items && items.length;
           for (var i = 0; len && i < len; i++) {
               var item = items[i];
               item.updateSortData();
           }
       };
       var mungeSorter = (function() {
           function mungeSorter(sorter) {
               if (typeof sorter != 'string') {
                   return sorter;
               }
               var args = trim(sorter).split(' ');
               var query = args[0];
               var attrMatch = query.match(/^\[(.+)\]$/);
               var attr = attrMatch && attrMatch[1];
               var getValue = getValueGetter(attr, query);
               var parser = Isotope.sortDataParsers[args[1]];
               sorter = parser ? function(elem) {
                   return elem && parser(getValue(elem));
               } : function(elem) {
                   return elem && getValue(elem);
               };
               return sorter;
           }
   
           function getValueGetter(attr, query) {
               if (attr) {
                   return function getAttribute(elem) {
                       return elem.getAttribute(attr);
                   };
               }
               return function getChildText(elem) {
                   var child = elem.querySelector(query);
                   return child && child.textContent;
               };
           }
           return mungeSorter;
       })();
       Isotope.sortDataParsers = {
           'parseInt': function(val) {
               return parseInt(val, 10);
           },
           'parseFloat': function(val) {
               return parseFloat(val);
           }
       };
       proto._sort = function() {
           if (!this.options.sortBy) {
               return;
           }
           var sortBys = utils.makeArray(this.options.sortBy);
           if (!this._getIsSameSortBy(sortBys)) {
               this.sortHistory = sortBys.concat(this.sortHistory);
           }
           var itemSorter = getItemSorter(this.sortHistory, this.options.sortAscending);
           this.filteredItems.sort(itemSorter);
       };
       proto._getIsSameSortBy = function(sortBys) {
           for (var i = 0; i < sortBys.length; i++) {
               if (sortBys[i] != this.sortHistory[i]) {
                   return false;
               }
           }
           return true;
       };
   
       function getItemSorter(sortBys, sortAsc) {
           return function sorter(itemA, itemB) {
               for (var i = 0; i < sortBys.length; i++) {
                   var sortBy = sortBys[i];
                   var a = itemA.sortData[sortBy];
                   var b = itemB.sortData[sortBy];
                   if (a > b || a < b) {
                       var isAscending = sortAsc[sortBy] !== undefined ? sortAsc[sortBy] : sortAsc;
                       var direction = isAscending ? 1 : -1;
                       return (a > b ? 1 : -1) * direction;
                   }
               }
               return 0;
           };
       }
       proto._mode = function() {
           var layoutMode = this.options.layoutMode;
           var mode = this.modes[layoutMode];
           if (!mode) {
               throw new Error('No layout mode: ' + layoutMode);
           }
           mode.options = this.options[layoutMode];
           return mode;
       };
       proto._resetLayout = function() {
           Outlayer.prototype._resetLayout.call(this);
           this._mode()._resetLayout();
       };
       proto._getItemLayoutPosition = function(item) {
           return this._mode()._getItemLayoutPosition(item);
       };
       proto._manageStamp = function(stamp) {
           this._mode()._manageStamp(stamp);
       };
       proto._getContainerSize = function() {
           return this._mode()._getContainerSize();
       };
       proto.needsResizeLayout = function() {
           return this._mode().needsResizeLayout();
       };
       proto.appended = function(elems) {
           var items = this.addItems(elems);
           if (!items.length) {
               return;
           }
           var filteredItems = this._filterRevealAdded(items);
           this.filteredItems = this.filteredItems.concat(filteredItems);
       };
       proto.prepended = function(elems) {
           var items = this._itemize(elems);
           if (!items.length) {
               return;
           }
           this._resetLayout();
           this._manageStamps();
           var filteredItems = this._filterRevealAdded(items);
           this.layoutItems(this.filteredItems);
           this.filteredItems = filteredItems.concat(this.filteredItems);
           this.items = items.concat(this.items);
       };
       proto._filterRevealAdded = function(items) {
           var filtered = this._filter(items);
           this.hide(filtered.needHide);
           this.reveal(filtered.matches);
           this.layoutItems(filtered.matches, true);
           return filtered.matches;
       };
       proto.insert = function(elems) {
           var items = this.addItems(elems);
           if (!items.length) {
               return;
           }
           var i, item;
           var len = items.length;
           for (i = 0; i < len; i++) {
               item = items[i];
               this.element.appendChild(item.element);
           }
           var filteredInsertItems = this._filter(items).matches;
           for (i = 0; i < len; i++) {
               items[i].isLayoutInstant = true;
           }
           this.arrange();
           for (i = 0; i < len; i++) {
               delete items[i].isLayoutInstant;
           }
           this.reveal(filteredInsertItems);
       };
       var _remove = proto.remove;
       proto.remove = function(elems) {
           elems = utils.makeArray(elems);
           var removeItems = this.getItems(elems);
           _remove.call(this, elems);
           var len = removeItems && removeItems.length;
           for (var i = 0; len && i < len; i++) {
               var item = removeItems[i];
               utils.removeFrom(this.filteredItems, item);
           }
       };
       proto.shuffle = function() {
           for (var i = 0; i < this.items.length; i++) {
               var item = this.items[i];
               item.sortData.random = Math.random();
           }
           this.options.sortBy = 'random';
           this._sort();
           this._layout();
       };
       proto._noTransition = function(fn, args) {
           var transitionDuration = this.options.transitionDuration;
           this.options.transitionDuration = 0;
           var returnValue = fn.apply(this, args);
           this.options.transitionDuration = transitionDuration;
           return returnValue;
       };
       proto.getFilteredItemElements = function() {
           return this.filteredItems.map(function(item) {
               return item.element;
           });
       };
       return Isotope;
   }));
   /*!
    * simpleParallax - simpleParallax is a simple JavaScript library that gives your website parallax animations on any images, 
    * @date: 13-06-2019 16:24:29, 
    * @version: 5.1.0,
    * @link: https://simpleparallax.com/
    */
   (function webpackUniversalModuleDefinition(root, factory) {
       if (typeof exports === 'object' && typeof module === 'object')
           module.exports = factory();
       else if (typeof define === 'function' && define.amd)
           define("simpleParallax", [], factory);
       else if (typeof exports === 'object')
           exports["simpleParallax"] = factory();
       else
           root["simpleParallax"] = factory();
   })(window, function() {
       return (function(modules) {
               var installedModules = {};
   
               function __webpack_require__(moduleId) {
                   if (installedModules[moduleId]) {
                       return installedModules[moduleId].exports;
                   }
                   var module = installedModules[moduleId] = {
                       i: moduleId,
                       l: false,
                       exports: {}
                   };
                   modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                   module.l = true;
                   return module.exports;
               }
               __webpack_require__.m = modules;
               __webpack_require__.c = installedModules;
               __webpack_require__.d = function(exports, name, getter) {
                   if (!__webpack_require__.o(exports, name)) {
                       Object.defineProperty(exports, name, {
                           enumerable: true,
                           get: getter
                       });
                   }
               };
               __webpack_require__.r = function(exports) {
                   if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                       Object.defineProperty(exports, Symbol.toStringTag, {
                           value: 'Module'
                       });
                   }
                   Object.defineProperty(exports, '__esModule', {
                       value: true
                   });
               };
               __webpack_require__.t = function(value, mode) {
                   if (mode & 1) value = __webpack_require__(value);
                   if (mode & 8) return value;
                   if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
                   var ns = Object.create(null);
                   __webpack_require__.r(ns);
                   Object.defineProperty(ns, 'default', {
                       enumerable: true,
                       value: value
                   });
                   if (mode & 2 && typeof value != 'string')
                       for (var key in value) __webpack_require__.d(ns, key, function(key) {
                           return value[key];
                       }.bind(null, key));
                   return ns;
               };
               __webpack_require__.n = function(module) {
                   var getter = module && module.__esModule ? function getDefault() {
                       return module['default'];
                   } : function getModuleExports() {
                       return module;
                   };
                   __webpack_require__.d(getter, 'a', getter);
                   return getter;
               };
               __webpack_require__.o = function(object, property) {
                   return Object.prototype.hasOwnProperty.call(object, property);
               };
               __webpack_require__.p = "";
               return __webpack_require__(__webpack_require__.s = 0);
           })
           ([(function(module, __webpack_exports__, __webpack_require__) {
               "use strict";
               __webpack_require__.r(__webpack_exports__);
   
               function _classCallCheck(instance, Constructor) {
                   if (!(instance instanceof Constructor)) {
                       throw new TypeError("Cannot call a class as a function");
                   }
               }
   
               function _defineProperties(target, props) {
                   for (var i = 0; i < props.length; i++) {
                       var descriptor = props[i];
                       descriptor.enumerable = descriptor.enumerable || false;
                       descriptor.configurable = true;
                       if ("value" in descriptor) descriptor.writable = true;
                       Object.defineProperty(target, descriptor.key, descriptor);
                   }
               }
   
               function _createClass(Constructor, protoProps, staticProps) {
                   if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                   if (staticProps) _defineProperties(Constructor, staticProps);
                   return Constructor;
               }
               var Viewport = function() {
                   function Viewport() {
                       _classCallCheck(this, Viewport);
                       this.positions = {
                           top: 0,
                           bottom: 0,
                           height: 0
                       };
                   }
                   _createClass(Viewport, [{
                       key: "setViewportTop",
                       value: function setViewportTop() {
                           this.positions.top = window.pageYOffset;
                           return this.positions;
                       }
                   }, {
                       key: "setViewportBottom",
                       value: function setViewportBottom() {
                           this.positions.bottom = this.positions.top + this.positions.height;
                           return this.positions;
                       }
                   }, {
                       key: "setViewportHeight",
                       value: function setViewportHeight() {
                           this.positions.height = document.documentElement.clientHeight;
                           return this.positions;
                       }
                   }, {
                       key: "setViewportAll",
                       value: function setViewportAll() {
                           this.positions.top = window.pageYOffset;
                           this.positions.bottom = this.positions.top + this.positions.height;
                           this.positions.height = document.documentElement.clientHeight;
                           return this.positions;
                       }
                   }]);
                   return Viewport;
               }();
               var viewport = (Viewport);
               var convertToArray = function convertToArray(elements) {
                   if (NodeList.prototype.isPrototypeOf(elements) || HTMLCollection.prototype.isPrototypeOf(elements)) return Array.from(elements);
                   if (typeof elements === 'string' || elements instanceof String) return document.querySelectorAll(elements);
                   return [elements];
               };
               var helpers_convertToArray = (convertToArray);
               var cssTransform = function cssTransform() {
                   var prefixes = 'transform webkitTransform mozTransform oTransform msTransform'.split(' ');
                   var transform;
                   var i = 0;
                   while (transform === undefined) {
                       transform = document.createElement('div').style[prefixes[i]] !== undefined ? prefixes[i] : undefined;
                       i += 1;
                   }
                   return transform;
               };
               var helpers_cssTransform = (cssTransform());
               var isImageLoaded = function isImageLoaded(image) {
                   if (!image) {
                       return false;
                   }
                   if (!image.complete) {
                       return false;
                   }
                   if (typeof image.naturalWidth !== 'undefined' && image.naturalWidth === 0) {
                       return false;
                   }
                   return true;
               };
               var helpers_isImageLoaded = (isImageLoaded);
   
               function _toConsumableArray(arr) {
                   return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
               }
   
               function _nonIterableSpread() {
                   throw new TypeError("Invalid attempt to spread non-iterable instance");
               }
   
               function _iterableToArray(iter) {
                   if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
               }
   
               function _arrayWithoutHoles(arr) {
                   if (Array.isArray(arr)) {
                       for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
                           arr2[i] = arr[i];
                       }
                       return arr2;
                   }
               }
   
               function parallax_classCallCheck(instance, Constructor) {
                   if (!(instance instanceof Constructor)) {
                       throw new TypeError("Cannot call a class as a function");
                   }
               }
   
               function parallax_defineProperties(target, props) {
                   for (var i = 0; i < props.length; i++) {
                       var descriptor = props[i];
                       descriptor.enumerable = descriptor.enumerable || false;
                       descriptor.configurable = true;
                       if ("value" in descriptor) descriptor.writable = true;
                       Object.defineProperty(target, descriptor.key, descriptor);
                   }
               }
   
               function parallax_createClass(Constructor, protoProps, staticProps) {
                   if (protoProps) parallax_defineProperties(Constructor.prototype, protoProps);
                   if (staticProps) parallax_defineProperties(Constructor, staticProps);
                   return Constructor;
               }
               var parallax_ParallaxInstance = function() {
                   function ParallaxInstance(element, options) {
                       parallax_classCallCheck(this, ParallaxInstance);
                       this.element = element;
                       this.elementContainer = element;
                       this.settings = options;
                       this.isVisible = true;
                       this.isInit = false;
                       this.oldTranslateValue = -1;
                       this.init = this.init.bind(this);
                       if (helpers_isImageLoaded(element)) {
                           this.init();
                       } else {
                           this.element.addEventListener('load', this.init);
                       }
                   }
                   parallax_createClass(ParallaxInstance, [{
                       key: "init",
                       value: function init() {
                           if (this.isInit) return;
                           if (this.element.closest('.simpleParallax')) return;
                           if (this.settings.overflow === false) {
                               this.wrapElement(this.element);
                           }
                           this.setStyle();
                           this.getElementOffset();
                           this.intersectionObserver();
                           this.getTranslateValue();
                           this.animate();
                           this.isInit = true;
                       }
                   }, {
                       key: "wrapElement",
                       value: function wrapElement() {
                           var elementToWrap = this.element.closest('picture') || this.element;
                           var wrapper = document.createElement('div');
                           wrapper.classList.add('simpleParallax');
                           wrapper.style.overflow = 'hidden';
                           elementToWrap.parentNode.insertBefore(wrapper, elementToWrap);
                           wrapper.appendChild(elementToWrap);
                           this.elementContainer = wrapper;
                       }
                   }, {
                       key: "unWrapElement",
                       value: function unWrapElement() {
                           var wrapper = this.elementContainer;
                           wrapper.replaceWith.apply(wrapper, _toConsumableArray(wrapper.childNodes));
                       }
                   }, {
                       key: "setStyle",
                       value: function setStyle() {
                           if (this.settings.overflow === false) {
                               this.element.style[helpers_cssTransform] = "scale(".concat(this.settings.scale, ")");
                           }
                           if (this.settings.delay > 0) {
                               this.element.style.transition = "transform ".concat(this.settings.delay, "s ").concat(this.settings.transition);
                           }
                           this.element.style.willChange = 'transform';
                       }
                   }, {
                       key: "unSetStyle",
                       value: function unSetStyle() {
                           this.element.style.willChange = '';
                           this.element.style[helpers_cssTransform] = '';
                           this.element.style.transition = '';
                       }
                   }, {
                       key: "getElementOffset",
                       value: function getElementOffset() {
                           var positions = this.elementContainer.getBoundingClientRect();
                           this.elementHeight = positions.height;
                           this.elementTop = positions.top + simpleParallax_viewport.positions.top;
                           this.elementBottom = this.elementHeight + this.elementTop;
                       }
                   }, {
                       key: "buildThresholdList",
                       value: function buildThresholdList() {
                           var thresholds = [];
                           for (var i = 1.0; i <= this.elementHeight; i++) {
                               var ratio = i / this.elementHeight;
                               thresholds.push(ratio);
                           }
                           return thresholds;
                       }
                   }, {
                       key: "intersectionObserver",
                       value: function intersectionObserver() {
                           var options = {
                               root: null,
                               threshold: this.buildThresholdList()
                           };
                           this.observer = new IntersectionObserver(this.intersectionObserverCallback.bind(this), options);
                           this.observer.observe(this.element);
                       }
                   }, {
                       key: "intersectionObserverCallback",
                       value: function intersectionObserverCallback(entries) {
                           for (var i = entries.length - 1; i >= 0; i--) {
                               if (entries[i].isIntersecting) {
                                   this.isVisible = true;
                               } else {
                                   this.isVisible = false;
                               }
                           }
                       }
                   }, {
                       key: "checkIfVisible",
                       value: function checkIfVisible() {
                           return this.elementBottom > simpleParallax_viewport.positions.top && this.elementTop < simpleParallax_viewport.positions.bottom;
                       }
                   }, {
                       key: "getRangeMax",
                       value: function getRangeMax() {
                           var elementImageHeight = this.element.clientHeight;
                           this.rangeMax = elementImageHeight * this.settings.scale - elementImageHeight;
                       }
                   }, {
                       key: "getTranslateValue",
                       value: function getTranslateValue() {
                           var percentage = ((simpleParallax_viewport.positions.bottom - this.elementTop) / ((simpleParallax_viewport.positions.height + this.elementHeight) / 100)).toFixed(1);
                           percentage = Math.min(100, Math.max(0, percentage));
                           if (this.oldPercentage === percentage) {
                               return false;
                           }
                           if (!this.rangeMax) {
                               this.getRangeMax();
                           }
                           this.translateValue = (percentage / 100 * this.rangeMax - this.rangeMax / 2).toFixed(0);
                           if (this.oldTranslateValue === this.translateValue) {
                               return false;
                           }
                           this.oldPercentage = percentage;
                           this.oldTranslateValue = this.translateValue;
                           return true;
                       }
                   }, {
                       key: "animate",
                       value: function animate() {
                           var translateValueY = 0;
                           var translateValueX = 0;
                           var inlineCss;
                           if (this.settings.orientation.includes('left') || this.settings.orientation.includes('right')) {
                               translateValueX = "".concat(this.settings.orientation.includes('left') ? this.translateValue * -1 : this.translateValue, "px");
                           }
                           if (this.settings.orientation.includes('up') || this.settings.orientation.includes('down')) {
                               translateValueY = "".concat(this.settings.orientation.includes('up') ? this.translateValue * -1 : this.translateValue, "px");
                           }
                           if (this.settings.overflow === false) {
                               inlineCss = "translate3d(".concat(translateValueX, ", ").concat(translateValueY, ", 0) scale(").concat(this.settings.scale, ")");
                           } else {
                               inlineCss = "translate3d(".concat(translateValueX, ", ").concat(translateValueY, ", 0)");
                           }
                           this.element.style[helpers_cssTransform] = inlineCss;
                       }
                   }]);
                   return ParallaxInstance;
               }();
               var parallax = (parallax_ParallaxInstance);
               __webpack_require__.d(__webpack_exports__, "viewport", function() {
                   return simpleParallax_viewport;
               });
               __webpack_require__.d(__webpack_exports__, "default", function() {
                   return simpleParallax_SimpleParallax;
               });
   
               function simpleParallax_classCallCheck(instance, Constructor) {
                   if (!(instance instanceof Constructor)) {
                       throw new TypeError("Cannot call a class as a function");
                   }
               }
   
               function simpleParallax_defineProperties(target, props) {
                   for (var i = 0; i < props.length; i++) {
                       var descriptor = props[i];
                       descriptor.enumerable = descriptor.enumerable || false;
                       descriptor.configurable = true;
                       if ("value" in descriptor) descriptor.writable = true;
                       Object.defineProperty(target, descriptor.key, descriptor);
                   }
               }
   
               function simpleParallax_createClass(Constructor, protoProps, staticProps) {
                   if (protoProps) simpleParallax_defineProperties(Constructor.prototype, protoProps);
                   if (staticProps) simpleParallax_defineProperties(Constructor, staticProps);
                   return Constructor;
               }
               var simpleParallax_viewport = new viewport();
               var intersectionObserverAvailable = true;
               var isInit = false;
               var instances = [];
               var instancesLength;
               var frameID;
               var resizeID;
               var simpleParallax_SimpleParallax = function() {
                   function SimpleParallax(elements, options) {
                       simpleParallax_classCallCheck(this, SimpleParallax);
                       if (!elements) return;
                       this.elements = helpers_convertToArray(elements);
                       this.defaults = {
                           delay: 0.4,
                           orientation: 'up',
                           scale: 1.3,
                           overflow: false,
                           transition: 'cubic-bezier(0,0,0,1)',
                           breakpoint: false
                       };
                       this.settings = Object.assign(this.defaults, options);
                       if (this.settings.breakpoint && document.documentElement.clientWidth <= this.settings.breakpoint) {
                           return;
                       }
                       if (!('IntersectionObserver' in window)) intersectionObserverAvailable = false;
                       this.lastPosition = -1;
                       this.resizeIsDone = this.resizeIsDone.bind(this);
                       this.handleResize = this.handleResize.bind(this);
                       this.proceedRequestAnimationFrame = this.proceedRequestAnimationFrame.bind(this);
                       this.init();
                   }
                   simpleParallax_createClass(SimpleParallax, [{
                       key: "init",
                       value: function init() {
                           simpleParallax_viewport.setViewportAll();
                           for (var i = this.elements.length - 1; i >= 0; i--) {
                               var instance = new parallax(this.elements[i], this.settings);
                               instances.push(instance);
                           }
                           instancesLength = instances.length;
                           if (!isInit) {
                               this.proceedRequestAnimationFrame();
                               window.addEventListener('resize', this.resizeIsDone);
                               isInit = true;
                           }
                       }
                   }, {
                       key: "resizeIsDone",
                       value: function resizeIsDone() {
                           clearTimeout(resizeID);
                           resizeID = setTimeout(this.handleResize, 500);
                       }
                   }, {
                       key: "handleResize",
                       value: function handleResize() {
                           simpleParallax_viewport.setViewportAll();
                           if (this.settings.breakpoint && document.documentElement.clientWidth <= this.settings.breakpoint) {
                               this.destroy();
                           }
                           for (var i = instancesLength - 1; i >= 0; i--) {
                               instances[i].getElementOffset();
                               instances[i].getRangeMax();
                           }
                           this.lastPosition = -1;
                       }
                   }, {
                       key: "proceedRequestAnimationFrame",
                       value: function proceedRequestAnimationFrame() {
                           simpleParallax_viewport.setViewportTop();
                           if (this.lastPosition === simpleParallax_viewport.positions.top) {
                               frameID = window.requestAnimationFrame(this.proceedRequestAnimationFrame);
                               return;
                           }
                           simpleParallax_viewport.setViewportBottom();
                           for (var i = instancesLength - 1; i >= 0; i--) {
                               this.proceedElement(instances[i]);
                           }
                           frameID = window.requestAnimationFrame(this.proceedRequestAnimationFrame);
                           this.lastPosition = simpleParallax_viewport.positions.top;
                       }
                   }, {
                       key: "proceedElement",
                       value: function proceedElement(instance) {
                           var isVisible = false;
                           if (!intersectionObserverAvailable) {
                               isVisible = instance.checkIfVisible();
                           } else {
                               isVisible = instance.isVisible;
                           }
                           if (!isVisible) return;
                           if (!instance.getTranslateValue()) {
                               return;
                           }
                           instance.animate();
                       }
                   }, {
                       key: "destroy",
                       value: function destroy() {
                           var _this = this;
                           var instancesToDestroy = [];
                           instances = instances.filter(function(instance) {
                               if (_this.elements.includes(instance.element)) {
                                   instancesToDestroy.push(instance);
                               } else {
                                   return instance;
                               }
                           });
                           for (var i = instancesToDestroy.length - 1; i >= 0; i--) {
                               instancesToDestroy[i].unSetStyle();
                               if (this.settings.overflow === false) {
                                   instancesToDestroy[i].unWrapElement();
                               }
                           }
                           instancesLength = instances.length;
                           if (!instancesLength) {
                               window.cancelAnimationFrame(frameID);
                               window.removeEventListener('resize', this.handleResize);
                           }
                       }
                   }]);
                   return SimpleParallax;
               }();
           })])["default"];
   });
   ! function($) {
       "use strict";
       var Typed = function(el, options) {
           this.el = $(el);
           this.options = $.extend({}, $.fn.typed.defaults, options);
           this.isInput = this.el.is('input');
           this.attr = this.options.attr;
           this.showCursor = this.isInput ? false : this.options.showCursor;
           this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text()
           this.contentType = this.options.contentType;
           this.typeSpeed = this.options.typeSpeed;
           this.startDelay = this.options.startDelay;
           this.backSpeed = this.options.backSpeed;
           this.backDelay = this.options.backDelay;
           this.stringsElement = this.options.stringsElement;
           this.strings = this.options.strings;
           this.strPos = 0;
           this.arrayPos = 0;
           this.stopNum = 0;
           this.loop = this.options.loop;
           this.loopCount = this.options.loopCount;
           this.curLoop = 0;
           this.stop = false;
           this.cursorChar = this.options.cursorChar;
           this.shuffle = this.options.shuffle;
           this.sequence = [];
           this.build();
       };
       Typed.prototype = {
           constructor: Typed,
           init: function() {
               var self = this;
               self.timeout = setTimeout(function() {
                   for (var i = 0; i < self.strings.length; ++i) self.sequence[i] = i;
                   if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);
                   self.typewrite(self.strings[self.sequence[self.arrayPos]], self.strPos);
               }, self.startDelay);
           },
           build: function() {
               var self = this;
               if (this.showCursor === true) {
                   this.cursor = $("<span class=\"typed-cursor\">" + this.cursorChar + "</span>");
                   this.el.after(this.cursor);
               }
               if (this.stringsElement) {
                   self.strings = [];
                   this.stringsElement.hide();
                   var strings = this.stringsElement.find('p');
                   $.each(strings, function(key, value) {
                       self.strings.push($(value).html());
                   });
               }
               this.init();
           },
           typewrite: function(curString, curStrPos) {
               if (this.stop === true) {
                   return;
               }
               var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
               var self = this;
               self.timeout = setTimeout(function() {
                   var charPause = 0;
                   var substr = curString.substr(curStrPos);
                   if (substr.charAt(0) === '^') {
                       var skip = 1;
                       if (/^\^\d+/.test(substr)) {
                           substr = /\d+/.exec(substr)[0];
                           skip += substr.length;
                           charPause = parseInt(substr);
                       }
                       curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
                   }
                   if (self.contentType === 'html') {
                       var curChar = curString.substr(curStrPos).charAt(0)
                       if (curChar === '<' || curChar === '&') {
                           var tag = '';
                           var endTag = '';
                           if (curChar === '<') {
                               endTag = '>'
                           } else {
                               endTag = ';'
                           }
                           while (curString.substr(curStrPos).charAt(0) !== endTag) {
                               tag += curString.substr(curStrPos).charAt(0);
                               curStrPos++;
                           }
                           curStrPos++;
                           tag += endTag;
                       }
                   }
                   self.timeout = setTimeout(function() {
                       if (curStrPos === curString.length) {
                           self.options.onStringTyped(self.arrayPos);
                           if (self.arrayPos === self.strings.length - 1) {
                               self.options.callback();
                               self.curLoop++;
                               if (self.loop === false || self.curLoop === self.loopCount)
                                   return;
                           }
                           self.timeout = setTimeout(function() {
                               self.backspace(curString, curStrPos);
                           }, self.backDelay);
                       } else {
                           if (curStrPos === 0)
                               self.options.preStringTyped(self.arrayPos);
                           var nextString = curString.substr(0, curStrPos + 1);
                           if (self.attr) {
                               self.el.attr(self.attr, nextString);
                           } else {
                               if (self.isInput) {
                                   self.el.val(nextString);
                               } else if (self.contentType === 'html') {
                                   self.el.html(nextString);
                               } else {
                                   self.el.text(nextString);
                               }
                           }
                           curStrPos++;
                           self.typewrite(curString, curStrPos);
                       }
                   }, charPause);
               }, humanize);
           },
           backspace: function(curString, curStrPos) {
               if (this.stop === true) {
                   return;
               }
               var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
               var self = this;
               self.timeout = setTimeout(function() {
                   if (self.contentType === 'html') {
                       if (curString.substr(curStrPos).charAt(0) === '>') {
                           var tag = '';
                           while (curString.substr(curStrPos).charAt(0) !== '<') {
                               tag -= curString.substr(curStrPos).charAt(0);
                               curStrPos--;
                           }
                           curStrPos--;
                           tag += '<';
                       }
                   }
                   var nextString = curString.substr(0, curStrPos);
                   if (self.attr) {
                       self.el.attr(self.attr, nextString);
                   } else {
                       if (self.isInput) {
                           self.el.val(nextString);
                       } else if (self.contentType === 'html') {
                           self.el.html(nextString);
                       } else {
                           self.el.text(nextString);
                       }
                   }
                   if (curStrPos > self.stopNum) {
                       curStrPos--;
                       self.backspace(curString, curStrPos);
                   } else if (curStrPos <= self.stopNum) {
                       self.arrayPos++;
                       if (self.arrayPos === self.strings.length) {
                           self.arrayPos = 0;
                           if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);
                           self.init();
                       } else
                           self.typewrite(self.strings[self.sequence[self.arrayPos]], curStrPos);
                   }
               }, humanize);
           },
           shuffleArray: function(array) {
               var tmp, current, top = array.length;
               if (top)
                   while (--top) {
                       current = Math.floor(Math.random() * (top + 1));
                       tmp = array[current];
                       array[current] = array[top];
                       array[top] = tmp;
                   }
               return array;
           },
           reset: function() {
               var self = this;
               clearInterval(self.timeout);
               var id = this.el.attr('id');
               this.el.after('<span id="' + id + '"/>')
               this.el.remove();
               if (typeof this.cursor !== 'undefined') {
                   this.cursor.remove();
               }
               self.options.resetCallback();
           }
       };
       $.fn.typed = function(option) {
           return this.each(function() {
               var $this = $(this),
                   data = $this.data('typed'),
                   options = typeof option == 'object' && option;
               if (!data) $this.data('typed', (data = new Typed(this, options)));
               if (typeof option == 'string') data[option]();
           });
       };
       $.fn.typed.defaults = {
           strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
           stringsElement: null,
           typeSpeed: 0,
           startDelay: 0,
           backSpeed: 0,
           shuffle: false,
           backDelay: 500,
           loop: false,
           loopCount: false,
           showCursor: true,
           cursorChar: "|",
           attr: null,
           contentType: 'html',
           callback: function() {},
           preStringTyped: function() {},
           onStringTyped: function() {},
           resetCallback: function() {}
       };
   }(window.jQuery);
   /*!
    * Name    : Just Another Parallax [Jarallax]
    * Version : 1.10.7
    * Author  : nK <https://nkdev.info>
    * GitHub  : https://github.com/nk-o/jarallax
    */
   (function(modules) {
       var installedModules = {};
   
       function __webpack_require__(moduleId) {
           if (installedModules[moduleId]) {
               return installedModules[moduleId].exports;
           }
           var module = installedModules[moduleId] = {
               i: moduleId,
               l: false,
               exports: {}
           };
           modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
           module.l = true;
           return module.exports;
       }
       __webpack_require__.m = modules;
       __webpack_require__.c = installedModules;
       __webpack_require__.d = function(exports, name, getter) {
           if (!__webpack_require__.o(exports, name)) {
               Object.defineProperty(exports, name, {
                   enumerable: true,
                   get: getter
               });
           }
       };
       __webpack_require__.r = function(exports) {
           if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
               Object.defineProperty(exports, Symbol.toStringTag, {
                   value: 'Module'
               });
           }
           Object.defineProperty(exports, '__esModule', {
               value: true
           });
       };
       __webpack_require__.t = function(value, mode) {
           if (mode & 1) value = __webpack_require__(value);
           if (mode & 8) return value;
           if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
           var ns = Object.create(null);
           __webpack_require__.r(ns);
           Object.defineProperty(ns, 'default', {
               enumerable: true,
               value: value
           });
           if (mode & 2 && typeof value != 'string')
               for (var key in value) __webpack_require__.d(ns, key, function(key) {
                   return value[key];
               }.bind(null, key));
           return ns;
       };
       __webpack_require__.n = function(module) {
           var getter = module && module.__esModule ? function getDefault() {
               return module['default'];
           } : function getModuleExports() {
               return module;
           };
           __webpack_require__.d(getter, 'a', getter);
           return getter;
       };
       __webpack_require__.o = function(object, property) {
           return Object.prototype.hasOwnProperty.call(object, property);
       };
       __webpack_require__.p = "";
       return __webpack_require__(__webpack_require__.s = 11);
   })
   ([, , (function(module, exports, __webpack_require__) {
       "use strict";
       module.exports = function(callback) {
           if (document.readyState === 'complete' || document.readyState === 'interactive') {
               callback.call();
           } else if (document.attachEvent) {
               document.attachEvent('onreadystatechange', function() {
                   if (document.readyState === 'interactive') callback.call();
               });
           } else if (document.addEventListener) {
               document.addEventListener('DOMContentLoaded', callback);
           }
       };
   }), , (function(module, exports, __webpack_require__) {
       "use strict";
       (function(global) {
           var win;
           if (typeof window !== "undefined") {
               win = window;
           } else if (typeof global !== "undefined") {
               win = global;
           } else if (typeof self !== "undefined") {
               win = self;
           } else {
               win = {};
           }
           module.exports = win;
       }.call(this, __webpack_require__(5)))
   }), (function(module, exports, __webpack_require__) {
       "use strict";
       var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
           return typeof obj;
       } : function(obj) {
           return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
       };
       var g;
       g = function() {
           return this;
       }();
       try {
           g = g || Function("return this")() || (1, eval)("this");
       } catch (e) {
           if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
       }
       module.exports = g;
   }), , , , , , (function(module, exports, __webpack_require__) {
       module.exports = __webpack_require__(12);
   }), (function(module, exports, __webpack_require__) {
       "use strict";
       var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
           return typeof obj;
       } : function(obj) {
           return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
       };
       var _liteReady = __webpack_require__(2);
       var _liteReady2 = _interopRequireDefault(_liteReady);
       var _global = __webpack_require__(4);
       var _jarallax = __webpack_require__(13);
       var _jarallax2 = _interopRequireDefault(_jarallax);
   
       function _interopRequireDefault(obj) {
           return obj && obj.__esModule ? obj : {
               default: obj
           };
       }
       var oldPlugin = _global.window.jarallax;
       _global.window.jarallax = _jarallax2.default;
       _global.window.jarallax.noConflict = function() {
           _global.window.jarallax = oldPlugin;
           return this;
       };
       if (typeof _global.jQuery !== 'undefined') {
           var jQueryPlugin = function jQueryPlugin() {
               var args = arguments || [];
               Array.prototype.unshift.call(args, this);
               var res = _jarallax2.default.apply(_global.window, args);
               return (typeof res === 'undefined' ? 'undefined' : _typeof(res)) !== 'object' ? res : this;
           };
           jQueryPlugin.constructor = _jarallax2.default.constructor;
           var oldJqPlugin = _global.jQuery.fn.jarallax;
           _global.jQuery.fn.jarallax = jQueryPlugin;
           _global.jQuery.fn.jarallax.noConflict = function() {
               _global.jQuery.fn.jarallax = oldJqPlugin;
               return this;
           };
       }
       (0, _liteReady2.default)(function() {
           (0, _jarallax2.default)(document.querySelectorAll('[data-jarallax]'));
       });
   }), (function(module, exports, __webpack_require__) {
       "use strict";
       (function(global) {
           Object.defineProperty(exports, "__esModule", {
               value: true
           });
           var _slicedToArray = function() {
               function sliceIterator(arr, i) {
                   var _arr = [];
                   var _n = true;
                   var _d = false;
                   var _e = undefined;
                   try {
                       for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                           _arr.push(_s.value);
                           if (i && _arr.length === i) break;
                       }
                   } catch (err) {
                       _d = true;
                       _e = err;
                   } finally {
                       try {
                           if (!_n && _i["return"]) _i["return"]();
                       } finally {
                           if (_d) throw _e;
                       }
                   }
                   return _arr;
               }
               return function(arr, i) {
                   if (Array.isArray(arr)) {
                       return arr;
                   } else if (Symbol.iterator in Object(arr)) {
                       return sliceIterator(arr, i);
                   } else {
                       throw new TypeError("Invalid attempt to destructure non-iterable instance");
                   }
               };
           }();
           var _createClass = function() {
               function defineProperties(target, props) {
                   for (var i = 0; i < props.length; i++) {
                       var descriptor = props[i];
                       descriptor.enumerable = descriptor.enumerable || false;
                       descriptor.configurable = true;
                       if ("value" in descriptor) descriptor.writable = true;
                       Object.defineProperty(target, descriptor.key, descriptor);
                   }
               }
               return function(Constructor, protoProps, staticProps) {
                   if (protoProps) defineProperties(Constructor.prototype, protoProps);
                   if (staticProps) defineProperties(Constructor, staticProps);
                   return Constructor;
               };
           }();
           var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
               return typeof obj;
           } : function(obj) {
               return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
           };
           var _liteReady = __webpack_require__(2);
           var _liteReady2 = _interopRequireDefault(_liteReady);
           var _rafl = __webpack_require__(14);
           var _rafl2 = _interopRequireDefault(_rafl);
           var _global = __webpack_require__(4);
   
           function _interopRequireDefault(obj) {
               return obj && obj.__esModule ? obj : {
                   default: obj
               };
           }
   
           function _classCallCheck(instance, Constructor) {
               if (!(instance instanceof Constructor)) {
                   throw new TypeError("Cannot call a class as a function");
               }
           }
           var isIE = navigator.userAgent.indexOf('MSIE ') > -1 || navigator.userAgent.indexOf('Trident/') > -1 || navigator.userAgent.indexOf('Edge/') > -1;
           var supportTransform = function() {
               var prefixes = 'transform WebkitTransform MozTransform'.split(' ');
               var div = document.createElement('div');
               for (var i = 0; i < prefixes.length; i++) {
                   if (div && div.style[prefixes[i]] !== undefined) {
                       return prefixes[i];
                   }
               }
               return false;
           }();
           var wndW = void 0;
           var wndH = void 0;
           var wndY = void 0;
           var forceResizeParallax = false;
           var forceScrollParallax = false;
   
           function updateWndVars(e) {
               wndW = _global.window.innerWidth || document.documentElement.clientWidth;
               wndH = _global.window.innerHeight || document.documentElement.clientHeight;
               if ((typeof e === 'undefined' ? 'undefined' : _typeof(e)) === 'object' && (e.type === 'load' || e.type === 'dom-loaded')) {
                   forceResizeParallax = true;
               }
           }
           updateWndVars();
           _global.window.addEventListener('resize', updateWndVars);
           _global.window.addEventListener('orientationchange', updateWndVars);
           _global.window.addEventListener('load', updateWndVars);
           (0, _liteReady2.default)(function() {
               updateWndVars({
                   type: 'dom-loaded'
               });
           });
           var jarallaxList = [];
           var oldPageData = false;
   
           function updateParallax() {
               if (!jarallaxList.length) {
                   return;
               }
               if (_global.window.pageYOffset !== undefined) {
                   wndY = _global.window.pageYOffset;
               } else {
                   wndY = (document.documentElement || document.body.parentNode || document.body).scrollTop;
               }
               var isResized = forceResizeParallax || !oldPageData || oldPageData.width !== wndW || oldPageData.height !== wndH;
               var isScrolled = forceScrollParallax || isResized || !oldPageData || oldPageData.y !== wndY;
               forceResizeParallax = false;
               forceScrollParallax = false;
               if (isResized || isScrolled) {
                   jarallaxList.forEach(function(item) {
                       if (isResized) {
                           item.onResize();
                       }
                       if (isScrolled) {
                           item.onScroll();
                       }
                   });
                   oldPageData = {
                       width: wndW,
                       height: wndH,
                       y: wndY
                   };
               }
               (0, _rafl2.default)(updateParallax);
           }
           var resizeObserver = global.ResizeObserver ? new global.ResizeObserver(function(entry) {
               if (entry && entry.length) {
                   (0, _rafl2.default)(function() {
                       entry.forEach(function(item) {
                           if (item.target && item.target.jarallax) {
                               if (!forceResizeParallax) {
                                   item.target.jarallax.onResize();
                               }
                               forceScrollParallax = true;
                           }
                       });
                   });
               }
           }) : false;
           var instanceID = 0;
           var Jarallax = function() {
               function Jarallax(item, userOptions) {
                   _classCallCheck(this, Jarallax);
                   var self = this;
                   self.instanceID = instanceID++;
                   self.$item = item;
                   self.defaults = {
                       type: 'scroll',
                       speed: 0.5,
                       imgSrc: null,
                       imgElement: '.jarallax-img',
                       imgSize: 'cover',
                       imgPosition: '50% 50%',
                       imgRepeat: 'no-repeat',
                       keepImg: false,
                       elementInViewport: null,
                       zIndex: -100,
                       disableParallax: false,
                       disableVideo: false,
                       automaticResize: true,
                       videoSrc: null,
                       videoStartTime: 0,
                       videoEndTime: 0,
                       videoVolume: 0,
                       videoLoop: true,
                       videoPlayOnlyVisible: true,
                       onScroll: null,
                       onInit: null,
                       onDestroy: null,
                       onCoverImage: null
                   };
                   var deprecatedDataAttribute = self.$item.getAttribute('data-jarallax');
                   var oldDataOptions = JSON.parse(deprecatedDataAttribute || '{}');
                   if (deprecatedDataAttribute) {
                       console.warn('Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53');
                   }
                   var dataOptions = self.$item.dataset || {};
                   var pureDataOptions = {};
                   Object.keys(dataOptions).forEach(function(key) {
                       var loweCaseOption = key.substr(0, 1).toLowerCase() + key.substr(1);
                       if (loweCaseOption && typeof self.defaults[loweCaseOption] !== 'undefined') {
                           pureDataOptions[loweCaseOption] = dataOptions[key];
                       }
                   });
                   self.options = self.extend({}, self.defaults, oldDataOptions, pureDataOptions, userOptions);
                   self.pureOptions = self.extend({}, self.options);
                   Object.keys(self.options).forEach(function(key) {
                       if (self.options[key] === 'true') {
                           self.options[key] = true;
                       } else if (self.options[key] === 'false') {
                           self.options[key] = false;
                       }
                   });
                   self.options.speed = Math.min(2, Math.max(-1, parseFloat(self.options.speed)));
                   if (self.options.noAndroid || self.options.noIos) {
                       console.warn('Detected usage of deprecated noAndroid or noIos options, you should use disableParallax option. See info here - https://github.com/nk-o/jarallax/#disable-on-mobile-devices');
                       if (!self.options.disableParallax) {
                           if (self.options.noIos && self.options.noAndroid) {
                               self.options.disableParallax = /iPad|iPhone|iPod|Android/;
                           } else if (self.options.noIos) {
                               self.options.disableParallax = /iPad|iPhone|iPod/;
                           } else if (self.options.noAndroid) {
                               self.options.disableParallax = /Android/;
                           }
                       }
                   }
                   if (typeof self.options.disableParallax === 'string') {
                       self.options.disableParallax = new RegExp(self.options.disableParallax);
                   }
                   if (self.options.disableParallax instanceof RegExp) {
                       var disableParallaxRegexp = self.options.disableParallax;
                       self.options.disableParallax = function() {
                           return disableParallaxRegexp.test(navigator.userAgent);
                       };
                   }
                   if (typeof self.options.disableParallax !== 'function') {
                       self.options.disableParallax = function() {
                           return false;
                       };
                   }
                   if (typeof self.options.disableVideo === 'string') {
                       self.options.disableVideo = new RegExp(self.options.disableVideo);
                   }
                   if (self.options.disableVideo instanceof RegExp) {
                       var disableVideoRegexp = self.options.disableVideo;
                       self.options.disableVideo = function() {
                           return disableVideoRegexp.test(navigator.userAgent);
                       };
                   }
                   if (typeof self.options.disableVideo !== 'function') {
                       self.options.disableVideo = function() {
                           return false;
                       };
                   }
                   var elementInVP = self.options.elementInViewport;
                   if (elementInVP && (typeof elementInVP === 'undefined' ? 'undefined' : _typeof(elementInVP)) === 'object' && typeof elementInVP.length !== 'undefined') {
                       var _elementInVP = elementInVP;
                       var _elementInVP2 = _slicedToArray(_elementInVP, 1);
                       elementInVP = _elementInVP2[0];
                   }
                   if (!(elementInVP instanceof Element)) {
                       elementInVP = null;
                   }
                   self.options.elementInViewport = elementInVP;
                   self.image = {
                       src: self.options.imgSrc || null,
                       $container: null,
                       useImgTag: false,
                       position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? 'absolute' : 'fixed'
                   };
                   if (self.initImg() && self.canInitParallax()) {
                       self.init();
                   }
               }
               _createClass(Jarallax, [{
                   key: 'css',
                   value: function css(el, styles) {
                       if (typeof styles === 'string') {
                           return _global.window.getComputedStyle(el).getPropertyValue(styles);
                       }
                       if (styles.transform && supportTransform) {
                           styles[supportTransform] = styles.transform;
                       }
                       Object.keys(styles).forEach(function(key) {
                           el.style[key] = styles[key];
                       });
                       return el;
                   }
               }, {
                   key: 'extend',
                   value: function extend(out) {
                       var _arguments = arguments;
                       out = out || {};
                       Object.keys(arguments).forEach(function(i) {
                           if (!_arguments[i]) {
                               return;
                           }
                           Object.keys(_arguments[i]).forEach(function(key) {
                               out[key] = _arguments[i][key];
                           });
                       });
                       return out;
                   }
               }, {
                   key: 'getWindowData',
                   value: function getWindowData() {
                       return {
                           width: wndW,
                           height: wndH,
                           y: wndY
                       };
                   }
               }, {
                   key: 'initImg',
                   value: function initImg() {
                       var self = this;
                       var $imgElement = self.options.imgElement;
                       if ($imgElement && typeof $imgElement === 'string') {
                           $imgElement = self.$item.querySelector($imgElement);
                       }
                       if (!($imgElement instanceof Element)) {
                           $imgElement = null;
                       }
                       if ($imgElement) {
                           if (self.options.keepImg) {
                               self.image.$item = $imgElement.cloneNode(true);
                           } else {
                               self.image.$item = $imgElement;
                               self.image.$itemParent = $imgElement.parentNode;
                           }
                           self.image.useImgTag = true;
                       }
                       if (self.image.$item) {
                           return true;
                       }
                       if (self.image.src === null) {
                           self.image.src = self.css(self.$item, 'background-image').replace(/^url\(['"]?/g, '').replace(/['"]?\)$/g, '');
                       }
                       return !(!self.image.src || self.image.src === 'none');
                   }
               }, {
                   key: 'canInitParallax',
                   value: function canInitParallax() {
                       return supportTransform && !this.options.disableParallax();
                   }
               }, {
                   key: 'init',
                   value: function init() {
                       var self = this;
                       var containerStyles = {
                           position: 'absolute',
                           top: 0,
                           left: 0,
                           width: '100%',
                           height: '100%',
                           overflow: 'hidden',
                           pointerEvents: 'none'
                       };
                       var imageStyles = {};
                       if (!self.options.keepImg) {
                           var curStyle = self.$item.getAttribute('style');
                           if (curStyle) {
                               self.$item.setAttribute('data-jarallax-original-styles', curStyle);
                           }
                           if (self.image.useImgTag) {
                               var curImgStyle = self.image.$item.getAttribute('style');
                               if (curImgStyle) {
                                   self.image.$item.setAttribute('data-jarallax-original-styles', curImgStyle);
                               }
                           }
                       }
                       if (self.css(self.$item, 'position') === 'static') {
                           self.css(self.$item, {
                               position: 'relative'
                           });
                       }
                       if (self.css(self.$item, 'z-index') === 'auto') {
                           self.css(self.$item, {
                               zIndex: 0
                           });
                       }
                       self.image.$container = document.createElement('div');
                       self.css(self.image.$container, containerStyles);
                       self.css(self.image.$container, {
                           'z-index': self.options.zIndex
                       });
                       if (isIE) {
                           self.css(self.image.$container, {
                               opacity: 0.9999
                           });
                       }
                       self.image.$container.setAttribute('id', 'jarallax-container-' + self.instanceID);
                       self.$item.appendChild(self.image.$container);
                       if (self.image.useImgTag) {
                           imageStyles = self.extend({
                               'object-fit': self.options.imgSize,
                               'object-position': self.options.imgPosition,
                               'font-family': 'object-fit: ' + self.options.imgSize + '; object-position: ' + self.options.imgPosition + ';',
                               'max-width': 'none'
                           }, containerStyles, imageStyles);
                       } else {
                           self.image.$item = document.createElement('div');
                           if (self.image.src) {
                               imageStyles = self.extend({
                                   'background-position': self.options.imgPosition,
                                   'background-size': self.options.imgSize,
                                   'background-repeat': self.options.imgRepeat,
                                   'background-image': 'url("' + self.image.src + '")'
                               }, containerStyles, imageStyles);
                           }
                       }
                       if (self.options.type === 'opacity' || self.options.type === 'scale' || self.options.type === 'scale-opacity' || self.options.speed === 1) {
                           self.image.position = 'absolute';
                       }
                       if (self.image.position === 'fixed') {
                           var parentWithTransform = 0;
                           var $itemParents = self.$item;
                           while ($itemParents !== null && $itemParents !== document && parentWithTransform === 0) {
                               var parentTransform = self.css($itemParents, '-webkit-transform') || self.css($itemParents, '-moz-transform') || self.css($itemParents, 'transform');
                               if (parentTransform && parentTransform !== 'none') {
                                   parentWithTransform = 1;
                                   self.image.position = 'absolute';
                               }
                               $itemParents = $itemParents.parentNode;
                           }
                       }
                       imageStyles.position = self.image.position;
                       self.css(self.image.$item, imageStyles);
                       self.image.$container.appendChild(self.image.$item);
                       self.onResize();
                       self.onScroll(true);
                       if (self.options.automaticResize && resizeObserver) {
                           resizeObserver.observe(self.$item);
                       }
                       if (self.options.onInit) {
                           self.options.onInit.call(self);
                       }
                       if (self.css(self.$item, 'background-image') !== 'none') {
                           self.css(self.$item, {
                               'background-image': 'none'
                           });
                       }
                       self.addToParallaxList();
                   }
               }, {
                   key: 'addToParallaxList',
                   value: function addToParallaxList() {
                       jarallaxList.push(this);
                       if (jarallaxList.length === 1) {
                           updateParallax();
                       }
                   }
               }, {
                   key: 'removeFromParallaxList',
                   value: function removeFromParallaxList() {
                       var self = this;
                       jarallaxList.forEach(function(item, key) {
                           if (item.instanceID === self.instanceID) {
                               jarallaxList.splice(key, 1);
                           }
                       });
                   }
               }, {
                   key: 'destroy',
                   value: function destroy() {
                       var self = this;
                       self.removeFromParallaxList();
                       var originalStylesTag = self.$item.getAttribute('data-jarallax-original-styles');
                       self.$item.removeAttribute('data-jarallax-original-styles');
                       if (!originalStylesTag) {
                           self.$item.removeAttribute('style');
                       } else {
                           self.$item.setAttribute('style', originalStylesTag);
                       }
                       if (self.image.useImgTag) {
                           var originalStylesImgTag = self.image.$item.getAttribute('data-jarallax-original-styles');
                           self.image.$item.removeAttribute('data-jarallax-original-styles');
                           if (!originalStylesImgTag) {
                               self.image.$item.removeAttribute('style');
                           } else {
                               self.image.$item.setAttribute('style', originalStylesTag);
                           }
                           if (self.image.$itemParent) {
                               self.image.$itemParent.appendChild(self.image.$item);
                           }
                       }
                       if (self.$clipStyles) {
                           self.$clipStyles.parentNode.removeChild(self.$clipStyles);
                       }
                       if (self.image.$container) {
                           self.image.$container.parentNode.removeChild(self.image.$container);
                       }
                       if (self.options.onDestroy) {
                           self.options.onDestroy.call(self);
                       }
                       delete self.$item.jarallax;
                   }
               }, {
                   key: 'clipContainer',
                   value: function clipContainer() {
                       if (this.image.position !== 'fixed') {
                           return;
                       }
                       var self = this;
                       var rect = self.image.$container.getBoundingClientRect();
                       var width = rect.width,
                           height = rect.height;
                       if (!self.$clipStyles) {
                           self.$clipStyles = document.createElement('style');
                           self.$clipStyles.setAttribute('type', 'text/css');
                           self.$clipStyles.setAttribute('id', 'jarallax-clip-' + self.instanceID);
                           var head = document.head || document.getElementsByTagName('head')[0];
                           head.appendChild(self.$clipStyles);
                       }
                       var styles = '#jarallax-container-' + self.instanceID + ' {\n           clip: rect(0 ' + width + 'px ' + height + 'px 0);\n           clip: rect(0, ' + width + 'px, ' + height + 'px, 0);\n        }';
                       if (self.$clipStyles.styleSheet) {
                           self.$clipStyles.styleSheet.cssText = styles;
                       } else {
                           self.$clipStyles.innerHTML = styles;
                       }
                   }
               }, {
                   key: 'coverImage',
                   value: function coverImage() {
                       var self = this;
                       var rect = self.image.$container.getBoundingClientRect();
                       var contH = rect.height;
                       var speed = self.options.speed;
                       var isScroll = self.options.type === 'scroll' || self.options.type === 'scroll-opacity';
                       var scrollDist = 0;
                       var resultH = contH;
                       var resultMT = 0;
                       if (isScroll) {
                           if (speed < 0) {
                               scrollDist = speed * Math.max(contH, wndH);
                               if (wndH < contH) {
                                   scrollDist -= speed * (contH - wndH);
                               }
                           } else {
                               scrollDist = speed * (contH + wndH);
                           }
                           if (speed > 1) {
                               resultH = Math.abs(scrollDist - wndH);
                           } else if (speed < 0) {
                               resultH = scrollDist / speed + Math.abs(scrollDist);
                           } else {
                               resultH += (wndH - contH) * (1 - speed);
                           }
                           scrollDist /= 2;
                       }
                       self.parallaxScrollDistance = scrollDist;
                       if (isScroll) {
                           resultMT = (wndH - resultH) / 2;
                       } else {
                           resultMT = (contH - resultH) / 2;
                       }
                       self.css(self.image.$item, {
                           height: resultH + 'px',
                           marginTop: resultMT + 'px',
                           left: self.image.position === 'fixed' ? rect.left + 'px' : '0',
                           width: rect.width + 'px'
                       });
                       if (self.options.onCoverImage) {
                           self.options.onCoverImage.call(self);
                       }
                       return {
                           image: {
                               height: resultH,
                               marginTop: resultMT
                           },
                           container: rect
                       };
                   }
               }, {
                   key: 'isVisible',
                   value: function isVisible() {
                       return this.isElementInViewport || false;
                   }
               }, {
                   key: 'onScroll',
                   value: function onScroll(force) {
                       var self = this;
                       var rect = self.$item.getBoundingClientRect();
                       var contT = rect.top;
                       var contH = rect.height;
                       var styles = {};
                       var viewportRect = rect;
                       if (self.options.elementInViewport) {
                           viewportRect = self.options.elementInViewport.getBoundingClientRect();
                       }
                       self.isElementInViewport = viewportRect.bottom >= 0 && viewportRect.right >= 0 && viewportRect.top <= wndH && viewportRect.left <= wndW;
                       if (force ? false : !self.isElementInViewport) {
                           return;
                       }
                       var beforeTop = Math.max(0, contT);
                       var beforeTopEnd = Math.max(0, contH + contT);
                       var afterTop = Math.max(0, -contT);
                       var beforeBottom = Math.max(0, contT + contH - wndH);
                       var beforeBottomEnd = Math.max(0, contH - (contT + contH - wndH));
                       var afterBottom = Math.max(0, -contT + wndH - contH);
                       var fromViewportCenter = 1 - 2 * (wndH - contT) / (wndH + contH);
                       var visiblePercent = 1;
                       if (contH < wndH) {
                           visiblePercent = 1 - (afterTop || beforeBottom) / contH;
                       } else if (beforeTopEnd <= wndH) {
                           visiblePercent = beforeTopEnd / wndH;
                       } else if (beforeBottomEnd <= wndH) {
                           visiblePercent = beforeBottomEnd / wndH;
                       }
                       if (self.options.type === 'opacity' || self.options.type === 'scale-opacity' || self.options.type === 'scroll-opacity') {
                           styles.transform = 'translate3d(0,0,0)';
                           styles.opacity = visiblePercent;
                       }
                       if (self.options.type === 'scale' || self.options.type === 'scale-opacity') {
                           var scale = 1;
                           if (self.options.speed < 0) {
                               scale -= self.options.speed * visiblePercent;
                           } else {
                               scale += self.options.speed * (1 - visiblePercent);
                           }
                           styles.transform = 'scale(' + scale + ') translate3d(0,0,0)';
                       }
                       if (self.options.type === 'scroll' || self.options.type === 'scroll-opacity') {
                           var positionY = self.parallaxScrollDistance * fromViewportCenter;
                           if (self.image.position === 'absolute') {
                               positionY -= contT;
                           }
                           styles.transform = 'translate3d(0,' + positionY + 'px,0)';
                       }
                       self.css(self.image.$item, styles);
                       if (self.options.onScroll) {
                           self.options.onScroll.call(self, {
                               section: rect,
                               beforeTop: beforeTop,
                               beforeTopEnd: beforeTopEnd,
                               afterTop: afterTop,
                               beforeBottom: beforeBottom,
                               beforeBottomEnd: beforeBottomEnd,
                               afterBottom: afterBottom,
                               visiblePercent: visiblePercent,
                               fromViewportCenter: fromViewportCenter
                           });
                       }
                   }
               }, {
                   key: 'onResize',
                   value: function onResize() {
                       this.coverImage();
                       this.clipContainer();
                   }
               }]);
               return Jarallax;
           }();
           var plugin = function plugin(items) {
               if ((typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object' ? items instanceof HTMLElement : items && (typeof items === 'undefined' ? 'undefined' : _typeof(items)) === 'object' && items !== null && items.nodeType === 1 && typeof items.nodeName === 'string') {
                   items = [items];
               }
               var options = arguments[1];
               var args = Array.prototype.slice.call(arguments, 2);
               var len = items.length;
               var k = 0;
               var ret = void 0;
               for (k; k < len; k++) {
                   if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' || typeof options === 'undefined') {
                       if (!items[k].jarallax) {
                           items[k].jarallax = new Jarallax(items[k], options);
                       }
                   } else if (items[k].jarallax) {
                       ret = items[k].jarallax[options].apply(items[k].jarallax, args);
                   }
                   if (typeof ret !== 'undefined') {
                       return ret;
                   }
               }
               return items;
           };
           plugin.constructor = Jarallax;
           exports.default = plugin;
       }.call(this, __webpack_require__(5)))
   }), (function(module, exports, __webpack_require__) {
       "use strict";
       var global = __webpack_require__(4);
       var request = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || fallback;
       var prev = +new Date();
   
       function fallback(fn) {
           var curr = +new Date();
           var ms = Math.max(0, 16 - (curr - prev));
           var req = setTimeout(fn, ms);
           return prev = curr, req;
       }
       var cancel = global.cancelAnimationFrame || global.webkitCancelAnimationFrame || global.mozCancelAnimationFrame || clearTimeout;
       if (Function.prototype.bind) {
           request = request.bind(global);
           cancel = cancel.bind(global);
       }
       exports = module.exports = request;
       exports.cancel = cancel;
   })]);
   /*!
    * Name    : Video Background Extension for Jarallax
    * Version : 1.0.1
    * Author  : nK <https://nkdev.info>
    * GitHub  : https://github.com/nk-o/jarallax
    */
   (function(modules) {
       var installedModules = {};
   
       function __webpack_require__(moduleId) {
           if (installedModules[moduleId]) {
               return installedModules[moduleId].exports;
           }
           var module = installedModules[moduleId] = {
               i: moduleId,
               l: false,
               exports: {}
           };
           modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
           module.l = true;
           return module.exports;
       }
       __webpack_require__.m = modules;
       __webpack_require__.c = installedModules;
       __webpack_require__.d = function(exports, name, getter) {
           if (!__webpack_require__.o(exports, name)) {
               Object.defineProperty(exports, name, {
                   enumerable: true,
                   get: getter
               });
           }
       };
       __webpack_require__.r = function(exports) {
           if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
               Object.defineProperty(exports, Symbol.toStringTag, {
                   value: 'Module'
               });
           }
           Object.defineProperty(exports, '__esModule', {
               value: true
           });
       };
       __webpack_require__.t = function(value, mode) {
           if (mode & 1) value = __webpack_require__(value);
           if (mode & 8) return value;
           if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
           var ns = Object.create(null);
           __webpack_require__.r(ns);
           Object.defineProperty(ns, 'default', {
               enumerable: true,
               value: value
           });
           if (mode & 2 && typeof value != 'string')
               for (var key in value) __webpack_require__.d(ns, key, function(key) {
                   return value[key];
               }.bind(null, key));
           return ns;
       };
       __webpack_require__.n = function(module) {
           var getter = module && module.__esModule ? function getDefault() {
               return module['default'];
           } : function getModuleExports() {
               return module;
           };
           __webpack_require__.d(getter, 'a', getter);
           return getter;
       };
       __webpack_require__.o = function(object, property) {
           return Object.prototype.hasOwnProperty.call(object, property);
       };
       __webpack_require__.p = "";
       return __webpack_require__(__webpack_require__.s = 6);
   })
   ([, , (function(module, exports, __webpack_require__) {
       "use strict";
       module.exports = function(callback) {
           if (document.readyState === 'complete' || document.readyState === 'interactive') {
               callback.call();
           } else if (document.attachEvent) {
               document.attachEvent('onreadystatechange', function() {
                   if (document.readyState === 'interactive') callback.call();
               });
           } else if (document.addEventListener) {
               document.addEventListener('DOMContentLoaded', callback);
           }
       };
   }), , (function(module, exports, __webpack_require__) {
       "use strict";
       (function(global) {
           var win;
           if (typeof window !== "undefined") {
               win = window;
           } else if (typeof global !== "undefined") {
               win = global;
           } else if (typeof self !== "undefined") {
               win = self;
           } else {
               win = {};
           }
           module.exports = win;
       }.call(this, __webpack_require__(5)))
   }), (function(module, exports, __webpack_require__) {
       "use strict";
       var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
           return typeof obj;
       } : function(obj) {
           return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
       };
       var g;
       g = function() {
           return this;
       }();
       try {
           g = g || Function("return this")() || (1, eval)("this");
       } catch (e) {
           if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
       }
       module.exports = g;
   }), (function(module, exports, __webpack_require__) {
       module.exports = __webpack_require__(7);
   }), (function(module, exports, __webpack_require__) {
       "use strict";
       var _videoWorker = __webpack_require__(8);
       var _videoWorker2 = _interopRequireDefault(_videoWorker);
       var _global = __webpack_require__(4);
       var _global2 = _interopRequireDefault(_global);
       var _liteReady = __webpack_require__(2);
       var _liteReady2 = _interopRequireDefault(_liteReady);
       var _jarallaxVideo = __webpack_require__(10);
       var _jarallaxVideo2 = _interopRequireDefault(_jarallaxVideo);
   
       function _interopRequireDefault(obj) {
           return obj && obj.__esModule ? obj : {
               default: obj
           };
       }
       _global2.default.VideoWorker = _global2.default.VideoWorker || _videoWorker2.default;
       (0, _jarallaxVideo2.default)();
       (0, _liteReady2.default)(function() {
           if (typeof jarallax !== 'undefined') {
               jarallax(document.querySelectorAll('[data-jarallax-video]'));
           }
       });
   }), (function(module, exports, __webpack_require__) {
       "use strict";
       module.exports = __webpack_require__(9);
   }), (function(module, exports, __webpack_require__) {
       "use strict";
       Object.defineProperty(exports, "__esModule", {
           value: true
       });
       var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
           return typeof obj;
       } : function(obj) {
           return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
       };
       var _createClass = function() {
           function defineProperties(target, props) {
               for (var i = 0; i < props.length; i++) {
                   var descriptor = props[i];
                   descriptor.enumerable = descriptor.enumerable || false;
                   descriptor.configurable = true;
                   if ("value" in descriptor) descriptor.writable = true;
                   Object.defineProperty(target, descriptor.key, descriptor);
               }
           }
           return function(Constructor, protoProps, staticProps) {
               if (protoProps) defineProperties(Constructor.prototype, protoProps);
               if (staticProps) defineProperties(Constructor, staticProps);
               return Constructor;
           };
       }();
   
       function _classCallCheck(instance, Constructor) {
           if (!(instance instanceof Constructor)) {
               throw new TypeError("Cannot call a class as a function");
           }
       }
   
       function Deferred() {
           this._done = [];
           this._fail = [];
       }
       Deferred.prototype = {
           execute: function execute(list, args) {
               var i = list.length;
               args = Array.prototype.slice.call(args);
               while (i--) {
                   list[i].apply(null, args);
               }
           },
           resolve: function resolve() {
               this.execute(this._done, arguments);
           },
           reject: function reject() {
               this.execute(this._fail, arguments);
           },
           done: function done(callback) {
               this._done.push(callback);
           },
           fail: function fail(callback) {
               this._fail.push(callback);
           }
       };
       var ID = 0;
       var YoutubeAPIadded = 0;
       var VimeoAPIadded = 0;
       var loadingYoutubePlayer = 0;
       var loadingVimeoPlayer = 0;
       var loadingYoutubeDefer = new Deferred();
       var loadingVimeoDefer = new Deferred();
       var VideoWorker = function() {
           function VideoWorker(url, options) {
               _classCallCheck(this, VideoWorker);
               var self = this;
               self.url = url;
               self.options_default = {
                   autoplay: false,
                   loop: false,
                   mute: false,
                   volume: 100,
                   showContols: true,
                   startTime: 0,
                   endTime: 0
               };
               self.options = self.extend({}, self.options_default, options);
               self.videoID = self.parseURL(url);
               if (self.videoID) {
                   self.ID = ID++;
                   self.loadAPI();
                   self.init();
               }
           }
           _createClass(VideoWorker, [{
               key: 'extend',
               value: function extend(out) {
                   var _arguments = arguments;
                   out = out || {};
                   Object.keys(arguments).forEach(function(i) {
                       if (!_arguments[i]) {
                           return;
                       }
                       Object.keys(_arguments[i]).forEach(function(key) {
                           out[key] = _arguments[i][key];
                       });
                   });
                   return out;
               }
           }, {
               key: 'parseURL',
               value: function parseURL(url) {
                   function getYoutubeID(ytUrl) {
                       var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
                       var match = ytUrl.match(regExp);
                       return match && match[1].length === 11 ? match[1] : false;
                   }
   
                   function getVimeoID(vmUrl) {
                       var regExp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
                       var match = vmUrl.match(regExp);
                       return match && match[3] ? match[3] : false;
                   }
   
                   function getLocalVideos(locUrl) {
                       var videoFormats = locUrl.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/);
                       var result = {};
                       var ready = 0;
                       videoFormats.forEach(function(val) {
                           var match = val.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                           if (match && match[1] && match[2]) {
                               result[match[1] === 'ogv' ? 'ogg' : match[1]] = match[2];
                               ready = 1;
                           }
                       });
                       return ready ? result : false;
                   }
                   var Youtube = getYoutubeID(url);
                   var Vimeo = getVimeoID(url);
                   var Local = getLocalVideos(url);
                   if (Youtube) {
                       this.type = 'youtube';
                       return Youtube;
                   } else if (Vimeo) {
                       this.type = 'vimeo';
                       return Vimeo;
                   } else if (Local) {
                       this.type = 'local';
                       return Local;
                   }
                   return false;
               }
           }, {
               key: 'isValid',
               value: function isValid() {
                   return !!this.videoID;
               }
           }, {
               key: 'on',
               value: function on(name, callback) {
                   this.userEventsList = this.userEventsList || [];
                   (this.userEventsList[name] || (this.userEventsList[name] = [])).push(callback);
               }
           }, {
               key: 'off',
               value: function off(name, callback) {
                   var _this = this;
                   if (!this.userEventsList || !this.userEventsList[name]) {
                       return;
                   }
                   if (!callback) {
                       delete this.userEventsList[name];
                   } else {
                       this.userEventsList[name].forEach(function(val, key) {
                           if (val === callback) {
                               _this.userEventsList[name][key] = false;
                           }
                       });
                   }
               }
           }, {
               key: 'fire',
               value: function fire(name) {
                   var _this2 = this;
                   var args = [].slice.call(arguments, 1);
                   if (this.userEventsList && typeof this.userEventsList[name] !== 'undefined') {
                       this.userEventsList[name].forEach(function(val) {
                           if (val) {
                               val.apply(_this2, args);
                           }
                       });
                   }
               }
           }, {
               key: 'play',
               value: function play(start) {
                   var self = this;
                   if (!self.player) {
                       return;
                   }
                   if (self.type === 'youtube' && self.player.playVideo) {
                       if (typeof start !== 'undefined') {
                           self.player.seekTo(start || 0);
                       }
                       if (YT.PlayerState.PLAYING !== self.player.getPlayerState()) {
                           self.player.playVideo();
                       }
                   }
                   if (self.type === 'vimeo') {
                       if (typeof start !== 'undefined') {
                           self.player.setCurrentTime(start);
                       }
                       self.player.getPaused().then(function(paused) {
                           if (paused) {
                               self.player.play();
                           }
                       });
                   }
                   if (self.type === 'local') {
                       if (typeof start !== 'undefined') {
                           self.player.currentTime = start;
                       }
                       if (self.player.paused) {
                           self.player.play();
                       }
                   }
               }
           }, {
               key: 'pause',
               value: function pause() {
                   var self = this;
                   if (!self.player) {
                       return;
                   }
                   if (self.type === 'youtube' && self.player.pauseVideo) {
                       if (YT.PlayerState.PLAYING === self.player.getPlayerState()) {
                           self.player.pauseVideo();
                       }
                   }
                   if (self.type === 'vimeo') {
                       self.player.getPaused().then(function(paused) {
                           if (!paused) {
                               self.player.pause();
                           }
                       });
                   }
                   if (self.type === 'local') {
                       if (!self.player.paused) {
                           self.player.pause();
                       }
                   }
               }
           }, {
               key: 'mute',
               value: function mute() {
                   var self = this;
                   if (!self.player) {
                       return;
                   }
                   if (self.type === 'youtube' && self.player.mute) {
                       self.player.mute();
                   }
                   if (self.type === 'vimeo' && self.player.setVolume) {
                       self.player.setVolume(0);
                   }
                   if (self.type === 'local') {
                       self.$video.muted = true;
                   }
               }
           }, {
               key: 'unmute',
               value: function unmute() {
                   var self = this;
                   if (!self.player) {
                       return;
                   }
                   if (self.type === 'youtube' && self.player.mute) {
                       self.player.unMute();
                   }
                   if (self.type === 'vimeo' && self.player.setVolume) {
                       self.player.setVolume(self.options.volume);
                   }
                   if (self.type === 'local') {
                       self.$video.muted = false;
                   }
               }
           }, {
               key: 'setVolume',
               value: function setVolume() {
                   var volume = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                   var self = this;
                   if (!self.player || !volume) {
                       return;
                   }
                   if (self.type === 'youtube' && self.player.setVolume) {
                       self.player.setVolume(volume);
                   }
                   if (self.type === 'vimeo' && self.player.setVolume) {
                       self.player.setVolume(volume);
                   }
                   if (self.type === 'local') {
                       self.$video.volume = volume / 100;
                   }
               }
           }, {
               key: 'getVolume',
               value: function getVolume(callback) {
                   var self = this;
                   if (!self.player) {
                       callback(false);
                       return;
                   }
                   if (self.type === 'youtube' && self.player.getVolume) {
                       callback(self.player.getVolume());
                   }
                   if (self.type === 'vimeo' && self.player.getVolume) {
                       self.player.getVolume().then(function(volume) {
                           callback(volume);
                       });
                   }
                   if (self.type === 'local') {
                       callback(self.$video.volume * 100);
                   }
               }
           }, {
               key: 'getMuted',
               value: function getMuted(callback) {
                   var self = this;
                   if (!self.player) {
                       callback(null);
                       return;
                   }
                   if (self.type === 'youtube' && self.player.isMuted) {
                       callback(self.player.isMuted());
                   }
                   if (self.type === 'vimeo' && self.player.getVolume) {
                       self.player.getVolume().then(function(volume) {
                           callback(!!volume);
                       });
                   }
                   if (self.type === 'local') {
                       callback(self.$video.muted);
                   }
               }
           }, {
               key: 'getImageURL',
               value: function getImageURL(callback) {
                   var self = this;
                   if (self.videoImage) {
                       callback(self.videoImage);
                       return;
                   }
                   if (self.type === 'youtube') {
                       var availableSizes = ['maxresdefault', 'sddefault', 'hqdefault', '0'];
                       var step = 0;
                       var tempImg = new Image();
                       tempImg.onload = function() {
                           if ((this.naturalWidth || this.width) !== 120 || step === availableSizes.length - 1) {
                               self.videoImage = 'https://img.youtube.com/vi/' + self.videoID + '/' + availableSizes[step] + '.jpg';
                               callback(self.videoImage);
                           } else {
                               step++;
                               this.src = 'https://img.youtube.com/vi/' + self.videoID + '/' + availableSizes[step] + '.jpg';
                           }
                       };
                       tempImg.src = 'https://img.youtube.com/vi/' + self.videoID + '/' + availableSizes[step] + '.jpg';
                   }
                   if (self.type === 'vimeo') {
                       var request = new XMLHttpRequest();
                       request.open('GET', 'https://vimeo.com/api/v2/video/' + self.videoID + '.json', true);
                       request.onreadystatechange = function() {
                           if (this.readyState === 4) {
                               if (this.status >= 200 && this.status < 400) {
                                   var response = JSON.parse(this.responseText);
                                   self.videoImage = response[0].thumbnail_large;
                                   callback(self.videoImage);
                               } else {}
                           }
                       };
                       request.send();
                       request = null;
                   }
               }
           }, {
               key: 'getIframe',
               value: function getIframe(callback) {
                   this.getVideo(callback);
               }
           }, {
               key: 'getVideo',
               value: function getVideo(callback) {
                   var self = this;
                   if (self.$video) {
                       callback(self.$video);
                       return;
                   }
                   self.onAPIready(function() {
                       var hiddenDiv = void 0;
                       if (!self.$video) {
                           hiddenDiv = document.createElement('div');
                           hiddenDiv.style.display = 'none';
                       }
                       if (self.type === 'youtube') {
                           self.playerOptions = {};
                           self.playerOptions.videoId = self.videoID;
                           self.playerOptions.playerVars = {
                               autohide: 1,
                               rel: 0,
                               autoplay: 0,
                               playsinline: 1
                           };
                           if (!self.options.showContols) {
                               self.playerOptions.playerVars.iv_load_policy = 3;
                               self.playerOptions.playerVars.modestbranding = 1;
                               self.playerOptions.playerVars.controls = 0;
                               self.playerOptions.playerVars.showinfo = 0;
                               self.playerOptions.playerVars.disablekb = 1;
                           }
                           var ytStarted = void 0;
                           var ytProgressInterval = void 0;
                           self.playerOptions.events = {
                               onReady: function onReady(e) {
                                   if (self.options.mute) {
                                       e.target.mute();
                                   } else if (self.options.volume) {
                                       e.target.setVolume(self.options.volume);
                                   }
                                   if (self.options.autoplay) {
                                       self.play(self.options.startTime);
                                   }
                                   self.fire('ready', e);
                                   if (self.options.loop && !self.options.endTime) {
                                       var secondsOffset = 0.1;
                                       self.options.endTime = self.player.getDuration() - secondsOffset;
                                   }
                                   setInterval(function() {
                                       self.getVolume(function(volume) {
                                           if (self.options.volume !== volume) {
                                               self.options.volume = volume;
                                               self.fire('volumechange', e);
                                           }
                                       });
                                   }, 150);
                               },
                               onStateChange: function onStateChange(e) {
                                   if (self.options.loop && e.data === YT.PlayerState.ENDED) {
                                       self.play(self.options.startTime);
                                   }
                                   if (!ytStarted && e.data === YT.PlayerState.PLAYING) {
                                       ytStarted = 1;
                                       self.fire('started', e);
                                   }
                                   if (e.data === YT.PlayerState.PLAYING) {
                                       self.fire('play', e);
                                   }
                                   if (e.data === YT.PlayerState.PAUSED) {
                                       self.fire('pause', e);
                                   }
                                   if (e.data === YT.PlayerState.ENDED) {
                                       self.fire('ended', e);
                                   }
                                   if (e.data === YT.PlayerState.PLAYING) {
                                       ytProgressInterval = setInterval(function() {
                                           self.fire('timeupdate', e);
                                           if (self.options.endTime && self.player.getCurrentTime() >= self.options.endTime) {
                                               if (self.options.loop) {
                                                   self.play(self.options.startTime);
                                               } else {
                                                   self.pause();
                                               }
                                           }
                                       }, 150);
                                   } else {
                                       clearInterval(ytProgressInterval);
                                   }
                               }
                           };
                           var firstInit = !self.$video;
                           if (firstInit) {
                               var div = document.createElement('div');
                               div.setAttribute('id', self.playerID);
                               hiddenDiv.appendChild(div);
                               document.body.appendChild(hiddenDiv);
                           }
                           self.player = self.player || new window.YT.Player(self.playerID, self.playerOptions);
                           if (firstInit) {
                               self.$video = document.getElementById(self.playerID);
                               self.videoWidth = parseInt(self.$video.getAttribute('width'), 10) || 1280;
                               self.videoHeight = parseInt(self.$video.getAttribute('height'), 10) || 720;
                           }
                       }
                       if (self.type === 'vimeo') {
                           self.playerOptions = {
                               id: self.videoID,
                               autopause: 0,
                               transparent: 0,
                               autoplay: self.options.autoplay ? 1 : 0,
                               loop: self.options.loop ? 1 : 0,
                               muted: self.options.mute ? 1 : 0
                           };
                           if (self.options.volume) {
                               self.playerOptions.volume = self.options.volume;
                           }
                           if (!self.options.showContols) {
                               self.playerOptions.badge = 0;
                               self.playerOptions.byline = 0;
                               self.playerOptions.portrait = 0;
                               self.playerOptions.title = 0;
                           }
                           if (!self.$video) {
                               var playerOptionsString = '';
                               Object.keys(self.playerOptions).forEach(function(key) {
                                   if (playerOptionsString !== '') {
                                       playerOptionsString += '&';
                                   }
                                   playerOptionsString += key + '=' + encodeURIComponent(self.playerOptions[key]);
                               });
                               self.$video = document.createElement('iframe');
                               self.$video.setAttribute('id', self.playerID);
                               self.$video.setAttribute('src', 'https://player.vimeo.com/video/' + self.videoID + '?' + playerOptionsString);
                               self.$video.setAttribute('frameborder', '0');
                               self.$video.setAttribute('mozallowfullscreen', '');
                               self.$video.setAttribute('allowfullscreen', '');
                               hiddenDiv.appendChild(self.$video);
                               document.body.appendChild(hiddenDiv);
                           }
                           self.player = self.player || new Vimeo.Player(self.$video, self.playerOptions);
                           if (self.options.startTime && self.options.autoplay) {
                               self.player.setCurrentTime(self.options.startTime);
                           }
                           self.player.getVideoWidth().then(function(width) {
                               self.videoWidth = width || 1280;
                           });
                           self.player.getVideoHeight().then(function(height) {
                               self.videoHeight = height || 720;
                           });
                           var vmStarted = void 0;
                           self.player.on('timeupdate', function(e) {
                               if (!vmStarted) {
                                   self.fire('started', e);
                                   vmStarted = 1;
                               }
                               self.fire('timeupdate', e);
                               if (self.options.endTime) {
                                   if (self.options.endTime && e.seconds >= self.options.endTime) {
                                       if (self.options.loop) {
                                           self.play(self.options.startTime);
                                       } else {
                                           self.pause();
                                       }
                                   }
                               }
                           });
                           self.player.on('play', function(e) {
                               self.fire('play', e);
                               if (self.options.startTime && e.seconds === 0) {
                                   self.play(self.options.startTime);
                               }
                           });
                           self.player.on('pause', function(e) {
                               self.fire('pause', e);
                           });
                           self.player.on('ended', function(e) {
                               self.fire('ended', e);
                           });
                           self.player.on('loaded', function(e) {
                               self.fire('ready', e);
                           });
                           self.player.on('volumechange', function(e) {
                               self.fire('volumechange', e);
                           });
                       }
   
                       function addSourceToLocal(element, src, type) {
                           var source = document.createElement('source');
                           source.src = src;
                           source.type = type;
                           element.appendChild(source);
                       }
                       if (self.type === 'local') {
                           if (!self.$video) {
                               self.$video = document.createElement('video');
                               if (self.options.showContols) {
                                   self.$video.controls = true;
                               }
                               if (self.options.mute) {
                                   self.$video.muted = true;
                               } else if (self.$video.volume) {
                                   self.$video.volume = self.options.volume / 100;
                               }
                               if (self.options.loop) {
                                   self.$video.loop = true;
                               }
                               self.$video.setAttribute('playsinline', '');
                               self.$video.setAttribute('webkit-playsinline', '');
                               self.$video.setAttribute('id', self.playerID);
                               hiddenDiv.appendChild(self.$video);
                               document.body.appendChild(hiddenDiv);
                               Object.keys(self.videoID).forEach(function(key) {
                                   addSourceToLocal(self.$video, self.videoID[key], 'video/' + key);
                               });
                           }
                           self.player = self.player || self.$video;
                           var locStarted = void 0;
                           self.player.addEventListener('playing', function(e) {
                               if (!locStarted) {
                                   self.fire('started', e);
                               }
                               locStarted = 1;
                           });
                           self.player.addEventListener('timeupdate', function(e) {
                               self.fire('timeupdate', e);
                               if (self.options.endTime) {
                                   if (self.options.endTime && this.currentTime >= self.options.endTime) {
                                       if (self.options.loop) {
                                           self.play(self.options.startTime);
                                       } else {
                                           self.pause();
                                       }
                                   }
                               }
                           });
                           self.player.addEventListener('play', function(e) {
                               self.fire('play', e);
                           });
                           self.player.addEventListener('pause', function(e) {
                               self.fire('pause', e);
                           });
                           self.player.addEventListener('ended', function(e) {
                               self.fire('ended', e);
                           });
                           self.player.addEventListener('loadedmetadata', function() {
                               self.videoWidth = this.videoWidth || 1280;
                               self.videoHeight = this.videoHeight || 720;
                               self.fire('ready');
                               if (self.options.autoplay) {
                                   self.play(self.options.startTime);
                               }
                           });
                           self.player.addEventListener('volumechange', function(e) {
                               self.getVolume(function(volume) {
                                   self.options.volume = volume;
                               });
                               self.fire('volumechange', e);
                           });
                       }
                       callback(self.$video);
                   });
               }
           }, {
               key: 'init',
               value: function init() {
                   var self = this;
                   self.playerID = 'VideoWorker-' + self.ID;
               }
           }, {
               key: 'loadAPI',
               value: function loadAPI() {
                   var self = this;
                   if (YoutubeAPIadded && VimeoAPIadded) {
                       return;
                   }
                   var src = '';
                   if (self.type === 'youtube' && !YoutubeAPIadded) {
                       YoutubeAPIadded = 1;
                       src = 'https://www.youtube.com/iframe_api';
                   }
                   if (self.type === 'vimeo' && !VimeoAPIadded) {
                       VimeoAPIadded = 1;
                       src = 'https://player.vimeo.com/api/player.js';
                   }
                   if (!src) {
                       return;
                   }
                   var tag = document.createElement('script');
                   var head = document.getElementsByTagName('head')[0];
                   tag.src = src;
                   head.appendChild(tag);
                   head = null;
                   tag = null;
               }
           }, {
               key: 'onAPIready',
               value: function onAPIready(callback) {
                   var self = this;
                   if (self.type === 'youtube') {
                       if ((typeof YT === 'undefined' || YT.loaded === 0) && !loadingYoutubePlayer) {
                           loadingYoutubePlayer = 1;
                           window.onYouTubeIframeAPIReady = function() {
                               window.onYouTubeIframeAPIReady = null;
                               loadingYoutubeDefer.resolve('done');
                               callback();
                           };
                       } else if ((typeof YT === 'undefined' ? 'undefined' : _typeof(YT)) === 'object' && YT.loaded === 1) {
                           callback();
                       } else {
                           loadingYoutubeDefer.done(function() {
                               callback();
                           });
                       }
                   }
                   if (self.type === 'vimeo') {
                       if (typeof Vimeo === 'undefined' && !loadingVimeoPlayer) {
                           loadingVimeoPlayer = 1;
                           var vimeoInterval = setInterval(function() {
                               if (typeof Vimeo !== 'undefined') {
                                   clearInterval(vimeoInterval);
                                   loadingVimeoDefer.resolve('done');
                                   callback();
                               }
                           }, 20);
                       } else if (typeof Vimeo !== 'undefined') {
                           callback();
                       } else {
                           loadingVimeoDefer.done(function() {
                               callback();
                           });
                       }
                   }
                   if (self.type === 'local') {
                       callback();
                   }
               }
           }]);
           return VideoWorker;
       }();
       exports.default = VideoWorker;
   }), (function(module, exports, __webpack_require__) {
       "use strict";
       Object.defineProperty(exports, "__esModule", {
           value: true
       });
       exports.default = jarallaxVideo;
       var _videoWorker = __webpack_require__(8);
       var _videoWorker2 = _interopRequireDefault(_videoWorker);
       var _global = __webpack_require__(4);
       var _global2 = _interopRequireDefault(_global);
   
       function _interopRequireDefault(obj) {
           return obj && obj.__esModule ? obj : {
               default: obj
           };
       }
   
       function jarallaxVideo() {
           var jarallax = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _global2.default.jarallax;
           if (typeof jarallax === 'undefined') {
               return;
           }
           var Jarallax = jarallax.constructor;
           var defInit = Jarallax.prototype.init;
           Jarallax.prototype.init = function() {
               var self = this;
               defInit.apply(self);
               if (self.video && !self.options.disableVideo()) {
                   self.video.getVideo(function(video) {
                       var $parent = video.parentNode;
                       self.css(video, {
                           position: self.image.position,
                           top: '0px',
                           left: '0px',
                           right: '0px',
                           bottom: '0px',
                           width: '100%',
                           height: '100%',
                           maxWidth: 'none',
                           maxHeight: 'none',
                           margin: 0,
                           zIndex: -1
                       });
                       self.$video = video;
                       self.image.$container.appendChild(video);
                       $parent.parentNode.removeChild($parent);
                   });
               }
           };
           var defCoverImage = Jarallax.prototype.coverImage;
           Jarallax.prototype.coverImage = function() {
               var self = this;
               var imageData = defCoverImage.apply(self);
               var node = self.image.$item ? self.image.$item.nodeName : false;
               if (imageData && self.video && node && (node === 'IFRAME' || node === 'VIDEO')) {
                   var h = imageData.image.height;
                   var w = h * self.image.width / self.image.height;
                   var ml = (imageData.container.width - w) / 2;
                   var mt = imageData.image.marginTop;
                   if (imageData.container.width > w) {
                       w = imageData.container.width;
                       h = w * self.image.height / self.image.width;
                       ml = 0;
                       mt += (imageData.image.height - h) / 2;
                   }
                   if (node === 'IFRAME') {
                       h += 400;
                       mt -= 200;
                   }
                   self.css(self.$video, {
                       width: w + 'px',
                       marginLeft: ml + 'px',
                       height: h + 'px',
                       marginTop: mt + 'px'
                   });
               }
               return imageData;
           };
           var defInitImg = Jarallax.prototype.initImg;
           Jarallax.prototype.initImg = function() {
               var self = this;
               var defaultResult = defInitImg.apply(self);
               if (!self.options.videoSrc) {
                   self.options.videoSrc = self.$item.getAttribute('data-jarallax-video') || null;
               }
               if (self.options.videoSrc) {
                   self.defaultInitImgResult = defaultResult;
                   return true;
               }
               return defaultResult;
           };
           var defCanInitParallax = Jarallax.prototype.canInitParallax;
           Jarallax.prototype.canInitParallax = function() {
               var self = this;
               var defaultResult = defCanInitParallax.apply(self);
               if (!self.options.videoSrc) {
                   return defaultResult;
               }
               var video = new _videoWorker2.default(self.options.videoSrc, {
                   autoplay: true,
                   loop: self.options.videoLoop,
                   showContols: false,
                   startTime: self.options.videoStartTime || 0,
                   endTime: self.options.videoEndTime || 0,
                   mute: self.options.videoVolume ? 0 : 1,
                   volume: self.options.videoVolume || 0
               });
               if (video.isValid()) {
                   if (!defaultResult) {
                       if (!self.defaultInitImgResult) {
                           video.getImageURL(function(url) {
                               var curStyle = self.$item.getAttribute('style');
                               if (curStyle) {
                                   self.$item.setAttribute('data-jarallax-original-styles', curStyle);
                               }
                               self.css(self.$item, {
                                   'background-image': 'url("' + url + '")',
                                   'background-position': 'center',
                                   'background-size': 'cover'
                               });
                           });
                       }
                   } else {
                       video.on('ready', function() {
                           if (self.options.videoPlayOnlyVisible) {
                               var oldOnScroll = self.onScroll;
                               self.onScroll = function() {
                                   oldOnScroll.apply(self);
                                   if (self.options.videoLoop || !self.options.videoLoop && !self.videoEnded) {
                                       if (self.isVisible()) {
                                           video.play();
                                       } else {
                                           video.pause();
                                       }
                                   }
                               };
                           } else {
                               video.play();
                           }
                       });
                       video.on('started', function() {
                           self.image.$default_item = self.image.$item;
                           self.image.$item = self.$video;
                           self.image.width = self.video.videoWidth || 1280;
                           self.image.height = self.video.videoHeight || 720;
                           self.coverImage();
                           self.clipContainer();
                           self.onScroll();
                           if (self.image.$default_item) {
                               self.image.$default_item.style.display = 'none';
                           }
                       });
                       video.on('ended', function() {
                           self.videoEnded = true;
                           if (!self.options.videoLoop) {
                               if (self.image.$default_item) {
                                   self.image.$item = self.image.$default_item;
                                   self.image.$item.style.display = 'block';
                                   self.coverImage();
                                   self.clipContainer();
                                   self.onScroll();
                               }
                           }
                       });
                       self.video = video;
                       if (!self.defaultInitImgResult) {
                           if (video.type !== 'local') {
                               video.getImageURL(function(url) {
                                   self.image.src = url;
                                   self.init();
                               });
                               return false;
                           }
                           self.image.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
                           return true;
                       }
                   }
               }
               return defaultResult;
           };
           var defDestroy = Jarallax.prototype.destroy;
           Jarallax.prototype.destroy = function() {
               var self = this;
               if (self.image.$default_item) {
                   self.image.$item = self.image.$default_item;
                   delete self.image.$default_item;
               }
               defDestroy.apply(self);
           };
       }
   })]);
   /*!
    * Name    : Elements Extension for Jarallax
    * Version : 1.0.0
    * Author  : nK <https://nkdev.info>
    * GitHub  : https://github.com/nk-o/jarallax
    */
   (function(modules) {
       var installedModules = {};
   
       function __webpack_require__(moduleId) {
           if (installedModules[moduleId]) {
               return installedModules[moduleId].exports;
           }
           var module = installedModules[moduleId] = {
               i: moduleId,
               l: false,
               exports: {}
           };
           modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
           module.l = true;
           return module.exports;
       }
       __webpack_require__.m = modules;
       __webpack_require__.c = installedModules;
       __webpack_require__.d = function(exports, name, getter) {
           if (!__webpack_require__.o(exports, name)) {
               Object.defineProperty(exports, name, {
                   enumerable: true,
                   get: getter
               });
           }
       };
       __webpack_require__.r = function(exports) {
           if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
               Object.defineProperty(exports, Symbol.toStringTag, {
                   value: 'Module'
               });
           }
           Object.defineProperty(exports, '__esModule', {
               value: true
           });
       };
       __webpack_require__.t = function(value, mode) {
           if (mode & 1) value = __webpack_require__(value);
           if (mode & 8) return value;
           if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
           var ns = Object.create(null);
           __webpack_require__.r(ns);
           Object.defineProperty(ns, 'default', {
               enumerable: true,
               value: value
           });
           if (mode & 2 && typeof value != 'string')
               for (var key in value) __webpack_require__.d(ns, key, function(key) {
                   return value[key];
               }.bind(null, key));
           return ns;
       };
       __webpack_require__.n = function(module) {
           var getter = module && module.__esModule ? function getDefault() {
               return module['default'];
           } : function getModuleExports() {
               return module;
           };
           __webpack_require__.d(getter, 'a', getter);
           return getter;
       };
       __webpack_require__.o = function(object, property) {
           return Object.prototype.hasOwnProperty.call(object, property);
       };
       __webpack_require__.p = "";
       return __webpack_require__(__webpack_require__.s = 0);
   })
   ([(function(module, exports, __webpack_require__) {
       module.exports = __webpack_require__(1);
   }), (function(module, exports, __webpack_require__) {
       "use strict";
       var _liteReady = __webpack_require__(2);
       var _liteReady2 = _interopRequireDefault(_liteReady);
       var _jarallaxElement = __webpack_require__(3);
       var _jarallaxElement2 = _interopRequireDefault(_jarallaxElement);
   
       function _interopRequireDefault(obj) {
           return obj && obj.__esModule ? obj : {
               default: obj
           };
       }
       (0, _jarallaxElement2.default)();
       (0, _liteReady2.default)(function() {
           if (typeof jarallax !== 'undefined') {
               jarallax(document.querySelectorAll('[data-jarallax-element]'));
           }
       });
   }), (function(module, exports, __webpack_require__) {
       "use strict";
       module.exports = function(callback) {
           if (document.readyState === 'complete' || document.readyState === 'interactive') {
               callback.call();
           } else if (document.attachEvent) {
               document.attachEvent('onreadystatechange', function() {
                   if (document.readyState === 'interactive') callback.call();
               });
           } else if (document.addEventListener) {
               document.addEventListener('DOMContentLoaded', callback);
           }
       };
   }), (function(module, exports, __webpack_require__) {
       "use strict";
       Object.defineProperty(exports, "__esModule", {
           value: true
       });
       exports.default = jarallaxElement;
       var _global = __webpack_require__(4);
       var _global2 = _interopRequireDefault(_global);
   
       function _interopRequireDefault(obj) {
           return obj && obj.__esModule ? obj : {
               default: obj
           };
       }
   
       function jarallaxElement() {
           var jarallax = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _global2.default.jarallax;
           if (typeof jarallax === 'undefined') {
               return;
           }
           var Jarallax = jarallax.constructor;
           ['initImg', 'canInitParallax', 'init', 'destroy', 'clipContainer', 'coverImage', 'isVisible', 'onScroll', 'onResize'].forEach(function(key) {
               var def = Jarallax.prototype[key];
               Jarallax.prototype[key] = function() {
                   var self = this;
                   var args = arguments || [];
                   if (key === 'initImg' && self.$item.getAttribute('data-jarallax-element') !== null) {
                       self.options.type = 'element';
                       self.pureOptions.speed = self.$item.getAttribute('data-jarallax-element') || self.pureOptions.speed;
                   }
                   if (self.options.type !== 'element') {
                       return def.apply(self, args);
                   }
                   self.pureOptions.threshold = self.$item.getAttribute('data-threshold') || '';
                   switch (key) {
                       case 'init':
                           var speedArr = self.pureOptions.speed.split(' ');
                           self.options.speed = self.pureOptions.speed || 0;
                           self.options.speedY = speedArr[0] ? parseFloat(speedArr[0]) : 0;
                           self.options.speedX = speedArr[1] ? parseFloat(speedArr[1]) : 0;
                           var thresholdArr = self.pureOptions.threshold.split(' ');
                           self.options.thresholdY = thresholdArr[0] ? parseFloat(thresholdArr[0]) : null;
                           self.options.thresholdX = thresholdArr[1] ? parseFloat(thresholdArr[1]) : null;
                           break;
                       case 'onResize':
                           var defTransform = self.css(self.$item, 'transform');
                           self.css(self.$item, {
                               transform: ''
                           });
                           var rect = self.$item.getBoundingClientRect();
                           self.itemData = {
                               width: rect.width,
                               height: rect.height,
                               y: rect.top + self.getWindowData().y,
                               x: rect.left
                           };
                           self.css(self.$item, {
                               transform: defTransform
                           });
                           break;
                       case 'onScroll':
                           var wnd = self.getWindowData();
                           var centerPercent = (wnd.y + wnd.height / 2 - self.itemData.y - self.itemData.height / 2) / (wnd.height / 2);
                           var moveY = centerPercent * self.options.speedY;
                           var moveX = centerPercent * self.options.speedX;
                           var my = moveY;
                           var mx = moveX;
                           if (self.options.thresholdY !== null && moveY > self.options.thresholdY) my = 0;
                           if (self.options.thresholdX !== null && moveX > self.options.thresholdX) mx = 0;
                           self.css(self.$item, {
                               transform: 'translate3d(' + mx + 'px,' + my + 'px,0)'
                           });
                           break;
                       case 'initImg':
                       case 'isVisible':
                       case 'clipContainer':
                       case 'coverImage':
                           return true;
                   }
                   return def.apply(self, args);
               };
           });
       }
   }), (function(module, exports, __webpack_require__) {
       "use strict";
       (function(global) {
           var win;
           if (typeof window !== "undefined") {
               win = window;
           } else if (typeof global !== "undefined") {
               win = global;
           } else if (typeof self !== "undefined") {
               win = self;
           } else {
               win = {};
           }
           module.exports = win;
       }.call(this, __webpack_require__(5)))
   }), (function(module, exports, __webpack_require__) {
       "use strict";
       var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
           return typeof obj;
       } : function(obj) {
           return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
       };
       var g;
       g = function() {
           return this;
       }();
       try {
           g = g || Function("return this")() || (1, eval)("this");
       } catch (e) {
           if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
       }
       module.exports = g;
   })]);
   (function($) {
       'use strict';
       window.onpageshow = function(event) {
           if (event.persisted) {
               window.location.reload()
           }
       };
       $(window).on("load", function() {
           var preload = $('.preloader');
           preload.find('.spinner').fadeOut(function() {
               preload.fadeOut(300);
           });
           $('.lines').addClass('finish');
           setTimeout(function() {
               $('.lines').addClass('ready');
           }, 300);
           if (($('.typed-subtitle').length) && ($('.h-subtitle p').length > 1)) {
               $('.typed-subtitle').each(function() {
                   $(this).typed({
                       stringsElement: $(this).prev('.typing-subtitle'),
                       loop: true
                   });
               });
           }
           setTimeout(function() {
               $('.h-subtitles').addClass('ready');
               if ($('.typed-bread').length) {
                   $('.typed-bread').typed({
                       stringsElement: $('.typing-bread'),
                       showCursor: false
                   });
               }
           }, 1000);
           var url_hash = location.hash;
           var sectionElem = $(url_hash);
           if (url_hash.indexOf('#section-') == 0 && sectionElem.length) {
               $('body, html').animate({
                   scrollTop: $(url_hash).offset().top - 68
               }, 400);
           }
           if ($('.jarallax').length) {
               $('.jarallax').jarallax();
           }
           if ($('.started-carousel').length) {
               var slider_container = $('.started-carousel .swiper-container');
               var is_autoplaytime = slider_container.data('autoplaytime');
               var is_loop = slider_container.data('loop');
               var started_slider = new Swiper('.started-carousel .swiper-container', {
                   init: false,
                   loop: is_loop,
                   spaceBetween: 0,
                   effect: 'fade',
                   slidesPerView: 1,
                   simulateTouch: false,
                   autoplay: {
                       delay: is_autoplaytime,
                       disableOnInteraction: false,
                       waitForTransition: false,
                   },
                   navigation: {
                       nextEl: '.started .swiper-button-next',
                       prevEl: '.started .swiper-button-prev',
                   },
               });
               started_slider.on('slideChange', function() {
                   var index = started_slider.realIndex;
                   var total = started_slider.slides.length;
                   $('.started-carousel .swiper-slide').removeClass('first');
                   $('.started-carousel .swiper-slide').each(function(i, slide) {
                       if ((index - 1) >= i) {
                           $(slide).addClass('swiper-clip-active');
                       } else {
                           $(slide).removeClass('swiper-clip-active');
                       }
                   });
                   $('.started-carousel .swiper-slide').each(function(i, slide) {
                       $(slide).css({
                           'z-index': total - i
                       });
                   });
               });
               started_slider.init();
           }
           if ($('.reviews-carousel').length) {
               var rev_slider = $('.reviews-carousel .swiper-container');
               var is_autoplaytime = rev_slider.data('autoplaytime');
               var is_loop = rev_slider.data('loop');
               var is_slidesview = rev_slider.data('slidesview');
               var is_spacebetween = rev_slider.data('spacebetween');
               var rev_slider = new Swiper('.reviews-carousel .swiper-container', {
                   loop: is_loop,
                   spaceBetween: is_spacebetween,
                   slidesPerView: is_slidesview,
                   autoplay: false,
                   navigation: {
                       nextEl: '.reviews-carousel .swiper-button-next',
                       prevEl: '.reviews-carousel .swiper-button-prev',
                   },
                   pagination: {
                       el: '.reviews-carousel .swiper-pagination',
                       type: 'bullets',
                   },
                   breakpoints: {
                       720: {
                           slidesPerView: 1,
                           spaceBetween: is_spacebetween,
                       },
                       1200: {
                           slidesPerView: is_slidesview,
                           spaceBetween: is_spacebetween,
                       },
                   }
               });
           }
           if ($('.team-carousel').length) {
               var team_slider = $('.team-carousel .swiper-container');
               var t_is_autoplaytime = team_slider.data('autoplaytime');
               var t_is_loop = team_slider.data('loop');
               var t_is_slidesview = team_slider.data('slidesview');
               var t_is_spacebetween = team_slider.data('spacebetween');
               var team_slider = new Swiper('.team-carousel .swiper-container', {
                   loop: t_is_loop,
                   spaceBetween: t_is_spacebetween,
                   slidesPerView: t_is_slidesview,
                   autoplay: false,
                   navigation: {
                       nextEl: '.team-carousel .swiper-button-next',
                       prevEl: '.team-carousel .swiper-button-prev',
                   },
                   pagination: {
                       el: '.team-carousel .swiper-pagination',
                       type: 'bullets',
                   },
                   breakpoints: {
                       720: {
                           slidesPerView: 1,
                           spaceBetween: t_is_spacebetween,
                       },
                       1200: {
                           slidesPerView: t_is_slidesview,
                           spaceBetween: t_is_spacebetween,
                       },
                   }
               });
           }
       });
       var width = $(window).width();
       var height = $(window).height();
       $('.section.started').css({
           'height': height
       });
       $('.logged-in .section.started').css({
           'height': height - 32
       });
       if (width < 783) {
           $('.section.started').css({
               'height': height
           });
           $('.logged-in .section.started').css({
               'height': height - 46
           });
       }
       if ($('.section.started').hasClass('background-enabled')) {
           $('body').addClass('background-enabled');
       }
       if ($('#grained_container').length) {
           var grained_options = {
               'animate': true,
               'patternWidth': 400,
               'patternHeight': 400,
               'grainOpacity': 0.15,
               'grainDensity': 3,
               'grainWidth': 1,
               'grainHeight': 1
           }
           grained('#grained_container', grained_options);
       }
       if ((width > 1199) && $('.cursor-follower').length) {
           $(window).on('mousemove', function(e) {
               var x = e.pageX;
               var y = e.pageY;
               var newposX = x;
               var newposY = y;
               $('.cursor-follower').css('transform', 'translate3d(' + newposX + 'px,' + newposY + 'px,0px)');
           });
           $('a, .btn-group').on({
               mouseenter: function(e) {
                   cursor_over();
               },
               mouseleave: function(e) {
                   cursor_out();
               }
           });
       }
   
       function cursor_over() {
           $(".cursor-follower-inner").stop().animate({
               width: 86,
               height: 86,
               opacity: 0.1,
               margin: '-43px 0 0 -43px'
           }, 500);
       }
   
       function cursor_out() {
           $(".cursor-follower-inner").stop().animate({
               width: 26,
               height: 26,
               opacity: 0.4,
               margin: '-13px 0 0 -13px'
           }, 500);
       }
       $('.hover-masks a').each(function() {
           var mask_val = $(this).html();
           $(this).wrapInner('<span class="mask-lnk"></span>');
           $(this).append('<span class="mask-lnk mask-lnk-hover">' + mask_val + '</span>');
       });
       $('.hover-animated .circle').on({
           mouseenter: function(e) {
               if ($(this).find(".ink").length === 0) {
                   $(this).prepend("<span class='ink'></span>");
               }
               var ink = $(this).find(".ink");
               ink.removeClass("animate");
               if (!ink.height() && !ink.width()) {
                   var d = Math.max($(this).outerWidth(), $(this).outerHeight());
                   ink.css({
                       height: d,
                       width: d
                   });
               }
               var x = e.pageX - $(this).offset().left - ink.width() / 2;
               var y = e.pageY - $(this).offset().top - ink.height() / 2;
               ink.css({
                   top: y + 'px',
                   left: x + 'px'
               }).addClass("ink-animate");
               $('.cursor-follower').addClass('hide');
           },
           mouseleave: function(e) {
               var ink = $(this).find(".ink");
               var x = e.pageX - $(this).offset().left - ink.width() / 2;
               var y = e.pageY - $(this).offset().top - ink.height() / 2;
               ink.css({
                   top: y + 'px',
                   left: x + 'px'
               }).removeClass("ink-animate");
               $('.cursor-follower').removeClass('hide');
           }
       });
       $('header .top-menu, .typed-bread, .popup-box .bts, .animate-to-page').on('click', 'a', function() {
           var link = $(this).attr('href');
           if (link.indexOf('#section-') == 0) {
               if (!$('body').hasClass('home')) {
                   location.href = '/' + link;
               }
               $('body, html').animate({
                   scrollTop: $(link).offset().top - 68
               }, 400);
               if ($('header').hasClass('active')) {
                   $('.menu-btn').trigger('click');
               }
           } else {
               $('.lines').removeClass('finish');
               $('.lines').removeClass('ready');
               $('.lines').addClass('no-lines');
               setTimeout(function() {
                   location.href = "" + link;
               }, 300);
           }
           return false;
       });
       $(window).on('scroll', function() {
           if ($(this).scrollTop() >= $('.section.started').height()) {
               $('body').removeClass('background-enabled');
           } else {
               if ($('.section.started').hasClass('background-enabled')) {
                   $('body').addClass('background-enabled');
               }
           }
           if (($(this).scrollTop() >= 100) && ($('.section').length > 1)) {
               $('.header').addClass('fixed');
               $('.footer').addClass('fixed');
               $('body').removeClass('background-enabled');
               $('.mouse_btn').fadeOut();
           }
           if (($(this).scrollTop() <= 100) && ($('.section').length > 1)) {
               $('.header').removeClass('fixed');
               $('.footer').removeClass('fixed');
               $('.mouse_btn').fadeIn();
           }
           if (($(this).scrollTop() <= 100) && ($('.section').length > 1) && ($('.section.started').hasClass('background-enabled'))) {
               $('body').addClass('background-enabled');
           }
       });
       $('header').on('click', '.menu-btn', function() {
           if ($('header').hasClass('active')) {
               $('header').removeClass('active');
               $('.footer .soc').fadeIn();
               $('body').addClass('loaded');
               if ($('.video-bg').length) {
                   $('body').addClass('background-enabled');
               }
           } else {
               $('header').addClass('active');
               $('.footer .soc').hide();
               $('body').removeClass('loaded');
               $('body').removeClass('background-enabled');
           }
           return false;
       });
       $('.top-menu li.menu-item-has-children').each(function() {
           $(this).append('<span class="open-lnk"></span>');
       });
       $('.top-menu').on('click', '.open-lnk', function() {
           if ($(this).closest('li').hasClass('menu-item-has-children')) {
               if ($(this).closest('li').hasClass('active')) {
                   $(this).closest('li').removeClass('active');
                   $(this).closest('li').find('> ul').slideUp();
               } else {
                   $(this).closest('li').addClass('active');
                   $(this).closest('li').find('> ul').slideDown();
               }
           }
       });
       $('.section.about').on('click touchstart', '.btn', function() {
           location.href = $(this).attr('href');
       });
       $('.section').on('click', '.mouse_btn', function() {
           $('body, html').animate({
               scrollTop: height - 150
           }, 800);
       });
       if ($('.section').length > 1) {
           $('.mouse_btn').show();
       }
       var $container = $('.portfolio-items');
       $container.imagesLoaded(function() {
           $container.isotope({
               percentPosition: true,
               itemSelector: '.box-item'
           });
           if ($('.portfolio-items.portfolio-new').length) {
               var s_parallax = document.getElementsByClassName('wp-post-image');
               new simpleParallax(s_parallax);
           }
       });
       $('.filters').on('click', '.btn-group', function() {
           var filterValue = $(this).find('input').val();
           $container.isotope({
               filter: filterValue
           });
           $('.filters .btn-group label').removeClass('glitch-effect');
           $(this).find('label').addClass('glitch-effect');
       });
       if (/\.(?:jpg|jpeg|gif|png)$/i.test($('.gallery-item:first a').attr('href'))) {
           $('.gallery-item a').magnificPopup({
               gallery: {
                   enabled: true
               },
               type: 'image',
               closeBtnInside: false,
               mainClass: 'mfp-fade'
           });
       }
       $('.has-popup-media').magnificPopup({
           type: 'inline',
           overflowY: 'auto',
           closeBtnInside: true,
           mainClass: 'mfp-fade'
       });
       $('.has-popup-image').magnificPopup({
           type: 'image',
           closeOnContentClick: true,
           mainClass: 'mfp-fade',
           image: {
               verticalFit: true
           }
       });
       $('.has-popup-video').magnificPopup({
           disableOn: 700,
           type: 'iframe',
           iframe: {
               patterns: {
                   youtube_short: {
                       index: 'youtu.be/',
                       id: 'youtu.be/',
                       src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                   }
               }
           },
           removalDelay: 160,
           preloader: false,
           fixedContentPos: false,
           mainClass: 'mfp-fade',
           callbacks: {
               markupParse: function(template, values, item) {
                   template.find('iframe').attr('allow', 'autoplay');
               }
           }
       });
       $('.has-popup-music').magnificPopup({
           disableOn: 700,
           type: 'iframe',
           removalDelay: 160,
           preloader: false,
           fixedContentPos: false,
           mainClass: 'mfp-fade'
       });
       $('.has-popup-gallery').on('click', function() {
           var gallery = $(this).attr('href');
           $(gallery).magnificPopup({
               delegate: 'a',
               type: 'image',
               closeOnContentClick: false,
               mainClass: 'mfp-fade',
               removalDelay: 160,
               fixedContentPos: false,
               gallery: {
                   enabled: true
               }
           }).magnificPopup('open');
           return false;
       });
       if ($('.jarallax-video').length) {
           $('body').addClass('background-enabled');
           $('.jarallax-video').jarallax();
       }
       if ($('.section').length && $('.top-menu li a').length) {
           $(window).on('scroll', function() {
               var scrollPos = $(window).scrollTop();
               $('.top-menu ul li a').each(function() {
                   if ($(this).attr('href').indexOf('#section-') == 0) {
                       var currLink = $(this);
                       var refElement = $(currLink.attr("href"));
                       if (refElement.length) {
                           if (refElement.offset().top <= scrollPos + 70) {
                               $('.top-menu ul li').removeClass("current-menu-item");
                               currLink.closest('li').addClass("current-menu-item");
                           }
                       }
                       if (scrollPos == 0) {
                           $('.top-menu ul li').removeClass("current-menu-item");
                       }
                   }
               });
           });
       }
       $('.single-post-text').each(function() {
           $(this).find('iframe').wrap('<div class="embed-container"></div>');
       });
   
       function skills() {
           var skills_dotted = $('.skills.dotted .progress');
           var skills_dotted_w = skills_dotted.width();
           if (skills_dotted.length) {
               skills_dotted.append('<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
               skills_dotted.find('.percentage').append('<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
               skills_dotted.find('.percentage .da').css({
                   'width': skills_dotted_w
               });
           }
       }
       setTimeout(skills, 1000);
       var skills_circles = $('.skills.circles .progress');
       if (skills_circles.length) {
           skills_circles.append('<div class="slice"><div class="bar"></div><div class="fill"></div></div>');
       }
       $(window).resize(function() {
           var width = $(window).width();
           var height = $(window).height();
           $('.section.started').css({
               'height': height
           });
           $('.logged-in .section.started').css({
               'height': height - 32
           });
           if (width < 783) {
               $('.section.started').css({
                   'height': height
               });
               $('.logged-in .section.started').css({
                   'height': height - 46
               });
           }
           var skills_dotted = $('.skills-list.dotted .progress');
           var skills_dotted_w = skills_dotted.width();
           if (skills_dotted.length) {
               skills_dotted.find('.percentage .da').css({
                   'width': skills_dotted_w + 1
               });
           }
       });
       $('#cform').validate({
           rules: {
               name: {
                   required: true
               },
               message: {
                   required: true
               },
               email: {
                   required: true,
                   email: true
               }
           },
           success: 'valid',
           submitHandler: function() {
               $.ajax({
                   url: 'mailer/feedback.php',
                   type: 'post',
                   dataType: 'json',
                   data: 'name=' + $("#cform").find('input[name="name"]').val() + '&email=' + $("#cform").find('input[name="email"]').val() + '&message=' + $("#cform").find('textarea[name="message"]').val(),
                   beforeSend: function() {},
                   complete: function() {},
                   success: function(data) {
                       $('#cform').fadeOut();
                       $('.alert-success').delay(1000).fadeIn();
                   }
               });
           }
       });
       if ($('#map').length) {
           initMap();
       }
   })(jQuery);
   
   function initMap() {
       var myLatlng = new google.maps.LatLng(48.859003, 2.345275);
       var styles = [{
           "stylers": [{
               "hue": "#ff1a00"
           }, {
               "invert_lightness": true
           }, {
               "saturation": -100
           }, {
               "lightness": 33
           }, {
               "gamma": 0.5
           }]
       }, {
           "featureType": "water",
           "elementType": "geometry",
           "stylers": [{
               "color": "#2D333C"
           }]
       }, {
           "elementType": "labels",
           "stylers": [{
               "visibility": "off"
           }]
       }, {
           "elementType": "labels.icon",
           "stylers": [{
               "visibility": "off"
           }]
       }, {
           "featureType": "administrative.land_parcel",
           "stylers": [{
               "visibility": "off"
           }]
       }, {
           "featureType": "administrative.neighborhood",
           "stylers": [{
               "visibility": "off"
           }]
       }, ]
       var mapOptions = {
           zoom: 16,
           center: myLatlng,
           mapTypeControl: false,
           disableDefaultUI: true,
           zoomControl: false,
           scrollwheel: false,
           styles: styles
       }
       var map = new google.maps.Map(document.getElementById('map'), mapOptions);
   };
   /*! This file is auto-generated */
   ! function(d, l) {
       "use strict";
       var e = !1,
           o = !1;
       if (l.querySelector)
           if (d.addEventListener) e = !0;
       if (d.wp = d.wp || {}, !d.wp.receiveEmbedMessage)
           if (d.wp.receiveEmbedMessage = function(e) {
                   var t = e.data;
                   if (t)
                       if (t.secret || t.message || t.value)
                           if (!/[^a-zA-Z0-9]/.test(t.secret)) {
                               var r, a, i, s, n, o = l.querySelectorAll('iframe[data-secret="' + t.secret + '"]'),
                                   c = l.querySelectorAll('blockquote[data-secret="' + t.secret + '"]');
                               for (r = 0; r < c.length; r++) c[r].style.display = "none";
                               for (r = 0; r < o.length; r++)
                                   if (a = o[r], e.source === a.contentWindow) {
                                       if (a.removeAttribute("style"), "height" === t.message) {
                                           if (1e3 < (i = parseInt(t.value, 10))) i = 1e3;
                                           else if (~~i < 200) i = 200;
                                           a.height = i
                                       }
                                       if ("link" === t.message)
                                           if (s = l.createElement("a"), n = l.createElement("a"), s.href = a.getAttribute("src"), n.href = t.value, n.host === s.host)
                                               if (l.activeElement === a) d.top.location.href = t.value
                                   }
                           }
               }, e) d.addEventListener("message", d.wp.receiveEmbedMessage, !1), l.addEventListener("DOMContentLoaded", t, !1), d.addEventListener("load", t, !1);
   
       function t() {
           if (!o) {
               o = !0;
               var e, t, r, a, i = -1 !== navigator.appVersion.indexOf("MSIE 10"),
                   s = !!navigator.userAgent.match(/Trident.*rv:11\./),
                   n = l.querySelectorAll("iframe.wp-embedded-content");
               for (t = 0; t < n.length; t++) {
                   if (!(r = n[t]).getAttribute("data-secret")) a = Math.random().toString(36).substr(2, 10), r.src += "#?secret=" + a, r.setAttribute("data-secret", a);
                   if (i || s)(e = r.cloneNode(!0)).removeAttribute("security"), r.parentNode.replaceChild(e, r)
               }
           }
       }
   }(window, document);