<template>
  <div id="firebase">
    <vue-ellipse-progress 
        :data="circles"                    
        :progress="voltage*100/260"
        :angle="90"
        color="blue"
        :colorFill="colorFillGradient"
        emptyColor="#8ec5fc"
        :emptyColorFill="emptyColorFillGradient"                      
        :size="300"
        :thickness="10"
        emptyThickness="5%"
        lineMode="in 5"
        :legend="true"
        :legendValue="voltage"
        legendClass="legend-custom-style"
        dash="60 0.9"
        animation="reverse 700 400"
        :noData="false"
        :loading="false"                      
        fontColor="black"
        :half="0"
        :gap="10"
        dot="15 blue"
        fontSize="3rem">
        
        <span slot="legend-value"></span>
        <p slot="legend-caption">volt</p>
    </vue-ellipse-progress>
    <vue-ellipse-progress 
        :data="circles"                    
        :progress="frequency*100/60"
        :angle="90"
        color="blue"
        :colorFill="colorFillGradient"
        emptyColor="#8ec5fc"
        :emptyColorFill="emptyColorFillGradient"                      
        :size="300"
        :thickness="10"
        emptyThickness="5%"
        lineMode="in 5"
        :legend="true"
        :legendValue="frequency"
        legendClass="legend-custom-style"
        dash="60 0.9"
        animation="reverse 700 400"
        :noData="false"
        :loading="false"                      
        fontColor="black"
        :half="0"
        :gap="10"
        dot="15 blue"
        fontSize="3rem">
        
        <span slot="legend-value"></span>
        <p slot="legend-caption">Hz</p>
    </vue-ellipse-progress>
  </div>
</template>

<script>
// import Navbar from '@/components/Navbar';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyDQzpGUwwNQsEPRhQ0Cx28UM8GcrXwdoMI",
  authDomain: "smartenergymeter-fb.firebaseapp.com",
  databaseURL: "https://smartenergymeter-fb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smartenergymeter-fb",
  storageBucket: "smartenergymeter-fb.appspot.com",
  messagingSenderId: "21868179975",
  appId: "1:21868179975:web:ae1911d48817b2010e70a2"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const voltage = ref(database,'/smartenergymeter/voltage');
const current = ref(database,'/smartenergymeter/current');
const frequency = ref(database,'/smartenergymeter/frequency');
const power = ref(database,'/smartenergymeter/power');
const unit = ref(database,'/smartenergymeter/unit');

export default {
    name: 'firebase',
    data() {
        return {
            voltage: 0,
            current: 0,
            frequency: 0,
            power: 0,
            unit: 0
        }
    },
    component:{
        
    },
    mounted(){
        onValue(voltage, snapshot => {
            this.voltage = snapshot.val()
        })
        onValue(current, snapshot => {
            this.current = snapshot.val()
        })
        onValue(frequency, snapshot => {
            this.frequency = snapshot.val()
        })
        onValue(power, snapshot => {
            this.power = snapshot.val()
        })
        onValue(unit, snapshot => {
            this.unit = snapshot.val()
        })
    }
}
</script>

<style>

</style>