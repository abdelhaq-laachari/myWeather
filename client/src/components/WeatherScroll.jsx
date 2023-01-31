import React from "react";
import { View, ScrollView, Image, Text, StyleSheet } from "react-native";
import moment from "moment-timezone";
import FutureForecast from "./FutureForecast";

import Cloud from "../../assets/bg/clouds.png";

const CurrentTempEl = ({ data }) => {
  if (data && data.weather) {
    console.log(data.weather[0]);
    const img = {
      uri:
        "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@4x.png",
    };

    return (
      <View style={styles.currentTempContainer}>
        <Image source={Cloud} style={styles.image} />
        <View style={styles.otherContainer}>
          <Text style={styles.day}>
            {moment(data.dt * 1000).format("dddd")}
          </Text>
          <Text style={styles.temp}>Night - {data.temp.night}&#176;C</Text>
          <Text style={styles.temp}>Day - {data.temp.day}&#176;C</Text>
        </View>
      </View>
    );
  } else {
    return <View></View>;
  }
};

const WeatherScroll = ({ weatherData }) => {
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      <CurrentTempEl
        data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}
      />
      <FutureForecast data={weatherData} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 0.4,
    backgroundColor: "#18181bcc",
    padding: 30,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
  },
  currentTempContainer: {
    flexDirection: "row",
    backgroundColor: "#00000033",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#eee",
    borderWidth: 1,
    padding: 15,
  },
  day: {
    fontSize: 20,
    color: "white",
    backgroundColor: "#3c3c44",
    padding: 10,
    textAlign: "center",
    borderRadius: 50,
    fontWeight: "200",
    marginBottom: 15,
  },
  temp: {
    fontSize: 16,
    color: "white",
    fontWeight: "100",
    textAlign: "center",
  },
  otherContainer: {
    paddingRight: 40,
  },
});

export default WeatherScroll;




// import React from "react";
// import { View, ScrollView, Image, Text, StyleSheet } from "react-native";
// import moment from "moment-timezone";
// import FutureForecast from "./FutureForecast";

// import Clear from "../../assets/bg/sun.png";
// import Clouds from "../../assets/bg/clouds.png";
// import Rain from "../../assets/bg/rain.png";
// import Snow from "../../assets/bg/snow.png";

// // import AnimatedSVG from "../animated/Clear";

// const WeatherScroll = ({ weatherData }) => {
//   return (
//     <ScrollView horizontal={true} style={styles.scrollView}>
//       <CurrentTempEl
//         data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}
//       />
//       <FutureForecast data={weatherData} />
//     </ScrollView>
//   );
// };

// const CurrentTempEl = ({ data }) => {
//   if (data && data.weather) {
//     return (
//       <View style={styles.currentTempContainer}>
//         <View>
//           {data.weather[0].main === "Clear" ? (
//             <Clear width={100} height={100} />
//           ) : data.weather[0].main === "Clouds" ? (
//             <Clouds width={100} height={100} />
//           ) : data.weather[0].main === "Rain" ? (
//             <Rain width={100} height={100} />
//           ) : data.weather[0].main === "Snow" ? (
//             <Snow width={100} height={100} />
//           ) : (
//             <View />
//           )}
//         </View>
//         <View style={styles.otherContainer}>
//           <Text style={styles.day}>
//             {moment(data.dt * 1000).format("dddd")}
//           </Text>
//           <Text style={styles.temp}>
//             Min - {data.temp.min.toFixed(0)}&deg; C
//           </Text>
//           <Text style={styles.temp}>
//             Max - {data.temp.max.toFixed(0)}&deg; C
//           </Text>
//           <Text style={styles.temp}>
//             Day - {data.temp.day.toFixed(0)}&deg; C
//           </Text>
//           <Text style={styles.temp}>
//             Night - {data.temp.night.toFixed(0)}&deg; C
//           </Text>
//         </View>
//       </View>
//     );
//   } else {
//     return <View></View>;
//   }
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     flex: 0.4,
//     backgroundColor: "#00000033",
//     padding: 30,
//   },
//   image: {
//     width: 150,
//     height: 150,
//   },
//   currentTempContainer: {
//     flexDirection: "row",
//     backgroundColor: "#00000033",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 10,
//     borderColor: "#eee",
//     borderWidth: 1,
//     padding: 15,
//   },
//   day: {
//     fontSize: 20,
//     color: "white",
//     fontWeight: "600",
//     backgroundColor: "#3c3c44",
//     padding: 10,
//     textAlign: "center",
//     borderRadius: 50,
//     fontWeight: "200",
//     marginBottom: 15,
//     borderColor: "#eee",
//     borderWidth: 1,
//   },
//   temp: {
//     fontSize: 16,
//     color: "white",
//     fontWeight: "600",
//     textAlign: "center",
//     fontStyle: "italic",
//   },
//   otherContainer: {
//     paddingRight: 40,
//   },
// });

// export default WeatherScroll;
