if(!_.theme_stock){_.theme_stock=1;(function($){var wla=function(){var a=this.defaultDecimalDigitsCount||void 0;return this.seriesName+":\n  Open: "+$.LJ(this.open,a)+"\n  High: "+$.LJ(this.high,a)+"\n  Low: "+$.LJ(this.low,a)+"\n  Close: "+$.LJ(this.close,a)},p$=function(){return $.gr(this.x,$.er($.dr(this.dataIntervalUnit,void 0,"full")))},xla=function(){return $.gr(this.hoveredDate,$.er($.dr(this.dataIntervalUnit,void 0,"full")))};
$.ra($.fa.anychart.themes.defaultTheme,{defaultGroupingSettings:{enabled:!0,forced:!1,levels:[{unit:"millisecond",count:1},{unit:"millisecond",count:5},{unit:"millisecond",count:10},{unit:"millisecond",count:25},{unit:"millisecond",count:50},{unit:"millisecond",count:100},{unit:"millisecond",count:250},{unit:"millisecond",count:500},{unit:"second",count:1},{unit:"second",count:5},{unit:"second",count:10},{unit:"second",count:20},{unit:"second",count:30},{unit:"minute",count:1},{unit:"minute",count:5},
{unit:"minute",count:15},{unit:"minute",count:30},{unit:"hour",count:1},{unit:"hour",count:2},{unit:"hour",count:6},{unit:"hour",count:12},{unit:"day",count:1},{unit:"week",count:1},{unit:"month",count:1},{unit:"month",count:3},{unit:"month",count:6},{unit:"year",count:1}],maxVisiblePoints:500,minPixPerPoint:window.NaN},stock:{grouping:{},scrollerGrouping:{levels:[{unit:"millisecond",count:1},{unit:"millisecond",count:2},{unit:"millisecond",count:5},{unit:"millisecond",count:10},{unit:"millisecond",
count:25},{unit:"millisecond",count:50},{unit:"millisecond",count:100},{unit:"millisecond",count:250},{unit:"millisecond",count:500},{unit:"second",count:1},{unit:"second",count:2},{unit:"second",count:5},{unit:"second",count:10},{unit:"second",count:20},{unit:"second",count:30},{unit:"minute",count:1},{unit:"minute",count:2},{unit:"minute",count:5},{unit:"minute",count:10},{unit:"minute",count:20},{unit:"minute",count:30},{unit:"hour",count:1},{unit:"hour",count:2},{unit:"hour",count:3},{unit:"hour",
count:4},{unit:"hour",count:6},{unit:"hour",count:12},{unit:"day",count:1},{unit:"day",count:2},{unit:"day",count:4},{unit:"week",count:1},{unit:"week",count:2},{unit:"month",count:1},{unit:"month",count:2},{unit:"month",count:3},{unit:"month",count:6},{unit:"year",count:1}],maxVisiblePoints:window.NaN,minPixPerPoint:1},defaultAnnotationSettings:{},defaultPlotSettings:{defaultLineMarkerSettings:{zIndex:200.2},defaultTextMarkerSettings:{zIndex:200.3},annotations:{annotationsList:[],zIndex:2E3},background:{enabled:!1},
title:{text:"Plot Title",padding:[5,5,2,5],fontSize:12},defaultSeriesSettings:{base:{pointWidth:"75%",tooltip:{format:function(){var a=$.LJ(this.value,this.defaultDecimalDigitsCount||void 0);return this.seriesName+": "+this.valuePrefix+a+this.valuePostfix},titleFormat:xla},legendItem:{iconStroke:"none"},normal:{labels:{offsetY:10}}},areaLike:{normal:{labels:{format:p$}},hovered:{markers:{enabled:null}},selected:{markers:{enabled:null}}},lineLike:{normal:{labels:{format:p$}},hovered:{markers:{enabled:null}},
selected:{markers:{enabled:null}}},rangeLike:{normal:{labels:{format:p$}},tooltip:{format:function(){var a=this.defaultDecimalDigitsCount||void 0;return this.seriesName+":\n  High: "+$.LJ(this.high,a)+"\n  Low: "+$.LJ(this.low,a)}}},candlestick:{normal:{labels:{format:p$}},tooltip:{format:wla}},column:{normal:{labels:{format:p$},stroke:"none"}},rangeColumn:{normal:{labels:{format:p$},stroke:"none"}},ohlc:{normal:{labels:{format:p$}},tooltip:{format:wla}}},defaultGridSettings:{scale:0},defaultMinorGridSettings:{scale:0},
defaultYAxisSettings:{enabled:!0,orientation:"left",title:{enabled:!1,text:"Y-Axis"},staggerMode:!1,staggerLines:null,ticks:{enabled:!0},width:50,labels:{fontSize:"11px",padding:{top:0,right:5,bottom:0,left:5}},minorLabels:{fontSize:"11px",padding:{top:0,right:5,bottom:0,left:5}},scale:0},defaultPriceIndicatorSettings:{label:{enabled:!0,background:{enabled:!0,fill:"#000"},fontColor:"#fff",padding:[2,9],hAlign:"center",fontSize:"11px"},stroke:"black"},xAxis:{enabled:!0,orientation:"bottom",background:{stroke:"#cecece",
fill:"#F7F7F7"},height:25,showHelperLabel:!0,scale:0,ticks:{enabled:!1,position:"center"},labels:{enabled:!0,fontSize:"11px",padding:5,anchor:"center-top",format:function(){return $.gr(this.dataValue,$.er($.dr(this.majorIntervalUnit)))}},minorLabels:{enabled:!0,anchor:"center-top",fontSize:"11px",padding:{top:5,right:0,bottom:5,left:0},format:function(){return $.gr(this.dataValue,$.er($.dr(this.minorIntervalUnit,this.majorIntervalUnit)))}}},dateTimeHighlighter:"#B9B9B9",legend:{enabled:!0,vAlign:"bottom",
iconSize:13,position:"top",titleFormat:function(){return $.gr(this.value,$.er($.dr(this.dataIntervalUnit,void 0,"full")))},align:"left",padding:10,title:{enabled:!0,fontSize:12,text:"",background:{enabled:!1,fill:{keys:["#fff","#f3f3f3","#fff"],angle:"90"},stroke:{keys:["#ddd","#d0d0d0"],angle:"90"}},margin:{top:0,right:15,bottom:0,left:0},padding:0,orientation:"left",align:"left",hAlign:"left",rotation:0,wordBreak:"break-all"},titleSeparator:{enabled:!1,width:"100%",height:1,margin:{top:3,right:0,
bottom:3,left:0},orientation:"top",fill:["#000 0","#000","#000 0"],stroke:"none"}},scales:[{type:"linear"}],yScale:0,zIndex:10,yAxes:[{}],crosshair:{zIndex:201,xLabels:[{enabled:null}],yLabels:[{enabled:null}]},dataArea:{zIndex:10,background:{fill:"none"}},baseline:0},padding:[20,30,20,60],plots:[{}],eventMarkers:{stickToLeft:!0,normal:{type:"circle",width:22,height:22,fill:"#515151",stroke:"#515151",fontColor:"#fff",adjustFontSize:!0,minFontSize:6,maxFontSize:20,fontSize:null,format:"A",hAlign:"center",
vAlign:"middle",fontPadding:2,connector:{length:5,stroke:"#455a64"}},hovered:{fill:$.VJ},selected:{fill:"#dd2c00"},tooltip:{title:{fontColor:"#fff",enabled:!0},titleFormat:function(){var a=$.gr(this.date,$.er($.dr(this.dataIntervalUnit,void 0,"full")));return this.title?this.title+" ("+a+")":a},format:function(){return this.description||this.symbol},fontColor:"#fff",separator:!0},direction:"auto",position:"axis",seriesId:"0",fieldName:"value"},scroller:{defaultSeriesSettings:{base:{enabled:!0,normal:{fill:"#999 0.6",
stroke:"#999 0.6",lowStroke:"#999 0.6",highStroke:"#999 0.6"},selected:{fill:$.PJ,stroke:$.PJ,lowStroke:$.PJ,highStroke:$.PJ},pointWidth:"75%"},marker:{normal:{fill:"#999 0.6",stroke:"#999 0.6"},selected:{fill:$.PJ,stroke:$.PJ}},areaLike:{normal:{fill:"#999 0.6"}},barLike:{normal:{fill:"#999 0.6"}},candlestick:{normal:{risingFill:"#999 0.6",risingStroke:"#999 0.6",fallingFill:"#999 0.6",fallingStroke:"#999 0.6"},selected:{risingFill:"#64b5f6",risingStroke:"#64b5f6",fallingFill:"#ef6c00",fallingStroke:"#ef6c00"}},
ohlc:{normal:{risingStroke:"#999 0.6",fallingStroke:"#999 0.6"},selected:{risingStroke:"#64b5f6",fallingStroke:"#ef6c00"}},stick:{normal:{stroke:"#999 0.6"},selected:{stroke:$.YJ}},jumpLine:{normal:{stroke:"#999 0.6"},selected:{stroke:$.YJ}}},enabled:!0,fill:"none",selectedFill:"#1976d2 0.2",outlineStroke:"#cecece",height:40,minHeight:null,maxHeight:null,zIndex:40,xAxis:{background:{enabled:!1},labels:{enabled:!0,fontSize:"11px",padding:5,anchor:"left-top",format:function(){return $.gr(this.dataValue,
$.er($.dr(this.majorIntervalUnit)))}},minorLabels:{enabled:!0,anchor:"left-top",fontSize:"11px",padding:5,format:function(){return $.gr(this.dataValue,$.er($.dr(this.minorIntervalUnit,this.majorIntervalUnit)))}},ticks:{position:"center"},minorTicks:{enabled:!0,stroke:"#cecece",position:"center"},zIndex:75,showHelperLabel:!0}},tooltip:{allowLeaveScreen:!0,displayMode:"union",title:{fontSize:13},titleFormat:xla},a11y:{titleFormat:$.cK},zoomMarqueeFill:"#d3d3d3 0.4",zoomMarqueeStroke:"#d3d3d3",interactivity:{zoomOnMouseWheel:!1,
scrollOnMouseWheel:!1},crosshair:{enabled:!0,displayMode:"sticky",xLabels:[{enabled:null}],yLabels:[{enabled:null}],xStroke:"#969EA5",yStroke:"#969EA5"}}});}).call(this,$)}
