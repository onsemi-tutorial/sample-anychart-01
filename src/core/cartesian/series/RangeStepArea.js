goog.provide('anychart.core.cartesian.series.RangeStepArea');

goog.require('anychart.core.cartesian.series.ContinuousRangeBase');



/**
 * Define RangeStepArea series type.<br/>
 * <b>Note:</b> Better for use methods {@link anychart.charts.Cartesian#rangeStepArea}.
 * @example
 * anychart.core.cartesian.series.rangeStepArea([['A1', 1, 4],['A2', 7, 1]]).container(stage).draw();
 * @param {(anychart.data.View|anychart.data.Set|Array|string)=} opt_data Data for the series.
 * @param {Object.<string, (string|boolean)>=} opt_csvSettings If CSV string is passed, you can pass CSV parser settings
 *    here as a hash map.
 * @constructor
 * @extends {anychart.core.cartesian.series.ContinuousRangeBase}
 */
anychart.core.cartesian.series.RangeStepArea = function(opt_data, opt_csvSettings) {
  goog.base(this, opt_data, opt_csvSettings);

  // Define reference points for a series
  this.referenceValueNames = ['x', 'low', 'high'];
  this.referenceValueMeanings = ['x', 'y', 'y'];
  this.referenceValuesSupportStack = false;
};
goog.inherits(anychart.core.cartesian.series.RangeStepArea, anychart.core.cartesian.series.ContinuousRangeBase);
anychart.core.cartesian.series.Base.SeriesTypesMap[anychart.enums.CartesianSeriesType.RANGE_STEP_AREA] = anychart.core.cartesian.series.RangeStepArea;


/** @inheritDoc */
anychart.core.cartesian.series.RangeStepArea.prototype.drawFirstPoint = function() {
  var referenceValues = this.getReferenceCoords();
  if (!referenceValues)
    return false;

  if (this.hasInvalidationState(anychart.ConsistencyState.APPEARANCE)) {
    var x = referenceValues[0];
    var low = referenceValues[1];
    var high = referenceValues[2];

    this.finalizeSegment();

    this.path
        .moveTo(x, low)
        .lineTo(x, high);
    this.highPath
        .moveTo(x, high);

    this.prevX_ = x;
    this.prevY_ = high;

    this.lowsStack = [x, low];

    this.getIterator().meta('x', x).meta('low', low).meta('high', high);
  }

  return true;
};


/** @inheritDoc */
anychart.core.cartesian.series.RangeStepArea.prototype.drawSubsequentPoint = function() {
  var referenceValues = this.getReferenceCoords();
  if (!referenceValues)
    return false;

  if (this.hasInvalidationState(anychart.ConsistencyState.APPEARANCE)) {
    var x = referenceValues[0];
    var low = referenceValues[1];
    var high = referenceValues[2];

    var midX = (x + this.prevX_) / 2;
    this.path
        .lineTo(midX, this.prevY_)
        .lineTo(midX, high)
        .lineTo(x, high);
    this.highPath
        .lineTo(midX, this.prevY_)
        .lineTo(midX, high)
        .lineTo(x, high);

    this.prevX_ = x;
    this.prevY_ = high;

    this.lowsStack.push(x, low);

    this.getIterator().meta('x', x).meta('low', low).meta('high', high);
  }

  return true;
};


/** @inheritDoc */
anychart.core.cartesian.series.RangeStepArea.prototype.finalizeSegment = function() {
  if (this.lowsStack) {
    /** @type {number} */
    var prevX = NaN;
    /** @type {number} */
    var prevY = NaN;
    var first = true;
    for (var i = this.lowsStack.length - 1; i >= 0; i -= 2) {
      /** @type {number} */
      var x = /** @type {number} */(this.lowsStack[i - 1]);
      /** @type {number} */
      var y = /** @type {number} */(this.lowsStack[i]);
      if (first) {
        this.lowPath.moveTo(x, y);
        first = false;
      } else {
        var midX = (x + prevX) / 2;
        this.path
            .lineTo(midX, prevY)
            .lineTo(midX, y);
        this.lowPath
            .lineTo(midX, prevY)
            .lineTo(midX, y);
      }
      this.path.lineTo(x, y);
      this.lowPath.lineTo(x, y);
      prevX = x;
      prevY = y;
    }
    this.path.close();
    this.lowsStack = null;
  }
};


/**
 * @inheritDoc
 */
anychart.core.cartesian.series.RangeStepArea.prototype.getType = function() {
  return anychart.enums.CartesianSeriesType.RANGE_STEP_AREA;
};


//exports
anychart.core.cartesian.series.RangeStepArea.prototype['fill'] = anychart.core.cartesian.series.RangeStepArea.prototype.fill;//inherited
anychart.core.cartesian.series.RangeStepArea.prototype['hoverFill'] = anychart.core.cartesian.series.RangeStepArea.prototype.hoverFill;//inherited
anychart.core.cartesian.series.RangeStepArea.prototype['highStroke'] = anychart.core.cartesian.series.RangeStepArea.prototype.highStroke;//inherited
anychart.core.cartesian.series.RangeStepArea.prototype['hoverHighStroke'] = anychart.core.cartesian.series.RangeStepArea.prototype.hoverHighStroke;//inherited
anychart.core.cartesian.series.RangeStepArea.prototype['lowStroke'] = anychart.core.cartesian.series.RangeStepArea.prototype.lowStroke;//inherited
anychart.core.cartesian.series.RangeStepArea.prototype['hoverLowStroke'] = anychart.core.cartesian.series.RangeStepArea.prototype.hoverLowStroke;//inherited
anychart.core.cartesian.series.RangeStepArea.prototype['hatchFill'] = anychart.core.cartesian.series.RangeStepArea.prototype.hatchFill;//inherited
anychart.core.cartesian.series.RangeStepArea.prototype['hoverHatchFill'] = anychart.core.cartesian.series.RangeStepArea.prototype.hoverHatchFill;//inherited