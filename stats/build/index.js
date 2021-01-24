"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Summary_1 = require("./Summary");
var MatchReader_1 = require("./MatchReader");
var matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
var summary = Summary_1.Summary.winAnalysisWithHtmlReport("Man United");
matchReader.load();
summary.buildAndPrint(matchReader.matches);
