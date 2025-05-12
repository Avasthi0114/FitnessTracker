npm install -g expo-cli

fitness-tracker/ ├── backend/ │ ├── models/ │ ├── routes/ │ ├── controllers/ │ ├── app.js │ └── .env ├── mobile-app/ │ ├── App.js │ └── screens/ │ ├── LoginScreen.js │ ├── RegisterScreen.js │ ├── HomeScreen.js │ ├── WorkoutFormScreen.js │ └── ProgressScreen.js

mkdir backend && cd backend npm init -y npm install express mongoose cors dotenv bcryptjs jsonwebtoken

PORT=5000 MONGO_URI=mongodb://localhost:27017/fitnesstracker JWT_SECRET=yourSecretKey
ipconfig Use this IP in your frontend code
npx create-expo-app mobile-app --template blank

npm install @react-navigation/native 

npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons react-native-pager-view 

npm install @react-navigation/native-stack 

npm install react-native-screens react-native-safe-area-context 

npm install react-native-gesture-handler react-native-reanimated

npx expo start --web

npx expo install react-native-web@~0.19.6 react-dom@18.2.0 @expo/webpack-config@^19.0.0

