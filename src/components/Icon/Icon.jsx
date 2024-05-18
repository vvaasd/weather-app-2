import {
  LogoSvg,
  LogoSmallSvg,
  SearchSvg,
  CloseSvg,
  ArrowRightSvg,
  PressureSvg,
  HumiditySvg,
  SunriseSvg,
  SunsetSvg,
  VisibilitySvg,
  WindSvg,
  DayFewCloudsSvg,
  DayBrokenCloudsSvg,
} from './Svg';

const svgComponents = {
  logo: LogoSvg,
  logoSmall: LogoSmallSvg,
  search: SearchSvg,
  close: CloseSvg,
  arrowRight: ArrowRightSvg,
  pressure: PressureSvg,
  humidity: HumiditySvg,
  sunrise: SunriseSvg,
  sunset: SunsetSvg,
  visibility: VisibilitySvg,
  wind: WindSvg,
  dayFewClouds: DayFewCloudsSvg,
  dayBrokenClouds: DayBrokenCloudsSvg,
};

const Icon = ({ name = 'close', ...props }) => {
  const SvgComponent = svgComponents[name] || CloseSvg;
  return <SvgComponent {...props} />;
};

export default Icon;
