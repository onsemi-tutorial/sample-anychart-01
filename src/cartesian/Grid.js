goog.provide('anychart.cartesianModule.Grid');
goog.require('acgraph');
goog.require('anychart.color');
goog.require('anychart.core.GridWithLayout');
goog.require('anychart.core.reporting');
goog.require('anychart.core.utils.Padding');
goog.require('anychart.enums');



/**
 * Grid.
 * @constructor
 * @extends {anychart.core.GridWithLayout}
 */
anychart.cartesianModule.Grid = function() {
  anychart.cartesianModule.Grid.base(this, 'constructor');
};
goog.inherits(anychart.cartesianModule.Grid, anychart.core.GridWithLayout);


//region --- Infrastructure
/** @inheritDoc */
anychart.cartesianModule.Grid.prototype.scaleInvalidated = function(event) {
  var signal = 0;
  if (event.hasSignal(anychart.Signal.NEEDS_RECALCULATION))
    signal |= anychart.Signal.NEEDS_RECALCULATION;
  if (event.hasSignal(anychart.Signal.NEEDS_REAPPLICATION))
    signal |= anychart.Signal.NEEDS_REDRAW;

  signal |= anychart.Signal.BOUNDS_CHANGED;

  var state = anychart.ConsistencyState.BOUNDS |
      anychart.ConsistencyState.APPEARANCE;

  this.invalidate(state, signal);
};


//endregion
//region --- Drawing
/** @inheritDoc */
anychart.cartesianModule.Grid.prototype.drawLineHorizontal = function(ratio, shift) {
  var parentBounds = this.parentBounds() || anychart.math.rect(0, 0, 0, 0);
  /** @type {number}*/
  var y = Math.round(parentBounds.getBottom() - ratio * parentBounds.height);
  ratio == 1 ? y -= shift : y += shift;
  this.lineElementInternal.moveTo(parentBounds.getLeft(), y);
  this.lineElementInternal.lineTo(parentBounds.getRight(), y);
};


/** @inheritDoc */
anychart.cartesianModule.Grid.prototype.drawLineVertical = function(ratio, shift) {
  var parentBounds = this.parentBounds() || anychart.math.rect(0, 0, 0, 0);
  /** @type {number}*/
  var x = Math.round(parentBounds.getLeft() + ratio * parentBounds.width);
  ratio == 1 ? x += shift : x -= shift;
  this.lineElementInternal.moveTo(x, parentBounds.getBottom());
  this.lineElementInternal.lineTo(x, parentBounds.getTop());
};


/** @inheritDoc */
anychart.cartesianModule.Grid.prototype.drawInterlaceHorizontal = function(ratio, prevRatio, path, shift) {
  if (!isNaN(prevRatio)) {
    var parentBounds = this.parentBounds() || anychart.math.rect(0, 0, 0, 0);
    var y1 = Math.round(parentBounds.getBottom() - prevRatio * parentBounds.height);
    prevRatio == 1 ? y1 -= shift : y1 += shift;

    var y2 = Math.round(parentBounds.getBottom() - ratio * parentBounds.height);
    ratio == 1 ? y2 -= shift : y2 += shift;


    path.moveTo(parentBounds.getLeft(), y1);
    path.lineTo(parentBounds.getRight(), y1);
    path.lineTo(parentBounds.getRight(), y2);
    path.lineTo(parentBounds.getLeft(), y2);
    path.close();
  }
};


/** @inheritDoc */
anychart.cartesianModule.Grid.prototype.drawInterlaceVertical = function(ratio, prevRatio, path, shift) {
  if (!isNaN(prevRatio)) {
    var parentBounds = this.parentBounds() || anychart.math.rect(0, 0, 0, 0);
    var x1 = Math.round(parentBounds.getLeft() + prevRatio * parentBounds.width);
    prevRatio == 1 ? x1 += shift : x1 -= shift;

    var x2 = Math.round(parentBounds.getLeft() + ratio * parentBounds.width);
    ratio == 1 ? x2 += shift : x2 -= shift;


    path.moveTo(x1, parentBounds.getTop());
    path.lineTo(x2, parentBounds.getTop());
    path.lineTo(x2, parentBounds.getBottom());
    path.lineTo(x1, parentBounds.getBottom());
    path.close();
  }
};


//endregion
//region --- Exports
(function() {
  var proto = anychart.cartesianModule.Grid.prototype;
  proto['isHorizontal'] = proto.isHorizontal;
  proto['scale'] = proto.scale;
  proto['axis'] = proto.axis;
})();
//endregion