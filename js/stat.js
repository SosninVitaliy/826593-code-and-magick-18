'use strict';

var CLOUD_WIDTH = 420; /* Ширина облака */
var CLOUD_HEIGHT = 270; /* Высота облака */
var CLOUD_X = 100; /* Координата x */
var CLOUD_Y = 10; /* Координата y */
var GAP = 10; /* Константа 10 (используется в частности для тени облака (суммируется с шириной и высотой облака) */
var FONT_GAP = 20; /* Константа 20 для шрифта */
var GIST_START_X = 160; /* Стартовое значение координаты x гистограммы */
var GIST_START_Y = 90; /* Начало гистограммы по координате y */
var GIST_GAP = 90; /* Промежуток гистограмм по координате x */
var GIST_WIDTH = 40; /* Ширина гистограмм */
var GIST_MAX_HEIGHT = 150; /* Максимальное (Наибольшее количество очков) значение высоты гистограммы в px */

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return Math.round(maxElement);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = "16px PT Mono";
  ctx.fillStyle = '#000';
  ctx.fillText("Ура вы победили!", CLOUD_X + FONT_GAP, 40);
  ctx.fillText("Список результатов:", CLOUD_X + FONT_GAP, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i <= names.length; i++) {
    ctx.fillText(names[i], GIST_START_X + (GIST_GAP * i), CLOUD_HEIGHT - GAP);
    ctx.fillRect(GIST_START_X + (GIST_GAP * i), GIST_START_Y, GIST_WIDTH, (Math.round(times[i]) *  GIST_MAX_HEIGHT) /  maxTime,);

  }

};

