import { Summary } from "./Summary";
import { MatchReader } from "./MatchReader";

const matchReader = MatchReader.fromCsv("football.csv");
const summary = Summary.winAnalysisWithHtmlReport("Man United");

matchReader.load();
summary.buildAndPrint(matchReader.matches);
