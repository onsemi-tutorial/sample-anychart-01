goog.provide('anychart.core.polar.series.ContinuousBase');
goog.require('acgraph');
goog.require('anychart.core.polar.series.Base');
goog.require('anychart.core.ui.MarkersFactory');
goog.require('anychart.enums');



/**
 * A base for all continuous series, like lines, splines, areas, etc.
 * @param {(anychart.data.View|anychart.data.Set|Array|string)=} opt_data Data for the series.
 * @param {Object.<string, (string|boolean)>=} opt_csvSettings If CSV string is passed, you can pass CSV parser settings
 *    here as a hash map.
 * @constructor
 * @extends {anychart.core.polar.series.Base}
 */
anychart.core.polar.series.ContinuousBase = function(opt_data, opt_csvSettings) {
  goog.base(this, opt_data, opt_csvSettings);

  this.markers().listen(acgraph.events.EventType.MOUSEOVER, this.handleMarkerMouseOver, false, this);
  this.markers().listen(acgraph.events.EventType.MOUSEOUT, this.handleMarkerMouseOut, false, this);
  this.markers().listen(acgraph.events.EventType.CLICK, this.handleMarkerBrowserEvents, false, this);
  this.markers().listen(acgraph.events.EventType.DBLCLICK, this.handleMarkerBrowserEvents, false, this);
  this.markers().position(anychart.enums.Position.CENTER);

  /**
   * @type {!acgraph.vector.Path}
   * @protected
   */
  this.path = acgraph.path();
  this.path.zIndex(anychart.core.polar.series.Base.ZINDEX_SERIES);

  /**
   * @type {acgraph.vector.Path}
   * @protected
   */
  this.hatchFillPath = null;

  /**
   * @type {Array.<!acgraph.vector.Path>}
   * @protected
   */
  this.paths = [this.path];

  /**
   * @type {boolean}
   * @protected
   */
  this.connectMissing = false;

  /**
   * @type {boolean}
   * @private
   */
  this.closed_ = true;

  /**
   * @type {Array.<number>}
   * @protected
   */
  this.firstValuePointCoords = null;

  /**
   * @type {boolean}
   * @protected
   */
  this.firstPointIsMissing;
};
goog.inherits(anychart.core.polar.series.ContinuousBase, anychart.core.polar.series.Base);


/**
 * Supported consistency states.
 * @type {number}
 */
anychart.core.polar.series.ContinuousBase.prototype.SUPPORTED_CONSISTENCY_STATES =
    anychart.core.polar.series.Base.prototype.SUPPORTED_CONSISTENCY_STATES |
    anychart.ConsistencyState.MARKERS;


/**
 * @type {anychart.core.ui.MarkersFactory}
 * @private
 */
anychart.core.polar.series.ContinuousBase.prototype.markers_ = null;


/**
 * @type {anychart.core.ui.MarkersFactory}
 * @private
 */
anychart.core.polar.series.ContinuousBase.prototype.hoverMarkers_ = null;


/** @inheritDoc */
anychart.core.polar.series.ContinuousBase.prototype.hasMarkers = function() {
  return true;
};


/**
 * Getter for series data markers.
 * @example
 * chart = anychart.polar();
 * chart.area([1, 4, 7, 1])
 *   .markers()
 *     .size(10)
 *     .type('star5');
 * chart.container(stage).draw();
 * @return {!anychart.core.ui.MarkersFactory} Markers instance.
 *//**
 * Setter for series data markers.<br/>
 * <b>Note:</b> pass <b>'none'</b> or <b>null</b> to turn off markers.
 * @example
 * chart = anychart.polar();
 * chart.area([1, 4, 7, 4]).markers(null);
 * chart.container(stage).draw();
 * @param {(Object|boolean|null|string)=} opt_value Series data markers settings.
 * @return {!anychart.core.polar.series.ContinuousBase} {@link anychart.core.polar.series.ContinuousBase} instance for method chaining.
 *//**
 * @ignoreDoc
 * @param {(Object|boolean|null|string)=} opt_value Series data markers settings.
 * @return {!(anychart.core.ui.MarkersFactory|anychart.core.polar.series.ContinuousBase)} Markers instance or itself for chaining call.
 */
anychart.core.polar.series.ContinuousBase.prototype.markers = function(opt_value) {
  if (!this.markers_) {
    this.markers_ = new anychart.core.ui.MarkersFactory();
    this.registerDisposable(this.markers_);
    this.markers_.listenSignals(this.markersInvalidated_, this);
  }

  if (goog.isDef(opt_value)) {
    this.markers_.setup(opt_value);
    return this;
  }
  return this.markers_;
};


/**
 * Getter for series data markers on hover.
 * @example
 * chart = anychart.polar();
 * chart.area([1, 4, 7, 1])
 *   .hoverMarkers()
 *     .size(10)
 *     .type('star5');
 * chart.container(stage).draw();
 * @return {!anychart.core.ui.MarkersFactory} Markers instance.
 *//**
 * Setter for series data markers on hover.<br/>
 * <b>Note:</b> pass <b>'none'</b> or <b>null</b> to turn off markers.
 * @example
 * chart = anychart.polar();
 * chart.area([1, 4, 7, 4]).hoverMarkers(null);
 * chart.container(stage).draw();
 * @param {(Object|boolean|null|string)=} opt_value Series data markers settings.
 * @return {!anychart.core.polar.series.ContinuousBase} {@link anychart.core.polar.series.ContinuousBase} instance for method chaining.
 *//**
 * @ignoreDoc
 * @param {(Object|boolean|null|string)=} opt_value Series data markers settings.
 * @return {!(anychart.core.ui.MarkersFactory|anychart.core.polar.series.ContinuousBase)} Markers instance or itself for chaining call.
 */
anychart.core.polar.series.ContinuousBase.prototype.hoverMarkers = function(opt_value) {
  if (!this.hoverMarkers_) {
    this.hoverMarkers_ = new anychart.core.ui.MarkersFactory();
    this.registerDisposable(this.hoverMarkers_);
    // don't listen to it, for it will be reapplied at the next hover
  }

  if (goog.isDef(opt_value)) {
    this.hoverMarkers_.setup(opt_value);
    return this;
  }
  return this.hoverMarkers_;
};


/**
 * Listener for markers invalidation.
 * @param {anychart.SignalEvent} event Invalidation event.
 * @private
 */
anychart.core.polar.series.ContinuousBase.prototype.markersInvalidated_ = function(event) {
  if (event.hasSignal(anychart.Signal.NEEDS_REDRAW)) {
    this.invalidate(anychart.ConsistencyState.MARKERS, anychart.Signal.NEEDS_REDRAW);
  }
};


/**
 * Getter for series close settings.
 * @param {boolean=} opt_value .
 * @return {!anychart.core.polar.series.ContinuousBase|boolean} .
 *//**
 * Setter for series close settings.
 * @example
 * chart = anychart.polar();
 * chart.line([1, 4, 7, 4]).closed(true);
 * chart.line([2, 5, 8, 5]).closed(false);
 * chart.container(stage).draw();
 * @param {boolean=} opt_value .
 * @return {!anychart.core.polar.series.ContinuousBase|boolean} .
 *//**
 * @ignoreDoc
 * @param {boolean=} opt_value .
 * @return {!anychart.core.polar.series.ContinuousBase|boolean} .
 */
anychart.core.polar.series.ContinuousBase.prototype.closed = function(opt_value) {
  if (goog.isDef(opt_value)) {
    opt_value = !!opt_value;
    if (this.closed_ != opt_value) {
      this.closed_ = opt_value;
      this.invalidate(anychart.ConsistencyState.APPEARANCE, anychart.Signal.NEEDS_REDRAW);
    }
    return this;
  }
  return this.closed_;
};


/**
 * Draws all series points.
 */
anychart.core.polar.series.ContinuousBase.prototype.drawPoint = function() {
  if (this.enabled()) {
    var pointDrawn;
    if (this.firstPointDrawn)
      pointDrawn = this.drawSubsequentPoint();
    else
      pointDrawn = this.drawFirstPoint();
    if (pointDrawn) {
      this.drawMarker(false);
      this.drawLabel(false);
    }
    // if connectMissing == true, firstPointDrawn will never be false when drawing.
    this.firstPointDrawn = (this.connectMissing && this.firstPointDrawn) || pointDrawn;
  }
};


/** @inheritDoc */
anychart.core.polar.series.ContinuousBase.prototype.startDrawing = function() {
  goog.base(this, 'startDrawing');

  delete this.firstPointIsMissing;
  this.firstValuePointCoords = null;

  var markers = this.markers();
  var hoverMarkers = this.hoverMarkers();

  markers.suspendSignalsDispatching();
  hoverMarkers.suspendSignalsDispatching();

  var fillColor = this.getMarkerFill();
  markers.setAutoFill(fillColor);

  var strokeColor = /** @type {acgraph.vector.Stroke} */(this.getMarkerStroke());
  markers.setAutoStroke(strokeColor);

  markers.setAutoType(this.autoMarkerType);

  markers.clear();
  markers.container(/** @type {acgraph.vector.ILayer} */(this.container()));
  markers.parentBounds(this.pixelBoundsCache);

  if (this.isConsistent() || !this.enabled()) return;

  var i;
  var len = this.paths.length;
  for (i = 0; i < len; i++) {
    this.makeHoverable(this.paths[i], true);
  }

  if (this.hasInvalidationState(anychart.ConsistencyState.Z_INDEX)) {
    /** @type {acgraph.vector.Element} */(this.rootLayer).zIndex(/** @type {number} */(this.zIndex()));
    this.markConsistent(anychart.ConsistencyState.Z_INDEX);
  }

  if (this.hasInvalidationState(anychart.ConsistencyState.APPEARANCE)) {
    for (i = 0; i < len; i++)
      this.paths[i].clear();
    this.colorizeShape(false);
  }

  if (this.hasInvalidationState(anychart.ConsistencyState.CONTAINER)) {
    var container = /** @type {acgraph.vector.ILayer} */(this.container());
    this.rootLayer.parent(container);
    for (i = 0; i < len; i++)
      this.paths[i].parent(this.rootLayer);
    if (this.hatchFillPath)
      this.hatchFillPath.parent(/** @type {acgraph.vector.ILayer} */(this.rootLayer));
    this.markConsistent(anychart.ConsistencyState.CONTAINER);
  }

  if (this.hasInvalidationState(anychart.ConsistencyState.HATCH_FILL)) {
    if (!this.hatchFillPath) {
      this.hatchFillPath = acgraph.path();
      this.hatchFillPath.parent(/** @type {acgraph.vector.ILayer} */(this.rootLayer));
      this.hatchFillPath.zIndex(anychart.core.polar.series.Base.ZINDEX_HATCH_FILL);
      this.hatchFillPath.disablePointerEvents(true);
    }
  }
};


/** @inheritDoc */
anychart.core.polar.series.ContinuousBase.prototype.finalizeDrawing = function() {
  this.finalizeSegment();
  this.finalizeHatchFill();

  this.markers().draw();

  this.markers().resumeSignalsDispatching(false);
  this.hoverMarkers().resumeSignalsDispatching(false);

  this.markers().markConsistent(anychart.ConsistencyState.ALL);
  this.hoverMarkers().markConsistent(anychart.ConsistencyState.ALL);


  goog.base(this, 'finalizeDrawing');
};


/** @inheritDoc */
anychart.core.polar.series.ContinuousBase.prototype.remove = function() {
  this.markers().container(null);

  goog.base(this, 'remove');
};


/** @inheritDoc */
anychart.core.polar.series.ContinuousBase.prototype.createPositionProvider = function(position) {
  var iterator = this.getIterator();
  return {'value': {'x': iterator.meta('x'), 'y': iterator.meta('y')}};
};


/**
 * Finalizes continuous segment drawing.
 * @protected
 */
anychart.core.polar.series.ContinuousBase.prototype.finalizeSegment = goog.nullFunction;


/**
 * Finalizes hatch fill element.
 * @protected
 */
anychart.core.polar.series.ContinuousBase.prototype.finalizeHatchFill = goog.nullFunction;


/**
 * Getter for connect missing points setting.
 * @return {boolean} Current setting.
 *//**
 * Setter for connect missing points setting.
 * @example
 * chart = anychart.radar();
 * var blueLine = chart.line([1, 1.6, 'missing', 1.1, 1.9]).connectMissingPoints(true);
 * var redLine = chart.line([2, 2.6, 'missing', 2.1, 2.9]).connectMissingPoints(false);
 * chart.container(stage).draw();
 * @param {boolean=} opt_value [false] If set to <b>true</b>, the series will not be interrupted on missing points.<br/>
 *   Defaults to <b>false</b>. Markers will not be drawn for missing points in both cases.
 * @return {!anychart.core.polar.series.Base} {@link anychart.core.polar.series.Base} instance for method chaining.
 *//**
 * @ignoreDoc
 * @param {boolean=} opt_value The value to be set.
 * @return {!anychart.core.polar.series.Base|boolean} The setting, or itself for method chaining.
 */
anychart.core.polar.series.ContinuousBase.prototype.connectMissingPoints = function(opt_value) {
  if (goog.isDef(opt_value)) {
    opt_value = !!opt_value;
    if (this.connectMissing != opt_value) {
      this.connectMissing = opt_value;
      this.invalidate(anychart.ConsistencyState.APPEARANCE, anychart.Signal.NEEDS_REDRAW);
    }
    return this;
  }
  return this.connectMissing;
};


/**
 * Colorizes shape in accordance to current point colorization settings.
 * Shape is get from current meta 'shape'.
 * @param {boolean} hover If the point is hovered.
 * @protected
 */
anychart.core.polar.series.ContinuousBase.prototype.colorizeShape = function(hover) {
  this.path.stroke(this.getFinalStroke(false, hover), 2);
  this.path.fill(null);
};


/**
 * Apply hatch fill to shape in accordance to current point colorization settings.
 * Shape is get from current meta 'hatchFillShape'.
 * @param {boolean} hover If the point is hovered.
 * @protected
 */
anychart.core.polar.series.ContinuousBase.prototype.applyHatchFill = function(hover) {
  if (this.hatchFillPath) {
    this.hatchFillPath.stroke(null);
    this.hatchFillPath.fill(this.getFinalHatchFill(false, hover));
  }
};


/** @inheritDoc */
anychart.core.polar.series.ContinuousBase.prototype.hoverSeries = function() {
  if (this.hoverStatus == -1) return this;
  if (this.hoverStatus >= 0) {
    if (this.getResetIterator().select(this.hoverStatus)) {
      this.drawMarker(false);
      this.drawLabel(false);
      this.hideTooltip();
    }
  } else {
    this.applyHatchFill(true);
    this.colorizeShape(true);
  }
  this.hoverStatus = -1;
  return this;
};


/** @inheritDoc */
anychart.core.polar.series.ContinuousBase.prototype.hoverPoint = function(index, event) {
  if (this.hoverStatus == index) {
    if (this.getIterator().select(index))
      this.showTooltip(event);
    return this;
  }
  if (this.hoverStatus >= 0 && this.getIterator().select(this.hoverStatus)) {
    this.drawMarker(false);
    this.drawLabel(false);
    this.hideTooltip();
  }
  // TODO(AntonKagakin): comment this to avoid series selection
  // wating for a feedback. See Base.js:1206
  /*if (isNaN(this.hoverStatus)) {
   this.applyHatchFill(true);
   this.colorizeShape(true);
   }*/
  if (this.getIterator().select(index)) {
    this.drawMarker(true);
    this.drawLabel(true);
    this.showTooltip(event);
    this.hoverStatus = index;
  } else {
    this.hoverStatus = -1;
  }
  return this;
};


/** @inheritDoc */
anychart.core.polar.series.ContinuousBase.prototype.unhover = function() {
  if (isNaN(this.hoverStatus)) return this;

  if (this.hoverStatus >= 0 && this.getIterator().select(this.hoverStatus)) {
    this.drawMarker(false);
    this.drawLabel(false);
    this.hideTooltip();
  }
  this.applyHatchFill(false);
  this.colorizeShape(false);
  this.hoverStatus = NaN;
  return this;
};


/**
 * @param {acgraph.events.Event} event .
 * @protected
 */
anychart.core.polar.series.ContinuousBase.prototype.handleMarkerMouseOver = function(event) {
  if (this.dispatchEvent(new anychart.core.polar.series.Base.BrowserEvent(this, event))) {
    if (event && goog.isDef(event['markerIndex'])) {
      this.hoverPoint(event['markerIndex'], event);
      var markerElement = this.markers().getMarker(event['markerIndex']).getDomElement();
      acgraph.events.listen(markerElement, acgraph.events.EventType.MOUSEMOVE, this.handleMarkerMouseMove, false, this);
    } else
      this.unhover();
  }
};


/**
 * @param {acgraph.events.Event} event .
 * @protected
 */
anychart.core.polar.series.ContinuousBase.prototype.handleMarkerMouseOut = function(event) {
  if (this.dispatchEvent(new anychart.core.polar.series.Base.BrowserEvent(this, event))) {
    var markerElement = this.markers().getMarker(event['markerIndex']).getDomElement();
    acgraph.events.unlisten(markerElement, acgraph.events.EventType.MOUSEMOVE, this.handleMarkerMouseMove, false, this);
    this.unhover();
  }
};


/**
 * @param {acgraph.events.Event} event .
 * @protected
 */
anychart.core.polar.series.ContinuousBase.prototype.handleMarkerMouseMove = function(event) {
  if (event && goog.isDef(event.target['__tagIndex']))
    this.hoverPoint(event.target['__tagIndex'], event);
};


/**
 * @param {acgraph.events.Event} event .
 * @protected
 */
anychart.core.polar.series.ContinuousBase.prototype.handleMarkerBrowserEvents = function(event) {
  this.dispatchEvent(new anychart.core.polar.series.Base.BrowserEvent(this, event));
};


/**
 * Draws marker for the point.
 * @param {boolean} hovered If it is a hovered marker drawing.
 * @protected
 */
anychart.core.polar.series.ContinuousBase.prototype.drawMarker = function(hovered) {
  var pointMarker = this.getIterator().get('marker');
  var hoverPointMarker = this.getIterator().get('hoverMarker');
  var index = this.getIterator().getIndex();
  var markersFactory = /** @type {anychart.core.ui.MarkersFactory} */(hovered ? this.hoverMarkers() : this.markers());

  var marker = this.markers().getMarker(index);

  var markerEnabledState = pointMarker && goog.isDef(pointMarker['enabled']) ? pointMarker['enabled'] : null;
  var markerHoverEnabledState = hoverPointMarker && goog.isDef(hoverPointMarker['enabled']) ? hoverPointMarker['enabled'] : null;

  var isDraw = hovered ?
      goog.isNull(markerHoverEnabledState) ?
          goog.isNull(this.hoverMarkers().enabled()) ?
              goog.isNull(markerEnabledState) ?
                  this.markers().enabled() :
                  markerEnabledState :
              this.hoverMarkers().enabled() :
          markerHoverEnabledState :
      goog.isNull(markerEnabledState) ?
          this.markers().enabled() :
          markerEnabledState;

  if (isDraw) {
    var markerPosition = pointMarker && pointMarker['position'] ? pointMarker['position'] : null;
    var markerHoverPosition = hoverPointMarker && hoverPointMarker['position'] ? hoverPointMarker['position'] : null;
    var position = (hovered && (markerHoverPosition || this.hoverMarkers().position())) || markerPosition || this.markers().position();

    var positionProvider = this.createPositionProvider(/** @type {anychart.enums.Position|string} */(position));
    if (marker) {
      marker.positionProvider(positionProvider);
    } else {
      marker = this.markers().add(positionProvider, index);
    }

    marker.resetSettings();
    marker.currentMarkersFactory(markersFactory);
    marker.setSettings(/** @type {Object} */(pointMarker), /** @type {Object} */(hoverPointMarker));
    marker.draw();
  } else if (marker) {
    marker.clear();
  }
};


/**
 * Return marker color for series.
 * @return {!acgraph.vector.Fill} Marker color for series.
 */
anychart.core.polar.series.ContinuousBase.prototype.getMarkerFill = function() {
  return this.getFinalFill(false, false);
};


/**
 * Return marker color for series.
 * @return {(string|acgraph.vector.Fill|acgraph.vector.Stroke)} Marker color for series.
 */
anychart.core.polar.series.ContinuousBase.prototype.getMarkerStroke = function() {
  return anychart.color.darken(this.markers().fill());
};


/**
 * @inheritDoc
 */
anychart.core.polar.series.ContinuousBase.prototype.getLegendItemData = function() {
  var data = goog.base(this, 'getLegendItemData');
  if (this.markers().enabled())
    data['iconMarker'] = this.markers().type() || this.autoMarkerType;
  return data;
};


/**
 * @inheritDoc
 */
anychart.core.polar.series.ContinuousBase.prototype.serialize = function() {
  var json = goog.base(this, 'serialize');
  json['closed'] = this.closed();
  json['markers'] = this.markers().serialize();
  json['hoverMarkers'] = this.hoverMarkers().serialize();
  json['connectMissingPoints'] = this.connectMissingPoints;
  return json;
};


/**
 * @inheritDoc
 */
anychart.core.polar.series.ContinuousBase.prototype.setupByJSON = function(config) {
  goog.base(this, 'setupByJSON', config);
  this.closed(config['closed']);
  this.markers(config['markers']);
  this.hoverMarkers(config['hoverMarkers']);
  this.connectMissingPoints(config['connectMissingPoints']);
};


/** @inheritDoc */
anychart.core.polar.series.ContinuousBase.prototype.restoreDefaults = function() {
  var result = goog.base(this, 'restoreDefaults');

  var markers = /** @type {anychart.core.ui.MarkersFactory} */(this.markers());
  markers.suspendSignalsDispatching();
  markers.enabled(true);
  markers.size(4);
  markers.resumeSignalsDispatching(false);

  var hoverMarkers = (/** @type {anychart.core.ui.MarkersFactory} */(this.hoverMarkers()));
  hoverMarkers.suspendSignalsDispatching();
  hoverMarkers.size(6);
  hoverMarkers.resumeSignalsDispatching(false);

  var labels = /** @type {anychart.core.ui.LabelsFactory} */(this.labels());
  labels.suspendSignalsDispatching();
  labels.enabled(false);
  labels.anchor('bottom');
  labels.resumeSignalsDispatching(false);

  return result;
};


//anychart.core.polar.series.ContinuousBase.prototype['startDrawing'] = anychart.core.polar.series.ContinuousBase.prototype.startDrawing;
//anychart.core.polar.series.ContinuousBase.prototype['drawPoint'] = anychart.core.polar.series.ContinuousBase.prototype.drawPoint;
//anychart.core.polar.series.ContinuousBase.prototype['finalizeDrawing'] = anychart.core.polar.series.ContinuousBase.prototype.finalizeDrawing;
//anychart.core.polar.series.ContinuousBase.prototype['startDrawing'] = anychart.core.polar.series.ContinuousBase.prototype.startDrawing;
//anychart.core.polar.series.ContinuousBase.prototype['hoverSeries'] = anychart.core.polar.series.ContinuousBase.prototype.hoverSeries;
//anychart.core.polar.series.ContinuousBase.prototype['hoverPoint'] = anychart.core.polar.series.ContinuousBase.prototype.hoverPoint;
//anychart.core.polar.series.ContinuousBase.prototype['unhover'] = anychart.core.polar.series.ContinuousBase.prototype.unhover;
//exports
anychart.core.polar.series.ContinuousBase.prototype['markers'] = anychart.core.polar.series.ContinuousBase.prototype.markers;//doc|ex
anychart.core.polar.series.ContinuousBase.prototype['hoverMarkers'] = anychart.core.polar.series.ContinuousBase.prototype.hoverMarkers;//doc|ex
anychart.core.polar.series.ContinuousBase.prototype['connectMissingPoints'] = anychart.core.polar.series.ContinuousBase.prototype.connectMissingPoints;
anychart.core.polar.series.ContinuousBase.prototype['closed'] = anychart.core.polar.series.ContinuousBase.prototype.closed;//doc|ex