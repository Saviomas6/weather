import { useEffect, useState } from "react";
import {
  Container,
  DateText,
  ErrorMessage,
  InputField,
  InputFieldContainer,
  Label,
  LabelMainWrapper,
  LabelWrapper,
  MainContainer,
  TemperatureValue,
} from "./App.style";
import { debounce, timeConverter } from "./utils";

interface I_Props {
  city: string;
  temperature: string;
  climate: string;
  timeZone: string;
  feelsLike: string;
  humidity: string;
  wind: string;
}

const App = () => {
  const [searchValue, setSearchValue] = useState<string>("mumbai");
  const [error, setError] = useState<boolean>(false);
  const [weatherValue, setWeatherValue] = useState<I_Props>({
    city: "",
    temperature: "",
    climate: "",
    timeZone: "",
    feelsLike: "",
    humidity: "",
    wind: "",
  });

  const handleChange = (e: any) => {
    setSearchValue(e.target.value.trim());
  };

  const handleDebounce = debounce((e: any) => handleChange(e), 1000);

  const weatherApi = async () => {
    try {
      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          searchValue === "" ? "mumbai" : searchValue
        }&units=metric&appid=56eda411cfa40fe27539a1e14bf22047`
      );
      const data = await result.json();
      if (data.cod === "404") {
        setError(true);
      } else {
        setError(false);
        setWeatherValue((prevState) => ({
          ...prevState,
          city: data?.name,
          temperature: data?.main?.temp,
          climate: data?.weather[0]?.main,
          timeZone: data?.dt,
          feelsLike: data?.main?.feels_like,
          humidity: data.main.humidity,
          wind: data.wind.speed,
        }));
      }
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  useEffect(() => {
    weatherApi();
  }, [searchValue]);

  return (
    <Container>
      <InputFieldContainer>
        <InputField
          type="text"
          placeholder="Enter the city name"
          onChange={handleDebounce}
        />
      </InputFieldContainer>
      <MainContainer>
        {error ? (
          <ErrorMessage>No city found</ErrorMessage>
        ) : (
          <>
            <div>
              <DateText>{weatherValue?.city}</DateText>
              <TemperatureValue>
                {Math.round(Number(weatherValue?.temperature))} °C
              </TemperatureValue>
              <DateText>{weatherValue?.climate}</DateText>
              <DateText>
                {timeConverter(Number(weatherValue?.timeZone))}
              </DateText>
            </div>

            <LabelMainWrapper>
              <LabelWrapper>
                <Label>Feels Like</Label>
                <Label>{weatherValue?.feelsLike} °C</Label>
              </LabelWrapper>
              <LabelWrapper>
                <Label>Humidity</Label>
                <Label>{weatherValue?.humidity}%</Label>
              </LabelWrapper>{" "}
              <LabelWrapper>
                <Label>Wind Speed</Label>
                <Label>{weatherValue?.wind} MPH</Label>
              </LabelWrapper>
            </LabelMainWrapper>
          </>
        )}
      </MainContainer>
    </Container>
  );
};

export default App;
