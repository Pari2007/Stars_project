import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { Card, Icon } from "react-native-elements";
import axios from "axios";
export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      imagePath: "",
      url: `http://localhost:5000/star?name=${this.props.navigation.getParam(
        "star_name"
      )}`
    };
  }

  componentDidMount() {
    this.getDetails();
  }
  getDetails = () => {
    const { url } = this.state;
    axios
      .get(url)
      .then(response => {
        this.setDetails(response.data.data);
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };

  setDetails = starDetails => {
    const starType = starDetails.star_type;
    let imagePath = "";
    switch (starType) {
      case "O":
        imagePath = require("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fstar%2Btypes&psig=AOvVaw3pkqjzVeBE2vOXTHFAKMHG&ust=1628608554870000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJiwxYvUo_ICFQAAAAAdAAAAABAD");
        break;
      case "B":
        imagePath = require("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fstar%2Btypes&psig=AOvVaw3pkqjzVeBE2vOXTHFAKMHG&ust=1628608554870000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJiwxYvUo_ICFQAAAAAdAAAAABAD");
        break;
      case "M":
        imagePath = require("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fstar%2Btypes&psig=AOvVaw3pkqjzVeBE2vOXTHFAKMHG&ust=1628608554870000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJiwxYvUo_ICFQAAAAAdAAAAABAD");
        break;
      case "K":
        imagePath = require("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fstar%2Btypes&psig=AOvVaw3pkqjzVeBE2vOXTHFAKMHG&ust=1628608554870000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJiwxYvUo_ICFQAAAAAdAAAAABAD");
        break;
      default :
        imagePath = require("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fstar%2Btypes&psig=AOvVaw3pkqjzVeBE2vOXTHFAKMHG&ust=1628608554870000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJiwxYvUo_ICFQAAAAAdAAAAABAD");
    }

    this.setState({
      details: starDetails,
      imagePath: imagePath
    });
  };

  render() {
    const { details, imagePath } = this.state;
    if (details.specifications) {
      return (
        <View style={styles.container}>
          <Card
            title={details.name}
            image={imagePath}
            imageProps={{ resizeMode: "contain", width: "100%" }}
          >
            <View>
              <Text
                style={styles.cardItem}
              >{`Distance from Earth : ${details.distance_from_earth}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Distance from Sun : ${details.distance_from_their_sun}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Gravity : ${details.gravity}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Orbital Period : ${details.star_period}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Orbital Speed : ${details.star_speed}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Star Mass : ${details.star_mass}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Star Radius : ${details.star_radius}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Star Type : ${details.star_type}`}</Text>
            </View>
            <View style={[styles.cardItem, { flexDirection: "column" }]}>
              <Text>{details.specifications ? `Specifications : ` : ""}</Text>
              {details.specifications.map((item, index) => (
                <Text key={index.toString()} style={{ marginLeft: 50 }}>
                  {item}
                </Text>
              ))}
            </View>
          </Card>
        </View>
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardItem: {
    marginBottom: 10
  }
});
