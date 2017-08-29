//region --- Requiring and Providing
goog.provide('anychart.mapModule.elements.Grid');

goog.require('acgraph');
goog.require('anychart.core.GridBase');
goog.require('anychart.core.reporting');
goog.require('anychart.core.settings');
goog.require('anychart.enums');
//endregion



/**
 * Map axes settings.
 * @extends {anychart.core.GridBase}
 * @constructor
 */
anychart.mapModule.elements.Grid = function() {
  anychart.mapModule.elements.Grid.base(this, 'constructor');

  /**
   * @type {acgraph.vector.Path}
   * @protected
   */
  this.minorLineElementInternal = null;

  /**
   * @type {anychart.mapModule.scales.Geo}
   * @private
   */
  this.scale_ = null;

  anychart.core.settings.createDescriptorsMeta(this.descriptorsMeta, [
    ['minorStroke', anychart.ConsistencyState.APPEARANCE]
  ]);
};
goog.inherits(anychart.mapModule.elements.Grid, anychart.core.GridBase);


//region --- Optimized props descriptors
/**
 * Simple properties descriptors.
 * @type {!Object.<string, anychart.core.settings.PropertyDescriptor>}
 */
anychart.mapModule.elements.Grid.prototype.SIMPLE_PROPS_DESCRIPTORS = (function() {
  /** @type {!Object.<string, anychart.core.settings.PropertyDescriptor>} */
  var map = anychart.core.GridBase.prototype.SIMPLE_PROPS_DESCRIPTORS;

  anychart.core.settings.createDescriptor(
      map,
      anychart.enums.PropertyHandlerType.MULTI_ARG,
      'minorStroke',
      anychart.core.settings.strokeNormalizer);

  return map;
})();
anychart.core.settings.populate(anychart.mapModule.elements.Grid, anychart.mapModule.elements.Grid.prototype.SIMPLE_PROPS_DESCRIPTORS);


//endregion
//region --- Settings
/**
 * Setter for scale.
 * @param {anychart.mapModule.scales.Geo} value Scale.
 * @return {anychart.mapModule.elements.Grid} .
 */
anychart.mapModule.elements.Grid.prototype.setScale = function(value) {
  if (this.scale_ != value) {
    this.scale_ = value;
    this.scale_.listenSignals(this.scaleInvalidated_, this);
    this.invalidate(anychart.ConsistencyState.GRIDS_POSITION | anychart.ConsistencyState.BOUNDS,
        anychart.Signal.NEEDS_REDRAW | anychart.Signal.BOUNDS_CHANGED);
  }
  return this;
};


/**
 * Internal scale invalidation handler.
 * @param {anychart.SignalEvent} event Event object.
 * @private
 */
anychart.mapModule.elements.Grid.prototype.scaleInvalidated_ = function(event) {
  var signal = 0;
  if (event.hasSignal(anychart.Signal.NEEDS_RECALCULATION))
    signal |= anychart.Signal.NEEDS_RECALCULATION;
  if (event.hasSignal(anychart.Signal.NEEDS_REAPPLICATION))
    signal |= anychart.Signal.NEEDS_REDRAW;

  var state = anychart.ConsistencyState.BOUNDS |
      anychart.ConsistencyState.APPEARANCE;

  this.invalidate(state, signal);
};


//endregion
//region --- Elements creation
/** @inheritDoc */
anychart.mapModule.elements.Grid.prototype.lineElement = function(opt_isMajor) {
  var lineElement = opt_isMajor ? this.lineElementInternal : this.minorLineElementInternal;

  if (!lineElement) {
    if (opt_isMajor) {
      lineElement = this.lineElementInternal = /** @type {acgraph.vector.Path} */(acgraph.path());
      lineElement.zIndex(1);
    } else {
      lineElement = this.minorLineElementInternal = /** @type {acgraph.vector.Path} */(acgraph.path());
      lineElement.zIndex(0);
    }
    lineElement.disablePointerEvents(true).disableStrokeScaling(true);
    lineElement.parent(this.rootLayer);
    this.registerDisposable(lineElement);
  }
  return /** @type {!acgraph.vector.Path} */(lineElement);
};


//endregion
//region --- Interactivity
/**
 * Update grid on zoom or move.
 * @param {goog.math.AffineTransform} tx .
 */
anychart.mapModule.elements.Grid.prototype.updateOnZoomOrMove = function(tx) {
  if (this.rootLayer)
    this.rootLayer.setTransformationMatrix(tx.getScaleX(), tx.getShearX(), tx.getShearY(), tx.getScaleY(), tx.getTranslateX(), tx.getTranslateY());
};


//endregion
//region --- Drawing
/**
 * Draw horizontal line.
 * @param {number} value Tick value to draw grid line.
 * @param {acgraph.vector.Path} line Line element for drawing.
 * @param {number} shift Grid line pixel shift.
 * @param {number} precision Grid precision.
 * @protected
 */
anychart.mapModule.elements.Grid.prototype.drawLineHorizontal = function(value, line, shift, precision) {
  var scale = this.scale_;
  var xy;

  var minimumX = /** @type {number} */(scale.minimumX());
  var maximumX = /** @type {number} */(scale.maximumX());

  // shift = value == maximumX ? -shift : shift;

  if (anychart.mapModule.projections.isBaseProjection(scale.tx['default'].crs)) {
    xy = scale.transform(minimumX, value, null);
    line.moveTo(xy[0], xy[1]);
    xy = scale.transform(maximumX, value, null);
    line.lineTo(xy[0], xy[1]);
  } else {
    var currLong = minimumX;
    while (currLong < maximumX) {
      xy = scale.transform(currLong, value, null);
      if (currLong == minimumX) {
        line.moveTo(xy[0], xy[1]);
      } else {
        line.lineTo(xy[0], xy[1]);
      }
      currLong += precision;
    }
    xy = scale.transform(maximumX, value, null);
    line.lineTo(xy[0], xy[1]);
  }
};


/**
 * Draw vertical line.
 * @param {number} value Tick value to draw grid line.
 * @param {acgraph.vector.Path} line Line element for drawing.
 * @param {number} shift Grid line pixel shift.
 * @param {number} precision Grid precision.
 * @protected
 */
anychart.mapModule.elements.Grid.prototype.drawLineVertical = function(value, line, shift, precision) {
  var scale = this.scale_;
  var xy;

  var minimumY = /** @type {number} */(scale.minimumY());
  var maximumY = /** @type {number} */(scale.maximumY());

  // shift = value == maximumY ? shift : -shift;
  if (anychart.mapModule.projections.isBaseProjection(scale.tx['default'].crs)) {
    xy = scale.transform(value, minimumY, null);
    line.moveTo(xy[0], xy[1]);
    xy = scale.transform(value, maximumY, null);
    line.lineTo(xy[0], xy[1]);
  } else {
    var currLat = minimumY;
    while (currLat < maximumY) {
      xy = scale.transform(value, currLat, null);
      if (currLat == minimumY) {
        line.moveTo(xy[0], xy[1]);
      } else {
        line.lineTo(xy[0], xy[1]);
      }
      currLat += precision;
    }
    xy = scale.transform(value, maximumY, null);
    line.lineTo(xy[0], xy[1]);
  }
};


/**
 * Draw horizontal line.
 * @param {number} value Tick value to draw grid interlace.
 * @param {number} prevValue Previous tick value to draw grid interlace.
 * @param {string} fillSettings Interlace fill settings.
 * @param {acgraph.vector.Path} path Layer to draw interlace.
 * @param {number} shift Grid line pixel shift.
 * @param {number} precision Grid precision.
 * @protected
 */
anychart.mapModule.elements.Grid.prototype.drawInterlaceHorizontal = function(value, prevValue, fillSettings, path, shift, precision) {
  var scale = this.scale_;

  var minimumX = /** @type {number} */(scale.minimumX());
  var maximumX = /** @type {number} */(scale.maximumX());
  var minimumY = /** @type {number} */(scale.minimumY());

  if (isNaN(prevValue) && value != minimumY) {
    prevValue = minimumY;
  }

  if (!isNaN(prevValue)) {
    var xy, currLong, currLat;

    // shift = value == maximumX ? -shift : shift;
    // var prevShift = prevValue == maximumX ? -shift : shift;

    if (anychart.mapModule.projections.isBaseProjection(scale.tx['default'].crs)) {
      xy = scale.transform(minimumX, value, null);
      path.moveTo(xy[0], xy[1]);
      xy = scale.transform(maximumX, value, null);
      path.lineTo(xy[0], xy[1]);

      xy = scale.transform(maximumX, value, null);
      path.lineTo(xy[0], xy[1]);
      xy = scale.transform(maximumX, prevValue, null);
      path.lineTo(xy[0], xy[1]);

      xy = scale.transform(maximumX, prevValue, null);
      path.lineTo(xy[0], xy[1]);
      xy = scale.transform(minimumX, prevValue, null);
      path.lineTo(xy[0], xy[1]);

      xy = scale.transform(minimumX, prevValue, null);
      path.lineTo(xy[0], xy[1]);
      xy = scale.transform(minimumX, value, null);
      path.lineTo(xy[0], xy[1]);
      path.close();
    } else {
      currLong = minimumX;
      while (currLong < maximumX) {
        xy = scale.transform(currLong, value, null);
        if (currLong == minimumX) {
          path.moveTo(xy[0], xy[1]);
        } else {
          path.lineTo(xy[0], xy[1]);
        }
        currLong += precision;
      }
      xy = scale.transform(maximumX, value, null);
      path.lineTo(xy[0], xy[1]);


      currLat = value;
      while (currLat > prevValue) {
        xy = scale.transform(maximumX, currLat, null);
        path.lineTo(xy[0], xy[1]);
        currLat -= precision;
      }
      xy = scale.transform(maximumX, prevValue, null);
      path.lineTo(xy[0], xy[1]);


      currLong = maximumX;
      while (currLong > minimumX) {
        xy = scale.transform(currLong, prevValue, null);
        path.lineTo(xy[0], xy[1]);
        currLong -= precision;
      }
      xy = scale.transform(minimumX, prevValue, null);
      path.lineTo(xy[0], xy[1]);


      currLat = prevValue;
      while (currLat < value) {
        xy = scale.transform(minimumX, currLat, null);
        path.lineTo(xy[0], xy[1]);
        currLat += precision;
      }
      xy = scale.transform(minimumX, value, null);
      path.lineTo(xy[0], xy[1]);
      path.close();
    }
  }
};


/**
 * Draw horizontal line.
 * @param {number} value Tick value to draw grid interlace.
 * @param {number} prevValue Previous tick value to draw grid interlace.
 * @param {string} fillSettings Interlace fill settings.
 * @param {acgraph.vector.Path} path Layer to draw interlace.
 * @param {number} shift Grid line pixel shift.
 * @param {number} precision Grid precision.
 * @protected
 */
anychart.mapModule.elements.Grid.prototype.drawInterlaceVertical = function(value, prevValue, fillSettings, path, shift, precision) {
  var scale = this.scale_;

  var minimumX = /** @type {number} */(scale.minimumX());
  var minimumY = /** @type {number} */(scale.minimumY());
  var maximumY = /** @type {number} */(scale.maximumY());

  if (isNaN(prevValue) && value != minimumX) {
    prevValue = minimumX;
  }

  if (!isNaN(prevValue)) {
    var xy, currLong, currLat;

    // shift = value == maximumY ? shift : -shift;
    // var prevShift = prevValue == maximumY ? shift : -shift;

    if (anychart.mapModule.projections.isBaseProjection(scale.tx['default'].crs)) {
      xy = scale.transform(prevValue, minimumY, null);
      path.moveTo(xy[0], xy[1]);
      xy = scale.transform(value, minimumY, null);
      path.lineTo(xy[0], xy[1]);

      xy = scale.transform(value, minimumY, null);
      path.lineTo(xy[0], xy[1]);
      xy = scale.transform(value, maximumY, null);
      path.lineTo(xy[0], xy[1]);

      xy = scale.transform(value, maximumY, null);
      path.lineTo(xy[0], xy[1]);
      xy = scale.transform(prevValue, maximumY, null);
      path.lineTo(xy[0], xy[1]);

      xy = scale.transform(prevValue, maximumY, null);
      path.lineTo(xy[0], xy[1]);
      xy = scale.transform(prevValue, minimumY, null);
      path.lineTo(xy[0], xy[1]);
      path.close();
    } else {
      currLong = prevValue;
      while (currLong < value) {
        xy = scale.transform(currLong, minimumY, null);
        if (currLong == prevValue) {
          path.moveTo(xy[0], xy[1]);
        } else {
          path.lineTo(xy[0], xy[1]);
        }
        currLong += precision;
      }
      xy = scale.transform(value, minimumY, null);
      path.lineTo(xy[0], xy[1]);


      currLat = minimumY;
      while (currLat < maximumY) {
        xy = scale.transform(value, currLat, null);
        path.lineTo(xy[0], xy[1]);
        currLat += precision;
      }
      xy = scale.transform(value, maximumY, null);
      path.lineTo(xy[0], xy[1]);


      currLong = value;
      while (currLong > prevValue) {
        xy = scale.transform(currLong, maximumY, null);
        path.lineTo(xy[0], xy[1]);
        currLong -= precision;
      }
      xy = scale.transform(prevValue, maximumY, null);
      path.lineTo(xy[0], xy[1]);


      currLat = maximumY;
      while (currLat > minimumY) {
        xy = scale.transform(prevValue, currLat);
        path.lineTo(xy[0], xy[1]);
        currLat -= precision;
      }
      xy = scale.transform(prevValue, minimumY, null);
      path.lineTo(xy[0], xy[1]);
      path.close();
    }
  }
};


/** @inheritDoc */
anychart.mapModule.elements.Grid.prototype.draw = function() {
  var scale = /** @type {anychart.mapModule.scales.Geo} */(this.scale_);

  if (!scale) {
    anychart.core.reporting.error(anychart.enums.ErrorCode.SCALE_NOT_SET);
    return this;
  }

  if (!this.checkDrawingNeeded())
    return this;

  if (!this.rootLayer) {
    this.rootLayer = acgraph.layer();
  }

  var majorLineElement = this.lineElement(true);
  var minorLineElement = this.lineElement(false);

  if (this.hasInvalidationState(anychart.ConsistencyState.Z_INDEX)) {
    var zIndex = /** @type {number} */(this.zIndex());
    this.rootLayer.zIndex(zIndex);
    this.markConsistent(anychart.ConsistencyState.Z_INDEX);
  }

  if (this.hasInvalidationState(anychart.ConsistencyState.CONTAINER)) {
    var container = /** @type {acgraph.vector.ILayer} */(this.container());
    this.rootLayer.parent(container);
    this.markConsistent(anychart.ConsistencyState.CONTAINER);
  }

  if (this.hasInvalidationState(anychart.ConsistencyState.APPEARANCE)) {
    majorLineElement.stroke(/** @type {acgraph.vector.Stroke} */(this.getOption('stroke')));
    minorLineElement.stroke(/** @type {acgraph.vector.Stroke} */(this.getOption('minorStroke')));

    this.markConsistent(anychart.ConsistencyState.APPEARANCE);
  }

  if (this.hasInvalidationState(anychart.ConsistencyState.GRIDS_POSITION) ||
      this.hasInvalidationState(anychart.ConsistencyState.BOUNDS)) {
    var layout, path, ticks, minorTicks, tickVal;
    var prevTickVal = NaN;
    var pixelShift, i, count, scaleMaximum;
    var precision = scale.precision();
    if (this.isHorizontal()) {
      ticks = scale.yTicks();
      minorTicks = scale.yMinorTicks();
      precision = precision[0];
      scaleMaximum = /** @type {number} */(scale.maximumY());
      layout = [this.drawLineHorizontal, this.drawInterlaceHorizontal];
    } else {
      ticks = scale.xTicks();
      minorTicks = scale.xMinorTicks();
      precision = precision[1];
      scaleMaximum = /** @type {number} */(scale.maximumX());
      layout = [this.drawLineVertical, this.drawInterlaceVertical];
    }

    var ticksArray = ticks.get();
    var minorTicksArray = minorTicks.get();

    this.clearFillElements();

    majorLineElement.clear();
    minorLineElement.clear();

    var drawLine = layout[0];
    var drawInterlace = layout[1];

    pixelShift = -majorLineElement.strokeThickness() % 2 / 2;

    for (i = 0, count = ticksArray.length; i < count; i++) {
      tickVal = ticksArray[i];

      if (i) {
        path = this.getFillElement(i - 1);
        if (path)
          drawInterlace.call(this, tickVal, prevTickVal, null, path, pixelShift, precision);
      }

      if ((!i && this.getOption('drawFirstLine')) || (i == count - 1 && this.getOption('drawLastLine')) || (i != 0 && i != count - 1)) {
        drawLine.call(this, tickVal, majorLineElement, pixelShift, precision);
      }

      prevTickVal = tickVal;
    }

    if (tickVal != scaleMaximum) {
      path = this.getFillElement(i - 1);
      if (path)
        drawInterlace.call(this, scaleMaximum, prevTickVal, null, path, pixelShift);
    }

    pixelShift = -majorLineElement.strokeThickness() % 2 / 2;

    for (i = 0, count = minorTicksArray.length; i < count; i++) {
      tickVal = minorTicksArray[i];
      drawLine.call(this, tickVal, minorLineElement, pixelShift, precision);
    }

    this.markConsistent(anychart.ConsistencyState.GRIDS_POSITION);
    this.markConsistent(anychart.ConsistencyState.BOUNDS);
  }

  return this;
};


//endregion
//region --- Exports
//exports
// (function() {
//   var proto = anychart.mapModule.elements.Grid.prototype;
  // proto['minorStroke'] = proto.minorStroke;
// })();
//endregion
