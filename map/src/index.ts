/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

function loadGoogleMaps() {
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initMap`;
  document.head.appendChild(script);
}

loadGoogleMaps();

const user = new User();
const company = new Company();

console.log(user);
console.log(company);

new google.maps.Map(document.getElementById('map'));
