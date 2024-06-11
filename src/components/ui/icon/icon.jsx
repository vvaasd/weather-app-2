import {
  LogoSvg,
  LogoSmallSvg,
  SearchSvg,
  CloseSvg,
  ArrowRightSvg,
  TrashBinSvg,
  PressureSvg,
  HumiditySvg,
  SunriseSvg,
  SunsetSvg,
  VisibilitySvg,
  WindSvg,
  DayFewCloudsSvg,
  DayBrokenCloudsSvg,
} from "./svg";

const svgComponents = {
  logo: LogoSvg,
  logoSmall: LogoSmallSvg,
  search: SearchSvg,
  close: CloseSvg,
  arrowRight: ArrowRightSvg,
  trashBin: TrashBinSvg,
  pressure: PressureSvg,
  humidity: HumiditySvg,
  sunrise: SunriseSvg,
  sunset: SunsetSvg,
  visibility: VisibilitySvg,
  wind: WindSvg,
  dayFewClouds: DayFewCloudsSvg,
  dayBrokenClouds: DayBrokenCloudsSvg,
};

const Icon = ({ name = "close", ...props }) => {
  const SvgComponent = svgComponents[name] || CloseSvg;
  return <SvgComponent {...props} />;
};

export default Icon;
