import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  bannerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#2995bb",
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
    height: 150,
  },

  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 25,
    marginRight: 10,
    marginTop: 30,
  },

  tittle: {
    marginTop: 30,
    fontSize: 25,
    flex: 1,
    color: "#fff",
  },
  cryptoContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  cryptoName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginRight: 80,
  },
  cryptoImage: {
    width: 40,
    height: 40,
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
  },
  cryptoSymbol: {
    flexDirection: "row",
    paddingTop: 20,
  },
  cryptoAbreviation: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#333",
  },

  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
    marginBottom: 250,
  },
  button: {
    backgroundColor: "#2995bb",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});