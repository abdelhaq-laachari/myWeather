import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import * as Location from "expo-location";
import DateTime from "../components/DateTime";
import WeatherScroll from "../components/WeatherScroll";
import Constants from "expo-constants";

const Home = () => {
  const [data, setData] = useState({});

  const apiKey = Constants.expoConfig.extra.apiKey;

  const fetchDataFromApi = (latitude, longitude) => {
    if (latitude && longitude) {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${apiKey}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        fetchDataFromApi("40.7128", "-74.0060");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      fetchDataFromApi(location.coords.latitude, location.coords.longitude);
    })();
  }, []);

  let img = ""

  if (data.current) {
    if (data.current.weather[0].main === "Clear") {
      img = require("../../assets/bg/clear2.jpg");
    } else if (data.current.weather[0].main === "Clouds") {
      img = require("../../assets/bg/cloud.jpg");
    } else if (data.current.weather[0].main === "Rain") {
      img = require("../../assets/bg/rain2.jpg");
    } else if (data.current.weather[0].main === "Thunderstorm") {
      img = require("../../assets/bg/Thunderstorm3.jpg");
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.backgroundImage}>
        <DateTime
          current={data.current}
          timezone={data.timezone}
          lat={data.lat}
          lon={data.lon}
        />
        <WeatherScroll weatherData={data.daily} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default Home;
