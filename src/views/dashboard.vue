<template>
  <div id="dashboard">
    <nav class="shadow-sm navbar mb-4 navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo.png" alt="" width="30" height="30">
          SmartEnergymeter
        </a>
      </div>
    </nav>
    <div class="container">
      <div class="alert alert-secondary" role="alert">
        จำนวนค่าไฟฟ้า {{price}} บาท
      </div>
      <div class="alert alert-secondary" role="alert">
        หน่วยค่าไฟฟ้า {{unit}} หน่วย
      </div>
      <div class="alert alert-secondary" role="alert">
        อุณหภูมิ {{temp}}  ํC
      </div>
      <div class="d-flex mt-5">
        <vue-ellipse-progress 
          class="w-50"
          :data="circles"                    
          :progress="voltage*100/260"
          :angle="90"
          color="blue"
          :colorFill="colorFillGradient"
          emptyColor="#8ec5fc"
          :emptyColorFill="emptyColorFillGradient"                      
          :size="150"
          :thickness="5"
          emptyThickness="2%"
          lineMode="in 5"
          :legend="true"
          :legendValue="voltage"
          legendClass="legend-custom-style"
          dash="50 0.9"
          animation="reverse 700 400"
          :noData="false"
          :loading="false"                      
          fontColor="black"
          :half="0"
          :gap="10"
          dot="10 blue"
          fontSize="1.5rem">
          <span slot="legend-value"></span>
          <p slot="legend-caption">Volt</p>
        </vue-ellipse-progress>
        <vue-ellipse-progress 
          class="w-50"
          :data="circles"                    
          :progress="current*100/100"
          :angle="90"
          color="blue"
          :colorFill="colorFillGradient"
          emptyColor="#8ec5fc"
          :emptyColorFill="emptyColorFillGradient"                      
          :size="150"
          :thickness="5"
          emptyThickness="2%"
          lineMode="in 5"
          :legend="true"
          :legendValue="current"
          legendClass="legend-custom-style"
          dash="50 0.9"
          animation="reverse 700 400"
          :noData="false"
          :loading="false"                     
          fontColor="black"
          :half="0"
          :gap="10"
          dot="10 blue"
          fontSize="1.5rem">
          <span slot="legend-value"></span>
          <p slot="legend-caption">Amp</p>
        </vue-ellipse-progress>
      </div>
      <div class="d-flex mt-5">
        <vue-ellipse-progress 
          class="w-50"
          :data="circles"                    
          :progress="power*100/26000"
          :angle="90"
          color="blue"
          :colorFill="colorFillGradient"
          emptyColor="#8ec5fc"
          :emptyColorFill="emptyColorFillGradient"                      
          :size="150"
          :thickness="5"
          emptyThickness="2%"
          lineMode="in 5"
          :legend="true"
          :legendValue="power"
          legendClass="legend-custom-style"
          dash="50 0.9"
          animation="reverse 700 400"
          :noData="false"
          :loading="false"                      
          fontColor="black"
          :half="0"
          :gap="10"
          dot="10 blue"
          fontSize="1.5rem">
          <span slot="legend-value"></span>
          <p slot="legend-caption">Watt</p>
        </vue-ellipse-progress>
        <vue-ellipse-progress 
          class="w-50"
          :data="circles"                    
          :progress="frequency*100/60"
          :angle="90"
          color="blue"
          :colorFill="colorFillGradient"
          emptyColor="#8ec5fc"
          :emptyColorFill="emptyColorFillGradient"                      
          :size="150"
          :thickness="5"
          emptyThickness="2%"
          lineMode="in 5"
          :legend="true"
          :legendValue="frequency"
          legendClass="legend-custom-style"
          dash="50 0.9"
          animation="reverse 700 400"
          :noData="false"
          :loading="false"                     
          fontColor="black"
          :half="0"
          :gap="10"
          dot="10 blue"
          fontSize="1.5rem">
          <span slot="legend-value"></span>
          <p slot="legend-caption">Hz</p>
        </vue-ellipse-progress>
      </div>
      <div class="d-flex mt-5 mb-5">
        <vue-ellipse-progress 
          class="w-50"
          :data="circles"                    
          :progress="pf*100/1"
          :angle="90"
          color="blue"
          :colorFill="colorFillGradient"
          emptyColor="#8ec5fc"
          :emptyColorFill="emptyColorFillGradient"                      
          :size="150"
          :thickness="5"
          emptyThickness="2%"
          lineMode="in 5"
          :legend="true"
          :legendValue="pf"
          legendClass="legend-custom-style"
          dash="50 0.9"
          animation="reverse 700 400"
          :noData="false"
          :loading="false"                      
          fontColor="black"
          :half="0"
          :gap="10"
          dot="10 blue"
          fontSize="1.5rem">
          <span slot="legend-value"></span>
          <p slot="legend-caption">Var</p>
        </vue-ellipse-progress>
        <vue-ellipse-progress 
          class="w-50"
          :data="circles"                    
          :progress="kwh*100/500"
          :angle="90"
          color="blue"
          :colorFill="colorFillGradient"
          emptyColor="#8ec5fc"
          :emptyColorFill="emptyColorFillGradient"                      
          :size="150"
          :thickness="5"
          emptyThickness="2%"
          lineMode="in 5"
          :legend="true"
          :legendValue="kwh"
          legendClass="legend-custom-style"
          dash="50 0.9"
          animation="reverse 700 400"
          :noData="false"
          :loading="false"                     
          fontColor="black"
          :half="0"
          :gap="10"
          dot="10 blue"
          fontSize="1.5rem">
          <span slot="legend-value"></span>
          <p slot="legend-caption">kWh</p>
        </vue-ellipse-progress>
      </div>
    </div>
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
const unit = ref(database,'/smartenergymeter/energy');
const kwh = ref(database,'/smartenergymeter/energy(kwh)');
const pf = ref(database,'/smartenergymeter/pf');
const price = ref(database,'/smartenergymeter/price');
const temp = ref(database,'/smartenergymeter/temp');
export default {
    name: 'firebase',
    data() {
        return {
            voltage: 0,
            current: 0,
            frequency: 0,
            power: 0,
            unit: 0,
            kwh: 0,
            pf: 0,
            price:0,
            temp: 0
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
        onValue(kwh, snapshot => {
            this.kwh = snapshot.val()
        })
        onValue(price, snapshot => {
            this.price = snapshot.val()
        })
        onValue(pf, snapshot => {
            this.pf = snapshot.val()
        })
        onValue(temp, snapshot => {
            this.temp = snapshot.val()
        })
    }
}
</script>

<style scoped>
</style>