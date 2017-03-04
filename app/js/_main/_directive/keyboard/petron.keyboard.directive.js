(function() {
	'use strict';

	angular.module('petron.core')
		.directive('petronKeyboard', ['$timeout', '$rootScope',
			function($timeout, $rootScope) {
				return {
					template: '<ng-include src="getTemplate()"/>',
					restrict: 'E',
					controller: ['$scope', '$attrs', function($scope, $attrs) {
						$scope.getTemplate = function() {
							if ($attrs.layout && ['qwerty', 'qwertz'].indexOf($attrs.layout) !==
								-
								1) {
								return 'js/_main/_directive/keyboard/layout_' + $attrs.layout +
									'.html';
							} else {
								return 'js/_main/_directive/keyboard/layout_qwertz.html';
							}
						};
					}],
					link: function(scope, elem, attrs) {
						var shift = false,
							capslock = false;

						$rootScope.$onMany(['$stateChangeSuccess', 'ngDialog.opened'],
							function() {
								$timeout(function() {
									$('input[type="text"]').on('click focus', function(e) {
										if (!$('#keyboard').hasClass('is-visible')) {
											$('#keyboard').addClass('is-visible');
											$('#keyboard').removeClass('is-hidden');
											var $input = $(e.target);

											_keyboard($input);
										}
									});

									$(document).on('click', function(e) {
										if ($(e.target).is('input[type="text"]') === false && $(e.target)
											.parents('#keyboard').length < 1) {
											$('#keyboard').removeClass('is-visible');
											$('#keyboard').addClass('is-hidden');
											$('#keyboard li').off('click');
										}
									});
								});
							});

						$timeout(function() {
							$('#keyboard').addClass('is-hidden');
						});

						function _keyboard($input) {
							$('#keyboard li').on(
								'click',
								function() {
									var $this = angular.element(this),
										character = $this.html(); // If it's a lowercase letter, nothing happens to this variable

									// Shift keys
									if ($this.hasClass('left-shift') || $this.hasClass(
											'right-shift')) {
										angular.element(document.getElementsByClassName('letter')).toggleClass(
											'uppercase');
										angular.element(document.getElementsByClassName('symbol')).find(
											'span').toggle();

										shift = (shift === true) ? false : true;
										capslock = false;
										return false;
									}

									// Caps lock
									if ($this.hasClass('capslock')) {
										angular.element(document.getElementsByClassName('letter')).toggleClass(
											'uppercase');
										capslock = true;
										return false;
									}

									// Delete
									if ($this.hasClass('delete')) {
										var html = $input.val();

										$input.val(html.substr(0, html.length - 1));
										$input.trigger('input');
										return false;
									}

									// Special characters
									if ($this.hasClass('symbol')) character = $(
										'span:visible', $this).html();
									if ($this.hasClass('space')) character = ' ';
									if ($this.hasClass('tab')) character = "\t";
									if ($this.hasClass('return')) character = "\n";

									// Uppercase letter
									if ($this.hasClass('uppercase')) character = character.toUpperCase();

									// Remove shift once a key is clicked.
									if (shift === true) {
										angular.element(document.getElementsByClassName('symbol')).find(
											'span').toggle();
										if (capslock === false) angular.element(document.getElementsByClassName(
											'letter')).toggleClass('uppercase');

										shift = false;
									}

									// Add the character
									$input.val($input.val() + character);
									$input.trigger('input');
								});
						}
					}
				};
			}
		]);
})();
