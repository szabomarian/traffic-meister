import { Injectable } from '@angular/core';
import '../../../assets/api/vehicles/index.js';

// we declare and import the mock service for this project
declare const trafficMeister: any;

@Injectable()
export class ApiService {

    public fetch () {
        // Here we are simulating an Http.get() call by using Angular's Promise returning our mock data
        return new Promise((resolve) => {
            trafficMeister.fetchData((err, data) => {
                resolve(data);
            });
        });
    }
}