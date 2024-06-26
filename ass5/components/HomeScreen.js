import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Card from "../assets/Card.png";
import Profile from "../assets/profile.png";
import Search from "../assets/search.png";
import Send from "../assets/send.png";
import Receive from "../assets/recieve.png";
import Loan from "../assets/loan.png";
import TopUp from "../assets/topUp.png";
import Apple from "../assets/apple.png";
import Spotify from "../assets/spotify.png";
import MoneyTransfer from "../assets/moneyTransfer.png";
import Grocery from "../assets/grocery.png";
import { ThemeContext } from "./Theme";

const HomeScreen = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Image style={styles.profileImage} source={Profile} />
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeText}>Welcome back,</Text>
            <Text style={styles.usernameText}>Eric Atsu</Text>
          </View>
        </View>
        <Image style={styles.searchIcon} source={Search} />
        {/* <TouchableOpacity style={styles.searchIcon}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity> */}
      </View>
      <Image style={styles.cardImage} source={Card} />
      <View style={styles.actions}>
        <View style={styles.actionButton}>
          <Image style={styles.actionButton} source={Send} />
          <Text style={styles.actionText}>Sent</Text>
        </View>
        <View style={styles.actionButton}>
          <Image style={styles.actionButton} source={Receive} />
          <Text style={styles.actionText}>Receive</Text>
        </View>
        <View style={styles.actionButton}>
          <Image style={styles.actionButton} source={Loan} />
          <Text style={styles.actionText}>Loan</Text>
        </View>
        <View style={styles.actionButton}>
          <Image style={styles.actionButton} source={TopUp} />
          <Text style={styles.actionText}>Topup</Text>
        </View>
      </View>
      <View style={styles.transactionSection}>
        <View style={styles.transactionHeader}>
          <Text style={styles.sectionTitle}>Transaction</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>
        <View style={styles.transactionItem}>
          <Image style={styles.actionButton} source={Apple} />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionName}>Apple Store</Text>
            <Text style={styles.transactionDescription}>Entertainment</Text>
          </View>
          <Text style={styles.transactionAmount}>- $5.99</Text>
        </View>
        <View style={styles.transactionItem}>
          <Image style={styles.actionButton} source={Spotify} />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionName}>Spotify</Text>
            <Text style={styles.transactionDescription}>Music</Text>
          </View>
          <Text style={styles.transactionAmount}>- $12.99</Text>
        </View>
        <View style={styles.transactionItem}>
          <Image style={styles.actionButton} source={MoneyTransfer} />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionName}>Money Transfer</Text>
            <Text style={styles.transactionDescription}>Transaction</Text>
          </View>
          <Text style={styles.transactionAmount}>$300</Text>
        </View>
        <View style={styles.transactionItem}>
          <Image style={styles.actionButton} source={Grocery} />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionName}>Grocery</Text>
            <Text style={styles.transactionDescription}>Shopping</Text>
          </View>
          <Text style={styles.transactionAmount}>- $88</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  welcomeSection: {
    marginLeft: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: "#666",
  },
  usernameText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  searchIcon: {
    padding: 10,
  },
  cardImage: {
    width: "100%",
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  actionButton: {
    alignItems: "center",
  },
  actionText: {
    marginTop: 5,
    fontSize: 14,
  },
  transactionSection: {
    marginTop: 20,
  },
  transactionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAll: {
    color: "blue",
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 10,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  transactionDescription: {
    fontSize: 14,
    color: "#666",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
