import {
  ArrowIcon,
  CloseIcon,
  HumidityIcon,
  PressureIcon,
  SearchIcon,
  SunriseIcon,
  SunsetIcon,
  VisibilityIcon,
  WindIcon,
} from './Icons';

export function Icon({ icon }) {
  const icons = {
    arrow: <ArrowIcon />,
    close: <CloseIcon />,
    search: <SearchIcon />,
    humidity: <HumidityIcon />,
    pressure: <PressureIcon />,
    sunrise: <SunriseIcon />,
    sunset: <SunsetIcon />,
    visibility: <VisibilityIcon />,
    wind: <WindIcon />,
  };

  return icons[icon];
}
